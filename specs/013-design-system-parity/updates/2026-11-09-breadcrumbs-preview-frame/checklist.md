# Checklist — Breadcrumbs preview frame parity

- [x] Desktop local screenshot confirms the 636×300px shared preview frame and dotted Norato treatment.
- [x] Default marker is visible at the top-right of the inert specimen.
- [x] Breadcrumb row remains centered at its intrinsic height with RTL order, left-pointing separators, house icon, and raised current item.
- [x] Desktop change was inspected in the live local browser at the current desktop viewport.
- [ ] 390px and 320px local renders have no horizontal document overflow and keep the specimen frame at 300px tall.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck, production build, and `git diff --check` pass.
- [ ] Checkpoint is pushed to `origin/master`.
