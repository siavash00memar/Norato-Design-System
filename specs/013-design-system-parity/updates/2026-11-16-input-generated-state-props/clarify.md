# Input generated-state props — Clarify

- No product or API decision remains unresolved. The live playground already applies the shared state props to all eight adapters; the generated sample should mirror those same values.
- The OTP adapter does not expose `labelPlacement`; keep that subtype-specific omission. Other current playground variants expose their existing size and label-placement settings.
- Reuse the existing per-adapter Persian error and success messages. When both toggles are active, include both props; runtime status precedence remains owned by each adapter.
- Do not serialize live typed values. Preserve the sample's current model initializers in this scoped fix.
