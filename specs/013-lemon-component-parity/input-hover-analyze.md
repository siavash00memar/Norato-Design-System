# Input Hover Stroke — Analyze

The shared field's visible 36px capsule is its `::before` pseudo-element; the 48px wrapper is a transparent interaction target. The cascade already makes the pseudo-element's border yellow on hover, but the selector excludes `[data-invalid]`, so error fields retain their status color while hovered. The fix is to edit that hover selector in place to exclude only disabled fields. Its specificity then wins over the invalid-state border only during hover, and the existing invalid rule restores the error stroke when hover ends. No second outline is needed.
