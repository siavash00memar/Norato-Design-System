"""Generate CSS, contrast evidence and a consolidated Markdown handbook."""
from pathlib import Path
import json
import re

ROOT = Path(__file__).resolve().parents[1]

def read_tokens():
    return json.loads((ROOT / 'tokens.json').read_text(encoding='utf-8'))

def resolve(tokens, key, seen=()):
    if key in seen:
        raise ValueError(f'Circular token reference: {seen} -> {key}')
    value = tokens[key]['value']
    return re.sub(r'\{([\w.-]+)\}', lambda m: resolve(tokens, m[1], (*seen, key)), value)

def css_text(data):
    rows = [f'/* Norato {data["version"]} — generated from tokens.json; edit JSON. */', ':root {']
    for key, token in data['tokens'].items():
        value = re.sub(r'\{([\w.-]+)\}', lambda m: 'var(--norato-' + m[1].replace('.', '-') + ')', token['value'])
        rows.append(f'  /* {token["status"]} */ --norato-{key.replace(".", "-")}: {value};')
    return '\n'.join([*rows, '}', ''])

def luminance(value):
    value = value.removeprefix('#')
    rgb = [int(value[i:i+2], 16) / 255 for i in (0, 2, 4)]
    linear = [c / 12.92 if c <= .04045 else ((c + .055) / 1.055) ** 2.4 for c in rgb]
    return sum(c * weight for c, weight in zip(linear, (.2126, .7152, .0722)))

def contrast(a, b):
    hi, lo = sorted([luminance(a), luminance(b)], reverse=True)
    return (hi + .05) / (lo + .05)

def contrast_report(data):
    pairs = [
        ('body', 'color.text.default', 'color.surface.default', 4.5, True),
        ('support', 'color.text.secondary', 'color.surface.default', 4.5, True),
        ('blue action', 'color.action.text', 'color.action.default', 4.5, True),
        ('yellow action', 'color.highlight.text', 'color.highlight.default', 4.5, True),
        ('error', 'color.danger.text', 'color.danger.surface', 4.5, True),
        ('success', 'color.success.text', 'color.success.surface', 4.5, True),
        ('warning', 'color.warning.text', 'color.warning.surface', 4.5, True),
        ('control boundary', 'color.control.border', 'color.surface.default', 3, True),
        ('focus outer halo', 'color.focus.halo', 'color.surface.default', 3, True),
        ('yellow alone on white: avoid', 'color.brand.yellow', 'color.surface.default', 3, False),
        ('white on yellow: avoid', 'color.surface.default', 'color.brand.yellow', 4.5, False),
        ('legacy pale input border: do not use as only boundary', 'color.border.input', 'color.surface.default', 3, False)
    ]
    rows = []
    for label, fg, bg, minimum, required in pairs:
        ratio = contrast(resolve(data['tokens'], fg), resolve(data['tokens'], bg))
        rows.append({'pair': label, 'foreground': fg, 'background': bg, 'ratio': ratio,
                     'minimum': minimum, 'passes': ratio >= minimum, 'required': required})
    return {'method': 'WCAG sRGB relative luminance; unrounded values compared to thresholds',
            'scope': 'Opaque color pairs only; not an accessibility audit', 'pairs': rows}

def handbook_text():
    parts = ['# دیزاین سیستم نوراتو — راهنمای طراحی و توسعهٔ محصولات\n',
             '**نسخهٔ ۰٫۱٫۰ | پیش‌نویس قابل بررسی | ۲۶ اکتبر ۲۰۲۶**\n',
             'مبنای این سند، نسخهٔ اصلاح‌شدهٔ فعلی لندینگ است؛ ZIP اولیه مرجع استخراج نیست. مقدارهای موجود و پیشنهادهای تکمیلی از هم متمایزند.\n',
             '> این سند یکپارچه تولیدشده است. برای ویرایش، فایل موضوعی مربوط را تغییر دهید و tools/build.py را اجرا کنید.\n']
    files = ['foundations.md', 'components.md', 'patterns.md', 'delivery.md',
             'public-web.md', 'provenance.md']
    for name in files:
        text = (ROOT / name).read_text(encoding='utf-8')
        # Keep existing relative links portable within the package root.
        parts.append('\n---\n\n' + text.rstrip() + '\n')
    return '\n'.join(parts)

if __name__ == '__main__':
    data = read_tokens()
    for key in data['tokens']:
        resolve(data['tokens'], key)
    (ROOT / 'tokens.css').write_text(css_text(data), encoding='utf-8')
    (ROOT / 'NORATO-DESIGN-SYSTEM.md').write_text(handbook_text(), encoding='utf-8')
    report = contrast_report(data)
    (ROOT / 'evidence/contrast.json').write_text(json.dumps(report, indent=2) + '\n', encoding='utf-8')
    required = [p for p in report['pairs'] if p['required']]
    print(f'Generated {len(data["tokens"])} tokens; {sum(p["passes"] for p in required)}/{len(required)} required contrast pairs pass.')
    if not all(p['passes'] for p in required):
        raise SystemExit('Required contrast pair failed.')
