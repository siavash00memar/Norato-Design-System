# Plan — Input preview frame width

1. Change the non-compact Input specimen width from the available parent width to the parent width plus the 2px border-medium token, capped by the existing desktop frame token.
2. Preserve the existing mobile media-query override and audit for duplicate/legacy selectors.
3. Capture the local page at the same desktop viewport as the reference; verify width and height visually, then verify 390px/320px responsive widths and overflow.
4. Run token/catalog/typecheck/build/diff gates, record outcomes, and push the completed change.
