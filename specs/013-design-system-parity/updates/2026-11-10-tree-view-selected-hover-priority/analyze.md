# Analyze — Tree View selected/hover priority

- **Observed:** With the playground enabled, selected README reported `selected` in the accessibility tree but its hovered row surface appeared neutral gray. A disabled unselected row did not visibly gain hover surface.
- **Cause:** `.norato-tree-item__row:hover:not([data-disabled])` has greater specificity than `.norato-tree-item__row[data-selected="true"]`; declaration order alone cannot preserve the selected yellow fill.
- **Correction:** Restrict hover to rows that are both enabled and unselected, leaving the selected rule and focus outline unchanged.
- **Risk:** A selected row may retain selected yellow during hover, which matches the existing state contract and screen reader state.
- **Evidence limit:** Browser screenshots establish visual state priority but do not replace independent screen-reader or coarse-pointer verification.
