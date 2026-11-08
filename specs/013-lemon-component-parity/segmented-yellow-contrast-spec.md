# Segmented Control Yellow Contrast — Specification

## Scope
Correct the selected item in the existing Contrast style when hovered, and align its component/Figma contract with the approved Norato yellow accent. Preserve API, Glass style, sizing, RTL, track, motion, and keyboard behavior.

## Acceptance contract
- Contrast selected segment uses `--norato-color-brand-yellow` with `--norato-color-text-primary` in resting and hovered states.
- Hovering a selected yellow segment must not change its text to white or introduce blue.
- Disabled selection retains the existing neutral disabled treatment.
- Glass selected segment remains raised white.
- Existing 48px targets (56px XLarge), RTL item order, and keyboard/focus behavior remain intact.
- No legacy/duplicate selector is added; edit the existing Contrast hover rule.
- Lemon remains the visual reference for the raised Glass pattern and compact horizontal segmentation; Norato retains its own yellow palette.
