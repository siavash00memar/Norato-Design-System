# Clarify — Select state gallery mobile parity

- The measured 390px reference state gallery is 327px wide at x=24px; its cards are 158.5px wide in two columns.
- At 320px, the reference gallery is 257px wide at x=24px and reflows to one column.
- Norato currently measures 343px at x=16px at 390px; its two-column cards are 167.5px wide. Existing mobile CSS forces two columns at every width through 599px.
- No product/API ambiguity remains. Preserve the additional Norato-specific state cards; adjust only the responsive frame and column threshold.
