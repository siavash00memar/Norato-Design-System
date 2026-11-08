# Switch Matrix — Analyze

## Pre-implementation evidence

- `docs/component-contracts/switch.md` specifies 30 Switch variants (3 sizes × 2 values × 5 states) and 6 Switch Field variants (2 values × 3 states).
- `packages/vue/src/components.css` defines the real Switch target as 48×48px and track sizes through Norato tokens; the small, medium and large track dimensions are 32×20, 40×24 and 48×28px.
- The current shared `Variants` renderer draws generic shapes for Switch, while the live `NoratoSwitch` adapter is independently available in the implementation playground.
- The Switch DoD ledger records live hover/Space/Enter/error/disabled checks, but the full 30-cell matrix, focus-ring geometry and independent screen-reader review remain open.

## Decision

Create an inert matrix scoped to Switch Variants using exact token dimensions and RTL knob positions. Keep real behavior and accessibility claims tied to the adapter playground, not the artwork.
