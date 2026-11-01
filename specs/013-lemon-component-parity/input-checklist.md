# Input — Definition of Done Checklist

- [x] Eight distinct public Vue adapters exist with typed props and controlled v-model events.
- [x] Existing `NoratoField` export and `NoratoTextarea` export/API are retained; typecheck/build passed.
- [x] Each adapter is represented in the Persian RTL Input playground and in the public usage example.
- [ ] Text Input's label-inside/outside and all four sizes were browser-measured (outside 50/52/56/60px; inside 62/64/68/72px); all eight documented state combinations are not yet exhaustively reviewed.
- [x] Password visibility toggle works in the browser; strength presentation is driven only by the controlled `strength` prop and the sample secret is not rendered.
- [x] Phone prefix defaults to `+98`, is configurable, appears at the physical left edge in RTL, and phone entry is LTR.
- [ ] OTP renders 4/5/6 cells and all three lengths were counted in the browser; typing, paste, Backspace and arrows were exercised at length 6, while per-length entry/focus and all error/disabled/success combinations remain open.
- [x] Textarea counter/max-length (179→180; next keystroke rejected), vertical resize, disabled/error and read-only behavior work; three-row heights are 103/108/120/128px across sizes.
- [ ] Number stepper/stacked layouts obey min/max/step through buttons and keyboard; default stepper and ArrowUp bounds (`98→99`) and stacked vertical layout with 48×48px buttons were checked, but remaining min/max/step combinations are open.
- [x] Persian amount entry `۱۲۳۴۵` rendered grouped `۱۲٬۳۴۵` and the matching Persian words; emitted model stays ungrouped by the input adapter.
- [x] Amount grouping preserves exact digits above `Number.MAX_SAFE_INTEGER`: `9007199254740993` displays `۹٬۰۰۷٬۱۹۹٬۲۵۴٬۷۴۰٬۹۹۳`; unsafe values do not receive misleading amount words.
- [x] Search clear emptied the field; Ctrl+K focused Search from a non-editable target and did not steal focus from another text input.
- [x] Each shared state was isolated in the mobile playground: Required exposes 8 required inputs; Error exposes 8 alerts and `aria-invalid` on 13 controls (the six OTP cells plus seven single controls); Disabled/Loading disable 16 controls/actions; Loading exposes 8 busy adapters and 8 indicators; Success appears on all eight adapters; Read-only makes all 13 value controls read-only and disables Number actions. Measured action targets are 48×48px; keyboard focus on the Password action has a 4px outline offset.
- [x] Lemon and Norato mobile top previews were visually reviewed at 390×844: Norato document is 375px wide, its bounded glass frame does not overflow, and the preview field is 48px high. Prior matched measurements recorded Lemon frame 327.2×300px/field 321.4×41px and Norato frame 320×288px; after the size refinement desktop field geometry is 50/52/56/60px outside and 62/64/68/72px inside. The current desktop viewport was 1280×720.
- [x] At all four mobile sizes, document width remained 375px; six OTP cells wrap at Large/XLarge without horizontal overflow, with cell sizes 48/52/56/60px. Textarea height increases monotonically (103/108/120/128px) and does not stretch to the gallery height.
- [x] Native number spinners are hidden where the dedicated stepper exists; mobile screenshot shows one pair of increment/decrement actions and ArrowUp still respects max (`98→99`).
- [ ] Complete supported state/size matrices remain open for all eight controls; selected RTL/LTR behavior and shared action focus were measured.
- [x] Independent screen-reader review was unavailable and remains explicitly open; AX tree checks were used for labels, roles, disabled controls and status text.
- [x] Latest `pnpm check:tokens`, `pnpm check:catalog` (49 entries), `pnpm --dir apps/vue build` (includes Vue TypeScript) and `git diff --check` pass. Current production JS chunk is 678.91KB; Vite warns that it exceeds 500KB.
- [ ] Request checklist, contract, catalog maturity and family ledger truthfully record remaining work.
- [x] Exact-integer Amount refinement `93f2507` is pushed; local `HEAD` and `origin/master` both resolve to `93f25072124a583750c425ffb2b7701679d8e7f2`. Earlier checkpoints `9e40131` and `663af1f` are historical.

## Remaining evidence

- Exhaustive state/size matrices and every focus target remain open; OTP lengths were rendered but per-length entry behavior has not been repeated; remaining Number min/max/step combinations, independent screen reader and final remote parity remain unverified. Keep family DoD open.
