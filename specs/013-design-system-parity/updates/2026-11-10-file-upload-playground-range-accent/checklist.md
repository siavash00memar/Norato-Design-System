# Checklist — File Upload playground Range accent

- [x] Same-page browser screenshot shows the progress range with the browser's blue default accent.
- [x] The scoped accent computes to `rgb(253, 193, 1)` (Norato yellow) and the input target measures 133×48px.
- [x] Keyboard ArrowRight/ArrowLeft updates the percentage 42→41→42 and restores the playground default.
- [x] The screenshot shows a centered native track/thumb inside the 48px target; the public Range component and other controls are untouched by the scoped rule.
- [ ] Token/catalog/typecheck/build/diff gates pass; commit is pushed and local/remote parity is verified.
