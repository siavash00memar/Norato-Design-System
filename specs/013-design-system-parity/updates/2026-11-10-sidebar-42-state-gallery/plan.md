# Plan — Sidebar 42-state visual gallery

1. Read the current contract renderer and Sidebar specimen styles; verify all six family axes and avoid legacy selector collisions.
2. Add a dedicated `SidebarVariantShowcase` renderer under the existing Sidebar Variants branch, using inert semantic markup and data-driven combinations.
3. Add scoped styles to the Sidebar specimen stylesheet with intrinsic mini-rail/icon geometry, wrapping at narrow widths, and Norato tokens.
4. Update the component contract, Figma component rules, canonical Sidebar checklist, request validation checklist, and error log with the decision and evidence.
5. Inspect the real local page at desktop and narrow viewport; confirm group/item counts, RTL, no overflow or stretching, and unchanged Playground.
6. Run token/catalog/typecheck/build/diff gates, commit, and push to `origin/master`.
