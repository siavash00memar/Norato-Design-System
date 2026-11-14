# Plan — Drawer specimen geometry

1. Audit the static Drawer selectors and identify the token that caps panel width and the inset that determines its height.
2. Narrow the static panel to the reference's width and add a semantic bottom inset to bound its height.
3. Compare fresh local and reference captures at 1265×713; confirm the panel remains right-aligned and all content fits.
4. Run token, catalog, Vue typecheck, production build, prohibited-name scan, and diff checks.
5. Update Drawer, request-validation, and baseline evidence; commit and push.
