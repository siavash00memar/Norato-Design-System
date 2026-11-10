# Specify — Tree View pointer hover

## Problem

Tree rows currently apply their hover surface through an unconditional `:hover` selector. On touch-first devices, browsers can preserve that state after tapping, making a row look hovered after the interaction.

## Acceptance contract

- Apply the existing neutral hover surface only when the browser supports hover and has a fine pointer.
- Leave selected, disabled, keyboard-focus, RTL and row geometry unchanged.
- Do not change the public Vue API or the component's documentation structure.
- Keep browser pointer/touch visual verification open until directly observed.
