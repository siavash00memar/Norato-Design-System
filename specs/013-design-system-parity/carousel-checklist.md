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
- [x] The inert page specimen now uses three square, token-colored landscape illustrations, a dotted Button-style frame, a Default marker and correctly ordered RTL arrows. No remote media is required.
- [x] Selecting slide 2 directly in the local RTL playground centers the second slide and updates the active indicator; the next button's Space-key activation advances to slide 3 and updates the controlled-index selector. Programmatic centering uses `block: nearest` to limit document movement.
- [x] Reference comparison: the reference capture at the same mobile viewport uses a right-aligned title/control header, peeked adjacent cards and a centered active elongated dot. Norato matches those structure and direction cues, with its own yellow accent and sample illustration style.
- [x] Matched desktop screenshot comparison at 1265×713: reference and Norato show the same right-aligned title, left-side arrow controls, three square image cards, and centered yellow active indicator. The Norato documentation column constrains its frame more narrowly than the reference page.
- [ ] 320px overflow test and 390px layout check.
- [x] Playground exposes all 22 combinations: 3 Carousel sizes via selector, 3 Slot sizes, 8 Indicator variants and 8 Dot variants. Accessibility tree confirms all 3 slots, 8 indicators and 8 dots are rendered.
- [x] Browser interaction: Next moves 1→2; direct selection reaches 5 and disables Next at the end; ArrowRight in RTL returns to 4. The selected-index control and yellow indicator follow the selected slide, and the focused track shows its yellow ring.
- [x] At a mixed image/text-only state before the demo artwork was completed, short text slides expanded to match the tall image slide. Track now aligns slides to the top so cards keep their intrinsic content height. The live five-slide sample now supplies local artwork on every item.
- [ ] Touch scrolling, external `v-model` changes beyond the playground selector, and independent screen-reader review remain open.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck, build and `git diff --check` pass. Production bundle remains above 500KB advisory threshold.

**DoD decision:** Do not mark the family fully reviewed until all unchecked viewport, variant, interaction and screen-reader items pass.

## Follow-up review (2026-11-09)

- [x] Browser check at the current desktop viewport: Next moved slide 1→2; direct dot selection reached slides 3, 5, then 1; the controlled-index selector tracked each change.
- [x] Mouse drag in RTL from slide 1 advanced to slide 2 and updated the controlled-index selector.
- [x] Programmatic slide centering now checks `prefers-reduced-motion` and uses non-animated scrolling when reduced motion is requested. The preference was not emulated in the browser during this review.
- [ ] 320px overflow test and 390px layout check.
- [ ] Touch scrolling, external `v-model` changes beyond the playground selector, and independent screen-reader review remain open.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck, production build and `git diff --check` pass after the follow-up implementation.

## Live playground follow-up (2026-11-09)

- [x] In the RTL playground, direct pointer selection of slides 2, 3 and 4 moved the active card/indicator and the controlled-index selector together. Slide 5 selection continued to disable Next; resetting through the controlled-index selector restored slide 1.
- [x] In LTR, the header controls relabeled Previous/Next; ArrowRight advanced from slide 4 to 5 and ArrowLeft returned to slide 4 after scroll settling. The direction and index selectors then restored to RTL and slide 1.
- [ ] A narrow live browser capture showed a horizontal document scrollbar while the playground was in view. Exact 390px/320px document/frame measurements and the source of this overflow remain unverified; keep responsive DoD open.
- [ ] Touch scrolling, independent external `v-model` control outside the playground and independent screen-reader review remain open.
