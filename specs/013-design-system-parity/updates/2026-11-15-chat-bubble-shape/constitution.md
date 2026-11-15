# Constitution — Chat bubble typography and radius

## Scope

Align the Chat message specimen and runtime bubble shape/typography with the measured reference while preserving Norato palette and component contracts.

## Invariants

- Incoming stays on the RTL right; outgoing stays on the left and uses Norato yellow.
- Use semantic typography and radius tokens; do not add raw page-local styles.
- Keep bubble width intrinsic and bounded, preserve text wrapping and sender corner treatment.
- Keep 48px targets and all existing Vue behavior and accessibility relationships.
- Compare matched browser renders; run required project checks.
- No hosting deployment is part of this change.
