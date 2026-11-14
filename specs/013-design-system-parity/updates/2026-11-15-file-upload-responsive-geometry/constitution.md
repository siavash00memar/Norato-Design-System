# Constitution — File Upload responsive geometry evidence

## Scope

Complete the missing matched-width browser measurements and correct the measured mobile frame/padding mismatch for the existing File Upload specimen. Keep the change limited to specimen geometry; do not change upload behavior.

## Invariants

- Keep the page RTL and retain Norato semantic tokens and the contracted 152px Dropzone inner height.
- Compare local and reference renders at identical 390px and 320px viewport widths.
- Record document overflow and measured visual differences without calling a partial comparison full parity.
- Audit the existing responsive selectors before editing; add no undocumented cascade override or raw spacing token.
- Verify the adjusted actual browser render and run project-required gates.
- This is local-only work; do not deploy.
