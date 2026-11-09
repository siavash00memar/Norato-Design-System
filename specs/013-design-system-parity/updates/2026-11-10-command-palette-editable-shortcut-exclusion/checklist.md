# Checklist — Command Palette editable shortcut exclusion

- [x] Constitution, specification, clarification, plan, checklist, tasks, and analysis recorded before implementation.
- [x] Reproduce the shortcut opening from empty and plaintext-only contenteditable targets.
- [x] Exclude all editable regions while preserving normal Ctrl+K behavior.
- [x] Re-run the browser matrix: normal page Ctrl+K opens; input, textarea, empty/plaintext-only contenteditable, ARIA textbox, repeat, composition and keyCode 229 stay closed.
- [x] Token/catalog/typecheck/build/diff and prohibited-text gates all pass; production build completes with the existing large-chunk advisory.
- [ ] Commit and push the verified fix.
