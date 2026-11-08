# Input Hover Stroke — Specification

## Scope
Correct pointer-hover stroke behavior for all shared `NoratoInputField` adapters, including invalid fields and the Input specimen. Preserve current resting, focus, success/error messaging, sizing, and RTL behavior.

## Acceptance contract
- Default stroke remains one 1px `#E8E8E8` capsule.
- Hover on any enabled field makes that same capsule stroke Norato yellow.
- Invalid state does not suppress the yellow hover stroke; after pointer leave its error stroke returns.
- Disabled fields remain neutral and do not react to hover.
- No additional outline, ring, or shadow appears.
