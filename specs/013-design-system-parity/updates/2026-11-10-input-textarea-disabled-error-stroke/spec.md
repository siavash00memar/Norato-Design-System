# Specify — Input Textarea disabled/error Stroke

## Acceptance contract

When Textarea is both disabled and invalid, its visible Stroke is the 1px neutral `--norato-color-border-default` (`#e8e8e8`). The native disabled state, `aria-invalid=true`, and linked error text remain present. Enabled invalid Textarea keeps the semantic error Stroke; disabled-only Textarea remains neutral. No other presentation or behavior changes.

## Scope

Only the runtime Textarea cascade and its recorded DoD evidence are in scope.
