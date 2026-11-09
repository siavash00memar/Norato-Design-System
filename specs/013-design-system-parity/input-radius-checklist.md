# Input Radius — Definition of Done

- [x] Runtime Input shells and OTP cells use the semantic `--norato-radius-pill` token.
- [x] Eight subtype specimens and all 41 state fields use the same capsule treatment.
- [x] Other component radii and the Input API are untouched; RTL is intact.
- [x] Browser-computed styles show 50px pill token on live adapter fields, OTP cells, specimens and state fields. Document width is 1265px in a 1280px viewport, with no horizontal overflow.
- [x] Browser keyboard-focus review shows the Norato yellow focus stroke on the capsule field; with the shared error state enabled, the focus stroke remains yellow and the error message remains visible. Error fixture was restored afterward.
- [ ] Mobile viewport verification remains open. A combined state was checked only for keyboard focus + error; the complete combined-state sequence is still open.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, and `git diff --check` passed for the original shape change. Build reported the existing 813.07KB JS chunk advisory.
- [x] Input contract, Figma rule and error log were updated for the shape change. This browser follow-up adds evidence to this checklist and the request checklist.
