# Analyze — Input Textarea disabled/error Stroke

- **Observed:** In the live playground with Error and Disabled both enabled, `.norato-textarea` computes a red 1px border despite native `disabled=true` and `aria-invalid=true`.
- **Comparison:** The generic disabled rule sets the neutral border, but `.norato-textarea-group.is-invalid .norato-textarea` has greater specificity and wins. The existing Input DoD explicitly requires disabled-neutral priority.
- **Risk:** A broad disabled selector could recolor unrelated controls. Limit the correction to an invalid Textarea that is also natively disabled; preserve its validation message and semantics.
- **Decision:** Add a single, more-specific Textarea disabled+invalid selector after the existing validation rules, reusing `--norato-color-border-default`.
