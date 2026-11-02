# Breadcrumbs — Clarify

No blocking choice remains; the user delegated decisions. Use a typed `items` array (`label`, optional `href`, optional `current`, optional `home`), infer current only from explicit `current: true` or a final item without `href`; collapse long trails only when the final item is current, showing the first and final two destinations with an accessible disclosure for hidden middle links. Default `dir=rtl`, `style=plain`, `size=medium`, chevron separator; targets remain at least 48px. Keep the disclosure links in the accessibility tree only while expanded.
