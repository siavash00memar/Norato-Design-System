# Radio Matrix — Checklist

- [x] Five state groups each render four cells: 2 checked values × 2 sizes × 5 states (20 total), confirmed in the actual browser screenshot.
- [x] Radio glyphs are circular, proportional (16px/20px), and not stretched; desktop screenshot confirms 16px and 20px circles plus the selected dot.
- [x] Selected dot, hover, focus, disabled and error visuals use Norato semantic tokens. Token review found and corrected two non-existent disabled tokens before recording the result.
- [x] Matrix is inert/static and RTL; live playground remains interactive. Browser ArrowDown/ArrowUp moved selection and synchronized status/snippet; monthly default was restored.
- [ ] 390px mobile browser render and same-viewport Lemon comparison for the new matrix remain unverified. The current Lemon screenshot is 1900×900 while the local app screenshot is 1180×765; do not count this as equal-viewport evidence.
- [x] Technical gates pass after the final token correction: token check, catalog check, Vue typecheck/build. Build warning: minified JS bundle 643.33KB exceeds 500KB.
- [x] Request checklist, contract and family ledger record the result and remaining DoD.
- [ ] Commit/push and remote parity verification remain.
