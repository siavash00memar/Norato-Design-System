# Progress gallery — Analysis

- Current local mobile screenshot shows the Progress Sizes/States sections using generic blue/gray/yellow ruler and pill-dot illustrations; the shapes do not communicate Progress geometry.
- Source inspection confirms the shared `state-shape` is generic, so changing it globally would affect unrelated components. Use explicit Progress-only branches.
- The canonical contract already supplies six size tokens and four tone tokens. Use those values directly; do not add raw page-local dimensions or duplicate component runtime CSS.
- Indeterminate is explicitly unsupported by `NoratoProgress`, so show the contract note without a fabricated bar/spinner state.
- Risk: `entries` text drives these section cards. Test each family row in the browser to ensure the right content branch appears for Linear, Circular, and the non-size note.
- The live adapter remains unchanged; this gallery does not substitute for the broader independent screen-reader DoD.
