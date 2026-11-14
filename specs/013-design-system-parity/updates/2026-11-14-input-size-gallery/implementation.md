# Implement — Input size gallery

## Implemented

- Added a dedicated four-card Input Sizes branch before the generic fallback in `ContractVisualShowcase.vue`; other families still use `.size-scale`.
- Each specimen is inert and hidden from the accessibility tree. The visible field is 36px high from `--norato-control-visual-height`, and its surrounding sample area is at least 48px from `--norato-control-target-min`.
- Styling uses existing semantic Norato font, surface, border, radius and spacing tokens; the gallery switches to two columns below 600px.
- The note distinguishes Norato's fixed 36px body from the four visual sizes documented by the reference.

## Validation status

- Local application is open at `http://127.0.0.1:5175/#component-input`. Matched 1265×713 screenshots show the local single dotted frame alongside the reference frame; the local frame uses a 176px semantic size-gallery token, while the visible field bodies remain 36px by contract. At 484×900, the four RTL samples wrap into two columns without visible horizontal clipping or stretch. The 390px/320px renders and exact computed rectangles remain open.
- `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build` and `git diff --check` pass. The current build output showed no chunk-size warning.
- The full Input DoD remains open, including independent screen-reader review and the complete adapter/state matrix.
