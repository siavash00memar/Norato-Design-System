# Constitution — Avatar Upload native form sync

- Preserve the approved Norato RTL-first API, semantic tokens, 48px hit target, and visual contract.
- Keep the file selection controlled through `modelValue`; never claim the adapter uploads or validates transport.
- Preserve the actual selected `File` in the native input while the controlled value is non-null so browser `required` validity and optional named `FormData` agree with the visible preview.
- On controlled clear, clear the native input. Before reopening the picker, clear only the picker value so the same file can be selected again; cancellation restores the controlled File.
- Continue to accept image files through the native picker’s `accept="image/*"` filter. Network transport and preview URL lifecycle remain the host’s responsibility.
- Add no visual styling changes and preserve the existing circular, non-stretched 96px Avatar Upload specimen.
