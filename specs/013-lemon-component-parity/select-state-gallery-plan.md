# Select State Gallery — Plan

## Constitution

Recorded in `select-state-gallery-constitution.md`: preserve runtime and global renderers; follow the project workflow and Norato invariants.

## Specify

Recorded in `select-state-gallery-spec.md`: Lemon-like title/description cards for Select states, all states retained, Persian explanations and semantic palette.

## Clarify

Recorded in `select-state-gallery-clarify.md`: actual Lemon States DOM, component-only scope, state accents, family labels, and inert behavior.

## Implementation plan

1. Audit the shared state-gallery markup and CSS and record the exact Select-specific conflict.
2. Add a Select-only state description mapping and render a text card per current contract entry; retain the generic rendering for all other components.
3. Apply deliberate scoped card styles using existing semantic tokens; do not introduce raw values or change the executable playground.
4. Inspect desktop and mobile browser render next to Lemon at equal viewport sizes; verify all entries, RTL, no overflow, and no card/control distortion.
5. Run token/catalog/TypeScript/build/diff gates and record the true DoD status.

## Risk

The Select contract expands one base state record into multiple derived entries. Verify generated labels/descriptions remain paired with the correct family and do not drop any states.
