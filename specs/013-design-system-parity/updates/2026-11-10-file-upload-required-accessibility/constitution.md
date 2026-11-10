# Constitution — File Upload required accessibility

- Preserve the public Vue 3 API, existing native `required` constraint, RTL behavior, and Norato tokens.
- Ensure the keyboard-accessible Dropzone representation communicates when file selection is required even if the clipped native input is omitted from the accessibility tree.
- Keep the required indicator absent from the accessible name when `required` is false.
- Do not add a visual element, change the 48px interaction target, or invent custom form-submission behavior.
- Validate the actual rendered accessible name and native constraint state in the browser.
