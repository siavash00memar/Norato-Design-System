# Time Picker — source and implementation analysis

- Live design reference page has the required nine sections, a bounded default two-column specimen, 5 picker variants, separate single/range Time Input anatomy, four sizes, five visual states and ArrowUp/ArrowDown guidance. Its minute/hour digits are LTR despite the RTL page.
- Norato currently has only a generic inert specimen plus a proposed contract; no adapter, export, playground, controlled API or runnable example exists. Its legacy specimen currently renders a text-like row and must be replaced, not hidden beneath a new override.
- Existing repository contracts require at least 48px interactive targets; the design reference visual 32/40px sizes therefore describe field appearance only, with a larger transparent/visible hit target where appropriate.
- Risk cases: malformed time serialization, 12h/24h model drift, end-before-start ranges, disabled slots, offscreen popover, an input or panel growing to gallery height, RTL digits reversing, and keyboard focus escaping the open panel.
- Primitive audit: no installed dedicated time picker. Native labeled input, buttons and selects can provide robust base semantics without a custom keyboard engine; implement the panel with tokenized bounded geometry and test actual focus and AX behavior.
- Proceed to implementation after this analysis stage; no decision has been silently left unresolved.
- 2026-11-07 re-audit: the inert specimen's selected cells still used brand blue, while the live adapter already computed brand yellow with dark text. The global Norato rule and user's explicit accent instruction require yellow for primary selection; blue selection in the earlier screenshot/contract is stale. Fix the existing specimen rule in place, then verify both presentations.
