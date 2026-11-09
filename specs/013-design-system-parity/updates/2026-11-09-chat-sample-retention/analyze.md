# Analyze — Chat sample retention

## Evidence

- `ChatPlayground.vue` stores host-created text and file messages in `sent`.
- Its computed `messages` currently returns `[]` whenever `showSampleMessages` is false, so it hides all user-created messages too.
- Both `append()` and `attach()` push into `sent`; the defect therefore affects both behaviors.
- `NoratoChat` receives only the computed `messages`; its public API does not need to change.
- The simplest correction is to conditionally spread sample fixtures and always spread `sent` afterward.

## Risks

- If the toggle is treated as “clear conversation” instead of “hide sample fixtures,” the correction would violate the stated playground purpose. Existing contract and label say samples, so fixture-only behavior is the supported interpretation.
- Browser tooling may activate the attachment label without exposing a native chooser. If so, source inspection must not be reported as a completed file upload test.
