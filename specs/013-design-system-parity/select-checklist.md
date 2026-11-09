# Select — Checklist

- [x] Constitution, Specify, Clarify and Plan gates recorded before implementation.
- [x] design reference source and current Select contract/playground inspected.
- [x] Legacy selector audit found the unframed Select-specific rule; neutralize/rewrite it rather than append a competing override.
- [x] Top specimen matches design reference composition and has the Default marker using Norato tokens.
- [x] Top specimen content matches design reference's Default state at 1280×720: no preselected value, Persian placeholder visible; live playground default remains Tehran. Mobile viewport was not re-enforced in this correction and is not claimed as newly rechecked.
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
