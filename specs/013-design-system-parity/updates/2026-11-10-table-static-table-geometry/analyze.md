# Analyze — Table static-table geometry

- At 1536×703 the reference table measures 561.60×258.39px; the static Norato table measures 560×274.50px.
- Its frame already measures 631.98×345px after the preceding Table-specific correction.
- The static rows are already 48px high and the live adapter has separate responsive CSS; do not change either.
- The current static table uses a literal 560px width cap, 12px padding and an 8px internal gap. Replacing the width with a 562px semantic token and using 8px padding plus zero desktop gap should preserve the 48px rows and bring the specimen near the measured target.
- The mobile rule reinstates its own 4px gap; verify mobile table widths and heights after the base spacing change.
- Browser recheck at 1536×703 now measures the local table at 562×258.5px, within 0.4px width and 0.11px height of the reference. The 390px/320px tables are 330px/260px, respectively, with scroll width equal to client width; rows remain 48px.
