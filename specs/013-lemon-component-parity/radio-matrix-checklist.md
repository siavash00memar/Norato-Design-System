# Radio Matrix — Checklist

- [x] Five state groups each render four cells: 2 checked values × 2 sizes × 5 states (20 total), confirmed in the actual browser screenshot.
- [x] Fresh matched desktop review at 1280×720 confirms Lemon's four specimen cards plus property selector and Norato's five state groups with 20 documented cells. Lemon's Variants gallery is 636px wide; Norato's content column constrains the matrix to 584px. Norato preserves the extra Focus combination required by its contract.
- [x] Radio glyphs are circular, proportional (16px/20px), and not stretched; desktop screenshot confirms 16px and 20px circles plus the selected dot.
- [x] Selected dot, hover, focus, disabled and error visuals use Norato semantic tokens. Token review found and corrected two non-existent disabled tokens before recording the result.
- [x] Matrix is inert/static and RTL; live playground remains interactive. Browser ArrowDown/ArrowUp moved selection and synchronized status/snippet; monthly default was restored.
- [x] 390×844 mobile render measured in the actual browser: Norato document 375px with no horizontal overflow; five 343×162.2px state cards, 4 cells each, 48px cells, total matrix 886.9px high. Lemon's 327px-wide Variants gallery and property selector measure 651.5px + 272.5px (=924px); Norato's denser five-card matrix is slightly shorter, bounded, and keeps intrinsic 16/20px radio circles.
- [x] At 390×844, static checked dots and hover borders both resolve to Norato yellow `rgb(253, 193, 1)`; live checked adapter dot resolves to the same yellow. Disabled remains muted gray, error remains red, and Focus retains the dedicated high-contrast ring with yellow halo. Independent screen-reader review remains outside this matrix task.
- [x] Technical gates pass after the final token correction: token check, catalog check, Vue typecheck/build. Historical build warning: minified JS bundle 643.57KB exceeds 500KB.
- [x] Current follow-up gates (2026-11-01): token/catalog/typecheck/build and diff checks pass; bundle is 686.03KB with the existing >500KB Vite warning.
- [x] Palette follow-up gates (2026-11-08): token/catalog checks, Vue typecheck/build and `git diff --check` pass; build bundle is 818.95KB with the existing >500KB Vite advisory.
- [x] Request checklist, contract and family ledger record the result and remaining DoD.
- [x] Commit `45d40bc` pushed; local HEAD and remote `master` both equal `45d40bcf68421d4d90355a6edbc10aa1f5906acb`.
- [x] Yellow accent follow-up `3746d69` pushed to `origin/master`; local HEAD and remote parity were confirmed.
