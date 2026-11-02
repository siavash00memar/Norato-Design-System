# Input Radius — Definition of Done

- [x] The eight subtype specimens and all 41 Input state field shells are compact rounded rectangles at 12px, not capsules.
- [x] OTP cells in the visual gallery and live adapter use the same 12px field radius.
- [x] Other component radii and Input API are untouched; RTL is confirmed. Focus, invalid, disabled, loading and mobile were not re-exercised in this request.
- [x] Browser-computed styles and screenshot confirm the Input page against the Lemon 12px field reference; no horizontal overflow at the 1280px browser viewport.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck/build and `git diff --check` pass. Production JS chunk advisory: 813.05KB.
- [x] Input contract, Figma rule, request checklist, error log and family evidence are updated. Change is pushed to GitHub as `28c12ce`.
