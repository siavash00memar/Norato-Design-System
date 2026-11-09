# Checklist — Notification Center Popover fit

- [x] Reproduced 480px panel overflowing to y=-173.6px at 430×676.
- [x] At the tested edge trigger position, Popover bounds fit the collision-safe available height: y=8..306.2px, height 298.2px.
- [x] Long content scrolls inside the Popover and all item/action targets remain at least 48px.
- [x] RTL and LTR placement/reading direction, Escape close, focus return for Popover, and Panel presentation remain correct at 430×676.
- [x] At 430×676 the document remains 414px wide with no horizontal overflow.
- [x] Keyboard-only Popover: Enter opens; Tab traverses Mark all → All → Mentions → first notification; Enter activates selection, closes and returns focus to bell; Enter reopens; Escape closes and returns focus to bell.
- [x] Keyboard-only Panel at 1280×720: Enter opens and focuses close; Tab moves through Mark all → All → Mentions → first notification within the dialog; Enter activates and returns focus to bell; Escape also closes and returns focus to bell. RTL panel measures 400×720px at x=0 with no document overflow.
- [ ] Exact 390×844/320×640 viewports, bottom-edge placement, and independent screen-reader review remain open.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build` and `git diff --check` pass.
- [x] Evidence is recorded; changes are pushed and remote parity verified (`779ba38`).
