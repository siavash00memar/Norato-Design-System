# Checklist — File Item focus continuity

- [x] The error-to-uploading transition and lost focus are reproduced in the browser.
- [x] A focused action that is replaced by another enabled action transfers focus to that replacement.
- [x] Removing a focused row moves focus to the next row action, prior last-row action, or Dropzone when the queue empties.
- [x] The replacement retains its existing accessible name; its 48px target remains defined by the shared control-target token.
- [ ] No focus jump occurs when the action node itself remains mounted.
- [x] RTL visuals, component API, and transport behavior remain unchanged.
- [ ] Required token/catalog/type/build/diff gates pass and the remote commit matches.
