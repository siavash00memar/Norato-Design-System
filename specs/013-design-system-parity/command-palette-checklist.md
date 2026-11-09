# Command Palette — Checklist / Definition of Done

## Contract and structure
- [x] Typed Vue API, catalog/export/checker, inert preview, separate playground and generated code are aligned.
- [x] Page has Button's exact section order and a stable route.
- [x] Contract, Figma rules, request checklist, family ledger and error log match the implementation and evidence.

## Visual and responsive
- [ ] Same-viewport design reference comparison records frame, panel, row and footer geometry.
- [x] Default/results/empty/loading and item default/active/disabled states have distinct Norato semantics.
- [x] RTL search/text/icon placement, LTR keyboard badges and yellow focus treatment match documented contract.
- [ ] Desktop, 390px and 320px panels remain bounded with no document overflow or stretched icons/rows.
- [ ] Reduced motion and overlay layering are checked.

## Behavior and accessibility
- [ ] Ctrl/⌘+K opens; configurable/false shortcut, editable-target, repeat and IME exclusions work.
- [x] Search normalization/filtering, grouping, suggested/recent, empty and loading work. Eight-results cap is implemented but not stress-checked in browser.
- [ ] ArrowUp/Down, Home/End, Enter, disabled skip, Escape/outside, selection, focus entry/return and Tab behavior work. Fresh 2026-11-09 live review confirms ArrowUp/Down, Home/End on an empty query, disabled-item skipping, Enter selection, Escape close and focus return; outside-dismiss and Tab behavior remain pending.
- [x] Dialog, labelled input, listbox/group/option names, selected/disabled state, live loading/results and icon hiding appear in AX tree; dangling aria-controls in empty/loading was fixed and rechecked.
- [ ] Independent screen-reader review is recorded; no inaccessible command-only path is introduced.

## Engineering
- [x] `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, and `git diff --check` pass. Build reports a 898.75KB JS chunk above the 500KB advisory threshold.
- [x] Local browser review and verification evidence are recorded; responsive, exact matched design reference, full interaction matrix and independent screen-reader items above remain open before calling the component done.

## Keyboard and search follow-up — 2026-11-09
- [x] Ctrl+K opens the dialog with focus in its labelled combobox; Escape closes it and restores focus to the trigger.
- [x] End selects the last enabled result; ArrowUp moves to the preceding enabled result; Home selects the first result. With Settings disabled, ArrowDown skips it and selects Projects.
- [x] Enter emits the selected command and closes the dialog; Persian query «تنظیمات» filters to the matching item, and an unmatched query exposes the no-results message.
- [ ] This review did not test configurable/false shortcut, editable-target/repeat/IME exclusion, Tab/outside dismissal, responsive bounds, matched visual comparison, reduced motion or independent screen-reader output; family DoD remains open.
