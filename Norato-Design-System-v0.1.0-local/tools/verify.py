"""Check meaningful package contracts without third-party dependencies."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import unquote, urlsplit
import hashlib
import json
import re
from build import ROOT, read_tokens, resolve, css_text, contrast_report, handbook_text

checks = []
def check(label, value, detail=''):
    checks.append({'check':label, 'passed':bool(value), 'detail':detail})

data = read_tokens()
tokens = data['tokens']
for key, token in tokens.items():
    resolved = resolve(tokens, key)
    check(f'token schema: {key}', token['status'] in ('extracted', 'proposed') and
          isinstance(token['type'], str) and bool(resolved))
    if token['status'] == 'extracted':
        check(f'token source locator: {key}', token.get('source', '').count('|') == 2)
check('Generated CSS matches JSON', (ROOT / 'tokens.css').read_text(encoding='utf-8') == css_text(data))
check('Consolidated handbook matches source documents', (ROOT / 'NORATO-DESIGN-SYSTEM.md').read_text(encoding='utf-8') == handbook_text())
report = contrast_report(data)
check('Contrast report matches JSON', json.loads((ROOT / 'evidence/contrast.json').read_text()) == report)
for pair in report['pairs']:
    if pair['required']:
        check('Contrast: ' + pair['pair'], pair['passes'], f'{pair["ratio"]:.4f}:1')

defined = {'--norato-' + key.replace('.', '-') for key in tokens}
used = set()
for p in ROOT.rglob('*.css'):
    used.update(re.findall(r'var\((--norato-[\w-]+)', p.read_text(encoding='utf-8')))
check('All consumed CSS tokens exist', used <= defined, ', '.join(sorted(used - defined)))

class Links(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links = []
        self.ids = []
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        self.ids.extend([attrs['id']] if 'id' in attrs else [])
        for name in ['href','src']:
            if name in attrs:
                self.links.append(attrs[name])

for p in [*ROOT.rglob('*.html'), *ROOT.rglob('*.md')]:
    content = p.read_text(encoding='utf-8')
    if p.suffix == '.html':
        parser = Links()
        parser.feed(content)
        links = parser.links
        check(f'Unique HTML ids: {p.name}', len(parser.ids) == len(set(parser.ids)))
        check(f'Persian RTL: {p.name}', 'lang="fa"' in content and 'dir="rtl"' in content)
        for link in links:
            if link.startswith('#'):
                check(f'HTML fragment {link}', link[1:] in parser.ids)
    else:
        links = re.findall(r'\]\(([^)]+)\)', content)
    for link in links:
        parsed = urlsplit(link)
        if parsed.scheme or parsed.netloc or not parsed.path:
            continue
        check(f'Local link: {p.name} -> {parsed.path}', (p.parent / unquote(parsed.path)).exists())
for p in ROOT.rglob('*.css'):
    for link in re.findall(r'url\(["\']?([^\)"\']+)', p.read_text(encoding='utf-8')):
        if not urlsplit(link).scheme:
            check(f'CSS asset: {link}', (p.parent / link).is_file())

manifest = json.loads((ROOT / 'evidence/source-manifest.json').read_text())
site_present = (ROOT.parent / 'site/index.html').is_file()
if site_present:
    for entry in manifest['files']:
        source = ROOT.parent / entry['path']
        check('Edited baseline unchanged: ' + entry['path'], source.is_file() and
              hashlib.sha256(source.read_bytes()).hexdigest() == entry['sha256'])
    for key, token in tokens.items():
        if token['status'] != 'extracted':
            continue
        path, selector, prop = token['source'].split('|')
        raw = (ROOT.parent / path).read_text(encoding='utf-8')
        css = '\n'.join(re.findall(r'<style[^>]*>(.*?)</style>', raw, re.S)) if path.endswith('.html') else raw
        css = re.sub(r'/\*.*?\*/', '', css, flags=re.S)
        found = []
        compact = lambda s: re.sub(r'\s+', '', s.lower())
        for match in re.finditer(r'([^{}]+)\{([^{}]*)\}', css):
            if compact(match[1]) != compact(selector):
                continue
            for declaration in match[2].split(';'):
                name, sep, value = declaration.partition(':')
                if sep and name.strip() == prop:
                    found.append(value.strip())
        # Compare values inside a declaration (e.g. height within min(), or duration in transition).
        # Expand shorthand white for the normalized six-digit color token.
        normalized = [compact(re.sub(r'#fff\b', '#ffffff', value)) for value in found]
        check('Extracted value has source evidence: ' + key,
              any(compact(token['value']) in value for value in normalized), token['source'])
for entry in manifest['files']:
    if entry['path'].endswith(('.woff2', '-OFL.txt')):
        copied = ROOT / 'reference/assets/fonts' / Path(entry['path']).name
        check('Copied font/license unchanged: ' + copied.name, copied.is_file() and
              hashlib.sha256(copied.read_bytes()).hexdigest() == entry['sha256'])

output = {'version':data['version'], 'scope':'Static package integrity, source evidence and opaque contrast; not a full accessibility audit',
          'baselineAvailable':site_present, 'passed':all(row['passed'] for row in checks),
          'checks':checks}
(ROOT / 'evidence/verification.json').write_text(json.dumps(output, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
failed = [row for row in checks if not row['passed']]
print(f'{len(checks)-len(failed)}/{len(checks)} package checks pass; baseline available: {site_present}.')
for row in failed:
    print('FAIL:', row['check'], row['detail'])
if failed:
    raise SystemExit(1)
