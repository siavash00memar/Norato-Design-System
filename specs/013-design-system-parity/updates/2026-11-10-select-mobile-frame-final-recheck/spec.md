# Specify — Select mobile frame final recheck

## Problem

The last desktop-only frame-width adjustment explicitly leaves the 390px and 320px browser recheck open. Existing measurements predate that source change and cannot prove its mobile cascade.

## Acceptance

- At exact 390×844 and 320×844 CSS viewport sizes, compare local and reference inert Select frame width/height and position.
- Confirm the local document does not overflow horizontally and the Select trigger remains RTL and 48px tall.
- Verify the responsive frame selector does not affect open-menu placement or sizing.
- Record actual measurements and leave the complete visual-state screenshot matrix and independent screen-reader review open.
