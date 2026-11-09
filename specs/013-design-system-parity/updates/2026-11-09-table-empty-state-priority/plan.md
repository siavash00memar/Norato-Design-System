# Plan — Table empty-state priority

1. Trace the current row, query, loading and empty-state rendering.
2. Correct the empty-state selection based on source dataset size.
3. Add a playground dataset selector while preserving the active query.
4. Keep keyboard focus inside pagination when the current control becomes disabled; expose page changes through a polite live region; orient arrows to the active text direction; expose the existing direction prop in the playground.
5. Verify sample results → no search matches → empty source → sample results, loading priority, both pagination focus boundaries and RTL/LTR arrows in the browser.
6. Record evidence in the Table checklist, family ledger and request-validation checklist.
7. Run token/catalog/type/build/diff gates, then commit and push.
