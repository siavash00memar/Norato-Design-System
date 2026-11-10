# Clarify — File Upload native FileList helper

- Keep the helper private to the Vue package; it is not a public export.
- Inject a `DataTransfer` factory only as an internal test seam. Production continues to use the browser constructor.
- Unit tests prove mapping logic only; browser behavior remains a distinct DoD gate.
