# Analyze — Date Picker range selection color

- **Evidence:** The live 320px browser capture shows a pale-blue interior from November 2 through 6; start/end dates use brand yellow. The active selector is the single `.norato-date-picker__week [role="gridcell"].is-in-range:not(.is-selected)` rule in `packages/vue/src/components.css`.
- **Counterevidence:** Blue remains appropriate for informational indicators elsewhere; changing the global palette would be out of scope. The range interior is a selection state, not an informational message.
- **Decision:** Scope the replacement to the range-interior selector and reuse the existing pale-yellow warning container token. Do not change endpoint color, holiday color, focus ring or selected value.
- **Risk:** The reused token's name describes warning surfaces. In this isolated rule, its hue and semantic role are documented as a selected-range surface; no broader warning semantics change.
