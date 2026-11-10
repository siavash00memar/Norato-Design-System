# Specify — Combobox state gallery final mapping review

## Problem

The six-state Combobox gallery was built from shared state entries, then the shared Variants mapper was changed to restore the source label. Its checklist correctly says the Combobox state mapping and geometry need a fresh browser pass after that final mapper change.

## Acceptance

- Verify the gallery still contains one card each for Default, Hover, Typing, Filled, Invalid and Disabled, with the correct value text and semantic Stroke.
- At matched 1536×703, 390×844 and 320×844 CSS viewports, measure each target and field; preserve 48px targets, 36px capsule height, RTL and bounded local document width.
- Compare local states with corresponding reference examples where available; record unmatched state coverage honestly.
- Keep the live adapter state matrix and independent screen-reader review open.
