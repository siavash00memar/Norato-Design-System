# Specify — Notification Center Popover fit

## Evidence

At a live mobile viewport of 430×676 after scrolling the implementation playground into view, opening the Notification Center Popover rendered a 480px panel with `data-side="top"` from y=-173.6px to y=306.4px. The bell was at y=314.2px, so the panel was clipped above the viewport. The panel already had `overflow:auto`, but its max height ignored the available height that Reka's Popper exposes.

## Acceptance

1. The open Popover's bounding box remains within the available Popper collision area at top- and bottom-edge trigger positions.
2. Popover height is capped by both the Norato maximum and the collision-safe available height; overflow remains internally scrollable.
3. Notification rows and action targets remain at least 48px high and are not vertically compressed.
4. RTL/LTR direction, controlled open state, focus/escape behavior and selected presentation remain unchanged.
5. The live playground exposes an RTL/LTR selector, defaults to RTL and keeps the generated usage snippet synchronized with the selected direction.
6. Browser checks record actual mobile/desktop viewport dimensions, Popover bounds and document overflow; required project gates pass.
