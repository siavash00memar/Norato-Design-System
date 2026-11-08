# Spinner — Checklist / Definition of Done

## Specification quality
- [x] Reference, supported variants, semantics, RTL, palette and responsive expectations are explicit.
- [x] Public props/defaults and Loader overlay/page behavior are explicit; no unresolved decision remains.
- [x] Accessibility and reduced-motion expectations are explicit.

## Delivery DoD
- [x] Both Vue adapters, exports, catalog entries, usage and contracts agree.
- [x] Button-style page structure and inert dotted specimen are present; interactive controls live in a separate playground.
- [x] Legacy spinner presentation rules removed or neutralized.
- [x] All 45 Spinner combinations render at intrinsic geometry with semantic Norato tones; all four Loader modes and active/inactive behavior are verified.
- [x] RTL/LTR direction and live status semantics are verified. The system's reduced-motion preference was active in the browser; ring and dots stop animating while remaining visible.
- [x] Same-viewport desktop screenshot against Lemon was reviewed; the visible arc is about 41px against Lemon's roughly 40px ring and retains Norato yellow.
- [ ] 390px/320px layout and independent screen-reader review remain unverified.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck/build and `git diff --check` pass.
- [x] `docs/request-validation-checklist.md` contains actual browser evidence and remaining gaps.
- [ ] GitHub checkpoint pushed and local/remote state verified.
