# Rating — DoD checklist

- [x] design reference and Norato Rating pages compared at desktop and mobile (390×844 and 1280×900).
- [x] One compact top specimen matches design reference hierarchy/order: Default marker, four full + one empty star, Persian value and count.
- [x] Read-only values 0–5 from design reference's variant set render correctly; all three sizes keep stars proportional (24 combinations checked).
- [x] Input offers five integer choices, controlled update, helper label, hover/selected/disabled/focus; each target is at least 48px.
- [x] Reka radio keyboard behavior, Button-matched 2px focus ring, actual disabled state, role/name/checked value and helper association are verified in browser AX/DOM.
- [x] RTL ordering and half-star physical-right gradient are visually and DOM verified.
- [x] Summary shows mean/count and 5→1 distribution with derived bar ratios and accessible progress names/values.
- [x] Page has the Button structure, runnable playground, nine contract sections and copy controls.
- [x] Contract, Figma rules, catalog, usage, tasks, request checklist and error log reflect the reviewed implementation.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck, Vue build and `git diff --check` pass after final edits.
- [ ] Independent screen-reader review is not recorded; browser AX inspection is not a substitute. Keep the family DoD open until that review is completed and documented.
