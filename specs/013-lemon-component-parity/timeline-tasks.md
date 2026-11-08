# Timeline — Tasks

- [x] Constitution: record RTL, semantic event order, Norato palette, accessibility, and 26-variant scope.
- [x] Specify: settle component family, types, API, variants, and Button page requirements.
- [x] Clarify: record order, overflow, active marker, icon, and activity grouping decisions.
- [x] Plan: record implementation sequence and material risks.
- [x] Checklist: define the DoD before implementation.
- [x] Tasks: break implementation into verifiable adapter/page/documentation/QA tasks.
- [x] Analyze: audit existing source and selectors; record findings.
- [x] Implement core adapters, specimen, playground, exports, catalog, and contracts; browser-reviewed within available viewport.
- [ ] Finish DoD: matched Lemon viewport, exact 390/320 responsive checks, independent screen-reader review; record limits, then push checkpoint.

## Implementation tasks
- [x] Add typed Vue 3 public APIs for timeline events, semantic ordered list, individual items, markers, and explicitly grouped activity feed.
- [x] Add marker tones and icon/avatar fallbacks with intrinsic square/circle geometry; ensure active uses neutral elevation plus yellow, with non-color cues.
- [x] Replace the literal-bar inventory specimen with an inert ordered timeline and remove the obsolete `.sample-timeline` selector after auditing its use.
- [x] Add a dedicated live playground exposing layout, direction, item positions, all marker type/tone pairs, and activity density; preserve array order and host group boundaries.
- [x] Wire exports, usage example, catalog status, contract, and Figma component rules to the implementation.
- [x] Run token/catalog checks, Vue typecheck/build, and `git diff --check`; inspect all 26 variants, RTL/LTR, keyboard/AX. Matched Lemon viewport and exact responsive widths remain open.
- [x] Record browser evidence and independent screen-reader limitation in the request checklist and error log.
- [ ] Finish matched-viewport visual comparison, exact responsive measurements, and independent screen-reader review; then close DoD.
- [ ] Commit and push verified checkpoint to `origin/master`.
