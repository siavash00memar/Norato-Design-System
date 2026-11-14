# Specify — Input size gallery

## Problem

The Input Sizes section currently falls through to the shared generic scale, which renders seven circles with unrelated visual and target dimensions. The current reference Sizes section instead shows four Input-shaped capsules. This does not communicate the approved 36px visible Input body or the minimum target size clearly.

## Acceptance contract

- Render four Input-specific samples for Small, Medium, Large and XLarge in the Sizes section.
- Each sample is an inert RTL capsule with a 36px visible body inside a target of at least 48px.
- Keep the neutral default stroke and Norato palette. Do not invent varying body heights that contradict the approved 36px Input rule.
- State the 36px body / 48px minimum-target contract in the gallery and retain the reference's 32/40/48/56px scale as a documented visual difference, not as Norato runtime dimensions.
- Preserve all other component size galleries and the live Input API/playground.
- Validate the local browser rendering, RTL, target geometry, mobile wrapping, reference comparison, required repo gates, and document exact remaining coverage.
