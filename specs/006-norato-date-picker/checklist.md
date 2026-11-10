# Date Picker Specification Checklist

- [x] User outcome: select Jalali dates with all seven design reference modes.
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
- [x] Seven-mode behavior and visual DoD pass in implementation. Fresh same-viewport design reference/Norato browser comparison, RTL, interaction, keyboard, status, and responsive evidence is recorded in `docs/request-validation-checklist.md`.
- [x] Token, catalog, TypeScript, production build, and whitespace checks pass after implementation; current gate output is recorded in `docs/request-validation-checklist.md`.

## Shared preview stage follow-up — 2026-11-10

- [x] Inert specimen now uses the shared Button preview frame and transparent inner calendar backdrop; local desktop render visually checked against the same-window reference.
- [x] Measured 628×300px at 1280×720, 327×300px at 390×844, and 257×300px at 320×844 vs reference 628×300, 327×300, and 256.8×300. RTL, 24px mobile inset, and zero horizontal document overflow verified.
