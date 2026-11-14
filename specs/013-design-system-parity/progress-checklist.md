# Progress — Checklist / Definition of Done

- [x] Constitution → Specify → Clarify → Plan → Checklist → Tasks → Analyze → Implement documented in sequence.
- [x] `NoratoProgress`, export, catalog, usage, specimen, playground and Button-style page agree.
- [x] Legacy `.sample-progress` CSS removed/neutralized and error log updated.
- [x] design reference/Norato matched 1280×720 screenshots: design reference stage 636×300px with a 302.4×8.6px full-width track under metadata; Norato Button-style specimen 584×288px with a matched 304×8px track under metadata.
- [x] The 2026-11-10 desktop capture recorded 50% and the sample matched that capture. A fresh mobile reference capture on 2026-11-11 shows 60%; the inert specimen and playground defaults now match the current 60% value and Persian label while retaining Norato yellow.
- [x] All 120 variants render without stretched track, indicator or SVG; Norato tones use semantic palette.
- [x] All 120 variants verified in RTL and all 120 in LTR: linear fill begins at the corresponding inline-start edge; circular 25% arc begins at 12 o'clock; small circle omits its center label.
- [x] At Linear/Medium/Default, actual browser values 0/25/50/75/100 expose the matching progressbar values and Persian percentage presentation.
- [x] Progressbar label, min/max/current, Persian value text, role and DOM accessibility-tree exposure verified in both directions.
- [x] Out-of-range -10/120 clamp to 0/100, and fractional 42.6 rounds to 43 with matching visual and ARIA values.
- [x] 390/320 viewport has no document overflow; specimen track scales with available width without stretching vertically.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck/build and `git diff --check` pass.
- [ ] Screen-reader review is independent; do not close DoD without all required browser evidence.

## Sizes and States gallery — 2026-11-14

- [x] Sizes renders only Progress-specific intrinsic samples: semantic 4/8/12px linear thickness and 24/32/40px ring diameters; generic multicolor rulers are absent.
- [x] States renders yellow RTL Determinate and Default, tokenized Success/Warning/Danger, and explanatory unsupported Indeterminate; generic blue pill/dot is absent.
- [x] Current 305px local browser screenshot shows no visible narrow clipping/stretch. Matched desktop recapture and exact overflow metrics remain open; independent screen-reader and full 120-state evidence remain open.
- [x] Token integrity, 49-route catalog, Vue typecheck/build and `git diff --check` pass for this gallery change; production build completes with its existing bundle-size advisory.

## Current matched mobile comparison — 2026-11-11

- [x] At 390px, the local/reference specimen frames both measure 327.2×300px at x=24px, with 375px document widths. Local linear track is 304×8px against reference 302.4×8.64px; the sub-2px difference preserves the Norato 8px semantic token and is not visibly stretched.
- [x] At 320px, both frames measure 256.8×300px at x=24px. The local document is 305px with no overflow; the reference document is 326px because its surrounding header content scrolls horizontally, while its specimen remains bounded.
- [x] Current reference specimen shows 60% and «در حال آپلود». Norato inert and live defaults now show 60%, preserve RTL value/label placement, and use Norato yellow. Live progressbar exposes aria-valuenow=60.
- [x] Mobile playground tone selection worked by keyboard (Default → Success) and pointer (Success → Default); final value 60, tone Default and direction RTL were restored.
- [ ] Independent screen-reader review remains open for Final DoD.
