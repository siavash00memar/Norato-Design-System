# File Upload — DoD checklist

- [x] Lemon and Norato exact pages reviewed at matched desktop 1280×720 and narrow mobile 499×932 viewports; desktop Lemon frame 636×300px, Norato column-constrained frame 584×288px. Mobile Norato frame 320×288px; visual equality is not claimed where the documentation column differs.
- [x] Inert specimen has Lemon's centered inner dropzone/default marker hierarchy, Norato colors, bounded dotted-glass frame and fixed inner height; desktop/mobile dimensions remain bounded.
- [x] Four public adapters are exported. File Item's selected/uploading/complete/error presentation, real supplied progress semantics, failure text, retry, cancel and removal were checked in the runnable controlled queue. Upload Tile states are exposed in the playground; hands-on validation of real image selection remains open.
- [ ] Native picker open/selection by pointer and keyboard, real file drag/drop, accepted/rejected formats, file size/count and single mode were not executable through the available browser controls in this run; enforcements are implemented but remain unverified in-browser.
- [x] Selected is explicitly separate from transfer completion; transport/status/progress are host-controlled. No fake network progress is used.
- [x] Controlled queue actions for error, retry to uploading, cancel/removal and LTR file name within RTL surroundings were verified with an in-page fixture.
- [x] Focus-visible state, disabled input/button semantics and 48px action target were observed. Required validation, real drag-over, live screen-reader announcement and reduced-motion behavior remain to verify.
- [x] Upload Tile is 112×112px and Avatar Upload 96×96px; the small viewport has no horizontal overflow.
- [x] Button-style component page has inert preview, runnable playground, synchronized copyable Vue example and all nine contract sections.
- [x] Contract, catalog, package exports, usage example, primitive map, Figma rules, task log, request checklist and error log are synchronized.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck/build and `git diff --check` pass. Vite reports the 726.55KB JavaScript chunk advisory; independent screen-reader review remains open.
- [ ] Browser DoD remains open until real file picker/drop/validation behavior is verified; GitHub parity is confirmed at `2c399b0f5995dbc3a33dee0cf59c1ce8eaac25e6`.
