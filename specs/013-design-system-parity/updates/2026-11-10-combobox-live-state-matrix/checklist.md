# Checklist — Combobox live state matrix

- [x] Constitution → Specify → Clarify → Plan stages are recorded in order.
- [x] Adapter state-to-DOM/CSS/ARIA mapping and playground selectors are inspected.
- [x] All 96 contract cells are exercised: 16 type × size × label combinations × 6 states. Extra Disabled+Error and Focus+Pointer checks were also recorded for all 16 combinations.
- [x] For each cell, row/capsule geometry, RTL, visible value, stroke, target and desktop overflow were verified in the browser. Independent pure-hover checks confirmed hover without focus in all 16 combinations.
- [x] Keyboard focus, ArrowDown, Enter, Escape, clear, multi selected-value persistence, active-descendant validity and disabled/error precedence are verified on the live adapter.
- [x] Prior matched desktop/mobile frame comparisons remain in the canonical Combobox checklist; fresh live mobile measurements at 390px and 320px show no document or menu overflow.
- [ ] Any verified defect is fixed and rechecked; no defect is presumed.
- [x] Token/catalog/typecheck/build/diff gates pass.
- [x] Canonical DoD and request-validation checklist are updated with observed evidence only; no component defect or CSS conflict was reproduced.
- [ ] Commit is pushed and remote parity is verified.
- [ ] Independent screen-reader review and cold-load throttling remain open until separately evidenced.
