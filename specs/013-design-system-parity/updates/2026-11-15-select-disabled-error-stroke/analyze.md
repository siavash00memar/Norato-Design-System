# Analyze — Select disabled/error Stroke precedence

- The observed red Stroke is a CSS specificity conflict, not an API issue: the invalid-group pseudo-element selector outranks the trigger's base disabled selector.
- The spec and plan agree on the mixed-state contract: disabled appearance uses neutral border/muted surface, while error text and `aria-invalid` remain available; loading remains announced.
- The task list covers the single CSS precedence change, browser verification, traceability updates, and all required technical gates. No task adds behavior outside the acceptance contract.
- Existing semantic tokens are sufficient. Hover excludes disabled; keyboard focus cannot be applied to a disabled trigger; no third-party/native dropdown change is involved.
- Residual family DoD is explicitly excluded from this fix: complete per-state screenshots and independent screen-reader review remain open.

**Gate:** No blocking cross-artifact inconsistency found; implementation may proceed.
