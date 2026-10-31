# Component-by-component visual parity — task backlog

Status: active. Visual reference: https://lemonui.ir/ (especially each matching component page). DoD means complete one task, check it against multiple criteria, then hand it off. The persistent goal covers all 48 component families other than Button; do not close it before every family's DoD passes.

## Acceptance contract from the latest request

- Use Lemon as the visual UI reference, while all brand colors come from semantic Norato tokens.
- Give every component page the same structural completeness as Button: preview, accurate Vue usage or maturity note, nine independent contract sections, meaningful visual examples, and copy controls.
- Remove accidental vertical stretching of examples and controls without reducing required 48px interaction targets.
- Preserve Persian, RTL, Estedad headings, Vazirmatn content, and Vue 3 contracts.
- Compare actual desktop and mobile browser renders against the exact supplied Lemon reference, and record the result per component.

## Ordered work

- [x] T001 Constitution: reviewed v1.2.0; Norato semantic tokens, Vue 3 and 48px minimum interactive targets override Lemon's raw colors and 32/40px input sizes.
- [x] T002 Specify: recorded the Lemon URL, 48-family scope, visual acceptance criteria, and per-task Definition of Done in spec.md.
- [x] T003 Clarify: user defined persistent goal and DoD; project source authority resolves the remaining Lemon/Norato conflicts.
- [x] T004 Plan: reviewed the Button shell, catalog statuses, specimen selectors and Input contract; per-family order and visual rules are recorded in plan.md.
- [x] T005 Checklist: created checklist.md with visual, behavior, RTL, accessibility, responsive, and build gates.
- [x] T006 Tasks: created families.md with a separate delivery row for each of the 48 remaining families.
- [ ] T007 Analyze: measure actual renders and compare each family with Lemon and Button; log vertical stretch causes.
- [ ] T008 Implement Input to the approved contract; verify browser render, keyboard/focus, disabled/loading/invalid, responsive layout, tokens, TypeScript, build, and request checklist.
- [ ] T009 Repeat the full analysis, implementation, and verification for each remaining catalog family, respecting its true runtime maturity.
- [ ] T009a Select: keep the live controlled native single-select and its loading semantics, then implement and verify the missing Lemon glass menu, search/grouping, and Multi Select chips/summary/confirm behavior before closing its DoD.
- [ ] T010 Final audit: compare all component pages at desktop and mobile widths; run catalog, token, TypeScript, build, and request-validation checks; update error log and handoff evidence.

No item is complete solely because a source file exists. A component is complete only after actual browser validation and its documentation reflects supported behavior.
