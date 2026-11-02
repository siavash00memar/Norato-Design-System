# Range — clarification gate

- The Lemon reference and Norato-specific overrides are explicit in the acceptance specification.
- API decision: `modelValue: number | [number, number]`; `type: single | range`; explicit `min`, `max`, `step`; `label`, optional `id`, `size`, `disabled`, and `error`. Emit `update:modelValue` with the matching shape. Do not add implicit clamping or infer exactness from labels.
- Visual direction is RTL and numeric values remain legible as Persian UI text while native value semantics remain numeric.
- No material UX or API question remains; proceed with the recorded contract.

## Screenshot correction — 2026-11-02

The supplied screenshot shows an extra yellow segment extending behind the thumb while the visible fill edge sits about half a target away. Current CSS has a legacy `thumb::before` track stub plus duplicated unconditional gray `thumb::after` rules. User's requested result is a clean continuous track with fill meeting the thumb center. No API decision remains.

## Track endpoints — 2026-11-02

The 48px thumb target is centered 24px inside the full-width root at values 0 and 100. Therefore the track must be inset by 24px on both inline edges; otherwise the track/fill visually protrudes beyond the thumb at its endpoints. Keep the interactive SliderTrack full width; inset a visual rail inside it by `space-6` (24px) at each inline edge. Place SliderRange inside that rail so Reka percentages use the same span as thumb centers without changing pointer mapping.
