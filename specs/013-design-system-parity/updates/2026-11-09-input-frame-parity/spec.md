# Specify — Input preview frame parity

## Browser evidence

At the same live browser viewport (1536×647 CSS pixels), the inert Norato Input frame measures 634×300px and the visual reference frame measures 636×300px. The Input specimen itself stays centered, and the approved field style remains unchanged.

## Acceptance contract

- The Norato desktop Input frame measures 636×300px at the matched viewport, aligning to the reference frame.
- Only the non-compact desktop Input frame width changes; the 300px height, field geometry, content and other component frames do not change.
- The existing mobile frame cap remains active; no mobile overflow is introduced.
- The page remains RTL and keeps the approved Input specimen content.

## Scope

Change only the desktop width allowance of `.component-sample.sample-input-preview:not(.compact)` and record exact before/after browser measurements.
