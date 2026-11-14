# Input Radius — Definition of Done

- [x] Runtime Input shells and OTP cells use the semantic `--norato-radius-pill` token.
- [x] Eight subtype specimens and all 41 state fields use the same capsule treatment.
- [x] Other component radii and the Input API are untouched; RTL is intact.
- [x] Browser-computed styles show 50px pill token on live adapter fields, OTP cells, specimens and state fields. Document width is 1265px in a 1280px viewport, with no horizontal overflow.
- [x] Browser keyboard-focus review shows the Norato yellow focus stroke on the capsule field; with the shared error state enabled, the focus stroke remains yellow and the error message remains visible. Error fixture was restored afterward.
- [x] Mobile top-specimen geometry is verified at 390×844 and 320×844: the 36px email capsule stays centered inside its 48px target, keeps RTL title/icon and placeholder placement, and the document has no horizontal overflow. This evidence covers the top specimen only; it does not establish every runtime adapter's mobile radius.
- [x] Mobile geometry/radius pass at 390×844 and 320×844 across all eight live adapters at Small/Medium/Large/XLarge; the 41 inert state specimens were measured separately at their fixed gallery size. The 13 runtime fields stay inside the 375px/305px document; field shells and state capsules keep a 50px radius, state capsules remain 36px high, and OTP targets measure 48/52/56/60px.
- [x] Documented combined-state priority sequence verified at 320px: Error → Error+Disabled → Error+Disabled+Loading+Success. All adapters retain invalid messaging/ARIA; disabled controls use the neutral #e8e8e8 stroke; loading exposes busy/status and keeps controls disabled; Success stays hidden when Error/Loading is present. Input/OTP capsule shells remain 50px. Playground was restored to Medium, enabled, no error/loading/success, and the viewport override was reset.
- [ ] Full pixel-level reference screenshots for every per-adapter state combination and independent screen-reader review remain open; these mobile geometry and combined-priority checks do not close them.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, and `git diff --check` passed for the original shape change. Build reported the existing 813.07KB JS chunk advisory.
- [x] Input contract, Figma rule and error log were updated for the shape change. This browser follow-up adds evidence to this checklist and the request checklist.
