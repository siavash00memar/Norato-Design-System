# Plan — Table desktop frame width

1. Audit the shared frame rule, Table-specific rule, existing width tokens and earlier measurements.
2. Extend the Table-only inert frame by one 4px spacing token on desktop and retain the shared maximum width.
3. Preserve all mobile rules and the static table's existing dimensions.
4. Compare the post-change local render against the reference at 1536×703 and recapture 390/320 widths.
5. Update the family, request, Figma and error-log evidence; run technical gates and push without closing unresolved family DoD items.
