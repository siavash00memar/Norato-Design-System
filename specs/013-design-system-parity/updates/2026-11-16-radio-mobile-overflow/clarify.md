# Radio mobile overflow — Clarify

## Decisions

- The required narrow viewport is 320×720; the responsive comparison width is 390×844.
- The active contract already sets the real target to at least 48px and the visual control to 16px or 20px. Preserve both; correct only the ancestor or inline-size rule that causes overflow.
- Keep the RTL label/control relationship and allow description text to wrap.
- Do not infer that a reported oversized measurement is the radio glyph until the actual rendered element is measured; the live page measured 20×20px at the tested playground size.
- The playground, source state, and selected option must be restored after interaction checks.

No API, palette, or interaction decision remains unresolved. The overflow was not reproduced using the actual 320×720 and 390×844 browser viewport sizes; no CSS correction is made without a reproducer.
