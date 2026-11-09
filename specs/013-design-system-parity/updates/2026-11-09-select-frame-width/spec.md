# Select preview frame width — Specification

## Goal
Align the desktop Select preview frame with the measured 636px reference frame while preserving its current 300px height and mobile clamp.

## Acceptance criteria
- At a matched desktop viewport, the rendered Select frame width is within 1px of the reference and height remains 300px.
- The correction applies only to the non-compact top Select specimen.
- The existing mobile width rule remains in place; 390px and 320px viewports show no horizontal overflow.
- Token, catalog, TypeScript, build and diff checks pass.

## Out of scope
No changes to trigger width, menu design, runtime interaction, public API, page typography, or other components.
