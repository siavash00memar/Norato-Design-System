# Radio Playground Consistency — Plan

1. Record the failing browser state and identify the split sources of truth in `RadioPlayground.vue`.
2. Derive one computed effective value and use it in the adapter binding, selected status and generated Vue snippet.
3. On `update:model-value`, update the controlled value and leave the empty-state simulation.
4. Change invalid feedback so it does not report a missing selection when the error is unrelated to selection.
5. Verify no-selection, required, error, keyboard selection, snippet synchronization, RTL and 48px targets in the actual browser; restore the playground state.
6. Run token/catalog/type/build/diff gates, update the request checklist and error log, and keep Radio maturity/DoD open until the independent screen-reader and full visual matrix work is done.

## Risk

The example can appear correct while rendering `undefined`; inspect both live status and generated source, then select from the empty state to verify the recovery path.
