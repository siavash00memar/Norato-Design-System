# Pagination — DoD

- [x] Desktop visual comparison (2026-11-09) after specimen geometry change: at the same 1920×1080 browser viewport, the local preview now uses the centered dotted glass frame, a 288px frame height, and the Norato yellow selected page; the default outlined circles around specimen arrows were removed. The reference frame is about 630px wide and local available content constrains it to about 580px, with no visible stretch.
- [ ] Recheck frame width and overflow at 390px/320px after the frame change; mobile visual comparison remains open.
- [x] Numbers/Simple and Small/Medium modes render; page window stays bounded. Prior live-browser evidence confirms page selection, `aria-current`, both disabled boundaries and the Simple summary. Exhaustive edge totals and all mode/size combinations remain open.
- [x] Prior live-browser evidence confirms RTL layout, keyboard focus ring (2px), 48px live targets, mobile Simple mode without document overflow, and Numbers mode with internal scrolling. This specimen-only change was also rechecked in the desktop browser.
- [x] Button-style page, controlled adapter, copyable snippet, catalog, export, primitive map and nine-section contract are present and agree.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck and production build pass after the final code edits; build retains the known large-chunk advisory. `git diff --check` is recorded in the shared request checklist.
- [ ] Independent screen-reader review and exhaustive mode/size/edge combinations remain open; maturity stays Adapted.
