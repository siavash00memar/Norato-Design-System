# Segmented Control Yellow Contrast — Analyze

## Evidence
- Lemon's live Segmented Control page identifies Glass as raised white and Contrast as black, with the first item on the right in RTL. Lemon's palette is not Norato's.
- The live Norato adapter is controlled Reka ToggleGroup and keeps each Medium segment at a 48px target; current preview has a raised white selected item.
- Current source sets Contrast selection to `--norato-color-brand-yellow`, but its more-specific selected-hover rule switches text to `--norato-color-text-on-brand` (white). A live pointer hover reproduced white text on `rgb(253, 193, 1)`; resting selected text is `rgb(26, 26, 26)`.
- The component contract still describes a blue Contrast selection, contradicting both source and the user's latest brand direction.

## Decision
Change only the existing Contrast selected-hover text token to `--norato-color-text-primary`, and correct the contract/Figma description to yellow with dark text. Keep Glass, disabled treatment, and current focus ring unchanged because this defect is limited to hover text contrast. Further state-matrix evidence is required before closing DoD.

## Gate
Analysis confirms a bounded defect and no unresolved behavior/API question. Proceed to implementation.
