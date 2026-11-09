# Analyze — Command Palette editable shortcut exclusion

- A fresh local browser target confirmed normal Ctrl+K opens the palette.
- Input, textarea, textbox role, repeated key, `isComposing`, and keyCode 229 were blocked before the fix.
- Empty `contenteditable` and `plaintext-only` both report `isContentEditable === true` but incorrectly opened the palette. This reproduces the exclusion defect and defines a narrow platform-based correction.
