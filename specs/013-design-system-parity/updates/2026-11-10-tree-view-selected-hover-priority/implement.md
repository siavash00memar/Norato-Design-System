# Implement — Tree View selected/hover priority

- Narrowed the existing fine-pointer hover selector to `:not([data-selected="true"])` as well as `:not([data-disabled])`.
- Updated the Tree View component contract and family DoD to state that selected yellow takes priority over neutral hover.
- Browser verification: selecting README while the pointer rested on it kept the Norato yellow surface; keyboard focus showed a separate yellow outline; with the tree globally disabled, clicking the unselected package row did not select it or apply hover styling. Restored enabled state, README selection and the default expanded folders.
- No public API, token, geometry, or RTL behavior changed.
