# Analyze — Table mobile frame width

- Root cause: the shared mobile specimen naturally fills its 343px/273px parent at 390px/320px, while the reference preview uses an 8px inset on each side.
- Minimal correction: apply `inline-size: calc(100% - var(--norato-space-4))` to the centered inert Table frame only at mobile widths. The existing semantic token is 16px; the shared frame already uses border-box sizing.
- Falsification check: if the resulting live browser measurements do not produce 327px/257px centered frames, or if desktop width changes, reject/refine the selector before claiming parity.
- Preserve the local no-overflow behavior at 320px; do not reproduce the reference page's 21px document overflow.
