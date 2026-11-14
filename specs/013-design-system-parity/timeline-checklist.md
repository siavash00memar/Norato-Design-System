# Timeline — Checklist / Definition of Done

## Contract and structure
- [x] Eight workflow stages recorded in order.
- [x] Public component types, exports, examples, catalog, and contract agree.
- [x] Button page structure and nine contract sections are present; preview is inert.
- [x] Existing placeholder/legacy selectors are audited and replaced; semantic tokens are used.

## Visual and responsive
- [x] Fresh matched 1265×713 browser comparison: the local frame is 635.98×328px and reference is 636×327.5px. The frame begins 17.5px farther left because the local documentation columns differ; relative to each frame, the first dot is 452.6px from local left and 453px from reference left. The inner timeline is 312×239.19px vs 302.4×239.22px; row height is 59.80px vs 59.805px, and marker top offset is 50.41px vs 50.62px. Norato retains its yellow active state and semantic success/neutral tones.
- [x] At 390×844, local/reference frames are both 327×311.5px at x=24px. Local event rows are 59.39px vs 59.805px; success marker x is 322.11px vs 322.5px, and marker top offset from frame is 42.97px vs 42.62px. At 320×844, frames are both 257×311.5px at x=24px; local/reference documents are 305/305 and 305/326px respectively, with local no-overflow and marker x 258.61px vs 258.88px. No clipping, stretch, or marker/title overlap was observed.
- [x] Browser reports 9 Timeline Item, 15 Marker, and 2 Feed cases (26 total). The rendered marker set preserves 10.8px dots, 12.96px active dots, and 32px icon/avatar squares. RTL rail and content positions switch as expected; primary behavior evidence remains recorded below.
- [x] RTL/LTR rail placement and first/middle/last connectors are verified in the browser at 390px and 320px; rail and content positions switch correctly and remain within the viewport.
- [x] Avatar marker stays circular and preserves its source aspect ratio; icon markers keep fixed square bounds.

## Behavior and accessibility
- [x] Passed item array order is preserved; first/middle/last rail segments terminate correctly.
- [x] All five tones have non-color status cues or text; Active is recognizable by elevated neutral marker.
- [x] Semantic ordered list, item title/time, description, and group names appear correctly in browser AX.
- [x] Static preview has no focusable descendants; playground controls support keyboard and visible focus.
- [ ] Independent screen-reader review is recorded; browser AX does not substitute for it.

## Engineering and delivery
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck, production build, and `git diff --check` pass for the 2026-11-14 specimen update.
- [x] Evidence and unresolved gates are recorded in request checklist and error log.
- [x] Verified checkpoint `37565c0547c5cf834119dd06821583c9fc158ac8` is pushed; `git ls-remote` confirms the remote branch has the same hash.
