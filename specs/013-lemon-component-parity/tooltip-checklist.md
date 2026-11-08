# Tooltip — Checklist / Definition of Done

- [x] Required eight-stage workflow recorded in exact order.
- [x] Reka API, trigger description, keyboard focus opening, Escape dismissal and focus ring verified; hover delay and collision edge cases remain open.
- [x] API/export/catalog/specimen/playground/usage/contract align; page matches Button structure.
- [x] Legacy `.sample-tooltip` selectors are removed; recurring conflicts are logged.
- [x] At 1270×720, compared Lemon and Norato preview frames; both are about 576×288px. Compact dark tooltip, RTL arrow and icon trigger match Lemon's default composition.
- [ ] All 16 surface/layout/placement combinations display without stretch or clipping; RTL/arrow placement is correct.
- [ ] Pointer hover delay, all placements and 2px yellow keyboard focus/Escape are verified; keyboard focus and Escape passed, pointer delay/placement matrix remain open.
- [ ] 390px and 320px viewports have no document overflow; collision flip is verified.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck/build and `git diff --check` pass.
- [ ] Screen reader semantics independently reviewed; keep DoD open if any evidence is missing.
