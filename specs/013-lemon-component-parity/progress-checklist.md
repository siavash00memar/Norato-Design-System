# Progress — Checklist / Definition of Done

- [x] Constitution → Specify → Clarify → Plan → Checklist → Tasks → Analyze → Implement documented in sequence.
- [x] `NoratoProgress`, export, catalog, usage, specimen, playground and Button-style page agree.
- [x] Legacy `.sample-progress` CSS removed/neutralized and error log updated.
- [x] Lemon/Norato matched 1280×720 screenshots: Lemon stage 636×300px with a 302.4×8.6px full-width track under metadata; Norato Button-style specimen 584×288px with a matched 304×8px track under metadata.
- [x] All 120 variants render without stretched track, indicator or SVG; Norato tones use semantic palette.
- [x] All 120 variants verified in RTL and all 120 in LTR: linear fill begins at the corresponding inline-start edge; circular 25% arc begins at 12 o'clock; small circle omits its center label.
- [x] At Linear/Medium/Default, actual browser values 0/25/50/75/100 expose the matching progressbar values and Persian percentage presentation.
- [x] Progressbar label, min/max/current, Persian value text, role and DOM accessibility-tree exposure verified in both directions.
- [x] Out-of-range -10/120 clamp to 0/100, and fractional 42.6 rounds to 43 with matching visual and ARIA values.
- [x] 390/320 viewport has no document overflow; specimen track scales with available width without stretching vertically.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck/build and `git diff --check` pass.
- [ ] Screen-reader review is independent; do not close DoD without all required browser evidence.
