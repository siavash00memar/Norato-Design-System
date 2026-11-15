# Plan — Segmented selected surface geometry

1. Audit existing Segmented selectors and token definitions; replace the full-height selected fill in place rather than layering a page-specific override.
2. Render selected Glass/Contrast surfaces in a centered pseudo-element inset by the spacing token. Keep text, focus outline and the interactive button box independent of that surface.
3. Preserve disabled precedence and reduced-motion behavior for the new surface layer.
4. Inspect the live local page and reference at the same desktop viewport; verify controlled selection, RTL ArrowLeft/Space, selected-disabled, focus, 48/56px targets, and mobile widths. Mobile post-change captures remain unverified.
5. Record evidence in this update, the component contract and request-validation checklist; run token/catalog, Vue type/build and diff checks.
