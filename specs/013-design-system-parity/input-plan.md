# Input — Implementation Plan

## Passed gates

- Constitution: the family constitution and Norato v1.2.0 were reviewed.
- Specify: eight independent runtime adapters are selected by the user; `NoratoField` compatibility and current `NoratoTextarea` export are preserved.
- Clarify: defaults and interaction contracts are recorded in `input-clarify.md`.

## Sequence

1. Audit all existing field styles, Vue adapters, tokens, exports, catalog readiness, usage examples and the design reference Input family; remove/neutralize legacy selectors before style work.
2. Define the shared accessible field shell used by the adapters without changing the `NoratoField` public contract.
3. Implement and export `NoratoTextInput`, `NoratoPasswordInput`, `NoratoPhoneInput`, `NoratoOtpInput`, `NoratoNumberInput`, `NoratoAmountInput`, and `NoratoSearchInput`; extend existing `NoratoTextarea` without breaking it.
4. Add focused tokenized styles and intrinsic sizing per control. Keep minimum target sizes 48px, prevent vertical stretching, and preserve RTL with LTR entry for phone, number, amount and OTP.
5. Upgrade Input's page galleries from generic mock cards to eight accurate family-specific specimens, and extend its real playground to exercise each adapter. Clearly distinguish inert visual-only state matrices from live controls.
6. Add reviewed Vue usage examples and update package exports, component catalog/primitive map if readiness metadata requires it, contracts, design rules and family evidence.
7. In the actual browser, review every family's visual states, keyboard behavior, focus, disabled/loading/error/read-only semantics, ARIA associations, target sizes, RTL/LTR, desktop/mobile bounds and equal-viewport design reference comparison. Independently inspect a screen reader when available.
8. Run token, catalog, Vue typecheck, production build and diff gates; resolve regressions; update request checklist and push all changes to GitHub.
9. After visual audit, style Input's 41 inert family-state cards as compact controls and state descriptions. Match design reference's two-column card rhythm at 390px, use Norato tokens, show success/error clearly and keep state specimens inert. Re-run browser render review and all technical gates.
10. Number validation refinement: expose adjustable `min`/`max`/`step` in the playground and generated snippet; normalize decimal step arithmetic; browser-check range, decimal stepping, keyboard behavior and disabled bounds before updating the Input DoD.
11. Combined-state follow-up: enforce Error > Success and Loading > Success consistently in the shared shell, OTP and Textarea; preserve Error alongside Loading; ensure ARIA description IDs refer only to visible/rendered messages. Browser-check Error+Success, Error+Disabled and Success+Loading, then confirm Success appears again after Loading ends. Keep disabled strokes neutral, status copy available, and verify hover/focus stroke is a single yellow capsule without wrapper border duplication.

## Constraints

- Vue 3 only. Preserve generic `NoratoField` and `NoratoTextarea` API compatibility.
- Use native input semantics and Norato semantic tokens; do not infer a production feature from design reference artwork.
- Password strength is caller-controlled. Phone uses a configurable prefix without a country picker. Amount defaults to Toman but supports another unit.
- Currency display and amount serialization remain separate: display may group digits; emitted value is canonical numeric text.
- OTP remains controlled and does not auto-submit.
- Keep all interactive targets at least 48×48px even where visual control size is smaller.
