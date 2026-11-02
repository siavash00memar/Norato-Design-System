# Input email specimen — Analyze

- Existing preview puts an envelope in the control's trailing slot, while the reference places it beside the title. `NoratoInputShell` owns the native title label; a label slot passthrough allows the icon to move without replacing the accessible association.
- The sample currently uses `name@example.com`; this conflicts with the user instruction. Replace it with a Persian placeholder inside the same field.
- Shared field control CSS enforces 48px minimum height. Do not change that global selector because the runtime interaction target must remain at least 48px. Scope 36px to `.sample-input-specimen` preview control only; inert specimen is not interactive.
- Existing placeholder color token is `#6b6b6b`, conflicting with the explicit `#A1A1A1` requirement. Add a semantic subtle-placeholder token rather than embedding raw color in component CSS.
- Existing label defaults to body styling. Scope the requested Estedad Bold typography to the Input preview label.
