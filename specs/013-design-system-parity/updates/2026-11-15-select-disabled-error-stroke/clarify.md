# Clarify — Select disabled/error Stroke precedence

- **Evidence:** `select-field.css` defines a neutral `:disabled::before` border and muted surface. Date Picker's disabled field likewise returns to a neutral Stroke while keeping its error message visible.
- **Cause of the mismatch:** `.norato-select-group.is-invalid .norato-select__trigger::before` has greater specificity than `.norato-select__trigger:disabled::before`, so invalid red wins despite the later disabled declaration.
- **Decision:** Disabled appearance takes precedence over invalid/hover styling for the trigger's visual border and surface. Keep the error text, `aria-invalid`, and loading status intact.
- **User clarification needed:** None; the existing disabled rule and cross-component contract resolve the state precedence.

**Gate:** Mixed-state behavior is resolved from existing implementation and component evidence; no material UX/API unknown remains.
