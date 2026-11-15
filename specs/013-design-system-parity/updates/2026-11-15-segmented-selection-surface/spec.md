# Specification — Segmented selected surface geometry

## Context

At the same 1265×713 browser viewport, the selected surface in the reference is a shorter capsule inside its option target. In Norato, the selected background fills the option's entire 48px minimum height, making short labels look nearly circular.

## Acceptance contract

- Keep each Small/Medium/Large option's interactive box at least 48px high and XLarge at least 56px.
- Inset only the selected visual surface vertically by the semantic 8px spacing token; leave the full option box and label centered and interactive.
- Preserve Glass's raised white surface, Contrast's Norato-yellow surface with primary text, disabled-neutral priority, RTL order and 2px focus ring.
- Keep the track, option widths, controlled value, keyboard behavior, and public Vue API unchanged.
- Validate the actual local render against the current reference at the same viewport; check all styles, sizes, selected/disabled/focus states and mobile overflow before handoff.
