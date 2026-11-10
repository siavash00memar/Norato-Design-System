# Input Radius — Definition of Done

- [x] Runtime Input shells and OTP cells use the semantic `--norato-radius-pill` token.
- [x] Eight subtype specimens and all 41 state fields use the same capsule treatment.
- [x] Other component radii and the Input API are untouched; RTL is intact.
- [x] Browser-computed styles show 50px pill token on live adapter fields, OTP cells, specimens and state fields. Document width is 1265px in a 1280px viewport, with no horizontal overflow.
- [x] Browser keyboard-focus review shows the Norato yellow focus stroke on the capsule field; with the shared error state enabled, the focus stroke remains yellow and the error message remains visible. Error fixture was restored afterward.
- [x] Mobile top-specimen geometry is verified at 390×844 and 320×844: the 36px email capsule stays centered inside its 48px target, keeps RTL title/icon and placeholder placement, and the document has no horizontal overflow. This evidence covers the top specimen only; it does not establish every runtime adapter's mobile radius.
- [ ] Full mobile verification across all eight adapters and 41 state specimens remains open. The combined-state review covers keyboard focus + error only; the complete combined-state sequence is also open.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, and `git diff --check` passed for the original shape change. Build reported the existing 813.07KB JS chunk advisory.
- [x] Input contract, Figma rule and error log were updated for the shape change. This browser follow-up adds evidence to this checklist and the request checklist.
