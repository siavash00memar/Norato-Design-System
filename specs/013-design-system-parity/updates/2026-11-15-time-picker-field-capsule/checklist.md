# Checklist — Time Picker field capsule

- [x] Existing Time Picker field selectors are consolidated; no legacy card-radius/48px visible border rule remains.
- [x] The visual capsule uses the 36px `--norato-control-visual-height` token, pill radius, and 1px `--norato-color-border-default` stroke (`#e8e8e8`).
- [x] Readonly input target uses the 48px minimum token; clock button is 48×48px at default sizes.
- [ ] Hover/focus use one 1px Norato-yellow capsule stroke; no browser-black or duplicate outline appears.
- [ ] Error stroke stays semantic; disabled/loading remain neutral and block opening.
- [ ] Small/Medium/Large/XLarge and mobile 390/320 widths remain bounded with no horizontal overflow or stretch.
- [x] LTR time value and RTL label/layout are preserved.
- [x] Keyboard, Escape/focus return, controlled example, and visible UI states are verified in the browser at 375×844.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck/build, and `git diff --check` pass.
- [x] Independent screen-reader review remains explicitly open in the family DoD; this follow-up does not claim it passed.
