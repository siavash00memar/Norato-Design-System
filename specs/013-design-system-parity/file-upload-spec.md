# File Upload — acceptance specification

Source: live `design reference inspected 2026-11-02; Norato contract and RTL/API rules.

## Acceptance contract

- Export four Vue adapters for Dropzone, File Item, Upload Tile and Avatar Upload; keep the live playground and public API honest about file selection vs actual network transfer.
- Dropzone supports click, Enter/Space, keyboard focus and file drag/drop, multiple/single selection, accept filters, maximum file size/count, disabled, drag-over, helper and error states. Default filters are PNG/JPEG/PDF with a decimal 10MB per-file limit.
- Accepted files are exposed as controlled queue items with `selected`, `uploading`, `complete` or `error` state. The adapter does not claim to upload files or invent progress; the consuming app owns transport/progress and returns status updates through `v-model`.
- Invalid type/size/count is not silently discarded: show a Persian reason, expose an event with rejected files/reasons and keep accepted files. Clearing a valid selection clears validation errors.
- File Item shows LTR name and size, status, real supplied progress only, and a 48×48px cancel/remove/retry action. Item actions emit an event and update the controlled list predictably.
- Upload Tile supports add/uploading/complete/error and controlled file/preview state; Avatar Upload supports empty/filled with an image-only native file picker. Both remain keyboard operable with at least 48px targets.
- All labels/messages and surrounding layout are Persian RTL; file name, extension, MIME and size stay LTR. Use Norato semantic tokens and visible focus; do not vertically stretch icons, squares or preview frames.
- Match design reference's bounded dotted-glass specimen, Default marker, centered inner dropzone and hierarchy. Keep preview inert, then provide an interactive Vue playground, copyable usage and nine contract sections like Button.
- Regression acceptance (2026-11-07): the actual top specimen must render the Default marker and a visibly bounded inner dropzone; no earlier `v-else-if` may shadow this branch. Desktop/mobile browser measurements must confirm both layers and the inner panel remains proportionate.
- The Vue playground exposes the existing single/multiple prop, and its copyable snippet reflects the selected mode so both public API paths can be exercised without a separate harness.
- Use a line SVG upload affordance; its action surface is Norato yellow with dark text. Keep the frame palette warm/neutral so blue remains reserved for information/link semantics.

## design reference observations

- design reference page has nine sections, a default drop area with upload icon and concise PNG/PDF/10MB hint, and separate File Item, Upload Tile and Avatar Upload parts.
- design reference describes 8 Dropzone combinations (Large/Compact × Default/Drag Over/Error/Disabled), 6 File Item, 4 Upload Tile and 2 Avatar Upload combinations. Error border is thin red; drag-over raises glass without an accent hue; file names are LTR.
- The preview is a 640×300px desktop specimen (column-limited where needed) and a responsive dotted-glass frame. Norato keeps 48px targets.

## Unknowns

- None blocking. The user delegated defaults; controlled transport boundary and validation rules are recorded in Clarify.
