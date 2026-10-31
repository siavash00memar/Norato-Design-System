# Split Button — clarification gate

- User's visual source is Lemon; color source is Norato. The observed Lemon dark button is intentionally mapped to Norato yellow Primary.
- The existing Norato contract defines RTL arrow position, four anatomy parts, separate Tab stops and open/disabled/focus states. It does not define a Vue API. Use a small `label`, `items`, `variant`, `disabled`, `loading` API with `primary-action` and `select` events; the usage example must match the implemented API.
- The status remains Proposed until both split and dropdown-only modes, keyboard/menu behavior, the page example, and the required DoD checks are complete.
- There is no user decision needed to correct the current disconnected pill silhouette or to implement the contract's already documented interaction.
- Size decision for the existing Lemon/Norato conflict: `size` accepts `small | medium | large | xlarge`. Keep native clickable regions at least 48px; the 32/40px visual capsule is centered inside them. This preserves the visual reference and the project's non-negotiable target rule without overlapping hit areas.
