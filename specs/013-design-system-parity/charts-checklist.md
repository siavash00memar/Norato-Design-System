# Charts — Checklist / Definition of Done

## Source and structure
- [ ] Eight workflow stages appear in order.
- [ ] Four Vue adapters, types, exports, usage, catalog, contract and Figma rule agree.
- [ ] Page matches Button structure; preview is inert; obsolete placeholder selectors are removed.

## Visual
- [ ] Compare design reference and Norato at matched 1280×720 viewport.
- [ ] All 14 documented visual variants render with stable geometry and no stretched marks, overlap, clipping, or horizontal overflow.
- [ ] RTL/LTR title/legend alignment and LTR numeric axes are correct.
- [ ] 390px/320px narrow layouts stay bounded; SVG responds without distortion.
- [ ] Norato yellow is series 1, eight series colors remain fixed and tokenized.

## Data and accessibility
- [ ] All six chart renderings preserve category/series order and values; empty/malformed data does not produce invalid geometry.
- [ ] Donut rejects invalid totals safely; direct labels remain legible.
- [ ] Each chart has an accessible name/summary and a semantic data table matching rendered data.
- [ ] Static preview has no focusable descendants; header action slot honors consumer keyboard/focus behavior.
- [ ] Browser accessibility tree and independent screen-reader review recorded.

## Delivery
- [ ] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck/build and `git diff --check` pass.
- [ ] Browser evidence, error log and remaining limitations recorded.
- [ ] Verified commit pushed and remote sync confirmed.
