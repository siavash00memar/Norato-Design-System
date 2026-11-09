# Constitution — Radio disabled/error precedence

- Preserve the public Vue adapter API and controlled selection behavior.
- Keep RTL direction, native disabled semantics, and the existing 48px minimum interaction target.
- Reuse the established Norato state priority from form fields and Switch: a disabled control presents neutral disabled visuals ahead of error visuals.
- Keep the invalid semantic state and its associated message available when disabled; visual priority must not erase validation semantics.
- Use existing semantic Norato tokens and avoid changes to unrelated input/radio selectors.
- Verify the actual browser render and the required project gates before delivery.
