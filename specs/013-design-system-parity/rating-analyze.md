# Rating — source and implementation analysis

- design reference's current page shows an inline read-only rating/count in a dotted-glass preview, with 4 parts and 47 documented variants. Top screenshot at mobile 390 shows 4.0, 128 reviews and stars on one line.
- Norato currently has only decorative stars and static value/count in `ComponentSpecimen.vue`; no public adapter, controlled input, summary distribution, text semantics, or variant playground exists.
- The installed Reka UI package has RadioGroupRoot/Item for the finite input choices. No dedicated Rating component is needed; adding a custom keyboard model would duplicate an existing primitive.
- Principal risks: Persian/RTL star order, the half-star gradient filling the wrong physical side, star art scaling with the 48px hit region and stretching the frame, and inaccessible color-only score/input values.
- Keep the first preview as one compact row; expose larger input target only in the executable playground.
