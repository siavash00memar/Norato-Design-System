# Carousel — Definition of Done

**Status:** Implemented; final DoD remains open.

## Specification coverage

- [x] Four public Vue parts are exported: Carousel, Slot, Indicator, Dot.
- [x] Button-style page order: inert preview, Vue playground/copyable snippet, then Overview, Anatomy, Variants, Sizes, States, Parts, Usage, Accessibility, Tokens.
- [x] Controlled active index, bounded previous/next actions, direct dot selection, RTL keyboard mapping, labeled slides, 48px targets, and reduced-motion handling.
- [x] Native scroll-snap, partial neighboring slide, intrinsic image ratio and no autoplay.
- [x] Norato yellow accent; no reference-brand text in this contract.

## Review evidence (2026-11-08)

- [x] At 385px local viewport, first slide was on the right, a neighboring slide peeked on the left, and active indicator used the yellow accent.
- [x] Arrow action advanced from first to second slide; ArrowLeft advanced from second to third in RTL. Active dot followed settled scroll.
- [x] Preview media uses inline SVG illustrations; no network asset dependency or broken-image state.
- [x] Selecting slide 2 directly in the local RTL playground centers the second slide and updates the active indicator; the next button's Space-key activation advances to slide 3 and updates the controlled-index selector. Programmatic centering uses `block: nearest` to limit document movement.
- [x] Reference comparison: the reference capture at the same mobile viewport uses a right-aligned title/control header, peeked adjacent cards and a centered active elongated dot. Norato matches those structure and direction cues, with its own yellow accent and sample illustration style.
- [ ] Matched desktop viewport screenshot comparison.
- [ ] 320px overflow test and 390px layout check.
- [x] Playground exposes all 22 combinations: 3 Carousel sizes via selector, 3 Slot sizes, 8 Indicator variants and 8 Dot variants. Accessibility tree confirms all 3 slots, 8 indicators and 8 dots are rendered.
- [ ] Verify mouse drag, touch scrolling, no-wrap ends, direct dot selection at first/middle/last, controlled external model updates beyond slide 2, and both LTR/RTL.
- [ ] Independent screen-reader review.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck, build and `git diff --check` pass. Production bundle remains above 500KB advisory threshold.

**DoD decision:** Do not mark the family fully reviewed until all unchecked viewport, variant, interaction and screen-reader items pass.
