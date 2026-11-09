# Clarify — Table empty-state priority

- The contract already defines distinct `emptyLabel` and `noResultsLabel` strings.
- Default behavior is unambiguous: an empty source dataset uses `emptyLabel`; a populated dataset filtered to zero matches uses `noResultsLabel`.
- Browser review also reproduced focus loss when activating Next on the last page: the focused button becomes disabled and focus falls to the document root.
- Decision: transfer focus to the enabled opposite-direction pager control when the activated control becomes disabled, and expose the updated page value through a polite live region.
- Screenshot review showed that pagination button order followed RTL, but the fixed arrow paths did not; mirror pagination arrows in RTL so Previous points right and Next points left.
- Decision: expose the existing `dir` prop in the playground with RTL as the default, so both directions can be reviewed without adding new adapter behavior.
