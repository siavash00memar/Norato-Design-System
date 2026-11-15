# Analyze — Segmented static specimen surface

- Scope covers the inert specimen in `ComponentSpecimen.vue`, its scoped rules in `component-specimen.css`, and the live adapter's selected pseudo-surface in `packages/vue/src/components.css`.
- Current broad `.sample-segment .active` rule paints a yellow fill; the later selected rule paints white directly on the button. Both rules make the selected surface equal the full 48px target.
- The static specimen is the only `.sample-segment` instance, so replace the broad selection rule in place rather than adding a competing cascade override.
- Wrapping static labels in spans permits a pseudo-surface behind text without changing semantics (the specimen is already inert and hidden from accessibility).
- Current live and static surfaces both use pill radii, while the reference active option measures 9px corner radius. Record that observed radius as a semantic token and use it in both visual surfaces to avoid specimen/runtime divergence.
