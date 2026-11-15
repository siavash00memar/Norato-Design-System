# Radio mobile overflow — Checklist

- [x] Measure document, group, row target, and radio glyph at 320×720 in the actual browser.
- [x] Current render does not reproduce horizontal overflow or a 52px glyph: viewport is 320px wide; document client/scroll widths are both 305px; playground glyphs are 20×20px and rows are 48/48.8/48px.
- [x] At 390×844, document client/scroll widths are both 375px; the playground group remains inside its parent.
- [x] Radio glyphs remain circular and 20×20px in the live playground; each interaction row is at least 48px.
- [x] RTL direction and selected-value display remain intact in both screenshots; no horizontal clipping or stretched circles are visible.
- [x] ArrowDown selects Quarterly and synchronizes checked state, live status, and generated Vue value; ArrowUp restores Monthly.
- [x] Playground returns to Monthly, 20px, optional, enabled, no-error.
- [x] `pnpm check:tokens`, Vue TypeScript validation/build, `pnpm check:catalog`, and `git diff --check` pass.
- [ ] Remaining full live state cross-product and independent screen-reader review stay open unless separately completed.

## Outcome

No component CSS change was justified: the reported overflow was not reproducible at the required viewport sizes. Reopen this item only with a rendering/environment that reproduces the overflow; do not add speculative width or glyph overrides.
