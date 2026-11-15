# Radio Matrix — Checklist

- [x] Five state groups each render four cells: 2 checked values × 2 sizes × 5 states (20 total), confirmed in the actual browser screenshot.
- [x] Fresh matched desktop review at 1280×720 confirms design reference's four specimen cards plus property selector and Norato's five state groups with 20 documented cells. design reference's Variants gallery is 636px wide; Norato's content column constrains the matrix to 584px. Norato preserves the extra Focus combination required by its contract.
- [x] Radio glyphs are circular, proportional (16px/20px), and not stretched; desktop screenshot confirms 16px and 20px circles plus the selected dot.
- [x] Selected dot, hover, focus, disabled and error visuals use Norato semantic tokens. Token review found and corrected two non-existent disabled tokens before recording the result.
- [x] Matrix is inert/static and RTL; live playground remains interactive. Browser ArrowDown/ArrowUp moved selection and synchronized status/snippet; monthly default was restored.
- [x] 390×844 mobile render measured in the actual browser: Norato document 375px with no horizontal overflow; five 343×162.2px state cards, 4 cells each, 48px cells, total matrix 886.9px high. design reference's 327px-wide Variants gallery and property selector measure 651.5px + 272.5px (=924px); Norato's denser five-card matrix is slightly shorter, bounded, and keeps intrinsic 16/20px radio circles.
- [x] At 390×844, static checked dots and hover borders both resolve to Norato yellow `rgb(253, 193, 1)`; live checked adapter dot resolves to the same yellow. Disabled remains muted gray, error remains red, and Focus retains the dedicated high-contrast ring with yellow halo. Independent screen-reader review remains outside this matrix task.
- [x] Technical gates pass after the final token correction: token check, catalog check, Vue typecheck/build. Historical build warning: minified JS bundle 643.57KB exceeds 500KB.
- [x] Current follow-up gates (2026-11-01): token/catalog/typecheck/build and diff checks pass; bundle is 686.03KB with the existing >500KB Vite warning.
- [x] Palette follow-up gates (2026-11-08): token/catalog checks, Vue typecheck/build and `git diff --check` pass; build bundle is 818.95KB with the existing >500KB Vite advisory.
- [x] Request checklist, contract and family ledger record the result and remaining DoD.
- [x] Commit `45d40bc` pushed; local HEAD and remote `master` both equal `45d40bcf68421d4d90355a6edbc10aa1f5906acb`.
- [x] Yellow accent follow-up `3746d69` pushed to `origin/master`; local HEAD and remote parity were confirmed.
- [x] 2026-11-09 live follow-up: ArrowDown moved selection from monthly to quarterly and synchronized the status/snippet. Selected + Error displayed the red error treatment and alert; Disabled exposed all options as disabled and resisted an attempted change. Required + no selection displayed the required message; selecting Yearly cleared the empty state. Both 16px/20px sizes rendered with proportional circles and RTL labels; keyboard focus retained the high-contrast yellow-ring treatment. Playground restored to Monthly, enabled, optional, no-error, 20px.
- [ ] Full live focus/hover/state cross-product and independent screen-reader validation remain open; static 20-cell matrix and this focused runtime pass do not close the family DoD.

- [x] 2026-11-09 responsive frame correction: at 320×844 the frame is 257×300px vs 256.8×300px reference, with 305px document width and no overflow; at 390×844 it is 327.4×300px vs 327.2×300px and document width is 375px. The frame selector does not alter 16px/20px radio geometry or RTL.

## Live required/error/disabled interaction — small size — 2026-11-15

- [x] At 16px, enabling Error and focusing the Monthly option with the keyboard preserved the red group/message treatment; ArrowDown moved selection to Quarterly and synchronized the generated Vue value.
- [x] Required + Error + no selection displayed the required marker/message, kept the value undefined, and synchronized `required` in generated usage. Adding Disabled left all options natively disabled and unselected; attempting to activate Yearly did not change the value, while the status announced the disabled group.
- [x] Cleared Disabled, Required, Error and no-selection simulation, selected Monthly, restored 20px, and confirmed the generated example returned to its default controlled state.
- [ ] Independent screen-reader review and the full live checked × size × hover/focus × error/disabled/required cross-product remain open.

## Mobile required/error state recheck — 2026-11-16

- [x] Matched 390×844 local/reference screenshots show the same three-option RTL group and card composition; the selected dot is yellow in Norato and dark in the reference, as intended by the Norato palette.
- [x] In the live mobile playground, no-selection + Required + Error was captured at 20px and 16px. All options remained visible, the required/error messages appeared, and no horizontal overflow or circle stretching was visible.
- [x] Restored the playground to Monthly, 20px, optional, enabled, no-error and selected; `value`, status and generated Vue snippet agree.
- [ ] Full live cross-product for checked × size × hover/focus × error/disabled/required and independent screen-reader validation remain open; this mobile state check does not close Radio DoD.
- [x] 2026-11-16 live mobile follow-up at 16px: Required+Error+empty kept `undefined` synchronized; Disabled blocked changes for all options; selecting Quarterly then ArrowDown selected Yearly and updated the Vue snippet; disabling selected Yearly preserved its value and rendered neutrally.
- [x] Restored Monthly, 20px, optional, enabled, no-error after the interaction pass.
- [ ] Full live cross-product and independent screen-reader validation remain open.
