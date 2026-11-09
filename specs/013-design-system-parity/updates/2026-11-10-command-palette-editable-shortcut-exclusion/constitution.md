# Constitution — Command Palette editable shortcut exclusion

- Do not intercept the global shortcut while the user is editing text.
- Preserve Ctrl/⌘+K outside editable controls, and preserve repeat/IME exclusions.
- Keep this correction limited to shortcut target detection; do not change the component API or other keyboard behavior.
- Verify behavior in a real browser and record only observed results.
