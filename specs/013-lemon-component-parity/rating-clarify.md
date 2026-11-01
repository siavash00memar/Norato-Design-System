# Rating — clarification gate

- Use `variant: display | input | summary`; explicit `value` for display/summary and `modelValue` for input; `count` is required whenever an average is shown. `distribution` is a partial record keyed 1–5 with non-negative integer counts.
- Input values are 1–5 integers; no half-star keyboard/input choice because the contract's input anatomy lists five choices while half values belong to the read-only rating variants.
- Read-only values are restricted to the eight specified values; do not silently round arbitrary input. Render a text score for assistive technology.
- RTL order is first/rightmost star as one rating point; fill extends from right to left, and the right half is the filled half-star.
- Project's 48px interactive target overrides Lemon's smaller artwork; preserve compact visual star size inside a larger hit area.
- No material uncertainty remains; proceed.
