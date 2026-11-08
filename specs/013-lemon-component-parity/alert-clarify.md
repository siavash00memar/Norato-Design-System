# Alert — Clarify

No material product decision remains open. The Lemon reference specifies five tones, Soft/Glass styles and Inline/Expanded layouts; the Norato component contract already records the same axes and RTL anatomy. Adopt the existing contract and Norato global rules.

## Resolved implementation details
- Native Vue component: no dedicated Alert primitive exists in the installed Reka UI set; static message semantics and caller-owned actions do not need a dialog primitive.
- `v-model` controls optional dismissible visibility; no automatic timeout.
- Expanded title and description use explicit props; caller action content is a slot so the adapter does not invent product navigation.
- Danger is announced with `alert`; non-danger content uses `status`. Preview remains inert.
