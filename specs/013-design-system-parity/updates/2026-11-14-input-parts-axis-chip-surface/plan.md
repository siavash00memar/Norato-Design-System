# Plan — Input Parts axis chip surface

1. Audit the shared `.variant-axis > span` rule and existing Input-only neutral overrides, plus the Parts template structure.
2. Add an explicit Input-only marker to the Parts axis group and a scoped semantic neutral surface rule; leave other component axes untouched.
3. Compare the actual local Input Parts render with the reference at the same viewport, and inspect computed fill/border, text direction, and wrapping.
4. Record the correction, update the Input component rule/checklist/error log/request validation and family ledger, and preserve open DoD items.
5. Run token/catalog/TypeScript/build/diff gates; push the checkpoint to GitHub. Do not deploy.
