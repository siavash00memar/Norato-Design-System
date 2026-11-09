# Checklist — Notification Center Popover fit

- [x] Reproduced 480px panel overflowing to y=-173.6px at 430×676.
- [x] At the tested edge trigger position, Popover bounds fit the collision-safe available height: y=8..306.2px, height 298.2px.
- [x] Long content scrolls inside the Popover and all item/action targets remain at least 48px.
- [x] RTL and LTR placement/reading direction, Escape close, focus return for Popover, and Panel presentation remain correct at 430×676.
- [x] At 430×676 the document remains 414px wide with no horizontal overflow.
- [x] Keyboard-only Popover: Enter opens; Tab traverses Mark all → All → Mentions → first notification; Enter activates selection, closes and returns focus to bell; Enter reopens; Escape closes and returns focus to bell.
- [x] Keyboard-only Panel at 1280×720: Enter opens and focuses close; Tab moves through Mark all → All → Mentions → first notification within the dialog; Enter activates and returns focus to bell; Escape also closes and returns focus to bell. RTL panel measures 400×720px at x=0 with no document overflow.
- [x] Exact 390×844 and 320×640 layouts: document widths 375px/305px; Popover 320×382.2px at x47,y8 and 296×401.4px at x8,y8; Panel 390×844px and 320×640px at x0; no document overflow. Popover scrolls 483px of content internally and retains an 8px trigger gap.
- [x] Real pointer click with bell at y921..969 in a 390×1034 viewport opens Popover at y433..913, preserving 8px gaps to both bell and fixed mobile navigation; content scrolls internally and document width remains 375px.
- [x] At 390×1000 and scrollY=0, the fixed mobile navigation starts at y=943 and overlaps the bell's lower 26px; a 35px normal scroll exposes the full 48px target with 9px clearance and no document overflow.
- [x] Live outside clicks on the page heading dismissed both Popover and Panel; each closed surface was removed and the trigger returned to closed state.
- [ ] Independent screen-reader review and browser emulation of `prefers-reduced-motion: reduce` remain open. The stylesheet contains a reduced-motion rule, but matchMedia was false in this session and emulation was not run.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build` and `git diff --check` pass.
- [x] Evidence is recorded; changes are pushed and remote parity verified (`779ba38`).
