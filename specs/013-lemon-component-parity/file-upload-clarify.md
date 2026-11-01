# File Upload — clarification gate

- `NoratoFileUpload`: `modelValue: NoratoUploadItem[]`; props `id`, `label`, `accept`, `maxSize` (bytes, default 10,000,000), `maxFiles` (default 5), `multiple` (default true), `size: large|compact`, `disabled`, `required`, `helperText`, `errorText`, `name`, `dir`. Emits `update:modelValue`, `files-selected`, `rejected`, `remove`, `cancel`, and `retry`.
- `NoratoUploadItem`: `{ id, file?, name, size, type, status: selected|uploading|complete|error, progress?, errorText? }`. New file choices enter `selected`; only the consumer changes transfer status/progress. No fake upload timer or network request.
- `NoratoFileItem`: accepts one item and disabled state; emits `remove`, `cancel`, `retry`. Status maps to the proper primary action; progress is shown only when uploading.
- `NoratoUploadTile`: controlled `modelValue: File|null`, `previewUrl`, `state: add|uploading|complete|error`, progress/error/accept/disabled; emits `update:modelValue` and `file-selected`.
- `NoratoAvatarUpload`: controlled `modelValue: File|null`, `previewUrl`, image-only accept, empty/filled state, label/disabled/required; emits `update:modelValue` and `file-selected`.
- File acceptance: MIME and extension rules from the `accept` list, size `<= maxSize`, maximum queue count, and single-file mode are checked before emitting. Rejections carry a reason and visible feedback; accepted files still proceed.
- Maximum five files is a practical default while consumers can set another limit. Default accept is `.png,.jpg,.jpeg,.pdf,image/png,image/jpeg,application/pdf`; a playground simulation sets statuses explicitly rather than pretending to transfer data.
- Persian RTL for layout and messages; LTR for file metadata. No unresolved API or behavior choices remain.
