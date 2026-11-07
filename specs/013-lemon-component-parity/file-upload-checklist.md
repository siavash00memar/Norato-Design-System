# File Upload — DoD checklist

- [x] Lemon and Norato exact pages reviewed at matched desktop 1280×720 and narrow mobile 499×932 viewports; desktop Lemon frame 636×300px, Norato column-constrained frame 584×288px. Mobile Norato frame 320×288px; visual equality is not claimed where the documentation column differs.
- [x] Inert specimen has Lemon's centered inner dropzone/default marker hierarchy, bounded dotted-glass frame and fixed inner height. At 1280×720: Lemon 636×300px with inner 367×154px; Norato 584×288px with inner 380×160px because the docs column is narrower. At 390×844: Lemon 327×300px with inner 321×154px; Norato 320×288px with inner 302×160px. Both document widths are 375px. The only branch-shadowing defect is removed.
- [x] Four public adapters are exported. File Item's selected/uploading/complete/error presentation, real supplied progress semantics, failure text, retry, cancel and removal were checked in the runnable controlled queue. Upload Tile states are exposed in the playground; hands-on validation of real image selection remains open.
- [x] Native picker opens by pointer and by Enter/Space; real chooser accepted a PNG; unsupported extension, 10,000,001-byte size and over-count batches were rejected with visible reason while valid queue entries remained. Input value resets after every selection. Native OS drag payload remains unverified.
- [x] Playground and generated usage snippet expose the existing single/multiple mode consistently; single mode uses a non-multiple picker and replaces an existing selection, while multiple mode enforces the count ceiling.
- [x] Selected is explicitly separate from transfer completion; transport/status/progress are host-controlled. No fake network progress is used.
- [x] Controlled queue actions for error, retry to uploading, cancel/removal and LTR file name within RTL surroundings were verified with an in-page fixture.
- [x] Focus-visible state, disabled input/button semantics and 48px action target were observed. Required validation, real drag-over, live screen-reader announcement and reduced-motion behavior remain to verify.
- [x] Upload Tile is 112×112px and Avatar Upload 96×96px; the small viewport has no horizontal overflow.
- [x] Button-style component page has inert preview, runnable playground, synchronized copyable Vue example and all nine contract sections.
- [x] Contract, catalog, package exports, usage example, primitive map, Figma rules, task log, request checklist and error log are synchronized.
- [x] Fresh gates on 2026-11-07: `pnpm test:file-upload` (5/5), `pnpm check:tokens`, `pnpm check:catalog` (49), Vue typecheck/build and `git diff --check` pass. Build bundle is 817.78KB and Vite emits its >500KB advisory; independent screen-reader review remains open.
- [ ] Browser DoD remains open for actual OS file drag/drop, independent screen-reader review, reduced-motion verification and complete state-specific keyboard/focus coverage; chooser, validation and both selection modes are verified. Previous pushed checkpoint is `2c399b0f5995dbc3a33dee0cf59c1ce8eaac25e6`.
- [x] Pure validator unit tests cover extension/MIME/wildcard/empty accept, exact size boundary, partial batches, type/size/count reasons, remaining capacity, single mode, and invalid numeric limits. This proves decision logic only; native picker and drag/drop browser evidence remain open.

## Browser recheck — 2026-11-07

- [x] Removed the early flat-text `v-else-if` branch that shadowed the styled preview. Lemon/Norato matched viewport review verifies the Default marker, inner dropzone, frame size and no mobile overflow.
- [x] Real chooser tests cover pointer and Enter/Space, accepted PNG, unsupported type, size/count rejection, single replacement, multiple limit, and clearing the native input value. Public `multiple` control and generated snippet were verified.
- [x] Live and inert upload glyphs now use line SVG and a yellow/dark action treatment; the secondary specimen wash is neutral, with no blue action accent.
- [ ] Actual OS drag/drop payload, independent screen-reader review, reduced-motion and remaining combined keyboard/state cases are still open; keep maturity Adapted.
