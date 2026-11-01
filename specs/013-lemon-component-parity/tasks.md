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
- [ ] T009a Select: replace native select with a Reka-backed Norato-token dropdown; implement searchable/grouped single and staged multi selection, chips/summary, confirm/cancel, sizes/label placement and states; verify keyboard, focus, RTL, mobile and all technical gates before closing its DoD.
- [ ] T009b Combobox: adapter, catalog/export/usage integration, playground, single/multi, sizes, inside/outside labels, clear, recent/loading/empty/create states are implemented. Complete the remaining Lemon desktop/mobile review and behavior/accessibility matrix, then close only after all technical gates pass.
- [x] T009c Checkbox: standalone controlled Vue adapter, checked/indeterminate semantics, required/error/disabled, 16/20px control, 48px row, Lemon-like own-token glass specimen and live playground implemented. Compared with Lemon on desktop/mobile; four-part Anatomy, keyboard, focus, RTL, error associations and all 30 Checkbox state/value/size combinations verified. All six Checkbox Field variants are covered by the adapter and documented behavior. Request checklist passed; token/catalog/TypeScript/build gates passed.
- [ ] T009d Radio Button: adapter, catalog/export/usage, 3-option specimen and playground implemented. 12 checked/value/size Default/Error/Disabled cases, 2px keyboard focus, mobile/desktop composition, RTL and required/error/disabled semantics checked. Fresh ArrowDown/Up verified controlled selection and restored snippet; one non-selected row’s hover styling was observed. Technical gates pass. Complete 20-cell focus/hover matrix and independent screenreader review remain before closing DoD.
- [x] T009d follow-up: Radio playground empty-state mismatch fixed and verified; live value, status and generated snippet now synchronize, and selecting exits empty simulation. Full visual matrix and independent screenreader review remain under T009d.
- [ ] T009e Switch: controlled boolean Switch Field using Lemon's one-field preview and Norato semantic palette; Reka-backed three track sizes with 48px target, connected label/description, RTL knob motion, disabled/error/focus states and live playground are implemented. Space/Enter, AX role/name, geometry and responsive width checked; complete 36-variant state matrix, hover, fresh disabled/error/focus verification, independent screenreader and technical gates remain.
- [ ] T009f Segmented Control: Reka controlled ToggleGroup, styles, four sizes, 2–4 items, disabled and optional icon support, specimen and playground implemented. Lemon desktop/mobile comparison, all 24 group combinations, keyboard/hover/disabled/focus, RTL geometry and nine-section rendering pass. Fresh 390×844 check verified four XLarge/Contrast options remain horizontal and the generated snippet matches; ArrowLeft/Space/Right/Space verified RTL focus/selection. Token/catalog/type/build/diff gates pass. Exact DOM geometry, exhaustive 64 item-state cross product and independent screenreader review remain before DoD closure.
- [x] T009g Range: Reka SliderRoot/Track/Range/Thumb; controlled single/range values; semantic tokens, RTL, 48px targets, live value labels, disabled/focus/error; 16 type/size/state combinations at desktop/mobile; Lemon visual comparison and all project technical gates pass. Evidence in `range-checklist.md` and `range-analyze.md`.
- [x] T009h Rating: follow `rating-constitution.md` → `rating-spec.md` → `rating-clarify.md` → `rating-plan.md` → `rating-checklist.md` → `rating-tasks.md` → `rating-analyze.md` → implement; read-only/input/summary, half-star display, controlled Reka RadioGroup input, RTL, 48px targets and desktop/mobile DoD pass.
- [ ] T010 Final audit: compare all component pages at desktop and mobile widths; run catalog, token, TypeScript, build, and request-validation checks; update error log and handoff evidence.

No item is complete solely because a source file exists. A component is complete only after actual browser validation and its documentation reflects supported behavior.
