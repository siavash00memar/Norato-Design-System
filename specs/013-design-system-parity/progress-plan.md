# Progress — Plan

1. Inspect design reference live matrix, installed Reka ProgressRoot attributes and audit/remove `.sample-progress` legacy rules.
2. Add semantic size/circular geometry tokens if current tokens do not express the reference; avoid component-local raw CSS values.
3. Implement `NoratoProgress` with linear/circular variants, validated controlled `value`, four tones and three sizes, accessible Persian value text.
4. Replace inert preview with Button-sized dotted specimen; build a Playground that selects form, size, tone and value and emits copyable usage code.
5. Register package export, catalog usage, contract, primitive map, and Figma component rules.
6. Match design reference's metadata-above-full-width-track composition; compare matched desktop design reference/Norato renders; verify 120 matrix combinations in RTL and LTR, circular start/shape, value boundaries, AX and 390/320 overflow.
7. Run token/catalog/typecheck/build/diff gates; leave DoD open for unverified evidence; checkpoint GitHub after gates pass.
