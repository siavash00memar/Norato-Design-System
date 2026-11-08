# Toast — Checklist / Definition of Done

## Contract and structure
- [x] Constitution → Specify → Clarify → Plan → Checklist → Tasks → Analyze → Implement workflow files are recorded in sequence.
- [x] Vue API, export, catalog, usage, contract and focus/timing rules agree; catalog and TypeScript checks pass.
- [x] Page follows Button section order; inert specimen is separate from live playground.
- [x] Legacy `.sample-toast` rules are removed; wiring and specimen defects are recorded in the error log.

## Visual and responsive
- [x] Matched 1270×720 desktop screenshots: Button-sized dotted frames are both about 576×288px; the design reference reference Toast is about 366×72px and the Norato static sample is about 368×70px. RTL status icon and close are on the intended sides; static sample follows design reference's default rich success content without action/timer.
- [x] Matched desktop screenshot review (same design reference/Norato browser tab at 1265×720): both use the shared dotted frame and centered rich success Toast; frame proportions and RTL status/close placement align, with Norato green semantic success and glass surface.
- [x] Exercised all five tones × two surfaces × two layouts through the real playground; each combination opened and closed, and the generated Vue usage updated to the selected props. One representative rich combination was inspected visually; full per-combination screenshot measurement remains open.
- [x] RTL order and Dark/Glass contrast use semantic Norato tokens; yellow remains the brand/focus accent. The screenshot confirms status icon at right and close at left. Exact focus-ring measurement remains open.
- [ ] Desktop and 390/320 CSS-pixel viewports wrap correctly without document overflow. A narrow 484px screenshot is usable and shows no horizontal page overflow; exact 390/320 viewport validation is still pending.

## Behavior and accessibility
- [x] Controlled `v-model` opens the live Toast and the close control removes it; `close` feedback appears in the playground.
- [x] Controlled open/close and default six-second timeout work. Loading remained open after a seven-second wait and closed manually.
- [x] Action and close activate with Space through the actual browser accessibility target. Natural Tab order reached Toast action, close, and the next field; focus paused the timer and leaving resumed it.
- [x] The real playground exposes `actionCloses`, and its generated snippet follows the selected value. Browser verification confirms callback feedback remains visible when the action closes the Toast, and the Toast stays open while feedback appears when `actionCloses=false`; manual close still reports its own feedback.
- [x] The persistent duration option generated `:duration="0"`; a timed persistence wait was not part of this pass (the earlier 7-second Loading wait remains the verified persistence evidence). The playground was restored to its default 6-second duration and `actionCloses=true` after the callback review.
- [ ] Uncontrolled open verified. Focus-based pause/resume events are verified; pointer-only hover remains open.
- [ ] Single polite/assertive announcement path, tone name, content order, six-second default / persistent policy and reduced motion are verified; independent screen-reader review recorded.

## Engineering
- [x] `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, `git diff --check` pass.
- [x] Actual browser evidence and open residuals are recorded; DoD remains open while responsive, uncontrolled, pause/resume, focus-order, screenshot-matrix and independent screen-reader evidence are outstanding.

