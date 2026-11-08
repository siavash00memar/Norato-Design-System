# Time Picker — DoD checklist

- [x] design reference and Norato exact component pages reviewed at matching desktop 1280×720 and narrow mobile 499×932 viewports.
- [x] Default specimen has bounded dotted/glass frame, Default marker, compact columns and no vertical stretch; palette remains Norato.
- [x] Selected cells in the inert specimen use Norato brand yellow with dark text, matching the already-yellow live adapter and the user's active accent rule.
- [x] One/range controlled v-model contract and all five variants work; generated example stays synchronized.
- [x] 24-hour model, LTR digits, 12-hour AM/PM conversion, minute steps, slot availability and chronological range constraints are correct.
- [x] Popup placement below/above, viewport collision, outside close, Escape and focus restoration work.
- [x] RTL, pointer, keyboard, visible focus, 48px targets and responsive no-overflow pass.
- [x] Disabled/loading/error/required/helper states and accessible name/value/description are verified in the browser accessibility tree.
- [x] Button-style page has inert preview, runnable playground, copyable code and nine contract sections.
- [x] Contract, catalog, export, usage, primitive map, Figma rules, task ledger, request checklist and error log are current.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck/build and `git diff --check` pass. The latest Vite build reports the production JS chunk at 817.24KB, above its 500KB advisory threshold.
- [ ] Independent screen-reader review remains open; keep the component maturity at Adapted until it is reviewed.

## Browser evidence (2026-11-01)

- Desktop matched comparison: design reference frame 636×300px and picker card 138×179px; Norato frame 584×288px (content-column constrained) and card 136×172px. Both show a compact two-column specimen and Default marker; Norato keeps the blue semantic selection. The selected card does not stretch to fill frame height.
- Narrow mobile matched comparison at 499×932: design reference frame 436×300px/card 138×179px; Norato frame 452×288px/card 136×172px. Document width is 484px and has no horizontal overflow.
- Live popup bounds: 360×397.2px, contained within viewport both when opened above a low anchor and below a high anchor; mobile right edge 468px within 499px. Hour/minute controls remain 48px minimum targets; ArrowDown moved focus, Enter changed 14:30→15:30, and focus ring measured 2px with 4px offset and a 2px yellow contrast halo.
- Modes: Columns displays five nearby values per column; 12h correctly maps PM 3 to 15:30 and AM 3 to 03:30; Wheel presents 24 hours and 12 five-minute entries and keyboard selection works; Slots disables 10:30 and selects 09:30; Range stores start, then swaps a crossed 10:00 end around an 11:00 start to maintain 10:00–11:00.
- Step 15 displayed 00/15/30/45; required toggles native required and generated snippet; error is linked with `aria-describedby` and sets `aria-invalid`; disabled disables both entry and trigger; loading sets `aria-busy`, disables trigger and announces status. Escape returns focus to trigger; click outside closes and leaves focus on the outside action.
- All nine Button-style contract sections render. Browser console error list was empty; default single/columns/medium/5-minute, 14:30 state restored.
- Implementation checkpoint `8236b8a` is on `origin/master`; the remote hash matched local HEAD after push.

## Accent correction follow-up (2026-11-07)

- The earlier screenshot's blue selected cells and the old contract rule are superseded by the user's explicit Norato-yellow accent instruction. The inert sample's existing CSS selector now uses the yellow and text-primary tokens; the live adapter already used the same selection colors.
- At desktop 1280×720, the static selected cells and the interactive `aria-pressed=true` cells both compute to `rgb(253, 193, 1)` with `rgb(26, 26, 26)` text. The static frame remains 584×288px.
- At mobile 499×932, the static frame remains 452×288px vs design reference's 436×300px. Both documents are 484px wide (no horizontal overflow); Norato's selected cells remain yellow/dark while design reference's are black per its own reference theme. Static card stays centered and bounded.
- Independent screen-reader review remains open, so component maturity stays Adapted.
