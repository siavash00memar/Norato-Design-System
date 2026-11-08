# Date Picker Analyze Gate

**Status:** PASS — implementation may begin.

- Constitution: Vue 3 is the product surface; RTL, 48px targets, Norato tokens, shadcn/Reka primitive evaluation, browser validation, and full technical checks are retained.
- Specify: all seven modes from the accepted design reference reference supersede the older single-date-only draft. Canonical model types, caller-provided holidays, Friday styling, local wall-clock time, and mobile Wheel are now explicit.
- Clarify: design reference's live page and repository proposal were inspected. No holiday dataset is present, so the adapter accepts consumer data. Reka's date components are Alpha; this is a recorded integration risk with an explicit browser verification task.
- Plan: `@internationalized/date` PersianCalendar is selected for arithmetic/serialization. Reka's date primitives were evaluated but not selected for the shared seven-mode UI: they are Alpha and would still require separate wheel/preset/month/year compositions. The custom grid must pass its own keyboard and browser accessibility checks. The dependency is declared directly in the Vue package.
- Checklist: all requirement and accessibility gaps are resolved at specification level; final runtime checks remain implementation tasks.
- Scope consistency: behavior is Vue 3 only, matching the constitution. Historical Figma field anatomy remains, while design reference controls the calendar composition and full mode inventory. No visual palette is copied from design reference.
- Remaining implementation risks: ensure locale resolves to the Persian calendar in Reka; verify both date conversion directions and serialization, range ordering/preset boundaries, focus management, wheel behavior and small targets in a real browser. Do not claim maturity until the evidence is recorded.
