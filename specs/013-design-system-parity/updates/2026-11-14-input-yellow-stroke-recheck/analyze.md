# Analyze — Input yellow Stroke recheck

- Source audit finds the runtime neutral Stroke in `packages/vue/src/components.css` and app-level hover/focus styling in `apps/vue/src/component-field-visuals.css`.
- Key risk: the app visual stylesheet may overlay the runtime component and add a second outline; a source-only review cannot rule that out.
- Browser evidence is required for the exact painted capsule. Keep states unchecked until observed.
