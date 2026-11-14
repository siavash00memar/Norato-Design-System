# Specify — Shared implementation marker text color

## Problem
The shared implementation marker uses a neutral surface but inherits the default green success text color, so API/implementation guidance looks like a success state.

## Acceptance contract
- Implementation marker surface and glyph both use neutral semantic tokens.
- Do stays success, Avoid stays error, RTL stays Norato yellow, and Accessibility tiles stay neutral.
- Preserve RTL placement, 48px marker geometry, spacing, links and component-specific behavior.
