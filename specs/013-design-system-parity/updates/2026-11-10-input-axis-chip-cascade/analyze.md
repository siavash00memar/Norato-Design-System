# Analyze — Input axis-chip cascade

- **Observed:** The live Input family matrix shows size/state axis chips in pale blue, while the approved Input contract says these informational labels are neutral and non-interactive.
- **Source trace:** The intended neutral rule currently lives in the app-wide stylesheet, while the axis markup is owned by `ContractVisualShowcase.vue`; the browser result proves the current rule is not governing the visible specimen.
- **Alternative:** Changing the shared `.variant-axis` base rule would affect other families and is broader than the defect. Keep the neutral override Input-scoped.
- **Decision:** Move the selector to the owning component's scoped styles, remove the ineffective global rule, then verify the actual render.
- **Remaining uncertainty:** Exact computed cascade details are not exposed by this browser automation surface; successful post-change render will verify the correction without claiming a measured computed color.
