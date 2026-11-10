# Analyze — Empty State preview frame alignment

- Fresh same-window browser measurements at 1920×903 show the local shared frame at 632×300px and the reference at 636×300px. The height and surrounding page structure already align.
- The local frame is `.component-sample.sample-button-specimen`; the Empty State specimen has no dedicated frame-width selector. The reference composition is therefore clipped by the detail page's available inline size by 4px.
- Existing audited component rules use a scoped `--norato-space-1` allowance for the same measured desktop delta. Apply that established token allowance to the Empty State frame only, capped by the shared frame-size token.
- Existing mobile measurements and rules are independent; keep the new rule inside a desktop media query.
- The design token catalog has no Empty State-specific frame-size token. Reuse the existing shared frame cap rather than adding an unnecessary token.
