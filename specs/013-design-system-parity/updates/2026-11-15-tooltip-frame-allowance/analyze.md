# Analyze — Tooltip preview frame allowance

- Source audit confirms `apps/vue/src/styles.css` scopes the additional width to `#doc-preview.doc-preview-tooltip .component-sample`, adds `--norato-space-1` (4px), and caps the width at `--norato-split-button-preview-frame-inline-size`.
- Same-viewport browser measurements confirm the rule is scoped and the post-correction frame matches within 0.02px width and 0px height; adjacent component frames do not match the scoped parent selector.

- [x] Matched browser evidence: 1265×720, reference frame 636×300px, local 635.98×300px; Button/Input/Select frame widths measured and Tooltip-only selector scope confirmed.
- [x] RTL, 300px frame height, document bounds, and centered preview are confirmed; no clipping or horizontal overflow.
- [x] Source change not needed; existing 4px semantic allowance and max-width cap satisfy the contract.
- [ ] Independent screen-reader review remains a Tooltip family DoD item.
