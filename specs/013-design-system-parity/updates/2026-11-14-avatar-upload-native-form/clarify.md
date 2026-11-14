# Clarify — Avatar Upload native form sync

- **name default:** optional and omitted by default; bind only when supplied, matching the existing File Upload name convention.
- **Required semantics:** use native file-input validity; the controlled selected File must be mirrored. This adds no custom submission or network behavior.
- **Clear semantics:** the host clears selection by setting `modelValue` to `null`; the adapter mirrors that state to the native FileList.
- **Same-file selection:** clear the picker value before opening; on the native cancel event, restore the controlled File. The current selected File remains available to form submission outside the picker interaction.
- **Image filtering:** retain native `image/*` accept behavior; MIME/payload validation beyond the file picker is not added because it needs a separate API and visible rejection contract.
- No unresolved product or API choice remains for this scoped correction.
