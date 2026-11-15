# Analyze — Table image and progress playground cells

## Evidence reviewed

- `NoratoTable` already has dedicated `image` and `progress` renderers. Image values accept a URL string or `{ src, alt }`; the latter forwards `alt` to the native image. Progress clamps numeric values to 0–100 and exposes `role="progressbar"`, a name from `column.label`, and `aria-valuenow/min/max`.
- `table.css` constrains images to an intrinsic 40×40px crop and styles progress with the semantic yellow token; no renderer CSS change is needed for the sample.
- `TablePlayground.vue` currently declares three static columns and five user/status/project rows. It already has an accessible Norato checkbox control pattern, a generated example and a controlled empty dataset.
- The default table therefore cannot exercise the two cell types, but the shared adapter contract and renderer behavior are already present.

## Implementation decision

- Add a false-by-default boolean and use a computed column list; append the two optional cell definitions only when selected.
- Keep progress and image fields in the sample row data but invisible in the unchanged default columns.
- Generate a small, locally self-contained SVG data URI once. Use it only for the optional image cell and pair it with row-specific Persian `alt` text.
- Preserve the existing empty dataset behavior. The enabled example shows the matching row data only when the sample dataset is selected; an empty dataset remains `[]`.
- Leave adapter, shared styles and the static specimen untouched unless browser evidence exposes a defect.

## Risks and limits

- The browser accessibility tree can prove role/name/value/alt exposure, but cannot prove spoken quality. Independent screen-reader review stays open.
- The additional columns are optional to avoid changing the existing live playground baseline or narrow layout by default.
