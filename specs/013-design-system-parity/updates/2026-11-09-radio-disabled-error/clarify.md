# Clarify — Radio disabled/error precedence

- **Resolved from approved Norato precedent:** Disabled has visual priority over error for a noninteractive control, following the established Input and Switch state treatment.
- **Semantic behavior:** `aria-invalid` and the associated validation message remain present; only visual styling follows disabled priority.
- **No unresolved API or interaction choices:** the fix is CSS-only and does not alter controlled state or emitted events.
