# Command Palette — Checklist / Definition of Done

## Contract and structure
- [x] Typed Vue API, catalog/export/checker, inert preview, separate playground and generated code are aligned.
- [x] Page has Button's exact section order and a stable route.
- [x] Contract, Figma rules, request checklist, family ledger and error log match the implementation and evidence.

## Visual and responsive
- [x] Same-viewport design reference comparison records frame, panel, search, group, row and footer geometry. At 1904×950 local frame/panel/search/group/rows/footer measure 635.98×334, 454×246, 452×48, 452×31, 440×43 and 452×72.19px; rendered reference values are 636×333.88, 453.6×246.1, 451.44×47.25, 451.44×30.64, 438.48×43.2 and 451.44×73.17px. Every dimension differs by at most 1.52px. The row has 6px inline insets and 10px internal gaps; its icon tile is 26px with a 16px icon. At 390×844 the local frame/panel/search/rows/footer are 342×318, 338×246, 336×48, 320×43 and 336×72.2px; at 320×844 they are 272×341, 260×271, 258×72, 250×43 and 258×72.2px. Mobile measures remain within 4px of same-viewport reference, the search icon remains 18px, and document width stays within viewport.
- [x] Default/results/empty/loading and item default/active/disabled states have distinct Norato semantics.
- [x] RTL search/text/icon placement, LTR keyboard badges and yellow focus treatment match documented contract.
- [x] At 390×844 and 320×844 the static preview stays within the viewport with no document overflow; the search glyph remains 18×18px, row glyphs remain 16×16px, and rows remain 43px high without stretch.
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
- [x] `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, and `git diff --check` pass. Current build's main JS chunk is 440.40KB, below the 500KB advisory threshold.
- [x] Local browser review records the responsive geometry, exact matched composition and live interaction coverage for shortcuts, editable-target exclusion, search, empty/loading, result cap, disabled commands, keyboard selection, dismissal and focus handling.
- [ ] Independent screen-reader review is still required before closing the family DoD.

## Desktop preview-frame parity — 2026-11-09
- [x] Same-window screenshots before the change showed the Norato frame 32px shorter than the reference; widths differed by about 2px.
- [x] Updated only `--norato-command-palette-preview-frame-block-size` from 300px to 332px. The live local frame now measures about 628×330px against the reference's 630×331px; the panel and rows were not enlarged to fill the extra space.
- [x] The exact panel, row and footer comparison and 390/320px responsive comparison were completed in the 2026-11-10 follow-ups below.
- [ ] Independent screen-reader review remains open.

## Mobile preview geometry — 2026-11-10
- [x] At 390×844, local frame/panel/search/two rows/footer measured 342×318, 338×246, 336×48, 320×43 and 336×72.2px against reference 342×318, 337×246, 335×47, 322×43 and 335×73px.
- [x] At 320×844, local frame/panel/search/two rows/footer measured 272×341, 260×271, 258×72, 250×43 and 258×72.2px against reference 272×341, 261×271, 259×72, 246×43 and 259×73px. Reference overflow was not copied; local document stays 320px wide.
- [x] Both viewport DOM checks preserve RTL, 18×18px search glyphs and 16×16px row glyphs; the inert sample's 43px rows do not change the live dialog's 48px target.
- [ ] Independent screen-reader review remains open; shortcut exclusions and the per-group result cap are verified in their follow-ups below.

## Editable shortcut exclusion — 2026-11-10
- [x] A real browser reproduced the defect: empty and plaintext-only contenteditable regions opened the palette before correction.
- [x] After using `isContentEditable`, Ctrl+K still opens from the page and stays closed for input, textarea, both editable modes, and an ARIA textbox.
- [x] Repeat, `isComposing`, and keyCode 229 events remain excluded.
- [x] Meta+K, a custom shortcut, and disabled global shortcut behavior are verified in the shortcut-options section below.
- [ ] Independent screen-reader review remains open.

## Result cap — 2026-11-10
- [x] With temporary data exceeding the limit, the live browser rendered exactly eight options in the first group and retained one option in the separate Recent group.
- [x] Temporary test data was removed from the playground; implementation continues to cap each group independently.

## Shortcut configuration — 2026-11-10
- [x] Default Meta+K opened the palette in the live browser.
- [x] With temporary `shortcut="j"`, Ctrl+K stayed closed and Ctrl+J opened.
- [x] With temporary `:shortcut="false"`, Ctrl+K and Meta+K stayed closed; clicking the visible trigger opened the dialog.
- [x] Restored playground to default `shortcut="k"`; no temporary demo changes remain.

## Desktop panel geometry — 2026-11-10
- [x] At 1904×950 the static panel measures 454×246px vs the current rendered reference's 453.6×246.1px; frame is 635.98×334px vs 636×333.88px.
- [x] Search/rows measure 452×48px and 440×43px; search glyph remains 18px and row glyphs remain 16px inside 26px tiles with no vertical stretching.
- [x] Fresh 390×844 and 320×844 recheck preserves the mobile frame/panel sizes and has no document overflow.
- [x] Exact desktop row/footer comparison is completed in the Desktop composition follow-up below.
- [ ] Independent screen-reader review remains open.

## Desktop composition follow-up — 2026-11-10
- [x] Current reference and local render were compared at 1904×950. Frame, panel, search, group title, rows and footer all differ by at most 1.52px in width or height.
- [x] RTL search icon is at the right edge; row icon has a 26px tile and 16px glyph; footer hints occupy two RTL-aligned rows.
- [x] The 390×844/320×844 responsive frame and panel dimensions remain unchanged; static search icons remain 18px and the local document has no horizontal overflow.
- [x] The live interaction coverage is complete for the documented API and behaviors; see the checked behavior items above.
- [ ] Independent screen-reader review remains open.

## Keyboard and search follow-up — 2026-11-09
- [x] Ctrl+K opens the dialog with focus in its labelled combobox; Escape closes it and restores focus to the trigger.
- [x] End selects the last enabled result; ArrowUp moves to the preceding enabled result; Home selects the first result. With Settings disabled, ArrowDown skips it and selects Projects.
- [x] Enter emits the selected command and closes the dialog; Persian query «تنظیمات» filters to the matching item, and an unmatched query exposes the no-results message.
- [x] This 2026-11-09 review did not cover configurable shortcuts, editable-target/repeat/IME exclusion or responsive/row-footer geometry; those checks were completed in the dated follow-ups above. Keyboard/search behavior is verified.
- [ ] Independent screen-reader review remains open; family DoD remains open.

## Modal focus and overlay follow-up — 2026-11-09
- [x] Live screenshot shows the centered 600×375px dialog above a full-page blurred scrim; the page remains visible behind the modal.
- [x] Tab and Shift+Tab from the search combobox retain focus inside the modal; Escape closes it and restores trigger focus.
- [x] Clicking outside the open dialog closes it and returns focus to the trigger.
- [x] Reduced-motion emulation is verified in the 2026-11-10 follow-up below.
- [ ] Independent screen-reader review remains open.
- [x] Matched 390/320 viewport comparisons were recorded in the 2026-11-10 mobile follow-up above.

## Reduced-motion Loading state — 2026-11-10

- [x] Emulated `prefers-reduced-motion: reduce` in a 390×844 browser target and selected Loading. The live dialog remained RTL, 358px wide, focused, and within the 390px document viewport.
- [x] Dialog retained `aria-busy="true"`; visible Loading text remained `role="status"` with `aria-live="polite"`.
- [x] Spinner computed `animation-name: none` and `getAnimations().length` returned zero. Escape closed the dialog.
- [x] Exact row/footer geometry, responsive bounds, shortcut coverage and result-cap stress are verified in the follow-ups above.
- [ ] Independent screen-reader review remains open.
