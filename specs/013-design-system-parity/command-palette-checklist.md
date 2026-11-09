# Command Palette — Checklist / Definition of Done

## Contract and structure
- [x] Typed Vue API, catalog/export/checker, inert preview, separate playground and generated code are aligned.
- [x] Page has Button's exact section order and a stable route.
- [x] Contract, Figma rules, request checklist, family ledger and error log match the implementation and evidence.

## Visual and responsive
- [ ] Same-viewport design reference comparison records frame, panel, row and footer geometry. At 1904×950 the local frame/panel are 631.98×332 and 452×244px vs reference 630×331 and 452×244px. The panel is exact and the frame differs by 2px; exact desktop row/footer reference comparison remains open. At 390×844 the local frame/panel/search/rows/footer are 342×318, 338×246, 336×48, 320×43 and 336×72.2px; at 320×844 they are 272×341, 260×271, 258×72, 250×43 and 258×72.2px. Mobile measures remain within 4px of same-viewport reference.
- [x] Default/results/empty/loading and item default/active/disabled states have distinct Norato semantics.
- [x] RTL search/text/icon placement, LTR keyboard badges and yellow focus treatment match documented contract.
- [x] At 390×844 and 320×844 the static preview stays within the viewport with no document overflow; 18×18 icons remain intrinsic and rows remain 43px high without stretch.
- [x] Overlay layering is checked: the live dialog is centered above a full-page dimmed/blurred scrim.
- [x] Reduced-motion browser emulation confirms the loading spinner is fully static; visible and live Loading status, `aria-busy`, RTL and viewport bounds remain correct.

## Behavior and accessibility
- [x] Default Ctrl+K opens. Browser checks confirm it is ignored in input, textarea, empty and plaintext-only contenteditable regions, ARIA textbox roles, repeated events, active composition and keyCode 229.
- [x] Ctrl+K and Meta+K open with the default `k`; temporary browser checks confirmed `shortcut="j"` opens only on Ctrl+J, while `:shortcut="false"` ignores Ctrl+K and Meta+K. The manual trigger still opens when global shortcuts are disabled.
- [x] Search normalization/filtering, grouping, suggested/recent, empty and loading work. Browser stress check with more than eight matching items confirmed the first group renders exactly eight; a separate one-item group still renders one.
- [x] ArrowUp/Down, Home/End, Enter, disabled skip, Escape/outside, selection, focus entry/return and Tab behavior work. Fresh 2026-11-09 live review confirms ArrowUp/Down, Home/End on an empty query, disabled-item skipping, Enter selection, Escape and outside-click dismissal, trigger focus restoration, and Tab/Shift+Tab remaining within the modal.
- [x] Dialog, labelled input, listbox/group/option names, selected/disabled state, live loading/results and icon hiding appear in AX tree; dangling aria-controls in empty/loading was fixed and rechecked.
- [ ] Independent screen-reader review is recorded; no inaccessible command-only path is introduced.

## Engineering
- [x] `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, and `git diff --check` pass. Build reports a 898.75KB JS chunk above the 500KB advisory threshold.
- [x] Local browser review and verification evidence are recorded; responsive, exact matched design reference, full interaction matrix and independent screen-reader items above remain open before calling the component done.

## Desktop preview-frame parity — 2026-11-09
- [x] Same-window screenshots before the change showed the Norato frame 32px shorter than the reference; widths differed by about 2px.
- [x] Updated only `--norato-command-palette-preview-frame-block-size` from 300px to 332px. The live local frame now measures about 628×330px against the reference's 630×331px; the panel and rows were not enlarged to fill the extra space.
- [ ] Panel, row and footer geometry need a more exact measurement; 390/320px comparison and independent screen-reader review remain open.

## Mobile preview geometry — 2026-11-10
- [x] At 390×844, local frame/panel/search/two rows/footer measured 342×318, 338×246, 336×48, 320×43 and 336×72.2px against reference 342×318, 337×246, 335×47, 322×43 and 335×73px.
- [x] At 320×844, local frame/panel/search/two rows/footer measured 272×341, 260×271, 258×72, 250×43 and 258×72.2px against reference 272×341, 261×271, 259×72, 246×43 and 259×73px. Reference overflow was not copied; local document stays 320px wide.
- [x] Both viewport DOM checks preserve RTL and 18×18px icons; the inert sample's 43px rows do not change the live dialog's 48px target.
- [ ] Independent screen-reader review, full shortcut exclusion matrix, and result-cap stress remain open.

## Editable shortcut exclusion — 2026-11-10
- [x] A real browser reproduced the defect: empty and plaintext-only contenteditable regions opened the palette before correction.
- [x] After using `isContentEditable`, Ctrl+K still opens from the page and stays closed for input, textarea, both editable modes, and an ARIA textbox.
- [x] Repeat, `isComposing`, and keyCode 229 events remain excluded.
- [ ] Meta+K/configurable false shortcut behavior and independent screen-reader review remain open.

## Result cap — 2026-11-10
- [x] With temporary data exceeding the limit, the live browser rendered exactly eight options in the first group and retained one option in the separate Recent group.
- [x] Temporary test data was removed from the playground; implementation continues to cap each group independently.

## Shortcut configuration — 2026-11-10
- [x] Default Meta+K opened the palette in the live browser.
- [x] With temporary `shortcut="j"`, Ctrl+K stayed closed and Ctrl+J opened.
- [x] With temporary `:shortcut="false"`, Ctrl+K and Meta+K stayed closed; clicking the visible trigger opened the dialog.
- [x] Restored playground to default `shortcut="k"`; no temporary demo changes remain.

## Desktop panel geometry — 2026-11-10
- [x] At 1904×950 the static panel now measures 452×244px, matching the recorded reference exactly; frame is 631.98×332px vs 630×331px.
- [x] Search and rows remain 450×48 and 450×43px; both icons remain 18×18px with no vertical stretching.
- [x] Fresh 390×844 and 320×844 recheck preserves the mobile frame/panel sizes and has no document overflow.
- [ ] Exact desktop row/footer comparison and independent screen-reader review remain open.

## Keyboard and search follow-up — 2026-11-09
- [x] Ctrl+K opens the dialog with focus in its labelled combobox; Escape closes it and restores focus to the trigger.
- [x] End selects the last enabled result; ArrowUp moves to the preceding enabled result; Home selects the first result. With Settings disabled, ArrowDown skips it and selects Projects.
- [x] Enter emits the selected command and closes the dialog; Persian query «تنظیمات» filters to the matching item, and an unmatched query exposes the no-results message.
- [ ] This review did not test configurable/false shortcut, editable-target/repeat/IME exclusion, responsive bounds, exact row/footer visual comparison or independent screen-reader output; family DoD remains open. Reduced motion was verified in the 2026-11-10 follow-up below.

## Modal focus and overlay follow-up — 2026-11-09
- [x] Live screenshot shows the centered 600×375px dialog above a full-page blurred scrim; the page remains visible behind the modal.
- [x] Tab and Shift+Tab from the search combobox retain focus inside the modal; Escape closes it and restores trigger focus.
- [x] Clicking outside the open dialog closes it and returns focus to the trigger.
- [x] Reduced-motion emulation is verified in the 2026-11-10 follow-up below.
- [ ] Independent screen-reader review remains open.
- [ ] Fresh 390/320 viewport comparison remains open. The current browser controller has no viewport override; native Chrome screenshot/input attempts failed with access errors, so no mobile claim is made.

## Reduced-motion Loading state — 2026-11-10

- [x] Emulated `prefers-reduced-motion: reduce` in a 390×844 browser target and selected Loading. The live dialog remained RTL, 358px wide, focused, and within the 390px document viewport.
- [x] Dialog retained `aria-busy="true"`; visible Loading text remained `role="status"` with `aria-live="polite"`.
- [x] Spinner computed `animation-name: none` and `getAnimations().length` returned zero. Escape closed the dialog.
- [ ] Exact row/footer geometry, full responsive and shortcut matrices, result-cap stress, and independent screen-reader review remain open.
