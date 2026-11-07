# Radio Matrix — Analyze

## Evidence

- The current `Variants` branch in `ContractVisualShowcase.vue` renders a generic three-shape placeholder for Radio, while the contract describes 20 actual state/size/checked combinations.
- Existing Radio CSS and adapter expose the real ring/dot geometry, semantic hover/error colors and 16px/20px diameters; interactive focus is `:focus-visible` with Norato focus tokens.
- The live Radio group is separately rendered in the Vue playground with real keyboard and form semantics. Static documentation must not masquerade as the executable adapter.
- The family ledger still has Radio DoD open for the complete 20-cell focus/hover visual matrix and independent screen-reader review.
- Current 390×844 evidence closes the mobile geometry question: Norato's five state cards are each 343×162.2px, the matrix is 886.9px high, the document remains 375px with no overflow, and Lemon's gallery plus property selector totals 924px at 327px width. The static matrix is not vertically stretched and fits the same content depth.
- A palette audit found the static matrix still uses blue for the checked dot and hover border, while the explicit active Norato rule reserves yellow for primary selected/active states and the runtime Radio adapter already uses yellow for both. This is a source mismatch to correct before marking the specimen consistent.

## Decision

Build a dedicated inert gallery from the documented 20 combinations, reuse existing semantic tokens and leave the runtime API untouched. Validate visuals in the browser and retain the independent screen-reader limitation explicitly.
