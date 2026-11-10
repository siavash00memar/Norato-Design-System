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

## Desktop frame width follow-up — 2026-11-09

- [x] Same-viewport 1265×713 screenshots after applying a 2px semantic token allowance show the local Select preview frame visually aligned in width with the reference and both remain 300px high.
- [x] Trigger/menu geometry and the mobile frame selector were not modified.
- [ ] The 390px/320px browser review after this source change, complete state screenshot matrix, and independent screen-reader review remain open; Select DoD stays open.

## Placeholder copy correction — 2026-11-10

- [x] Fresh browser render exposed the inert top specimen's placeholder as the incomplete phrase «به شهر انتخاب کن».
- [x] Corrected the specimen to «یک شهر انتخاب کنید»; the field remains 300×48px, RTL, unselected, and includes the left-side chevron inside the 300×300px dotted frame.
- [ ] Full state screenshot comparison and independent screen-reader review remain open; Select DoD stays open.

## Fresh Select browser review (2026-11-10)

- [x] Rechecked the live route in Chrome: the open control exposes a custom Reka listbox/search/grouped options, not native browser select UI. ArrowDown focused the selected option, ArrowDown moved to Isfahan, Enter committed it and updated trigger/status; reopening and using ArrowDown/Enter restored Tehran; Escape closed the list and returned focus to the trigger. The fixture is left at Tehran.
- [x] Matched 390×844 and 320×844 reference/local static specimens in the browser. At 390, frames are 327×300px and 326×300px with document widths 375/375px; at 320, frames are 257×300px and 256×300px. The reference document reaches 326px at 320 while the local page remains 305/305px without horizontal overflow.
- [x] Local 390px open-menu capture shows a custom Reka listbox measuring 343×384.5px, search input and grouped options; browser accessibility tree exposes the list and selected/disabled options. Escape/focus return and the full six-row menu were previously verified.
- [x] Actual Vue Select route has zero native `<select>` elements; its runtime trigger is a custom combobox/listbox. The shared `PlaygroundSelect` also renders a custom listbox. This confirms the user-facing Vue dropdowns do not invoke the browser's native select UI.
- [ ] Full pixel-level screenshots for every visual state combination and independent screen-reader verification remain open. The separate framework-neutral `core-html` helper still emits a native `<select>`; its use is outside the Vue page reviewed here and must not be mistaken for the Vue adapter.
