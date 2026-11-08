# Spinner — Plan

1. Inspect `.sample-spinner` and any loader rules before editing; locate semantic color/motion tokens and confirm there is no usable Norato logo asset or spinner primitive.
2. Add semantic spinner-size tokens (16/20/24/32/48) if needed; do not introduce raw app-only sizing values.
3. Implement `NoratoSpinner.vue` and `NoratoLoader.vue`, export both, and document their adapter decision in the primitive map.
4. Replace the inert Spinner preview with a representative Spinner inside the Button-sized dotted frame; keep it inert and separate from the functional playground.
5. Add a playground that selects all 3×3×5 spinner options and 4 loader compositions and exposes copyable Vue usage.
6. Update catalog status/API, usage example, component contract, Figma rules and recurring error log. Remove legacy `.sample-spinner` selectors.
7. Verify matched Lemon/Norato desktop screenshots, all 49 Spinner combinations, status semantics, host-relative overlay, fixed page loader, reduced motion, RTL/LTR and 390/320 overflow.
8. Run request checklist and token/catalog/typecheck/build/diff gates. Record any unrun DoD item accurately and push a clean GitHub checkpoint.
