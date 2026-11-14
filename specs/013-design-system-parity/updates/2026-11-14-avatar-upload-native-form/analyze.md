# Analyze — Avatar Upload native form sync

- Source audit found `change()` emits the controlled File, then unconditionally sets `input.value = ''`; this destroys the native validity and named-submission source while the visible model may remain filled.
- Unlike `NoratoFileUpload`, Avatar Upload does not currently mirror controlled files into its input and has no `name` prop.
- Reusing `syncNativeFileList` keeps the implementation consistent and only mutates the native input when `DataTransfer` is available. Browser verification is still required because helper behavior does not prove platform form semantics.
- No style or geometry selector needs to change. The parent showcase already owns preview URL creation and cleanup.
- Risk: browsers that do not expose `DataTransfer` cannot programmatically mirror an externally controlled File. The helper returns false without mutating in that case; real picker selection still remains in the native input on the successful change path.
