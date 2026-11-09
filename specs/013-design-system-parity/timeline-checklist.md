# Timeline — Checklist / Definition of Done

## Contract and structure
- [x] Eight workflow stages recorded in order.
- [x] Public component types, exports, examples, catalog, and contract agree.
- [x] Button page structure and nine contract sections are present; preview is inert.
- [x] Existing placeholder/legacy selectors are audited and replaced; semantic tokens are used.

## Visual and responsive
- [x] Matched 1907×907 browser captures compared the four-event specimen, RTL rail, event spacing, marker states, and palette. Timestamps now sit under titles, matching the reference hierarchy; the active marker remains Norato yellow/neutral. The local preview frame is still narrower/shorter (about 580×288px vs 630×326px), so frame geometry remains a known difference.
- [x] Browser reports 9 Timeline Item, 15 Marker, and 2 Feed cases (26 total). Screenshots and bounding-box checks at 390px and 320px show no clipping, stretch, marker/title overlap, or horizontal document overflow; closest marker-to-title clearance is 16px.
- [x] RTL/LTR rail placement and first/middle/last connectors are verified in the browser at 390px and 320px; rail and content positions switch correctly and remain within the viewport.
- [x] Avatar marker stays circular and preserves its source aspect ratio; icon markers keep fixed square bounds.

## Behavior and accessibility
- [x] Passed item array order is preserved; first/middle/last rail segments terminate correctly.
- [x] All five tones have non-color status cues or text; Active is recognizable by elevated neutral marker.
- [x] Semantic ordered list, item title/time, description, and group names appear correctly in browser AX.
- [x] Static preview has no focusable descendants; playground controls support keyboard and visible focus.
- [ ] Independent screen-reader review is recorded; browser AX does not substitute for it.

## Engineering and delivery
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck/build, and `git diff --check` pass for the responsive spacing fix.
- [x] Evidence and unresolved gates are recorded in request checklist and error log.
- [ ] Verified checkpoint is pushed and remote sync is confirmed.
