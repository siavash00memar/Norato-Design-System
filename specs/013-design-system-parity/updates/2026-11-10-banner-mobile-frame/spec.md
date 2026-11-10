# Specify — Banner mobile preview frame

At 390px CSS viewport, the selected reference's inert Banner stage is 342×300px at x=24px; Norato currently renders 358×300px at x=16px. At 320px, the reference stage is 272×300px at x=24px, while Norato is 288×300px at x=16px.

Acceptance:
- The inert Banner preview frame measures 342×300px at 390×844 and 272×300px at 320×844, centered with 24px inline inset.
- The page retains zero horizontal overflow; do not reproduce the reference page's 6px document overflow at its 320px capture.
- Desktop geometry, live Banner adapter behavior, and other component specimens remain unchanged.
- Use a Banner-specific semantic maximum-width token and spacing tokens; no raw page-local dimensions.
