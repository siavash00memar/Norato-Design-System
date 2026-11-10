# Analyze — File Item focus continuity

- Root cause: Vue conditionally swaps the retry button for the cancel button when the host updates `item.status`, or removes the item row from the controlled queue; without a focus destination the browser falls back to the document root.
- A page-level workaround would not help other consumers of `NoratoFileItem`; focus continuity belongs in the reusable row adapter.
- The action button is replaced, so restore focus only when the previously focused node differs from the current enabled action. This avoids stealing focus on unrelated updates where the same button remains mounted.
- For queue removal, the parent sees the removed item id and its prior index; wait until the controlled model drops that id, then focus the corresponding surviving action or the Dropzone.
- Keep focus work separate from upload progress and network state; no transport behavior change is needed.
