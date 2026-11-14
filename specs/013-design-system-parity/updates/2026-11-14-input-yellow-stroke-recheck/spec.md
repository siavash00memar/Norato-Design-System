# Specify — Input yellow Stroke recheck

## Problem
The existing Input Stroke record leaves pointer hover and responsive visual evidence open. Recheck the user-approved shared field treatment against the current local render.

## Acceptance contract
- Rest: one visible 1px neutral `#e8e8e8` capsule Stroke.
- Hover and keyboard focus: the capsule's own single Stroke turns Norato yellow; no extra black/gray ring or duplicate Stroke.
- Disabled: neutral Stroke remains neutral.
- RTL and 36px visual field inside a 48px hit target remain intact.
- Verify the top specimen and all eight executable adapters; leave unavailable states explicitly open.
