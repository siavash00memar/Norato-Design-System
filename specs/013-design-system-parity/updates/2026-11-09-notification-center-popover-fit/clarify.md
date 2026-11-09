# Clarify — Notification Center Popover fit

- **Resolved:** Use the installed Reka Popper's available-height value as the collision boundary, bounded by Norato's existing maximum-height token and the viewport safety inset.
- **Resolved:** Keep scrolling inside the panel when the notification content exceeds the available space; preserve the existing 48px targets.
- **Resolved:** Limit the change to Popover content sizing; Panel, APIs and event behavior remain unchanged.
- **Resolved:** Add a playground-only direction selector so the existing `dir` API can be reviewed in both directions; RTL remains the reset/default and the generated snippet reflects the selection.
- **Unresolved decisions:** None. This is a layout correction for an observed clipping defect.
