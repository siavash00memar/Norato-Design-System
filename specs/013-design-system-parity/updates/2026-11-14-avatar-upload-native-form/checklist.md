# Checklist — Avatar Upload native form sync

- [x] Optional `name` reaches the native file input and public contract.
- [x] Controlled `modelValue` mirrors one real File; clearing it empties the native FileList.
- [x] Required selection semantics follow the mirrored native FileList.
- [x] Same-file reselection is enabled by clearing the picker value before open; chooser cancel restores the controlled File.
- [x] Existing events, image accept, disabled state, RTL, 48px target, and circular layout remain unchanged by source diff.
- [x] Browser verified Avatar selection, required-empty invalid state, selected valid state, controlled clear and same-file selection after the picker was cleared.
- [ ] Named `FormData` payload and chooser-cancel restoration remain unverified. The named Avatar input is now inside the playground form, but the read-only browser inspection API does not expose a usable `FormData` constructor.
- [x] File Upload test suite (8/8), token/catalog, Vue typecheck/build and diff check pass.
