# Timeline — Checklist / Definition of Done

## Contract and structure
- [x] Eight workflow stages recorded in order.
- [x] Public component types, exports, examples, catalog, and contract agree.
- [x] Button page structure and nine contract sections are present; preview is inert.
- [x] Existing placeholder/legacy selectors are audited and replaced; semantic tokens are used.

## Visual and responsive
- [ ] Matched design reference/Norato captures compare the rail, event spacing, markers, layouts, and feed density while retaining Norato's yellow/neutral palette.
- [ ] All 26 variants render without stretch, overlap errors, or clipping.
- [x] RTL/LTR rail placement and first/middle/last connectors are verified in the browser; exact narrow widths remain open.
- [x] Avatar marker stays circular and preserves its source aspect ratio; icon markers keep fixed square bounds.

## Behavior and accessibility
- [x] Passed item array order is preserved; first/middle/last rail segments terminate correctly.
- [x] All five tones have non-color status cues or text; Active is recognizable by elevated neutral marker.
- [x] Semantic ordered list, item title/time, description, and group names appear correctly in browser AX.
- [x] Static preview has no focusable descendants; playground controls support keyboard and visible focus.
- [ ] Independent screen-reader review is recorded; browser AX does not substitute for it.

## Engineering and delivery
- [ ] Token/catalog checks, Vue typecheck/build, and `git diff --check` pass.
- [ ] Evidence and unresolved gates are recorded in request checklist and error log.
- [ ] Verified checkpoint is pushed and remote sync is confirmed.
