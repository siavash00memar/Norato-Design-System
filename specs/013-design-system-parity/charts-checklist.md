# Charts — Checklist / Definition of Done

## Default preview geometry — 2026-11-14

- [x] Matched desktop frame, card and plot are within 1.2px of reference bounds; 390/320 mobile frame, card and plot are within 4px and no longer stretch or internally scroll.
- [x] Mobile frame is centered at x=24px; local document width remains 375px/305px without overflow.
- [x] Yellow series 1, Persian RTL title and LTR numeric plot are preserved; live chart keyboard selection and generated-code sync pass and are restored to Bar/RTL.
- [ ] Independent screen-reader review and exhaustive visual/state audit remain open for strict Final DoD.

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
- [x] Chart title, direct-value label and donut total now use the registered heading-title typography token.
- [x] Exact-ceiling maximum values reserve one extra nice tick so the direct-value label remains within the plot; the existing `[34,58,42,72,51,66]` fixture retains its previous 0–80 scale.

## Data and accessibility
- [x] All six chart renderings preserve category/series order and values; empty/malformed data does not produce invalid geometry.
- [x] Donut rejects invalid totals safely; direct labels remain legible.
- [x] Each chart has an accessible name/summary and a semantic data table matching rendered data.
- [x] Static preview has no focusable descendants; header action slot honors consumer keyboard/focus behavior.
- [x] Browser accessibility tree reviewed: the chart exposes its title and data summary, decorative SVG marks stay out of the tree, and the disclosure exposes a semantic table with caption, column headers, category row headers, and matching values. Space toggles the disclosure.
- [ ] Independent screen-reader review recorded; browser accessibility tree does not substitute for a screen-reader session.

## Delivery
- [x] `pnpm test:charts` passes 8/8 including the exact-ceiling regression; token, catalog, typecheck, production build and diff gates pass after the direct-label correction.
- [x] Browser evidence, error log and remaining limitations recorded.
- [x] Checkpoint commit `c9b2344` pushed to `origin/master`; `git ls-remote` matched `HEAD` at verification time.
- [x] 2026-11-14 preview follow-up gates: `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck/build, and `git diff --check` pass. The prohibited-name scan returns no matches.
