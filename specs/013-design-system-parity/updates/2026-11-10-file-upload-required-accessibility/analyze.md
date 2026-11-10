# Analyze — File Upload required accessibility

- Evidence: live AX snapshot lists the Dropzone button but not the visually clipped file input. Browser inspection shows the empty native input has `required=true` and `validity.valueMissing=true`, while the button's current name derives from the field label alone.
- Root cause: the interactive accessible representation is a button that opens a separate clipped input; only the input receives the `required` prop and the visible asterisk is `aria-hidden`.
- Smallest aligned correction: reference a conditional visually-hidden «الزامی» node from the Dropzone's `aria-labelledby`. Retain the native input constraint and visible decorative star; do not change form behavior or layout.
- Risk: screen-reader phrasing varies by browser/AT, so the AX name is an objective browser signal but does not replace independent screen-reader review.
