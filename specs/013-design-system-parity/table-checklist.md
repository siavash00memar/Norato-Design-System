# Table — Definition of Done

Status: in progress. Last reviewed: 2026-11-09.

## Acceptance checks

- [x] Public Vue adapter, typed props/events/slots, catalog/export/usage example and live playground are connected.
- [x] Button-style component page has a reference-like static specimen and a usable live example.
- [x] Desktop preview keeps the table inside the dotted specimen frame without stretched rows or controls.
- [x] RTL header/cell order, selected row, status chips, toolbar, search and pagination appear in the browser.
- [x] Sorting numeric values produces the expected ascending order.
- [x] Search includes nested user names and returns the matching row; no-result copy is separate.
- [x] Controlled row selection and select-all checkbox semantics are exposed in the accessibility tree.
- [x] Expanding a row reveals its detail content and changes the control's expanded state.
- [x] Sort and row detail are real buttons; table uses native table semantics and named checkboxes.
- [x] Token audit, catalog audit, Vue typecheck and production build pass.
- [ ] Compare exact desktop geometry and component states against the supplied reference; record viewport and frame/row dimensions.
- [ ] Verify responsive behavior at 390px and 320px viewport widths; confirm no horizontal document overflow and review stacked row content.
- [ ] Verify keyboard-only tab order and visible yellow focus for search, sort, row selection, details and pagination.
- [ ] Verify loading and disabled behavior, empty/no-results, selection persistence, pagination bounds and all three row densities in the browser.
- [ ] Review screen-reader announcements with an independent screen reader; inspect progress/image alt semantics where those cell types are used.

## Current evidence and limits

The live browser was reviewed at the desktop viewport. Numeric sorting, search through nested user data, group selection, and row expansion were exercised and observed in the accessibility tree. The table page screenshot showed RTL rows, status chips, selection, the toolbar, and pagination inside the specimen frame. Mobile, keyboard-only, loading/disabled and independent screen-reader checks remain open, so the family DoD is not complete.
