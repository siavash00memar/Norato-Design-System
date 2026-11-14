# Checklist — Avatar Upload native form sync

- [x] Optional `name` reaches the native file input and public contract.
- [x] Controlled `modelValue` mirrors one real File; clearing it empties the native FileList.
- [x] Required selection semantics follow the mirrored native FileList.
- [x] Same-file reselection is enabled by clearing the picker value before open; chooser cancel restores the controlled File.
- [x] Existing events, image accept, disabled state, RTL, 48px target, and circular layout remain unchanged by source diff.
- [ ] Browser verifies required validity, named FormData, selection, clear, cancel and same-file reselection.
- [ ] File Upload test suite, token/catalog, Vue typecheck/build and diff check pass.
