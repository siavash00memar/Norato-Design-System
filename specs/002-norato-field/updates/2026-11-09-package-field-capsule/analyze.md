# Analyze

- The public NoratoField.vue renders .norato-field, but the package components.css gives it a 48px rounded-card surface.
- The approved 36px capsule treatment exists only in apps/vue/src/component-field-visuals.css under #app .norato-field.
- Therefore a consumer loading the public package stylesheet does not get the approved shell. The documentation preview masks this package-level defect.
- Scope is limited to the legacy public NoratoField; specialized adapters already use the shared 36px/48px shell.
- Browser verification remains required after implementation; prior docs-only evidence cannot prove the published package result.
