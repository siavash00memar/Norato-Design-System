# Specify — Input variant-axis chips

## Browser evidence

At the Input Variants gallery, every axis value chip used the pale-blue informational container. These chips enumerate sizes, states and label placements; they do not represent a selected or clickable state. The actual Input focus/active treatment uses Norato yellow.

## Acceptance contract

- Input matrix axis labels use a neutral surface and neutral border, with no blue accent.
- Axis chips remain descriptive and inert; the gallery's active field example keeps its yellow Norato stroke.
- Existing dimensions, wrapping and RTL reading order are unchanged.
- Other component galleries are not changed by this correction.

## Scope

Scope the CSS override to `.input-family-matrix .variant-axis > span`; do not alter the shared variant-axis rule used elsewhere.
