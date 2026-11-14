# Analyze — Shared contract marker colors

- Evidence: `ContractVisualShowcase.vue` assigns informational blue to the shared Usage check and Accessibility symbol. Tag and Chip replace shared Usage colors with yellow; Empty State also overrides Accessibility. This produces family-dependent semantics.
- Decision: change only shared marker rules and remove only the conflicting palette overrides. Preserve independent blue link/information styles and all component layout rules.
- Risk: shared semantics affect all 48 documented families. Validate representative normal and prior-exception pages and ensure no layout changes.
