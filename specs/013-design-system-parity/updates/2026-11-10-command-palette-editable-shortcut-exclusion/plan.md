# Plan — Command Palette editable shortcut exclusion

1. Record the reproduced baseline for normal, editable, repeat, and IME key events.
2. Replace the brittle exact-attribute check with `isContentEditable` while preserving form and ARIA textbox exclusions.
3. Re-run the browser matrix and check that normal opening still works.
4. Update DoD, request evidence and error log; run the required technical gates, then commit and push.
