# Tree View — Plan

1. **Constitution:** establish RTL, 20px indentation, 16px file alignment, yellow Norato interaction states, 48px runtime targets and Button-style page structure.
2. **Specify:** define item data, controlled selected/expanded IDs, Guides variant, keyboard and visual contract.
3. **Clarify:** inspect the live design reference Tree View and installed Reka Tree APIs; record single-select, disabled and pointer decisions.
4. **Checklist:** define browser, responsive, AX, behavior, visual and engineering DoD.
5. **Tasks:** sequence adapter, recursive row renderer, specimen, playground, contract showcase, tokens and verification.
6. **Analyze:** inspect catalog/readiness, checker, page route/showcase, legacy static selectors, token aliases and Reka's rendered semantics before implementation.
7. **Implement:** compose Reka TreeRoot/TreeItem with recursive Norato rows; add an inert design reference composition, separate live playground, Button-order documentation, then browser-verify before technical gates and Git checkpoint.

## Risks

- Recursive rows and nested `role=group` can produce duplicate or invalid list semantics; verify the rendered AX tree rather than assuming the primitive output.
- Selected ID must map to the Reka node object so the public API stays stable and primitive selection remains correct.
- Reka toggles a folder on row activation; the chevron must not bubble into a duplicate activation.
- Narrow rows can stretch icons or clip long labels; fix at both node content and tree container without introducing document overflow.
