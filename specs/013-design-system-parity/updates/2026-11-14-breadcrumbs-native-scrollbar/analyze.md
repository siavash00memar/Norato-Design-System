# Analyze — Breadcrumbs narrow-path scrollbar

- The canonical `.norato-breadcrumbs__list` rule sets `overflow-x: auto`, `inline-size: max-content`, and `max-inline-size: 100%` to preserve long labels.
- No scrollbar suppression selector exists for this list. The narrow screenshot shows browser scrollbar chrome around the live path.
- A `scrollbar-width: none`, legacy Microsoft equivalent, and WebKit pseudo-element rule can hide that chrome without changing overflow behavior. The rules must be limited to this component.
- Existing browser evidence verifies the disclosure, named navigation/list, RTL order, keyboard activation, and 48px targets. Recheck after CSS change to catch layout or scroll regressions.
