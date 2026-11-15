# Range — DoD checklist

- [x] design reference and Norato exact component pages inspected at desktop (1280×720) and mobile (390×844) viewport sizes.
- [x] Preview shows one compact labeled value slider and Default marker; proportions and spacing compared with design reference. Norato desktop frame is 584×288px due to the detail column; mobile frame is 320×288px.
- [x] Single and two-thumb range values work through controlled Vue `v-model`.
- [x] RTL is explicit: minimum at physical right and fill grows right-to-left. The label row shows the current value, or both ordered endpoints in Range mode.
- [x] Track/thumb geometry measured. At desktop and mobile, all 16 combinations of type/size/disabled passed; the slider remains 48px high and every thumb 48×48px.
- [x] ArrowLeft/Right, Home/End, pointer drag, 2px focus ring with 4px offset, disabled, error association, and non-crossing ordered range behavior verified.
- [x] Accessibility tree exposes named slider(s), min/max/current value, disabled state, and associated error description.
- [x] Button-parity page includes preview, runnable API playground, all nine contract sections, and per-section/API copy controls.
- [x] Contract, Figma rules, catalog, primitive map, usage snippet, tasks, request checklist and error log reflect verified behavior.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck, Vue build, and `git diff --check` pass; production build has an existing >500KB chunk warning (575.88KB JS).

- [x] 2026-11-02 follow-up: browser rerender shows the visible thumb centered inside its 48×48px target and keyboard focus decorates the 16px visual thumb with a 2px dark outline and yellow halo. ArrowLeft changes 60→61 and ArrowRight restores 60; RTL remains intact.

## Screenshot correction — 2026-11-02

- [x] Range CSS contains one canonical declaration per part/state; no thumb pseudo-track remains and disabled colors are scoped to disabled state.
- [x] At RTL values 0, 52 and 100, the SliderRange edge and thumb center align within 0.02 CSS px at 380px and 1920px; the inset visual rail spans exactly between the endpoint centers.
- [x] Default thumb is white with dark 2px stroke; disabled thumb and track are gray, with no yellow pseudo-track residue.
- [x] Keyboard focus remains visible on the 20px visual knob; target stays 48×48px. RTL keyboard Home/End and Arrow keys, pointer clicks at both visible rail endpoints (0/100), focus ring, disabled colors, and the two-thumb range fill were checked.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck, Vue production build and `git diff --check` pass; production build reports an 812.63KB JavaScript chunk warning.

## State gallery Range sample — 2026-11-14

- [x] Static Range states use a dedicated compact rail/fill/target/thumb illustration rather than the shared generic shape; default/hover/pressed/disabled/focus use Norato yellow/neutral and contain no blue accent.
- [x] Matched 1265×713 desktop browser review: client/scroll width 1250/1250px; every target 48×48px, rail 96×6px and visual thumb 20×20px. Gallery RTL fill and all five visual states are visible without blue accents.
- [x] Matched 390×844 and 320×844 mobile reviews: document widths 375/375px and 305/305px; target/rail/thumb remain 48×48/96×6/20×20px, RTL, and no horizontal overflow. Seven actual states fit four even 131.375px rows in the two-column gallery; the long explanatory note is below the cards instead of a fake eighth slider state.
- [x] Token/catalog/typecheck/build/diff gates pass. Live Range behavior remains unchanged; full family DoD remains open for screenshot matrix and independent screen-reader review.

## Range — matched desktop value placement correction — 2026-11-16

- [x] Same-viewport 1265×713 screenshots showed the reference places «میزان صدا» and `60` together in the label row, while the local build placed `60` above the thumb. The component anatomy contract also defines the label row as label plus current value.
- [x] Moved the visible value into the shared label row. Range mode renders its two model endpoints in order; min/max remain below the rail. Thumb size, rail geometry, 48px target and keyboard model behavior are unchanged.
- [x] Live keyboard check: ArrowLeft changed the single value 60→61 and updated the generated Vue example; ArrowRight restored 60 and the example. RTL and the initial model are restored.
- [x] Fresh same-viewport 1265×713 local/reference screenshot review confirms the label and current value share the top row while the thumb, RTL rail and yellow fill retain their geometry. A 375px-wide live Range view shows both ordered endpoints (`25–75`) fit in the same row; no visible clipping or horizontal overflow occurred.
- [x] Returned the mobile playground to Single, value 60, Medium, enabled, no error. Browser AX exposes the slider and generated usage at the restored value.
- [ ] Independent screen-reader review and the remaining strict state/visual matrix remain open; Range DoD is not closed.

## Range — narrow live keyboard and error/disabled states — 2026-11-15

- [x] At the local 390×844 browser viewport, the Range specimen remained within the RTL frame with no visible vertical stretching. The rendered visual shows the value and label on one row, the minimum at physical right, and Norato-yellow fill.
- [x] In the live Single playground, Home set the value to 0, End set it to 100, and Home followed by ArrowLeft changed it to 1. The accessible current value and generated Vue `v-model` snippet stayed synchronized.
- [x] Switching to Range rendered two separately named slider thumbs («حداقل انتخاب» 25 and «حداکثر انتخاب» 75); the generated code switched to a tuple model. The upper thumb reached 100 with End.
- [x] Small size and Error toggles updated their playground state; the error message «مقدار خارج از محدودهٔ مجاز است.» appeared. With Disabled enabled, both range thumbs were exposed disabled in the accessibility tree.
- [x] Browser returned to Accordion after review.
- [ ] This pass does not prove lower-thumb non-crossing at the upper bound, pointer dragging, exact error `aria-describedby` relation, matched 320px reference comparison, full hover/pressed/focus matrix, or independent screen-reader speech. Range DoD remains open.

## Range — per-thumb keyboard follow-up — 2026-11-15

- [x] The live browser targeted the lower thumb by its accessible element; ArrowLeft changed its value from 25 to 26 and the generated tuple snippet changed from `[25, 75]` to `[26, 75]`.
- [x] Reproduced the lower-thumb `End` issue with direct coordinate focus and keyboard input: the upper endpoint changed from 75 to 100. Inspection of the installed Reka Slider source showed `End` always targets the last thumb and `Home` always targets the first, irrespective of focus.
- [x] Norato now handles Range `Home`/`End` on the focused thumb and clamps it against its neighbor by one step. Browser checks confirmed lower `End` changed 25→74 while upper remained 75; lower `Home` changed 74→0 while upper remained 75; upper `Home` changed 75→1 while lower remained 0; upper `End` changed 1→100; lower `End` against 100 changed 0→99; focus stayed on the operated thumb. Generated tuple values matched each result. Arrow navigation on the upper thumb after boundary navigation changed 99→100 on that same thumb.
- [ ] Independent keyboard/screen-reader reproduction of both thumbs' Home/End and boundary behavior remains open; Range DoD stays open.

## Range — direct per-thumb boundary-key correction — 2026-11-16

- [x] Same live browser session reproduced Reka's hard-coded first/last-thumb boundary behavior, then verified the Norato capture handler affects only the focused thumb.
- [x] Both lower and upper Home/End transitions were checked, including one-step non-crossing at `[99, 100]`; focus, accessible values, and generated Vue tuple stayed synchronized.
- [x] Browser returned to the default Single/60 state after the Range review.
- [ ] Independent screen-reader review, pointer drag, exact error-description relation, matched 320px reference, and full hover/pressed/focus state matrix remain open. Range DoD remains open.
