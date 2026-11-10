# Analyze — Select axis chips

- **Observed:** At a narrow viewport, Select's variant contract lists present descriptive values as pale-blue chips. These are static labels rather than selected options or informational statuses.
- **Source:** `ContractVisualShowcase.vue` renders the Select `Variants` section in a generic `.variant-visual-grid`; the shared axis rule supplies the blue surface.
- **Alternative:** Changing the shared rule would affect many unrelated components and would conflict with family-specific palettes.
- **Decision:** Add a Select-only class to the variant gallery and apply the neutral subtle surface, secondary text and border there.
- **Risk:** Do not target the separate States gallery or the real adapter; semantic yellow, amber, error, disabled and focus styling must remain untouched.
- **Browser confirmation:** Mobile Select Variants shows neutral gray descriptive chips; the actual Select control retains its yellow state styling.
