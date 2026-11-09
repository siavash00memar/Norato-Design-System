# Combobox preview frame width — Specification

## Goal
Match the desktop Combobox specimen frame to the measured 636px reference while retaining the current 300px height and 324px field.

## Acceptance criteria
- Same-viewport desktop comparison shows frame width within 1px of the 636px reference and unchanged 300px height.
- Only the non-compact desktop frame changes; field size, RTL icons, behavior and API remain unchanged.
- Existing mobile width override remains unchanged; 390px/320px review reports no overflow.
- Token, catalog, TypeScript, production build and diff checks pass.

## Out of scope
No runtime, menu, typography, field, mobile token or other component changes.
