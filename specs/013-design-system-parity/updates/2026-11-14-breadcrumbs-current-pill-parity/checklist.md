# Checklist — Breadcrumbs current-page specimen

- [x] Matched 1280×720 reference/local evidence recorded before editing.
- [x] Selector audit found `.sample-crumbs b` only in the shared specimen CSS, where it styles the Breadcrumbs static current item; no other family uses that class.
- [x] Static capsule now uses the Norato glass surface (`rgba(255,255,255,.78)`), glass shadow, semantic card radius and 4px vertical inset. Post-change 1280×720 bounds are 88.27×28.80px locally versus 88.10×29.16px in the reference; radius remains 12px locally versus 8px in the reference due to the closest existing surface token.
- [x] RTL order, left-pointing separators, home icon, 300px frame and 48px live link/disclosure targets remain correct. Opening the live disclosure reveals three links and sets `aria-expanded=true`; closing restores the collapsed default. No visible stretch or clipping was observed.
- [x] `pnpm check:tokens`, `pnpm check:catalog` (49 routes/contracts), `pnpm --dir apps/vue typecheck`, production build, and `git diff --check` pass.
- [ ] Responsive full matrix and independent screen-reader review remain open unless separately evidenced.

