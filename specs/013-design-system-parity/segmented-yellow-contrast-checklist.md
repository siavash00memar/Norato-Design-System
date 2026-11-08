# Segmented Control Yellow Contrast — Checklist

- [x] Existing selected Contrast hover selector is corrected in place; no duplicate override remains.
- [x] Selected Contrast uses yellow fill and dark text at rest and hover; white-on-yellow and blue selection accent are absent.
- [x] Glass selection remains raised white; disabled option and group remain disabled and muted. A selected item that is disabled is normalized to the first enabled option by the documentation playground; its direct adapter rendering still needs a dedicated state-level check.
- [x] 24 group combinations (2 styles × 4 sizes × 3 option counts) preserve RTL order, horizontal non-wrapping geometry, selected state and target heights (48px; 56px XLarge).
- [x] Keyboard selection, roving focus, visible focus, Home/End, disabled skipping and non-empty controlled value behavior are verified in the live playground.
- [x] design reference/Norato desktop comparison used the same 1280×720 viewport. Exact 390×844 geometry remains open because viewport override did not affect this browser tab.
- [ ] Full 64 item-state/style/size cross-product and independent screen-reader review remain open.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, and `git diff --check` pass. Build completed with a 1,024.79KB JavaScript bundle; no separate warning was printed in this run.
- [x] Component contract, Figma rule, error log and request-validation record agree with the implementation.
