# Analyze — Navbar 41-state visual gallery

- The contract renderer currently supplies text-only variant cards for Navbar; it has no Navbar-specific visualization branch.
- `ComponentSpecimen.vue` already imports `navbar-specimen.css`, which contains only selectors scoped to `.sample-navbar-*`; a separate `.navbar-variant-gallery` namespace can avoid changing the current specimen or live adapter.
- Contract arithmetic is 9 desktop + 8 mobile + 20 links + 2 brands + 1 mega menu + 1 mobile menu = 41.
- Transparent examples need an explicit host-surface backdrop, since contract rules warn that text contrast depends on the consuming surface.
- No unresolved API or interaction decision is present; the main risks are narrow card labels and state visibility. CSS should wrap rather than compress text or stretch icons.
