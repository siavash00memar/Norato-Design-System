# Clarify — Radio Button mobile specimen frame

- Evidence: live browser DOM at 320×844 measures local 272.8×300px and reference 256.8×300px; local document width is 305px.
- Decision: cap the non-compact mobile frame against the viewport using existing semantic spacing/border tokens, retaining the existing 328px maximum and 300px height.
- No product/API choice is involved; the live adapter and playground are outside this visual correction.
