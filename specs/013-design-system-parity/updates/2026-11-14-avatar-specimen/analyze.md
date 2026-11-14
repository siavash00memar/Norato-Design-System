# Avatar specimen update — Analyze

- The defect is confined to the inert top specimen: `ComponentSpecimen.vue` explicitly sets `type="icon"`, contrary to the adapter default of initials; no production adapter defect is established.
- Its desktop avatar is 56px unscaled while the reference specimen's 56px body sits in a 60.48px visual outer box. Scope scaling to the static XL element; do not alter public size tokens.
- The generic specimen frame fills the docs column on narrow viewports. A mobile-only Avatar frame cap can align it without changing playground width or the shared shell.
- Existing checklist says 580×288 desktop and old mobile measures, contradicted by fresh audit values; amend only when post-change browser evidence is captured.
- Risks: global CSS specificity may alter frame sizing; token schema/catalog must recognize new tokens; displayed initials must remain within the component's grapheme limit.
- Independent screen-reader review and exhaustive Final DoD remain open and cannot be satisfied by browser AX alone.
