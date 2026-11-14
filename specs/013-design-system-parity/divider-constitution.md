# Divider — Constitution

- Divider is a visual/content separator, never an interactive control.
- Preserve Norato's semantic color and spacing tokens; do not introduce page-local raw colors or sizes.
- Default reading and label-start placement follow RTL. LTR is an explicit supported direction.
- Decorative separators stay hidden from the accessibility tree. Semantic separators expose their orientation.
- A plain horizontal Divider is exactly one tokenized border pixel high and must not become a capsule or stretch vertically.
