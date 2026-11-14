# Analyze — File Upload native form payload proof

## Observations

- The Vue playground currently wraps Dropzone, Upload Tile, Avatar Upload, and File Item examples in one `@submit.prevent` form; no submit control or payload report exists.
- Dropzone is named `attachments`; Avatar Upload is named `avatar`; both are controlled by real `File` values and rendered inside the same form.
- The browser inspection surface can read form ownership, names and native validity, but `FormData`, `input.files` and `FileList` are hidden from its read-only evaluator.
- A local form submit handler can use the page's normal browser `FormData` constructor and display only names/metadata. `@submit.prevent` prevents navigation; no endpoint is needed.

## Implementation choice

Add a dedicated submit action that builds `new FormData(form)`, formats strings and file name/size values, and stores a local summary. Clear the summary when Dropzone, Avatar, or playground reset changes controlled values. Keep the logic in the playground only; do not add a public adapter API or touch upload/network behavior.
