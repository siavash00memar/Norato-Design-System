# Specification — Combobox state gallery parity

## Goal

Align Combobox's static States gallery with the reference's grid and descriptive card hierarchy, while preserving Norato's rendered state samples.

## Acceptance

- Show exactly six states: Default, Hover, Typing, Filled, Error, Disabled.
- Use a four-column desktop grid (4/2) and a responsive contained layout at narrower widths.
- Each card has the state name and a Persian description of that specific state; do not repeat the generic family name.
- Keep the RTL 36px capsule inside a 48px target and preserve neutral, yellow, and error Stroke semantics.
- Preserve the live Combobox/playground and all other component galleries.
- Compare the actual browser render at matched viewport and run technical gates; keep open DoD gaps explicit.
