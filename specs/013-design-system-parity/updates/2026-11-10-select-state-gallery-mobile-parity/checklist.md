# Checklist — Select state gallery mobile parity

- [x] Constitution → Specify → Clarify → Plan recorded before implementation.
- [x] Same-size reference renders inspected at 390×844 and 320×844.
- [x] Select-only legacy mobile selector identified for replacement.
- [x] Local 390px gallery width (327px at x=24), two-column cards (159.5px), RTL document, and no horizontal overflow verified.
- [x] Local 320px gallery width (257px at x=24), one-column cards, RTL document, and no horizontal overflow verified (305px document width).
- [x] Desktop behavior and gallery card content unchanged; the edit is confined to the max-width:599px Select selector and the existing gallery DOM/content is untouched.
- [x] Token, catalog, TypeScript, build, request-validation, and diff gates pass.
- [ ] Commit pushed to GitHub and remote revision verified.
