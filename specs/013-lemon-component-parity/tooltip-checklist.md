# Tooltip — Checklist / Definition of Done

- [x] Required eight-stage workflow recorded in exact order.
- [x] Reka API, trigger description, keyboard focus opening, Escape dismissal and focus ring verified; hover delay and collision edge cases remain open.
- [x] API/export/catalog/specimen/playground/usage/contract align; page matches Button structure.
- [x] Legacy `.sample-tooltip` selectors are removed; recurring conflicts are logged.
- [x] At 1265×720, Lemon (about 628×294px) and Norato (about 578×286px) frames were compared. Default dark/simple/top composition, dotted frame and RTL trigger/arrow align; frame widths differ and are recorded as a visual delta.
- [x] All 16 surface/layout/placement combinations rendered within viewport without stretch/clipping; RTL and arrow orientation verified. Rich Top naturally flips to Bottom when there is insufficient space.
- [ ] Pointer hover delay remains unverified because the browser control cannot sustain pointer hover. Keyboard focus opens Tooltip, Escape closes it while retaining focus, and the 2px yellow outer ring was verified; independent screen-reader review remains open.
- [x] At 390px and 320px, no horizontal document overflow; all measured Tooltip bubbles and 48px targets remained in viewport. At 320px, Rich Right collision flips to Left and stays visible.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck/build and `git diff --check` pass.
- [ ] Screen reader semantics independently reviewed; keep DoD open if any evidence is missing.
