# Specify — Popover static preview composition

## Problem
The static specimen currently shows a visible trigger below its panel and a downward arrow. The selected visual reference shows only the floating panel with an upward arrow; the visible trigger is present in the live playground below.

## Acceptance contract
- The inert preview contains the panel and its arrow only; it has no visible trigger control.
- The arrow is attached to the panel's top edge and points upward.
- Keep the panel centered in the shared 288px Norato frame with RTL content and bounded width.
- Match the compact title plus inset link-row composition, with a decorative SVG copy icon and Norato sample URL.
- Keep the live playground trigger, menu behavior, and API unchanged.
- No overflow or visible distortion at the current viewport; retain existing mobile frame behavior.

