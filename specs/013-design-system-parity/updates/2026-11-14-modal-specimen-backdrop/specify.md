# Specify — Modal specimen backdrop

## Problem

The current local static specimen renders its inner scene as a flat surface beneath the scrim. The matched reference shows the dimmed and blurred underlying dotted/gradient scene through the overlay.

## Acceptance

- The static Modal specimen shows a translucent, subtly blurred scrim over the standard dotted Norato preview surface.
- The destructive dialog remains centered, bounded, RTL, and naturally sized at desktop and mobile widths.
- Only the static specimen changes; the shared live scrim token and Modal runtime remain unchanged.
- Record same-viewport visual review and run required token/catalog/type/build/diff gates.
