# Radio Matrix — Analyze

## Evidence

- The current `Variants` branch in `ContractVisualShowcase.vue` renders a generic three-shape placeholder for Radio, while the contract describes 20 actual state/size/checked combinations.
- Existing Radio CSS and adapter expose the real ring/dot geometry, semantic hover/error colors and 16px/20px diameters; interactive focus is `:focus-visible` with Norato focus tokens.
- The live Radio group is separately rendered in the Vue playground with real keyboard and form semantics. Static documentation must not masquerade as the executable adapter.
- The family ledger still has Radio DoD open for the complete 20-cell focus/hover visual matrix and independent screen-reader review.

## Decision

Build a dedicated inert gallery from the documented 20 combinations, reuse existing semantic tokens and leave the runtime API untouched. Validate visuals in the browser and retain the independent screen-reader limitation explicitly.
