# Combobox sample synchronization — Clarify

## Decisions

- `NoratoCombobox` emits `''` for a cleared single value and `[]` for a cleared multiple value; the sample must mirror those exact shapes.
- The sample should use the current selected model, not the in-progress search query. A query becomes the model only when the user commits an option.
- Multi selection should serialize the current array exactly, preserving order.
- Use JSON string serialization for single-string literals so Persian text and special characters remain valid TypeScript.
- Existing playground option definitions and property flags remain outside this correction unless source evidence shows they prevent the model example from compiling.

No behavior or API decision remains unresolved.
