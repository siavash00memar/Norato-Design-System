# Select — Checklist

- [x] Constitution, Specify, Clarify and Plan gates recorded before implementation.
- [x] design reference source and current Select contract/playground inspected.
- [x] Legacy selector audit found the unframed Select-specific rule; neutralize/rewrite it rather than append a competing override.
- [x] Top specimen matches design reference composition and has the Default marker using Norato tokens.
- [x] Top specimen content shows no preselected value and the complete Persian placeholder «یک شهر انتخاب کنید»; live playground default remains Tehran.
- [x] No vertical or horizontal stretch; desktop and 390px mobile geometry measured with equal design reference viewport.
- [x] RTL and 48px target retained.
- [x] Keyboard focus on the active option has a visible tokenized 2px ring with 4px offset; Enter selected Isfahan and updated the committed value in the browser.
- [x] Multi-select selection remains staged until confirm; cancel and confirm paths verified.
- [x] Search groups, disabled option exposure and loading state checked. Disabled/read-only/error playground controls exist but their full visual matrix is still open.
- [x] Button-like page sections and anchors present in browser.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck, production build and `git diff --check` pass (build chunk warning retained).
- [x] `docs/request-validation-checklist.md` reports the actual render, interaction evidence, limitations and DoD status.
- [x] Open-menu mobile geometry re-captured at an enforced 390×844 viewport: menu bounds x=16..359, y=10..394.5px, 343×384.5px; document width 390px; six option rows remain 48px high. Escape closed the menu and returned focus to the trigger.
- [x] Combined state/size/label/display matrix was exercised in the live playground: 96 cases (single/chips/summary × label inside/outside × four sizes × required+error/error+disabled/error+read-only/error+loading). No issues in RTL, minimum 48px target, document overflow, error association, state ARIA, disabled behavior or loading status/busy semantics.
- [x] Static States gallery now follows design reference's title+description card structure; all 18 Select/Multi Select/Select Option states retain family names and Persian descriptions. Norato state accents, RTL, desktop 3-column and mobile 2-column geometry were verified at the same 1195×765 and 390×844 viewports; no overflow or shape distortion.
- [ ] Select adapter's full pixel-level comparison of every visual state/variant and independent screen-reader software remain open; the 96-case matrix validates live geometry/semantics but is not a screenshot diff of every cell.
- [x] Follow-up browser pass (2026-11-09): opened the searchable Select, verified the listbox exposes grouped options plus a disabled option, Escape closed it and returned to the trigger, ArrowDown moved from search to the selected option and through the list, and Enter committed Isfahan. Reopened and used ArrowDown/ArrowUp/Enter to restore the fixture to Tehran. The visible control and live selection summary both reported Tehran afterward.
- [x] Follow-up 2026-11-09: changed the shared focus-contrast outline to dark amber while retaining the yellow focus ring. The live Reka listbox showed the focused selected option with amber+yellow focus styling; ArrowDown left the controlled value unchanged, and Escape closed the listbox and returned focus to the trigger. The static Focus card uses the new amber token. Token/catalog/type/build/diff gates pass. The complete state screenshot matrix and independent screen-reader review stay open.


- [x] Follow-up 2026-11-09 after shared-frame update: matched 390×844 and 320×844 reference/Norato browser captures. At 390, frame widths are 327.2/326.4px; at 320 they are 256.8/256px; heights match at 300px. Local document widths are 375/305px with no overflow. At 320, the reference document is 326px and overflows horizontally; Norato preserves the bounded page. Responsive cap uses the viewport and semantic spacing token. Full state screenshot matrix and independent screen-reader review remain open.
- [x] Fresh mobile comparison in the same browser session confirms the unselected Persian placeholder, RTL label, and left-side chevron remain legible and contained. Exact 390/320 geometry and no-overflow evidence remains the source of measurement; exhaustive visual states remain open.

## Select contract copy and frame parity — 2026-11-14

- [x] Matched 1265×713 local/reference screenshots show a 300px-high dotted frame, 300×48px visual field, RTL label and left-side chevron. The local frame remains bounded to its page column.
- [x] Preserved the local, user-approved placeholder `یک شهر انتخاب کنید`; the reference phrase is different. The unselected specimen is distinct from the live playground, which defaults to Tehran.
- [x] Fresh browser AX/keyboard pass exposed option groups, selected and disabled choices; ArrowDown and Enter selected Isfahan, then Tehran was restored through the same keyboard path.
- [x] Reconciled the component contract's stale placeholder and frame-height description.
- [ ] Full Select state-by-state screenshot comparison and independent screen-reader review remain open; Select DoD stays open.

## Desktop frame width follow-up — 2026-11-09

- [x] Same-viewport 1265×713 screenshots after applying a 2px semantic token allowance show the local Select preview frame visually aligned in width with the reference and both remain 300px high.
- [x] Trigger/menu geometry and the mobile frame selector were not modified.
- [x] The 390×844/320×844 browser review after this desktop source change passes within 1px of the reference frame. Local document widths are 375px/305px without overflow; the live 320px listbox is bounded and Escape restores focus. The full state screenshot matrix and independent screen-reader review remain open; Select DoD stays open.

## Placeholder copy correction — 2026-11-10

- [x] Fresh browser render exposed the inert top specimen's placeholder as the incomplete phrase «به شهر انتخاب کن».
- [x] Corrected the specimen to «یک شهر انتخاب کنید»; the field remains 300×48px, RTL, unselected, and includes the left-side chevron inside the 300×300px dotted frame.
- [ ] Full state screenshot comparison and independent screen-reader review remain open; Select DoD stays open.

## Fresh Select browser review (2026-11-10)

- [x] Rechecked the live route in Chrome: the open control exposes a custom Reka listbox/search/grouped options, not native browser select UI. ArrowDown focused the selected option, ArrowDown moved to Isfahan, Enter committed it and updated trigger/status; reopening and using ArrowDown/Enter restored Tehran; Escape closed the list and returned focus to the trigger. The fixture is left at Tehran.
- [x] Matched 390×844 and 320×844 reference/local static specimens in the browser. At 390, frames are 327×300px and 326×300px with document widths 375/375px; at 320, frames are 257×300px and 256×300px. The reference document reaches 326px at 320 while the local page remains 305/305px without horizontal overflow.
- [x] Local 390px open-menu capture shows a custom Reka listbox measuring 343×384.5px, search input and grouped options; browser accessibility tree exposes the list and selected/disabled options. Escape/focus return and the full six-row menu were previously verified.
- [x] Actual Vue Select route has zero native `<select>` elements; its runtime trigger is a custom combobox/listbox. The shared `PlaygroundSelect` also renders a custom listbox. This confirms the user-facing Vue dropdowns do not invoke the browser's native select UI.
- [x] Follow-up source audit found an unexported, unused `core-html` Select helper that emitted native `<select>` markup. The helper and its orphaned HTML/CSS styles were removed; Vue Select and its custom playground listbox remain unchanged.
- [ ] Full pixel-level screenshots for every visual state combination and independent screen-reader verification remain open.

## Mobile bottom-navigation clearance — 2026-11-10

- [x] Fresh 320×844 screenshot shows the expanded single Select listbox reaching y=834 while the fixed mobile navigation begins at y=787; the final options are covered by the navigation.
- [x] Source audit confirms the popover is portaled and its max height uses Reka's available viewport height without reserving the app's mobile bottom area.
- [x] Limit the mobile popover to available height minus the existing 48px target + 24px content reservation; the option viewport remains internally scrollable.
- [x] At 320×844, the menu bottom is y=762 and the fixed navigation starts at y=788. Manual scroll brought the final disabled option into view above navigation; keyboard ArrowDown reached «رشت», and Escape closed the menu and returned focus to the Tehran trigger. AX still exposes all grouped/selected/disabled options and RTL remains intact.
- [ ] Exact 390×844 visual check and desktop geometry regression remain unverified in the current browser viewport; broader state screenshot-matrix and independent screen-reader review also remain open.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck/build, and `git diff --check` pass. The focused repair does not close Select's broader DoD.
