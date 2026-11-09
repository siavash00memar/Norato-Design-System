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
- [x] Desktop and exact 390/320 CSS-pixel viewports wrap correctly without document overflow. At 390×844, document/body are 375px and the playground is 343px wide; at 320×640, document/body are 305px and the playground is 273px wide. The live dark Loading Toast stays within the viewport: 351px at 390px and 281px at 320px, with no horizontal page overflow.

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
- [x] Actual browser evidence and open residuals are recorded; DoD remains open while complete per-variant screenshot review, independent screen-reader review and browser reduced-motion emulation are outstanding.

## Follow-up review (2026-11-09)

- [x] Applied explicit 390×844 and 320×640 browser viewports. `documentElement.scrollWidth` and `body.scrollWidth` stayed 375px and 305px respectively; both pages had no horizontal overflow.
- [x] At 390px the playground is 343px wide and the active Toast is 351px wide with 12px side insets. At 320px the playground is 273px and Toast is 281px wide with 12px side insets. The dark Loading/simple layout stays contained and the action, close, and spinner remain visible.
- [x] Inspected neutral, success, warning, danger, and loading tone renderings in the live UI; semantic icons and the Norato yellow action remained legible. Dark Loading and simple layout were also visually inspected at both mobile widths.
- [ ] Exact mobile screenshots for every tone × surface × layout combination, independent screen-reader review, and reduced-motion emulation remain open.
- [x] Reset the temporary viewport after review; the browser returned to its default 1920×903 viewport.

