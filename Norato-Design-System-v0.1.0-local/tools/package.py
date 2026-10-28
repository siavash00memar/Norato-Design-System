"""Create a portable handoff ZIP. Usage: python tools/package.py /path/output.zip"""
from pathlib import Path
import hashlib
import json
import sys
import zipfile

ROOT = Path(__file__).resolve().parents[1]
if len(sys.argv) != 2:
    raise SystemExit('Provide an output ZIP path.')
target = Path(sys.argv[1]).resolve()
if target.suffix.lower() != '.zip':
    raise SystemExit('Output must be a .zip file.')
if ROOT in target.parents:
    raise SystemExit('Write the package outside its source directory.')
report = json.loads((ROOT / 'evidence/verification.json').read_text(encoding='utf-8'))
browser = json.loads((ROOT / 'evidence/browser-verification.json').read_text(encoding='utf-8'))
if not report['passed'] or not browser['passed']:
    raise SystemExit('Verification must pass before packaging.')
target.parent.mkdir(parents=True, exist_ok=True)
prefix = 'Norato-Design-System-v0.1.0'
files = sorted(p for p in ROOT.rglob('*') if p.is_file() and '__pycache__' not in p.parts
               and p.suffix != '.pyc' and p.name not in ['capture-baseline.py','seed-tokens.py'])
with zipfile.ZipFile(target, 'w', zipfile.ZIP_DEFLATED) as archive:
    for p in files:
        archive.write(p, prefix + '/' + p.relative_to(ROOT).as_posix())
with zipfile.ZipFile(target) as archive:
    if archive.testzip() is not None:
        raise SystemExit('ZIP integrity failure.')
    for p in files:
        if archive.read(prefix + '/' + p.relative_to(ROOT).as_posix()) != p.read_bytes():
            raise SystemExit(f'ZIP content mismatch: {p}')
digest = hashlib.sha256(target.read_bytes()).hexdigest()
target.with_suffix('.sha256').write_text(f'{digest}  {target.name}\n', encoding='utf-8')
print(json.dumps({'zip':str(target),'files':len(files),'bytes':target.stat().st_size,'sha256':digest}))
