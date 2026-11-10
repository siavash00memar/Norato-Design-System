# Select State Gallery — Checklist

- [x] design reference states cards match title + description structure; no generic pill graphic.
- [x] All 18 generated Select/Multi Select/Select Option states are present and have accurate Persian descriptions.
- [x] Error, disabled, selected/open, focus and default accents use Norato semantic tokens.
- [x] Static state cards remain inert and do not masquerade as runtime fields.
- [x] At 390×844, the pre-correction mobile gallery measured 343px at x=16 with 167.5px cards; the matched reference measured 327px at x=24 with 158.5px cards. This mismatch is corrected and rechecked in `updates/2026-11-10-select-state-gallery-mobile-parity/`.
- [x] At 320×844, both the corrected Norato gallery and reference measure 257px at x=24 and reflow to one column; Norato document width is 305px with no horizontal overflow. HTML direction remains RTL.
- [ ] Desktop gallery comparison remains open: the previous parent columns were 584px locally versus 636px in the reference, so the card-size difference is not a matched-container comparison. Independent screen-reader review also remains open.
- [x] Token/catalog/TypeScript/build/diff gates pass; the final render evidence and limitations are recorded in `docs/request-validation-checklist.md`.
- [x] Commit `bb99f4d` is pushed to GitHub and `origin/master` matches the local revision.
- [x] Follow-up 2026-11-09: Focus accent now uses the shared high-contrast dark amber outline with the Norato-yellow ring; the Select Focus card no longer shows a blue marker. The full pixel-level state comparison and independent screen-reader evidence are still open.
