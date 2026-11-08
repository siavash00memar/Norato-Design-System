# Charts — Constitution

1. Follow the user's design reference visual reference while preserving Norato's yellow brand accent and semantic palette.
2. Persian and RTL are defaults; headings/legends align right, numeric values remain LTR.
3. Chart series colors follow a stable, documented order. Status meaning cannot rely on color alone.
4. Preserve supplied data and category order. Do not normalize, sort, or silently discard points.
5. Give every chart an accessible title and a textual/table alternative; decorative SVG marks are hidden from assistive technology.
6. Use tokenized dimensions/colors, no browser-native controls, no 3D or decorative shadows on plots, and no stretched marks.
7. Vue 3 is the runtime contract. Keep the static Button-style preview inert; interactions belong in the playground or consumer slots.
