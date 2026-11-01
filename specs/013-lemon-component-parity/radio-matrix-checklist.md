# Radio Matrix — Checklist

- [x] Five state groups each render four cells: 2 checked values × 2 sizes × 5 states (20 total), confirmed in the actual browser screenshot.
- [x] Fresh matched desktop review at 1280×720 confirms Lemon's four specimen cards plus property selector and Norato's five state groups with 20 documented cells. Lemon's Variants gallery is 636px wide; Norato's content column constrains the matrix to 584px. Norato preserves the extra Focus combination required by its contract and its blue selected dot.
- [x] Radio glyphs are circular, proportional (16px/20px), and not stretched; desktop screenshot confirms 16px and 20px circles plus the selected dot.
- [x] Selected dot, hover, focus, disabled and error visuals use Norato semantic tokens. Token review found and corrected two non-existent disabled tokens before recording the result.
- [x] Matrix is inert/static and RTL; live playground remains interactive. Browser ArrowDown/ArrowUp moved selection and synchronized status/snippet; monthly default was restored.
- [ ] 390px mobile browser render and exact DOM measurement of all five state groups remain unverified. The matched desktop comparison shows Norato's richer 20-cell matrix occupies 548px high vs Lemon's 321px specimen grid plus 161px property selector; inspect mobile and refine if the groups become unwieldy or overflow.
- [x] Technical gates pass after the final token correction: token check, catalog check, Vue typecheck/build. Historical build warning: minified JS bundle 643.57KB exceeds 500KB.
- [x] Current follow-up gates (2026-11-01): token/catalog/typecheck/build and diff checks pass; bundle is 686.03KB with the existing >500KB Vite warning.
- [x] Request checklist, contract and family ledger record the result and remaining DoD.
- [x] Commit `45d40bc` pushed; local HEAD and remote `master` both equal `45d40bcf68421d4d90355a6edbc10aa1f5906acb`.
