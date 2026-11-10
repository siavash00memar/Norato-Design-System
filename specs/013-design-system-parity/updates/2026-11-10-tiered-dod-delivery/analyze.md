# Analyze — staged component DoD

- Existing checklist combines broad visual comparison, behavior, accessibility, and technical gates into one all-or-nothing completion status.
- The delivery ledger already contains extensive partial browser evidence, while many families remain open only for exhaustive state or independent screen-reader review.
- A staged ledger can accelerate delivery without reducing the requested final quality, provided incomplete evidence is never called passed.
- The first keyword-only scan undercounted the ledger because it missed evidence phrased inside family-specific checklists. Direct inspection found desktop/mobile plus interaction/RTL evidence for all 48 families after the mobile Pagination comparison. This is evidence coverage, not a Final DoD pass count.
- Existing Rating, Card, and Accordion checklists contain the evidence the keyword scan missed.
- `App.vue` uses one shared component-detail renderer for every catalog selection. The live Select page exposes Preview, Vue usage, and all nine contract sections; family-specific contract content is checked by `check:catalog`.
