# Breadcrumbs — Clarify

No blocking choice remains; the user delegated decisions. Use a typed `items` array (`label`, optional `href`, optional `current`, optional `home`), infer current only from explicit `current: true` or a final item without `href`; collapse long trails only when the final item is current, showing the first and final two destinations with an accessible disclosure for hidden middle links. Default `dir=rtl`, `style=plain`, `size=medium`, chevron separator; targets remain at least 48px. Keep the disclosure links in the accessibility tree only while expanded.

## Screenshot correction — 2026-11-02

The user marked the current Breadcrumbs render incorrect and explicitly requested the chevrons face the opposite direction. No UX ambiguity remains: use a left-pointing SVG chevron for RTL (the former U+2039 text glyph was bidi-mirrored and rendered right-facing), retain slash, and align the inert top specimen with the runtime adapter.
