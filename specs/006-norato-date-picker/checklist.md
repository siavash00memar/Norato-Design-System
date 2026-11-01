# Date Picker Specification Checklist

- [x] User outcome: select Jalali dates with all seven Lemon modes.
- [x] Scope: single, range, range presets, date-time, month, year, and wheel are named explicitly.
- [x] Active user instruction takes precedence over the older single-date-only draft; the rationale is recorded in `spec.md`.
- [x] RTL weekday order, RTL range month placement, Persian content, semantic Norato colors, and Vazirmatn input type are specified.
- [x] Keyboard, focus, disabled, loading, invalid, holiday, today, outside-month, and range states are addressed.
- [x] Small/Medium calendar visual sizes remain independent of 48px minimum interactive targets.
- [x] Holiday dates have a defined source: optional consumer-provided Jalali values. Fridays are intrinsic.
- [x] Date-time has explicit local wall-clock semantics; no unrequested time-zone conversion.
- [x] Mobile Wheel and responsive calendar behavior are in scope.
- [x] Adapter API is controlled and Vue 3-only for product behavior.
- [x] Verification requirements are measurable and include real browser render plus technical gates.
- [ ] Seven-mode behavior and visual DoD pass in implementation.
- [ ] Token, catalog, TypeScript, production build, and whitespace checks pass after implementation.
