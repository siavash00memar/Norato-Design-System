# Analyze — File Upload native form files

- The current `onChange` resets the native input immediately after processing. This is a proven source-level inconsistency with `name` and `required`.
- The queue already stores the original File object for each newly selected file. `DataTransfer` can rebuild a native FileList from that controlled queue without changing the external API.
- The sync must occur after controlled `modelValue` updates and after file removal; dropped files follow the same queue update path.
- Clear the native selection only immediately before opening the chooser so choosing the same file can fire `change`; listen for the native `cancel` event and restore the queue.
- Browser confirmation for native chooser cancellation/selection may be limited by the current automation bridge; report any unverified behavior accurately.
