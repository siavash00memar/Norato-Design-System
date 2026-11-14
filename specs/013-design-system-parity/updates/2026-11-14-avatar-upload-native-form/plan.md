# Plan — Avatar Upload native form sync

1. Reuse the private `syncNativeFileList` helper already used by `NoratoFileUpload`; do not duplicate `DataTransfer` handling.
2. Watch the controlled `modelValue` and input ref, mirroring zero or one real File into the native input.
3. Clear the native picker value only before opening; restore from controlled value on cancel; leave successful selection in the FileList.
4. Add and document optional `name`, preserving current emits and appearance.
5. Update acceptance checklist, package contract, feature tasks, and error log with the source-confirmed defect and bounded verification.
6. Run File Upload validation tests, token/catalog checks, Vue typecheck/build, and diff check; inspect the local browser render. Keep native validity/FormData/cancel claims open if the browser picker is unavailable.
