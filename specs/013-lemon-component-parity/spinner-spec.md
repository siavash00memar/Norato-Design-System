# Spinner — Specify

## Scope
Implement a public Vue 3 `NoratoSpinner` and `NoratoLoader`, inert specimen, interactive playground, Button-structured page section, package exports and documentation. Spinner covers Type Ring/Dots/Norato × Tone Default/Subtle/Inverse × Size 16/20/24/32/48 (45 configurations). Loader covers Inline/Refresh/Overlay/Page (4 compositions).

## Acceptance contract
- Preserve Lemon's three visual families and five intrinsic sizes. Use Norato brand yellow for Default, semantic secondary text for Subtle, and a high-contrast inverse color on dark surfaces.
- The Norato family is a Norato-colored arc, not a copied Lemon mark. No Norato logo asset exists in the project, so avoid inventing an unapproved logo glyph.
- Ring and Norato rotate smoothly; Dots animate sequentially. No component may stretch in either axis.
- `NoratoSpinner` is decorative (`aria-hidden=true`) and accepts type, tone and size. `NoratoLoader` composes spinner + Persian status label, with inline/refresh/overlay/page presentation, controlled active state and configurable direction defaulting to RTL.
- Overlay covers its positioned host; Page covers the viewport. Both use non-modal status semantics and must not trap focus or block dismissal of the host UI. Inline and Refresh remain in normal flow.
- `label` defaults to «در حال بارگذاری» and is announced once via `role=status`/`aria-live=polite`; custom labels remain available. An inactive Loader renders nothing.
- Reduced-motion limits animation without hiding the indicator. No focus ring is added to noninteractive Spinner/Loader.
- Component page follows Button: inert specimen inside the same dotted frame, distinct executable playground, generated code, and contract sections.
- DoD requires matched Lemon/Norato desktop render, 49 combinations, RTL/LTR and loader behavior, 390/320 responsiveness, reduced motion, accessible status semantics, token/catalog/type/build checks.
