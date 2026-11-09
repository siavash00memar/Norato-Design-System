# Specification — Command Palette editable shortcut exclusion

## Problem

The global shortcut exclusion checks only `[contenteditable="true"]`. Empty `contenteditable` and `contenteditable="plaintext-only"` are both editable HTML states but do not match that selector, so Ctrl+K unexpectedly opens the modal while the user edits text.

## Acceptance

- Ctrl+K continues to open the palette from a non-editable page target.
- The shortcut does not open from input, textarea, select, textbox/searchbox roles, or any element whose `isContentEditable` is true, including inherited editing regions.
- Repeated key events and IME composition events remain ignored.
- No API, focus, or live-dialog visual behavior changes.
