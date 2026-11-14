# File Upload — DoD checklist

- [x] design reference and Norato exact pages reviewed at matched desktop 1280×720 and narrow mobile 499×932 viewports; desktop design reference frame 636×300px, Norato column-constrained frame 584×288px. Mobile Norato frame 320×288px; visual equality is not claimed where the documentation column differs.
- [x] Inert specimen has design reference's centered inner dropzone/default marker hierarchy, bounded dotted-glass frame and fixed inner height. At 1280×720: design reference 636×300px with inner 367×154px; Norato 584×288px with inner 380×160px because the docs column is narrower. At 390×844: design reference 327×300px with inner 321×154px; Norato 320×288px with inner 302×160px. Both document widths are 375px. The only branch-shadowing defect is removed.
- [x] Same-size 1265×713 browser comparison on 2026-11-10: design reference File Item uses a neutral icon tile; local File Item icons render on Norato neutral surface with secondary text after replacing the decorative `info-container`/brand-blue treatment. Dropzone action stays yellow; no error or progress colors changed.
- [x] Four public adapters are exported. File Item's selected/uploading/complete/error presentation, real supplied progress semantics, failure text, retry, cancel and removal were checked in the runnable controlled queue. Upload Tile and Avatar Upload both accepted a real local PNG through their native chooser and rendered the supplied image preview.
- [ ] Native input now mirrors actual `File` objects in the controlled queue, restoring required validity and named form data after selection; same-file picker reset/cancel path was added. Browser verification is pending.
- [x] Native picker opens by pointer and by Enter/Space; real chooser accepted a PNG; unsupported extension, 10,000,001-byte size and over-count batches were rejected with visible reason while valid queue entries remained. Input value resets after every selection. Native OS drag payload remains unverified.
- [x] Playground and generated usage snippet expose the existing single/multiple mode consistently; single mode uses a non-multiple picker and replaces an existing selection, while multiple mode enforces the count ceiling.
- [x] Selected is explicitly separate from transfer completion; transport/status/progress are host-controlled. No fake network progress is used.
- [x] Controlled queue actions for error, retry to uploading, cancel/removal and LTR file name within RTL surroundings were verified with an in-page fixture.
- [x] Focus-visible state, disabled input/button semantics and 48px action target were observed. The Required playground option sets the native file input's `required` property; on the empty input the browser reports `validity.valueMissing=true`, the generated usage snippet gains/removes `required`, and assistive technology receives «الزامی» on the exposed Dropzone name even though the clipped native input is omitted from the browser AX tree.
- [x] Browser recheck on 2026-11-10: enabling the playground's disabled option exposed both the Dropzone trigger and its nested chooser button as disabled in the browser accessibility tree; the generated Vue example gained `disabled`. Turning the option off restored both controls and the snippet. This confirms the disabled state, but does not establish keyboard tab-order behavior or replace independent screen-reader review.
- [ ] Browser verification of required form submission/error presentation, real drag-over, native OS file drop payload, live screen-reader announcement and reduced-motion behavior remains open.
- [x] Upload Tile is 112×112px and Avatar Upload 96×96px; the small viewport has no horizontal overflow.
- [x] Actual Upload Tile image selection produced a loaded blob preview in its 112×112px square and named the action from the selected filename. Avatar selection produced a loaded blob preview in its 96×96px circular frame with a 50px radius. Clear actions returned both playground specimens to their empty states.
- [x] Button-style component page has inert preview, runnable playground, synchronized copyable Vue example and all nine contract sections.
- [x] Contract, catalog, package exports, usage example, primitive map, Figma rules, task log, request checklist and error log are synchronized.
- [x] Fresh gates on 2026-11-07: `pnpm test:file-upload` (5/5), `pnpm check:tokens`, `pnpm check:catalog` (49), Vue typecheck/build and `git diff --check` pass. Build bundle is 817.78KB and Vite emits its >500KB advisory; independent screen-reader review remains open.
- [ ] Browser DoD remains open for actual OS file drag/drop, independent screen-reader review, reduced-motion verification and complete state-specific keyboard/focus coverage; chooser, validation and both selection modes are verified. Latest GitHub push `7ac56ca` is confirmed on `origin/master`.
- [x] Pure validator unit tests cover extension/MIME/wildcard/empty accept, exact size boundary, partial batches, type/size/count reasons, remaining capacity, single mode, and invalid numeric limits. This proves decision logic only; native picker and drag/drop browser evidence remain open.
- [x] Native FileList helper contract tests preserve real File identity and order, omit queue-only sample rows, clear empty queues, and safely no-op without an input or DataTransfer factory. These tests do not prove real browser validity, FormData or picker behavior.
- [x] Upload Tile's displayed progress indicator has an accessible name derived from the selected filename; its numeric `aria-valuenow` remains clamped to 0–100.
- [x] File Upload playground Tile progress slider computes to the semantic Norato yellow (`rgb(253, 193, 1)`) in a 133×48px target; its native track/thumb stay centered and keyboard still changes 42→41→42. Public Range is unchanged.
- [x] Browser accessibility tree reports the Upload Tile progress indicator as “پیشرفت بارگذاری افزودن فایل” with value 42; the generated name includes the current filename and its numeric value is retained.
- [x] Follow-up gates: `pnpm check:tokens`, `pnpm check:catalog`, TypeScript/Vite build and `git diff --check` pass.
- [ ] Native OS drop payload, independent screen-reader review, reduced motion and complete combined keyboard/focus cases remain open.

## File Item action focus continuity — 2026-11-10

- [x] Browser reproduced lost focus after retry changed Error → Uploading and replaced the action with Cancel; implementation now restores focus to the enabled replacement button in that same row.
- [x] Browser verified retry focus on “لغو بارگذاری sample-۱.pdf”; the progressbar remained named and exposed value 42.
- [x] Browser verified removing a focused Cancel action returns focus to the Dropzone when the queue empties.
- [x] With two queued rows, browser verified removing the first focused Delete action moves focus to the remaining row's Delete action; removing the final row returns focus to the Dropzone.
- [ ] Native OS drop payload, independent screen-reader review, reduced-motion verification and other combined keyboard/focus state paths remain open; this scoped correction does not close File Upload DoD.

## Browser recheck — 2026-11-07

- [x] Removed the early flat-text `v-else-if` branch that shadowed the styled preview. design reference/Norato matched viewport review verifies the Default marker, inner dropzone, frame size and no mobile overflow.
- [x] Real chooser tests cover pointer and Enter/Space, accepted PNG, unsupported type, size/count rejection, single replacement and multiple limit. Public `multiple` control and generated snippet were verified.
- [x] Live and inert upload glyphs now use line SVG and a yellow/dark action treatment; the secondary specimen wash is neutral, with no blue action accent.
- [ ] Actual OS drag/drop payload, independent screen-reader review, reduced-motion and remaining combined keyboard/state cases are still open; keep maturity Adapted.

## Specimen icon review — 2026-11-14

- [x] Same-viewport local desktop render after correction shows a compact rounded-square neutral tile with Norato-yellow SVG glyph, replacing the oversized solid-yellow circular tile. Surrounding dotted frame, dropzone, text and RTL layout remain intact.
- [x] CSS-only specimen change uses existing semantic spacing/surface/radius tokens; executable Dropzone behavior is unchanged.
- [ ] Exact matched-viewport reference recheck, mobile review for this correction and complete File Upload Final DoD remain open.
- [x] Fresh browser state check: toggling Required on exposes «پیوست‌ها الزامی» for both Dropzone controls and adds `required` to generated Vue usage; toggling it off restores the default names and snippet. This does not verify native form submission or actual file transfer.
