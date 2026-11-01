# Range — clarification gate

- The Lemon reference and Norato-specific overrides are explicit in the acceptance specification.
- API decision: `modelValue: number | [number, number]`; `type: single | range`; explicit `min`, `max`, `step`; `label`, optional `id`, `size`, `disabled`, and `error`. Emit `update:modelValue` with the matching shape. Do not add implicit clamping or infer exactness from labels.
- Visual direction is RTL and numeric values remain legible as Persian UI text while native value semantics remain numeric.
- No material UX or API question remains; proceed with the recorded contract.
