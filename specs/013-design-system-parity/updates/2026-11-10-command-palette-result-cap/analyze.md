# Analyze — Command Palette result cap verification

- The component contract specifies a maximum of eight rows in each group.
- `NoratoCommandPalette.vue` applies `.slice(0, 8)` after filtering each group's items; browser rendering remains the required proof of the visible bound.
