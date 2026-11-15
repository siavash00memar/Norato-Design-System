# File Upload — DoD checklist

## Narrow live Disabled and Required state recheck — 2026-11-16

- [x] At the actual narrow local render, the Dropzone, square Upload Tile and circular Avatar Upload remain proportioned; the visible rows stay within the page column. This is a local-only screenshot review, not a fresh matched-reference comparison.
- [x] Enabling global Disabled exposed the Dropzone, Avatar Upload and form-check action as disabled in the browser accessibility tree; the generated Vue sample added `disabled`. Turning it off restored all three controls and removed the prop.
- [x] Enabling Required added «الزامی» to the Dropzone's accessible name and added `required` to its generated Vue sample. Turning it off restored the original optional sample. No file was selected or transmitted during this check.
- [ ] This recheck does not close native picker cancellation, real OS drag/drop payload, the full combined keyboard/state matrix, matched visual states, or independent screen-reader review; File Upload DoD remains open.

- [x] design reference and Norato exact pages reviewed at matched desktop 1280×720 and narrow mobile 499×932 viewports; desktop design reference frame 636×300px, Norato column-constrained frame 584×288px. Mobile Norato frame 320×288px; visual equality is not claimed where the documentation column differs.
- [x] Inert specimen has design reference's centered inner dropzone/default marker hierarchy, bounded dotted-glass frame and fixed inner height. At 1280×720: design reference 636×300px with inner 367×154px; Norato 584×288px with inner 380×160px because the docs column is narrower. At 390×844: design reference 327×300px with inner 321×154px; Norato 320×288px with inner 302×160px. Both document widths are 375px. The only branch-shadowing defect is removed.
- [x] Same-size 1265×713 browser comparison on 2026-11-10: design reference File Item uses a neutral icon tile; local File Item icons render on Norato neutral surface with secondary text after replacing the decorative `info-container`/brand-blue treatment. Dropzone action stays yellow; no error or progress colors changed.
- [x] Four public adapters are exported. File Item's selected/uploading/complete/error presentation, real supplied progress semantics, failure text, retry, cancel and removal were checked in the runnable controlled queue. Upload Tile and Avatar Upload both accepted a real local PNG through their native chooser and rendered the supplied image preview.
- [x] Local browser chooser selected an actual PNG through the Dropzone; the controlled row appeared, the native input exposed its fake-path value, and required validity changed to valid. Clearing the controlled queue emptied the native value and restored `valueMissing=true`.
- [x] A local submit control now constructs real browser `FormData` from the named form and reports only field names and file metadata. With both inputs selected, the browser showed `attachments` and `avatar` mapped to `edited-landing-mobile.png (174524 bytes)`; Enter activated the 48px target. The URL stayed on the local playground and the handler prevents form navigation; no upload endpoint is called.
- [x] Removing the Dropzone file changed the next local payload to «attachments: بدون فایل». With Required on and both inputs empty, native `valueMissing=true` blocked submission; selecting both made their native validity pass. The same local PNG was successfully selected again for Dropzone after removal and Avatar after clearing its controlled value.
- [x] Avatar Upload mirrors its controlled `modelValue` File into the native FileList, exposes optional `name`, and uses the actual named `avatar` form entry; clearing it emptied its native value and cleared the prior payload report. Its `required` state followed native validity in the browser.
- [ ] Native chooser cancellation/restoration, real OS drag/drop payload, and independent screen-reader review remain unverified. The browser inspection evaluator still hides direct FileList entries; payload evidence comes from the page's real `FormData` output.
- [x] Native picker opens by pointer and by Enter/Space; real chooser accepted a PNG; unsupported extension, 10,000,001-byte size and over-count batches were rejected with visible reason while valid queue entries remained. Input value resets after every selection. Native OS drag payload remains unverified.
- [x] Playground and generated usage snippet expose the existing single/multiple mode consistently; single mode uses a non-multiple picker and replaces an existing selection, while multiple mode enforces the count ceiling.
- [x] Selected is explicitly separate from transfer completion; transport/status/progress are host-controlled. No fake network progress is used.
- [x] Controlled queue actions for error, retry to uploading, cancel/removal and LTR file name within RTL surroundings were verified with an in-page fixture.
- [x] Focus-visible state, disabled input/button semantics and 48px action target were observed. The Required playground option sets the native file input's `required` property; on the empty input the browser reports `validity.valueMissing=true`, the generated usage snippet gains/removes `required`, and assistive technology receives «الزامی» on the exposed Dropzone name even though the clipped native input is omitted from the browser AX tree.
- [x] Browser recheck on 2026-11-10: enabling the playground's disabled option exposed both the Dropzone trigger and its nested chooser button as disabled in the browser accessibility tree; the generated Vue example gained `disabled`. Turning the option off restored both controls and the snippet. This confirms the disabled state, but does not establish keyboard tab-order behavior or replace independent screen-reader review.
- [x] Browser verified empty required fields block the in-page form inspector, selected named files produce local FormData output, and Enter activates the submit button.
- [x] Reduced-motion handling, visible focus and focus continuation from Dropzone were verified in the 2026-11-15 browser pass.
- [ ] Real drag-over/error matrix, native OS file drop payload, combined keyboard/state paths and independent screen-reader announcement remain open.
- [x] Upload Tile is 112×112px and Avatar Upload 96×96px; the small viewport has no horizontal overflow.
- [x] Actual Upload Tile image selection produced a loaded blob preview in its 112×112px square and named the action from the selected filename. Avatar selection produced a loaded blob preview in its 96×96px circular frame with a 50px radius. Clear actions returned both playground specimens to their empty states.
- [x] Button-style component page has inert preview, runnable playground, synchronized copyable Vue example and all nine contract sections.
- [x] Contract, catalog, package exports, usage example, primitive map, Figma rules, task log, request checklist and error log are synchronized.
- [x] Fresh gates on 2026-11-07: `pnpm test:file-upload` (5/5), `pnpm check:tokens`, `pnpm check:catalog` (49), Vue typecheck/build and `git diff --check` pass. Build bundle is 817.78KB and Vite emits its >500KB advisory; independent screen-reader review remains open.
- [ ] Browser DoD remains open for actual OS file drag/drop, independent screen-reader review and complete state-specific keyboard/focus coverage; chooser, validation, required form behavior, reduced motion and both selection modes are verified. The latest recorded GitHub push is `7ac56ca`.
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

## Matched desktop geometry — 2026-11-14

- [x] Fresh local/reference browser screenshots at the same 1265×713 viewport showed the local inner Dropzone visibly wider and taller. Shared size tokens now use 364×152px; the refreshed render brings the inner panel close to the reference while preserving the outer frame, yellow Norato glyph, neutral tile and RTL text.
- [ ] Narrow viewport remeasurement remains open; existing max-width containment rule is unchanged. File Upload Final DoD remains open.

## Static responsive rule audit — 2026-11-14

- [x] Narrow-breakpoint CSS caps the specimen frame with min(100%, mobile token), sets the inner specimen Dropzone to 100%, and sets the live playground Dropzone to 100%; this provides code-level evidence against width overflow.
- [x] Captured the local File Upload preview at explicit 390px and 320px browser widths. The outer frame and inner Dropzone remain fully visible in both captures; no visible horizontal clipping or stretched inner panel was observed.
- [x] Numeric frame/document measurements and a matched-width reference comparison were captured in a fresh browser pass on 2026-11-15; see “Matched responsive geometry — 2026-11-15” below. The reference overflows horizontally at 320px while Norato remains bounded; this is recorded as a real responsive divergence, not claimed as pixel parity.

## File Upload queued-row disabled state — 2026-11-14

- [x] Added a sample row, enabled the playground disabled option, and confirmed the Dropzone trigger and queued File Item removal action were both exposed disabled in the browser accessibility tree; generated Vue usage added `disabled`.
- [x] Disabled state was turned off and the sample queue cleared; the idle Dropzone and usage snippet returned to default.
- [ ] This does not verify native file input selection/validity, OS drag/drop, reduced motion, or independent screen-reader output.

## Avatar Upload native form synchronization — 2026-11-14

- [x] `NoratoAvatarUpload` now mirrors its controlled `modelValue` through the shared native FileList helper, binds an optional `name`, clears the picker value only before opening, and restores the controlled value on cancel.
- [x] Fresh local File Upload render after the change preserves the existing RTL layout and the existing circular Avatar Upload specimen; no style selectors changed.
- [x] In the local browser, the Avatar picker accepted a repository PNG and the native input retained its selected `value`; the image preview rendered from a blob URL. Clearing the playground removed the preview and emptied the input value.
- [x] Reopened the picker after the clear and selected that same PNG again; the input value and preview returned, confirming the same-file selection path after a cleared value. This used the browser file-chooser automation, not an operating-system chooser.
- [x] The runnable playground now provides a native form, named `attachments`/`avatar` inputs and shared Required/Disabled settings. Browser verified form ownership, selected-vs-empty required validity, and the disabled property on both fields.
- [ ] The browser's read-only inspection surface does not expose a constructible `FormData` global or native `FileList` object. Named payload inspection and native chooser-cancel restoration therefore remain open.
- [x] Fresh read-only DOM recheck confirms that required adds native `required` to the named `attachments` and `avatar` file inputs and that both empty inputs then report `valueMissing=true`; the playground was returned to optional afterward.
- [ ] The in-app browser did not emit a chooser event after clicking the Dropzone in this pass, so it adds no evidence about selected FileList contents, named `FormData`, or chooser-cancel restoration; prior real-chooser evidence remains separately documented.
- [x] `pnpm test:file-upload` passed 8/8; `pnpm check:tokens`, `pnpm check:catalog` (49), Vue typecheck, Vue build and `git diff --check` passed.

## File Upload keyboard focus recheck — 2026-11-14

- [x] Fresh local browser Tab sequence reaches the Dropzone trigger; a screenshot confirms its visible yellow focus ring without changing the file queue.
- [x] Continued Tab traversal reaches the sample-state action, Upload Tile chooser, and File Item action controls; the browser accessibility tree exposes their Persian names.
- [x] Returned the local browser to its original Carousel page after this check.
- [ ] This focused traversal does not verify all combined keyboard/state paths, native chooser behavior, OS drag/drop, reduced motion, or independent screen-reader output; File Upload DoD remains open.

## File Upload required, disabled and selection-mode recheck — 2026-11-14

- [x] In the local browser, enabling Required added «الزامی» to both Dropzone accessible names and added `required` to the generated Vue usage.
- [x] Enabling Disabled exposed both Dropzone buttons and Avatar Upload as disabled in the accessibility tree; the generated Vue usage included `disabled`.
- [x] Switching from multiple to single updated the generated binding from `:multiple="true"` to `:multiple="false"`; switching back restored `true`. The sample queue remained empty.
- [x] Required and Disabled were turned off; the mode was restored to multiple and the generated usage returned to its defaults.
- [ ] This recheck did not open the native picker and does not add evidence for FormData/FileList contents, picker cancel, removal synchronization, OS drop, reduced motion, or independent screen-reader output. File Upload DoD remains open.

## File Upload native picker and required validity — 2026-11-15

- [x] Captured the live browser file-chooser event and selected the repository fixture `edited-landing-mobile.png` in multiple mode. The accepted file appeared as one selected row with its name; no external upload endpoint was involved.
- [x] With Required enabled, the named native input `attachments` reported `required=true`, `ValidityState.valid=true`, and `valueMissing=false`; the Dropzone accessible name included «الزامی».
- [x] Removing the selected row returned the queue to zero and changed native validity to `valid=false` / `valueMissing=true`. Required was then disabled and the playground restored to its empty default.
- [ ] The playground owns both named inputs in a form but has no submit control and prevents submit; the current read-only browser inspection scope also exposes no `FormData` constructor or selected `FileList` entries. Direct named-payload proof therefore remains open alongside picker cancel/same-file reselection, OS drag/drop, and independent screen-reader review; task T004b/T004c and Final DoD stay open.

## File Upload reduced motion and keyboard focus — 2026-11-15

- [x] In the local browser with `prefers-reduced-motion: reduce` active, the live Dropzone computed to `transition: none`, `transition-duration: 0s`, and `animation-name: none`; source confirms its transition is disabled by the matching reduced-motion media query.
- [x] Keyboard traversal focused the Dropzone with `:focus-visible`, a 2px Norato-yellow outline and matching 2px shadow. The next Tab reached the visible sample-state action; the hidden native input introduced no extra stop.
- [x] Browser page remains within the File Upload RTL playground; screenshot review shows the Dropzone and square/circular upload controls contained without visible stretch at the current narrow viewport.
- [x] Fresh `pnpm test:file-upload` passed 8/8 validation and FileList-helper cases.
- [ ] These checks cover Dropzone motion/focus only; OS drag/drop, picker cancellation and reselection, direct `FileList`/`FormData` submission evidence, complete keyboard/state paths, and independent screen-reader review remain open. File Upload Final DoD stays open.

## File Upload multiple native selection and removal — 2026-11-15

- [x] The live browser chooser selected two distinct repository PNGs in multiple mode; both filenames appeared as separate controlled rows and the queue reported two files.
- [x] With Required enabled, native validity was valid while both selected. Removing the first row left the second filename in the queue and kept native validity valid; removing the final row emptied the native input value and returned `valueMissing=true` / `valid=false`.
- [x] Required was switched off, the playground returned to empty, and the local browser returned to Carousel.
- [ ] The browser inspection layer exposes only the native input's fake path/validity, not `FileList` entries or named `FormData` contents. This confirms selected/removed validity but not the serialized form payload; picker cancellation/reselection, OS drop and independent screen-reader review remain open.

## File Upload sample action Button consistency — 2026-11-15

- [x] Source audit found the “افزودن آیتم نمونه برای بررسی وضعیت‌ها” playground action had no Norato class and inherited browser-default chrome.
- [x] Applied the shared secondary Button class; the existing event, RTL container, queue limit, and disabled condition remain unchanged.
- [x] Live 375px browser render shows the shared secondary pill within the RTL playground; the shared Button contract supplies the 48px minimum target.
- [x] Five sample rows reached the configured limit and the action became disabled in the browser accessibility tree; clearing restored the empty queue and enabled action.
- [ ] Native OS drag/drop, independent screen-reader review, and full combined keyboard/state paths remain open; File Upload DoD stays open.

## File Upload playground action consistency — 2026-11-15

- [x] Styled the queue status, Tile state, and conditional clear controls with the shared secondary Button class.
- [x] Browser screenshot at the narrow current viewport shows queued status actions as distinct capsules; activating Complete changed the row status, and reset returned to an empty queue.
- [x] At 320×720 and 390×844, Tile's four actions wrap in RTL rows within the page without visible horizontal clipping.
- [x] Tab and Space operate the Tile state controls; Uploading exposes its named progress indicator. Complete updates a queue row, and reset restores defaults.
- [x] `pnpm check:tokens`, `pnpm check:catalog` (49), `pnpm test:file-upload` (8/8), Vue typecheck/build, and `git diff --check` all pass.
- [ ] Native OS drag/drop, independent screen-reader review, and the full combined state matrix remain open; File Upload DoD stays open.

## Matched responsive geometry before correction — 2026-11-15

- [x] Fresh local and reference pages were measured at the same 390px and 320px viewport widths. At 390px both document client widths are 375px and neither document overflows: Norato frame 328×300px / inner Dropzone 310×152px; reference frame 327×300px / inner Dropzone 320.76×153.63px.
- [x] At 320px, Norato document client/scroll width is 305/305px; its frame is 273×300px and inner Dropzone 255×152px. The reference document is 305/326px (21px horizontal overflow); its frame is 257×300px and inner Dropzone 245.16×174.42px.
- [x] Same-width screenshot review confirms the Norato composition remains RTL, bounded, fully visible, and without a vertically stretched inner Dropzone. The contracted 152px inner height is retained at 320px; the reference grows by 22.42px there, so exact narrow-screen height parity is not claimed.
- [ ] Responsive measurements close the prior numeric comparison gap only. The 320px panel-height difference, full interaction/state matrix, direct FileList-entry inspection, native picker cancellation, OS drop payload and independent screen-reader review remain open; File Upload Final DoD is not passed.

## Matched responsive geometry after correction — 2026-11-15

- [x] At 390px, local document client/scroll remains 375/375px. The outer frame remains 328×300px; reducing its responsive inset to the existing 4px spacing token brings the inner Dropzone to 318×152px, within 2.76px of the reference's 320.76×153.63px.
- [x] At 320px, local document client/scroll remains 305/305px. The narrow frame is now 257×300px and the inner Dropzone 247×152px, within 1.84px of the reference's 245.16px width and matching its 257px frame width.
- [x] Fresh local screenshots at both widths show the Dropzone fully contained, RTL content naturally wrapped, and inner height fixed at 152px with no visible vertical stretch.
- [ ] Reference page still overflows horizontally at 320px (305/326px); local page remains bounded. File Upload Final DoD remains open for behavior/state coverage, direct FileList-entry inspection, OS drop, picker cancellation and independent screen-reader review.
