# Constitution — File Upload native FileList helper

- Preserve the current public Vue API and controlled queue behavior.
- Keep `required` and `name` connected to the user's real queued files; sample rows without `File` objects are not native form data.
- Do not claim browser validity or `FormData` verification from helper-level tests.
