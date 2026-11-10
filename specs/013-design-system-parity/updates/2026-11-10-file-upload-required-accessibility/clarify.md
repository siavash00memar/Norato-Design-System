# Clarify — File Upload required accessibility

- Decision: expose required status through the Dropzone's accessible name using a referenced visually-hidden text node. This keeps the actionable control understandable even when the clipped native file input is not present in the AX tree.
- Decision: retain the native `required` attribute for host form constraint validation; this change does not add custom submission feedback.
- Open product/API decisions: none. The visible star remains decorative and the required wording is available only to assistive technology.
