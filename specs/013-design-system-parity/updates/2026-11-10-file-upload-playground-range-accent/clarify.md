# Clarify — File Upload playground Range accent

- Decision: use CSS `accent-color` with the existing semantic Norato yellow token and size the input hit target to the shared 48px token. This preserves the native keyboard/range behavior without stretching the track/thumb.
- Scope: only `.file-upload-playground-toggles input[type="range"]` is affected; this is a demo control, not the public Range component.
- Open decisions: none.
