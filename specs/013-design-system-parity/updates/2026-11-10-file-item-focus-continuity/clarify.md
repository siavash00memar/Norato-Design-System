# Clarify — File Item focus continuity

- The host owns item state and emits the replacement status; the File Item owns its action button and can restore focus within the same row after Vue patches the DOM.
- The target action for same-row replacement is the enabled replacement action in that row. For queue-owned removal, use the next row at the removed index, otherwise the prior last row, and finally the Dropzone when no item rows remain.
- Hosts that use `NoratoFileItem` outside `NoratoFileUpload` remain responsible for choosing a focus destination after removing their own row.
- Observed evidence: activating retry from the runnable playground changed the item to uploading and exposed a named Cancel action, but browser focus fell to the document root.
