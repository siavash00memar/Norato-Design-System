# Charts — Checklist / Definition of Done

## Source and structure
- [x] Eight workflow stages appear in order.
- [x] Four Vue adapters, types, exports, usage, catalog, contract and Figma rule agree.
- [x] Page matches Button structure; preview is inert; obsolete placeholder selectors are removed.

## Visual
- [x] Compare design reference and Norato at matched 1280×720 viewport.
- [x] All 14 documented visual variants render with stable geometry and no stretched marks, overlap, clipping, or horizontal overflow.
- [x] RTL/LTR title/legend alignment and LTR numeric axes are correct.
- [x] 390px/320px narrow layouts stay bounded; SVG responds without distortion.
- [x] Norato yellow is series 1, eight series colors remain fixed and tokenized.

## Data and accessibility
- [x] All six chart renderings preserve category/series order and values; empty/malformed data does not produce invalid geometry.
- [x] Donut rejects invalid totals safely; direct labels remain legible.
- [x] Each chart has an accessible name/summary and a semantic data table matching rendered data.
- [x] Static preview has no focusable descendants; header action slot honors consumer keyboard/focus behavior.
- [x] Browser accessibility tree reviewed: the chart exposes its title and data summary, decorative SVG marks stay out of the tree, and the disclosure exposes a semantic table with caption, column headers, category row headers, and matching values. Space toggles the disclosure.
- [ ] Independent screen-reader review recorded; browser accessibility tree does not substitute for a screen-reader session.

## Delivery
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck/build and `git diff --check` pass after the latest mobile-axis correction.
- [x] Browser evidence, error log and remaining limitations recorded.
- [x] Checkpoint commit `c9b2344` pushed to `origin/master`; `git ls-remote` matched `HEAD` at verification time.
