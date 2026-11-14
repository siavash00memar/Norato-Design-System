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

## Baseline visual re-audit — 2026-11-10

- [x] Fresh matched desktop renders reconfirm the right-aligned RTL title, arrow controls on the left, bounded square slide cards and centered active indicator. Local artwork and yellow active accent preserve Norato's palette without visible stretching.
- [x] Existing same-viewport mobile reference comparison and exact 390px/320px no-overflow checks, 48px controls and primary keyboard/index behavior cover the Baseline gates.
- [ ] Real-device touch scrolling and independent screen-reader review remain open for Final DoD.

## Follow-up review (2026-11-09)

- [x] Browser check at the current desktop viewport: Next moved slide 1→2; direct dot selection reached slides 3, 5, then 1; the controlled-index selector tracked each change.
- [x] Mouse drag in RTL from slide 1 advanced to slide 2 and updated the controlled-index selector.
- [x] Programmatic slide centering now checks `prefers-reduced-motion` and uses non-animated scrolling when reduced motion is requested. The preference was not emulated in the browser during this review.
- [x] At exact 390px and 320px same-origin CSS viewport widths, document scroll width equals document client width (375/375 and 305/305 respectively); the preview frame and full page stay bounded.
- [ ] Touch scrolling and independent screen-reader review remain open; parent-owned `v-model` updates beyond the index selector are verified in the follow-up below.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck, production build and `git diff --check` pass after the follow-up implementation.

## Live playground follow-up (2026-11-09)

- [x] In the RTL playground, direct pointer selection of slides 2, 3 and 4 moved the active card/indicator and the controlled-index selector together. Slide 5 selection continued to disable Next; resetting through the controlled-index selector restored slide 1.
- [x] In LTR, the header controls relabeled Previous/Next; ArrowRight advanced from slide 4 to 5 and ArrowLeft returned to slide 4 after scroll settling. The direction and index selectors then restored to RTL and slide 1.
- [x] Fresh 1265×713 browser screenshot shows the desktop document without a horizontal scrollbar and the intrinsic dotted specimen frame.
- [x] A same-origin test frame set the embedded page to exactly 390px and 320px CSS widths. Before the correction, the 390px frame had 375px client width and 472px document scroll width; the Carousel specimen itself stayed bounded.
- [x] Root cause was the two-column mobile variant matrix: five-item indicators overflowed 155px cards and expanded the page to 472px at a 375px content viewport. Mobile variant examples now use one column, inset token spacing, and dot variants stack; repeated measurements show no page overflow at 390px or 320px.
- [ ] Touch scrolling and independent screen-reader review remain open; the parent-owned model control now has a separate pointer/keyboard check below.

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
- [x] 390px/320px visual review of the added playground control and reduced-motion emulation pass; touch scrolling and independent screen-reader review remain open, with new evidence below.

## Responsive host-control and reduced-motion recheck (2026-11-10)

- [x] At 390×844 and 320×844, the host-owned model control stays RTL with no document overflow. Its panel measures 358×98.4px / 288×98.4px; the full-width buttons are 332×48px / 262×48px.
- [x] With `prefers-reduced-motion: reduce` emulated at both widths, `matchMedia` is true and track `scroll-behavior` is `auto`. Advancing from slide 1 to 2 through the host control leaves slide 2 centered within 0.23px at 390px and 0.04px at 320px; document widths remain 390/390 and 320/320.
- [ ] CDP touch input delivered pointer/touch start, move and end events to the track but did not produce native horizontal scroll; synthesized touch scroll also did not move it. This automation result does not verify real-device touch scrolling, so keep touch review open.
- [ ] Independent screen-reader review remains open.

## Native horizontal track-scroll follow-up — 2026-11-14

- [x] In the live RTL playground, horizontal scroll input over the carousel track moved the centered active slide from 1 to 2 and then to 3; the active yellow indicator followed. The delayed scroll-settle handler briefly left the accessibility-tree model at 2, then updated it to 3 on the next snapshot.
- [x] The accessibility tree exposes the named carousel region, next/previous controls with disabled boundary state, each slide's position/name, and a named controlled-index selector. Selecting Slide 1 through the selector restored the first slide, synchronized the model and disabled Previous.
- [x] Fresh screenshot confirms first slide at the right and its yellow active dot; playground returned to RTL, Medium, five slides and index 1.
- [ ] This wheel/track-scroll emulation does not prove real-device touch scrolling. Independent screen-reader review and real-device touch review remain open; Carousel DoD is not closed.

## Live slide image proportions — 2026-11-15

- [x] At the current 499×932 local browser viewport, all five live slide images reported the same intrinsic 260×150 source size and rendered 340.75×191.67 with CSS `aspect-ratio: 16 / 9` and `object-fit: cover`; no image was stretched to fill a different ratio.
- [x] Visual screenshot review shows the active and adjacent slide art remains bounded inside the RTL carousel track; the active indicator and controls remain visible.
- [ ] The small crop from the source artwork into the 16:9 frame is intentional `object-fit: cover`, not a distortion check for arbitrary consumer-provided slots. Real-device touch scrolling and independent screen-reader review remain open.

## RTL mouse-drag interaction — 2026-11-15

- [x] In the local RTL playground, a real browser pointer drag to the right moved the controlled slide from 1 to 2 and synchronized the selector and active indicator; dragging left returned to the first slide. Focus stayed on the track after the gesture.
- [x] After the check, the live model was at the first slide, the page returned to scroll position 0, and the browser remained on the Carousel detail route.
- [ ] This exercises the custom mouse-pointer drag path, not touch input. Real-device touch scrolling and independent screen-reader review remain open; Carousel DoD stays open.

## Controlled next/previous button synchronization — 2026-11-15

- [x] Fresh local browser check on the live RTL playground: activating «بعدی» changed the controlled index and status from slide 1 to slide 2, enabled «قبلی», and retained focus on the activated control.
- [x] Activating «قبلی» returned the controlled index/status to slide 1 and restored the disabled boundary state; the browser was left at the original Carousel route and default slide.
- [ ] This spot check does not cover every slide/state combination, real-device touch scrolling, or independent screen-reader output. Carousel DoD remains open.

## Fresh RTL arrow-key navigation — 2026-11-15

- [x] In the live local RTL playground, ArrowLeft on the focused track advanced the controlled index/status from slide 1 to slide 2.
- [x] ArrowRight returned the index/status to slide 1; the Previous control returned to its disabled boundary state and focus remained on the track.
- [ ] This focused browser check does not cover every direction/slide combination or independent screen-reader output; touch review also remains open.

## Fresh LTR arrow-key navigation — 2026-11-15

- [x] In the live local playground, selecting LTR changed the next/previous button names and boundary state to match the direction.
- [x] ArrowRight advanced the controlled index/status from slide 1 to slide 2; ArrowLeft restored slide 1 and disabled Next.
- [x] Restored RTL and slide 1 after the check.
- [ ] This confirms the keyboard direction mapping only; screen-reader review and real-device touch review remain open.
