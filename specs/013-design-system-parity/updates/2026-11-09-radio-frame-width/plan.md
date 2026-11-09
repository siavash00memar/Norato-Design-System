# Plan — Radio Button mobile specimen frame

1. Audit the existing radio specimen selector, mobile cap token and all competing selectors.
2. Add a viewport-aware, tokenized mobile width cap only to the non-compact specimen frame.
3. Compare matched local/reference renders at 320×844 and 390×844; check frame height, document width, target rows and intrinsic radio circles.
4. Run token, catalog, TypeScript, production build and diff gates.
5. Record results and remaining DoD, then commit and push.
