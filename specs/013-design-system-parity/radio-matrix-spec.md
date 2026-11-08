# Radio Matrix — Specification

## User need

Radio's Variants section should expose the documented checked/unchecked × 16/20px × Default/Hover/Disabled/Focus/Error combinations with recognizable radio geometry and no stretched generic artwork.

## Requirements

- Render five state groups, each containing four cells: unchecked/checked at 16px and 20px (20 cells total).
- Show a proportional circular radio ring and, when checked, a centered Norato yellow dot, matching the active primary-selection palette rule and the existing runtime adapter.
- Use Norato yellow for hover, preserve the accessible focus treatment, and use semantic disabled/error colors; use design reference's clear state-card hierarchy.
- Keep the matrix static and inert; the live playground remains the place for interaction and the adapter remains the source of runtime behavior.
- At desktop and mobile widths, retain RTL, bounded cards and no horizontal overflow.
- Preserve the real control's 48px row target in the playground; the gallery itself is a non-interactive visual reference.

## Out of scope

Adapter API changes, general renderer redesign, and independent screen-reader certification.
