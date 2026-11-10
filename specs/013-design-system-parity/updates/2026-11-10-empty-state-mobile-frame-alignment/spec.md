# Specify — Empty State mobile frame alignment

## Goal

Align the local inert preview frame with measured 390px and 320px reference widths while keeping the local document within its viewport.

## Acceptance criteria

- At 390×844, frame is 327×300px, matching the reference; local document remains 375px wide.
- At 320×844, frame is 257×300px, matching the reference; local document remains 305px wide with no horizontal overflow.
- RTL content remains centered and intrinsic; only the frame receives the inset.
- The change applies at mobile widths only; desktop frame remains 635.98×300px.
- Token/catalog, TypeScript, build, browser validation, and diff checks pass.

## Out of scope

- Live adapter behavior, content, page structure, and desktop sizing.
