# Analyze — Segmented selected surface geometry

## Evidence

- Same-viewport screenshots at 1265×713 show the reference selected capsule shorter than its full segment target. The Norato selected fill currently occupies the entire 48px item height and reads nearly circular for a short Persian label.
- The local component uses a 48px minimum target for Small/Medium/Large, 56px for XLarge, and `--norato-space-2: 8px` is an existing semantic spacing token.
- Reka ToggleGroup supplies the live controlled selection and keyboard behavior; only the selected item's visual surface needs separation from the button box.

## Decision

Move selected fill/elevation to a centered pseudo-element inset by 8px vertically. Preserve the item box, text layer, focus outline, color contracts, and disabled surface precedence. Use the same layer for Glass/Contrast and Disabled states so there is one documented styling source. Live testing exposed that the Contrast selector had higher specificity than Disabled; a matching Contrast+Disabled rule was added on the pseudo-element and verified neutral after the fix.

## Residual checks

The screenshot comparison is visual, not a pixel-diff measurement. Browser checks must confirm target geometry and all listed states. Independent screen-reader validation remains outside this scoped visual fix.
