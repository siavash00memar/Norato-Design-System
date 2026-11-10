# Specify — Combobox live state matrix

## Problem

Combobox's static six-state gallery is now rechecked, but its DoD still leaves the exhaustive live state matrix open. Existing evidence covers the 16 type × size × label-placement geometry combinations and selected interactions, not all six visual states at every combination.

## Acceptance

- Exercise every feasible cell of the 96-cell contract: Single/Multi × Small/Medium/Large/XLarge × Outside/Inside × Default/Hover/Typing/Filled/Error/Disabled.
- For every cell, capture actual browser geometry, direction, visible state/value, interaction target and computed border treatment; keep Disabled incompatible with active typing/focus states clearly noted.
- Verify selected-value behavior, menu interaction, keyboard/focus and error/disabled precedence on the live adapter.
- Confirm local responsive containment at 390px and 320px, and compare matched states with the visual reference where available.
- Do not close independent screen-reader, cold-load fallback or any other DoD items without their required evidence.
