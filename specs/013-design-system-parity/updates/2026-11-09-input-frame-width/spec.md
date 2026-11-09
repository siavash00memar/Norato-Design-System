# Input preview frame width — Specification

## Goal
Align the desktop Input preview frame width with the approximately 628px reference while retaining its current 300px height and mobile cap.

## Acceptance criteria
- At the matched 1265×713 desktop viewport, the Norato Input preview frame is within 1px of the 628px reference width and remains 300px tall.
- At 390px and 320px responsive viewports, the existing viewport-clamped frame width and no-horizontal-overflow behavior remain unchanged.
- The rule applies only to the non-compact top Input specimen; other component frames and compact examples are unaffected.
- Token, catalog, TypeScript, build and diff checks pass.

## Out of scope
No Input API, page content, typography, color, frame height, or mobile-frame token changes.
