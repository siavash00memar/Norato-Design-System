# Checklist — Input Parts axis chip surface

- [x] Constitution, specification, clarification, and plan recorded in order.
- [x] Same-browser review at a 1265×713 viewport showed the shared reference Parts rows use plain neutral metadata while local Input Parts axes inherited the blue informational surface.
- [x] Source audit confirms the shared `.variant-axis > span` base rule assigns `--norato-color-info-container`; existing Input neutral overrides cover `.input-family-matrix` and do not include `.part-axes`.
- [x] Add a family-only marker and neutral token rule for Input's Parts axes.
- [x] Re-render locally; screenshots show neutral fill, secondary text, subtle inset border, RTL wrapping, and no yellow treatment on descriptive labels.
- [x] The shared axis base rule remains untouched and the dynamic marker is only added when the Parts page family is Input.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, and `git diff --check` pass.
- [ ] Push the verified checkpoint and confirm `origin/master`; no deployment.
- [ ] Input's complete visual cross-product and independent screen-reader review remain open.
