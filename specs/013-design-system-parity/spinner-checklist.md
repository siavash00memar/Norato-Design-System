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
- [x] Same-viewport desktop screenshot against design reference was reviewed; the visible arc is about 41px against design reference's roughly 40px ring and retains Norato yellow.
- [x] Responsive layout checked at 390px and 320px browser viewport widths: local specimen frames measured 327.2×300px and 256.8×300px respectively, centered at x=24px; document widths stayed within both viewports and match the recorded reference frames.
- [ ] Independent screen-reader review remains unverified.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck/build and `git diff --check` pass.
- [x] `docs/request-validation-checklist.md` contains actual browser evidence and remaining gaps.
- [x] GitHub checkpoint `6a7cfc3` pushed to `origin/master`; local worktree was clean after push.

## Spinner mobile specimen width follow-up — 2026-11-11

- [x] Fresh local browser render at 390px viewport measured the Button-style inert sample at 327.2×300px, x=24px; document client/scroll widths are both 375px.
- [x] The matched reference measurement recorded earlier is 327.2×300px at the same viewport; sample width and left position now align, with the 48px spinner remaining intrinsically square.
- [x] Scoped a mobile-only 16px inset to the Spinner sample using the existing shared frame token; desktop and executable playground geometry are unaffected.
- [x] Fresh local browser render at 320px measured the sample frame at 256.8×300px, x=24px; document client/scroll widths are both 305px. The prior matched reference measurement at 320px is 256.8×300px.
- [x] At 390px, the four select-like controls keep a 36px visible capsule while playground-select-targets.css expands the pointer hit area by 7px on each block side (50px total). CSSOM confirms RTL. Pointer selection and keyboard Enter selection both changed Ring to Dots; state was restored to Ring. The inert spinner remains a 48×48px square.
