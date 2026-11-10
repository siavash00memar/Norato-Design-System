# Specify — Tree View selected/hover priority

## Problem

The live Tree View shows the selected row with the neutral hover surface when a fine-pointer cursor rests on it. This contradicts the contract that Selected uses the Norato yellow surface and Hover uses a neutral surface.

## Acceptance contract

- An enabled, unselected row under a fine-pointer hover gets the neutral surface.
- A selected row remains yellow while hovered.
- A disabled row does not acquire hover styling.
- Keyboard focus remains a separate visible 2px yellow outline with its tokenized offset.
- RTL, row dimensions, selection, expansion, public API and mobile behavior remain unchanged.
- Browser screenshots confirm the states; token/catalog/typecheck/build/diff gates pass.
- Independent screen-reader, coarse-pointer, reduced-motion and unrelated responsive DoD gaps remain open unless independently verified.
