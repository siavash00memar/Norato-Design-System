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
- [x] RTL order and Dark/Glass contrast use semantic Norato tokens; yellow remains the brand/focus accent. The screenshot confirms status icon at right and close at left; the playground text field computes to a single yellow border with no outline or shadow.
- [x] Keyboard Tab navigation visibly focuses Toast action and close. Browser screenshots show yellow focus outlines on the pill action and circular close target; source uses the 2px focus token and 4px spacing token for both. Screenshots confirm the outline follows each control shape without stretching either control.
- [ ] Desktop and 390/320 CSS-pixel viewports wrap correctly without document overflow. A narrow 484px screenshot is usable and shows no horizontal page overflow; exact 390/320 viewport validation is still pending.

## Behavior and accessibility
- [x] Controlled `v-model` opens the live Toast and the close control removes it; `close` feedback appears in the playground.
- [x] Controlled open/close and default six-second timeout work. Loading remained open after a seven-second wait and closed manually.
- [x] Action and close activate with Space through the actual browser accessibility target. Natural Tab order reached Toast action, close, and the next field; focus paused the timer and leaving resumed it.
- [x] The real playground exposes `actionCloses`, and its generated snippet follows the selected value. Browser verification confirms callback feedback remains visible when the action closes the Toast, and the Toast stays open while feedback appears when `actionCloses=false`; manual close still reports its own feedback.
- [x] The persistent duration option generated `:duration="0"`; a timed persistence wait was not part of this pass (the earlier 7-second Loading wait remains the verified persistence evidence). The playground was restored to its default 6-second duration and `actionCloses=true` after the callback review.
- [x] In uncontrolled mode, the playground opens Toast from `defaultOpen`, close emits state back to the playground so it can reopen, and the generated snippet removes `v-model`/the unused `ref` import. The non-closing action emits its callback and leaves Toast open; manual close then closes it.
- [x] Pointer hover paused the persistent Toast timer (`متوقف`); moving/clicking outside resumed it (`ادامه دارد`). The playground was restored to 6 seconds and the Toast closed.
- [x] Browser DOM contains one populated Reka `role="alert"` live node; Success maps to `aria-live="polite"`, Danger to `"assertive"`, and localized tone, title, description, and action text appear in logical order. The adapter adds no parallel live region. Six-second auto-dismiss and persistent behavior are verified; reduced-motion CSS disables entry/timer motion and reduces the spinner to one near-instant cycle.
- [ ] Audible announcement quality and reading order with an independent screen reader, plus reduced-motion emulation in the browser, remain unverified.

## Engineering
- [x] `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, `git diff --check` pass.
- [x] Actual browser evidence and open residuals are recorded; DoD remains open while exact responsive checks, per-variant screenshot review, independent screen-reader review and browser reduced-motion emulation are outstanding.

