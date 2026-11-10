# Analyze — Tree View pointer hover

- The prior `.norato-tree-item__row:hover:not([data-disabled])` rule matched mouse and touch hover states alike.
- The current contract already distinguishes hover, selected, disabled and focus states. Existing CSS order puts selected after hover, so selection retains its yellow surface.
- The narrowest correction is to gate only the existing hover rule. No runtime adapter, token, component API, focus rule, or selected-state rule needs modification.
- Browser-level pointer and coarse-pointer confirmation is still required; source inspection alone does not prove the visual behavior.
