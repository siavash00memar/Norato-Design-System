# Specify — File Item focus continuity

## Acceptance

When a focused File Item action causes a controlled status transition that replaces that action with another enabled action in the same item, focus moves to the replacement action. In the observed `error → uploading` retry path, focus moves from “تلاش دوباره” to “لغو بارگذاری”. When a focused remove/cancel action removes its row from the upload queue, focus moves to the same-index surviving row action, or the previous last row action if the removed row was last; when the queue becomes empty, focus returns to the enabled Dropzone action. The API, status owner, page geometry, and labels remain unchanged.

## Exclusions

This change does not claim to validate network transfer, native file drop, screen-reader speech, or host-owned removal behavior outside `NoratoFileUpload`.
