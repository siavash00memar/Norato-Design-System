# Plan — Notification Center Popover fit

1. Reproduce the clipped Popover and inspect Reka's local Popper available-height contract and Notification Center selectors.
2. Scope collision-aware max-height to Popover content; retain the existing maximum, viewport inset and internal overflow.
3. Add a playground RTL/LTR selector bound to the existing `dir` prop and generated code.
4. Re-open the Popover at upper/lower trigger positions and measure bounds, row/action target sizes and scrollability in RTL and LTR.
5. Recheck the notification panel and responsive document bounds to ensure scope did not change them.
6. Update the DoD checklist, request validation and error log; run technical gates and push the verified change.
