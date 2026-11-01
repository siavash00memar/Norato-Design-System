# Input — Definition of Done Checklist

- [x] Eight distinct public Vue adapters exist with typed props and controlled v-model events.
- [x] Existing `NoratoField` export and `NoratoTextarea` export/API are retained; typecheck/build passed.
- [x] Each adapter is represented in the Persian RTL Input playground and in the public usage example.
- [ ] Text Input covers label-inside/outside, four visual sizes and its eight documented states.
- [x] Password visibility toggle works in the browser; strength presentation is driven only by the controlled `strength` prop and the sample secret is not rendered.
- [x] Phone prefix defaults to `+98`, is configurable, appears at the physical left edge in RTL, and phone entry is LTR.
- [ ] OTP length 4/5/6 supports typing, paste, Backspace and arrows, error/disabled/success, and never auto-submits. Browser-tested length 6 typing/paste/Backspace/arrows; lengths 4/5 and success-state behavior remain untested.
- [x] Textarea counter/max-length (179→180; next keystroke rejected), vertical resize, disabled and error behavior work.
- [ ] Textarea read-only behavior was not independently exercised.
- [ ] Number stepper/stacked layouts obey min/max/step through buttons and keyboard; default stepper and ArrowUp bounds were checked (`98→99`; `99→99`), while stacked layout and other step/min/max combinations remain untested.
- [x] Persian amount entry `۱۲۳۴۵` rendered grouped `۱۲٬۳۴۵` and the matching Persian words; emitted model stays ungrouped by the input adapter.
- [x] Search clear emptied the field; Ctrl+K focused Search from a non-editable target and did not steal focus from another text input.
- [x] All eight adapters disable in shared disabled/loading states, expose associated error text (eight alerts with `aria-invalid`) and announce loading (eight status messages). Measured action targets are 48×48px; keyboard focus is visible with a 4px offset.
- [x] Lemon and Norato were measured in matching 1280×900 and 390×844 viewports. At 1280×900 the Norato preview is 584×288px with a 324×49.6px field; Lemon's frame is 636×300px. At 390×844 Norato is 320×288px with a 310.4×49.6px field; Lemon is 327.2×300px with a 321.4×41px field. The larger Norato hit target is intentional. Document width is 375px and the eight-card family matrix has no internal overflow.
- [ ] Complete supported state/size matrices remain open for all eight controls; selected RTL/LTR behavior and shared action focus were measured.
- [x] Independent screen-reader review was unavailable and remains explicitly open; AX tree checks were used for labels, roles, disabled controls and status text.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck/build and `git diff --check` pass; build emits a 673.58KB main chunk warning above 500KB.
- [ ] Request checklist, contract, catalog maturity and family ledger truthfully record remaining work.
- [x] Implementation checkpoint commit `663af1f` was pushed to GitHub; local `HEAD` and `origin/master` both resolve to `663af1f`.

## Remaining evidence

- Full eight-part state/size matrix interaction, every focus ring/target measurement, OTP length 4/5 variants, Number stacked/step matrix, independent screen reader and remote GitHub parity remain unverified. Do not close component-family DoD until these are completed or explicitly bounded in the handoff.
