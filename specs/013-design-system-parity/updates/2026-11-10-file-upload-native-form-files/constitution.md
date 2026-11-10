# Constitution — File Upload native form files

- Preserve the RTL-first Norato visual and interaction contract.
- Keep selection and transfer status controlled by Vue `modelValue`; never simulate network transfer.
- Preserve native form semantics promised by `name` and `required` while synchronizing only user-selected `File` objects.
- Avoid clearing the accepted native FileList after selection; support same-file reselection through picker cancel/change lifecycle.
- Verify the browser behavior and required project gates before delivery.
