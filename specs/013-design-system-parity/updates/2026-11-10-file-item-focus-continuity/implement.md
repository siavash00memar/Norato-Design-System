# Implement — File Item focus continuity

`NoratoFileItem` captures focused-action ownership before a Vue update and focuses its replacement action only when Vue replaces that node. `NoratoFileUpload` records the focused row's identity/index, waits until the controlled model removes it, then focuses the next row action (or previous last row) and returns to Dropzone when the list empties. Existing events, status ownership, styles and public props remain unchanged.

Browser verified Error → retry → Uploading focus continuity, Cancel focus returning to Dropzone on an empty queue, and first/last row deletion focus destinations. The named 42% progress indicator remains exposed. Token/catalog/typecheck/build/diff gates are run in the parent completion step. Do not close the parent File Upload DoD while native OS drop, reduced motion, all keyboard combinations, and independent screen-reader review remain open.
