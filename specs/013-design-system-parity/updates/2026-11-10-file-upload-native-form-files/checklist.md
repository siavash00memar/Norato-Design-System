# Checklist — File Upload native form files

- [ ] The input FileList mirrors `modelValue` file objects after selection, controlled updates, remove, retry/cancel, and drop.
- [ ] Required empty queue is invalid; accepted queue is valid; named form data contains selected files.
- [ ] Rejected batches preserve valid queued files and do not add rejected files to form data.
- [ ] Picker cancel restores the existing queue; choosing the same file again still emits selection.
- [ ] RTL, focus-visible, disabled, and accessible required semantics remain intact in browser render.
- [ ] `pnpm test:file-upload`, token/catalog checks, Vue typecheck/build and `git diff --check` pass.
- [ ] Push the commit and verify local/remote parity.
