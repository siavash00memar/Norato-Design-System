# Implement — File Upload native form files

- Added controlled synchronization from each queue item's real `File` object into the native input's FileList using DataTransfer.
- Removed the unconditional post-change input reset. The picker clears the native value only before opening; the queue is restored on the native `cancel` event.
- `change` processing resyncs the native list immediately, so rejected files are not left as form payload while accepted updates can synchronize after Vue updates props.
- Updated the public contract and DoD ledger to state the intended native form behavior and to keep browser proof open.
- Verified: Vue typecheck and `pnpm test:file-upload` (5/5) pass. Browser chooser did not open through the automation bridge; post-selection required validity, FormData, same-file reselection, removal, and OS drag/drop remain pending.
