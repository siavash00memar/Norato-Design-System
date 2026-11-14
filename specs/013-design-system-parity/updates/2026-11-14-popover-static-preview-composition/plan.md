# Plan — Popover static preview composition

1. Audit `.sample-popover-preview`, `.sample-popover-anchor`, and `.sample-popover-panel` selectors and their usages.
2. Remove the visible inert trigger and obsolete anchor wrapper from the static specimen.
3. Reposition the panel in the frame and move its arrow to the top edge using existing glass and spacing tokens.
4. Compare the local browser render with the selected reference and confirm the live playground remains separate.
5. Run token/catalog, Vue typecheck/build, and diff checks; record remaining family DoD gaps.
