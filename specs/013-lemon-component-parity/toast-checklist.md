# Toast — Checklist / Definition of Done

## Contract and structure
- [x] Constitution → Specify → Clarify → Plan → Checklist → Tasks → Analyze → Implement workflow files are recorded in sequence.
- [x] Vue API, export, catalog, usage, contract and focus/timing rules agree; catalog and TypeScript checks pass.
- [x] Page follows Button section order; inert specimen is separate from live playground.
- [x] Legacy `.sample-toast` rules are removed; wiring and specimen defects are recorded in the error log.

## Visual and responsive
- [x] Matched 1270×720 desktop screenshots: Button-sized dotted frames are both about 576×288px; the Lemon reference Toast is about 366×72px and the Norato static sample is about 368×70px. RTL status icon and close are on the intended sides; static sample follows Lemon's default rich success content without action/timer.
- [ ] Compare Dark/Glass, Simple/Rich, semantic icon/tone, action, close and timer bar across every applicable combination.
- [ ] All five tones × two styles × two layouts render without stretched text/icons/timer.
- [ ] RTL order and Dark/Glass contrast use semantic Norato tokens; yellow remains the brand/focus accent.
- [ ] Desktop and 390/320 CSS-pixel viewports wrap correctly without document overflow.

## Behavior and accessibility
- [x] Controlled `v-model` opens the live Toast and the close control removes it; `close` feedback appears in the playground.
- [ ] Uncontrolled open, action callback, timeout, persistent duration, Loading persistence and pause/resume work.
- [ ] Action and close work by keyboard; focus is visible at 2px and targets are at least 48px.
- [ ] Single polite/assertive announcement path, tone name, content order, six-second default / persistent policy and reduced motion are verified; independent screen-reader review recorded.

## Engineering
- [x] `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, `git diff --check` pass.
- [x] Actual browser evidence and open residuals are recorded; DoD remains open while visual/interaction evidence is outstanding.

