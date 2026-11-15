# Input generated-state props — Analyze

## Reproduction evidence

- On the local `#component-input` page, turning on Disabled marked Text, Password, Phone, all six OTP cells, Textarea, Number, Amount, Search, and their applicable actions disabled in the browser accessibility tree.
- The same generated SFC showed `disabled` only on the `NoratoTextInput` line; the other seven adapter lines omitted it. The live template applies the shared `disabled` ref to all eight adapters.

## Source analysis

- `InputPlayground.vue` interpolates required/disabled/loading/error only in the Text Input string. Other adapter lines contain only their subtype settings.
- `NoratoInputFieldProps` exports the shared state props `required`, `disabled`, `loading`, `readOnly`, `errorText`, and `successText`; the adapters consume them. OTP omits only `labelPlacement`.
- This is a documentation/playground code-generation mismatch, not a runtime adapter defect. Apply a common formatter driven by the same refs and retain per-adapter messages/settings.
- Do not serialize values typed by the user; the scoped issue is prop-state parity.
