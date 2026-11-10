# Specify — Input mobile frame final recheck

## Problem

The desktop Input preview frame received a scoped 4px spacing-token allowance. The follow-up checklist still requests mobile captures after that change; earlier captures alone cannot confirm the final responsive cascade.

## Acceptance

- At exact 390×844 and 320×844 CSS viewports, compare local/reference inert frame dimensions and placement.
- Confirm local document client/scroll widths match, the title/icon remain adjacent, RTL placeholder stays right-aligned, and the visible input stays capsule-shaped without vertical stretch.
- Confirm the mobile rule clamps the frame to available width and does not widen the page.
- Record measurements and leave full adapter visual/state parity and independent screen-reader review open.
