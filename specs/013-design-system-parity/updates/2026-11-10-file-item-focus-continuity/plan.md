# Plan — File Item focus continuity

1. Track whether the row action owns focus immediately before a Vue update.
2. After the update, focus the new enabled action only when the prior action node was replaced.
3. In `NoratoFileUpload`, observe controlled queue removal and focus the row action at the removed index, the prior final row action, or the enabled Dropzone when empty.
4. Keep event emission and all existing visual selectors/API unchanged.
5. Verify retry-to-uploading and removal focus destinations in the live browser, inspect the resulting accessibility tree, run token/catalog/type/build gates, and push the documented change.
