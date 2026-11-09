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
- [x] At exact 390px and 320px same-origin CSS viewport widths, document scroll width equals document client width (375/375 and 305/305 respectively); the preview frame and full page stay bounded.
- [x] Playground exposes all 22 combinations: 3 Carousel sizes via selector, 3 Slot sizes, 8 Indicator variants and 8 Dot variants. Accessibility tree confirms all 3 slots, 8 indicators and 8 dots are rendered.
- [x] Browser interaction: Next moves 1→2; direct selection reaches 5 and disables Next at the end; ArrowRight in RTL returns to 4. The selected-index control and yellow indicator follow the selected slide, and the focused track shows its yellow ring.
- [x] At a mixed image/text-only state before the demo artwork was completed, short text slides expanded to match the tall image slide. Track now aligns slides to the top so cards keep their intrinsic content height. The live five-slide sample now supplies local artwork on every item.
- [ ] Touch scrolling and independent screen-reader review remain open; a separate parent-owned `v-model` action is verified in the follow-up below.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck, build and `git diff --check` pass. Production bundle remains above 500KB advisory threshold.

**DoD decision:** Do not mark the family fully reviewed until all unchecked viewport, variant, interaction and screen-reader items pass.

## Follow-up review (2026-11-09)

- [x] Browser check at the current desktop viewport: Next moved slide 1→2; direct dot selection reached slides 3, 5, then 1; the controlled-index selector tracked each change.
- [x] Mouse drag in RTL from slide 1 advanced to slide 2 and updated the controlled-index selector.
- [x] Programmatic slide centering now checks `prefers-reduced-motion` and uses non-animated scrolling when reduced motion is requested. The preference was not emulated in the browser during this review.
- [x] At exact 390px and 320px same-origin CSS viewport widths, document scroll width equals document client width (375/375 and 305/305 respectively); the preview frame and full page stay bounded.
- [ ] Touch scrolling, external `v-model` changes beyond the playground selector, and independent screen-reader review remain open.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck, production build and `git diff --check` pass after the follow-up implementation.

## Live playground follow-up (2026-11-09)

- [x] In the RTL playground, direct pointer selection of slides 2, 3 and 4 moved the active card/indicator and the controlled-index selector together. Slide 5 selection continued to disable Next; resetting through the controlled-index selector restored slide 1.
- [x] In LTR, the header controls relabeled Previous/Next; ArrowRight advanced from slide 4 to 5 and ArrowLeft returned to slide 4 after scroll settling. The direction and index selectors then restored to RTL and slide 1.
- [x] Fresh 1265×713 browser screenshot shows the desktop document without a horizontal scrollbar and the intrinsic dotted specimen frame.
- [x] A same-origin test frame set the embedded page to exactly 390px and 320px CSS widths. Before the correction, the 390px frame had 375px client width and 472px document scroll width; the Carousel specimen itself stayed bounded.
- [x] Root cause was the two-column mobile variant matrix: five-item indicators overflowed 155px cards and expanded the page to 472px at a 375px content viewport. Mobile variant examples now use one column, inset token spacing, and dot variants stack; repeated measurements show no page overflow at 390px or 320px.
- [ ] Touch scrolling, independent external `v-model` control outside the playground and independent screen-reader review remain open.

## Responsive matrix overflow correction (2026-11-09)

- [x] At CSS frame widths 390px and 320px, the rendered document now measures client/scroll widths 375/375px and 305/305px; the matrix itself has equal client/scroll widths in both frames.
- [x] The mobile indicator cards reflow to one column. Their Norato indicator controls remain 48×48px; the 5-indicator row fits without clipping or a local scrollbar. Dot examples stack label and control and retain RTL.
- [x] Accessibility tree continues to expose all 22 examples. Browser screenshot review confirms the static specimen retains its intrinsic card proportions and page has no horizontal scrollbar at either width.
- [ ] Touch swipe, reduced-motion browser emulation and independent screen-reader review remain open; Carousel DoD remains open.

## Parent-controlled model follow-up (2026-11-09)

- [x] Added a clearly named host-side control to the live playground; it updates the parent `active` ref directly, separately from the index selector.
- [x] Mouse activation moved the carousel from slide 1 to slide 2; the selected card and yellow active dot moved with it, the controlled-index selector read slide 2, and Previous became enabled.
- [x] Keyboard Enter on the same control moved the parent model to slide 3; selector and visible status read slide 3, with focus remaining on the control.
- [x] The control uses the shared `.copy-section-button` style and the 48px `--norato-control-target-min` token.
- [ ] 390px/320px visual review of the added playground control, touch scrolling, reduced-motion emulation and independent screen-reader review remain open.
