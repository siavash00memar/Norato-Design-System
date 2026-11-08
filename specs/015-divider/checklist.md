# Divider — Checklist / Definition of Done

## Requirements quality
- [x] Lemon's 12 variant math is resolved as orientation × type × tone; spacing is independent.
- [x] API defaults, layout, RTL, accessibility semantics and token mapping are explicit.
- [x] No interaction behavior is invented for this noninteractive primitive.

## Delivery DoD
- [x] Runtime component, public type exports, catalog, primitive map and usage example agree.
- [x] Page follows Button structure: bounded inert dotted frame, separate live playground, copyable usage and nine contract sections.
- [x] Legacy `.sample-divider` styling is removed; no unexplained override is layered on top.
- [x] All 12 variants and 3 spacing values render, including vertical, labeled and tone differences.
- [x] Rules measure exactly 1 CSS px and do not stretch on the cross axis; frame is responsive at desktop and mobile widths.
- [x] RTL/LTR label-start placement, semantic/decorative accessibility output verified through browser accessibility tree.
- [ ] Lemon desktop and mobile comparison is recorded with Norato palette differences called out. Composition was compared by browser screenshot; the Lemon tab reported a different CSS viewport than Norato, so same-viewport metrics are not claimed.
- [x] 390px and 320px viewport checks show no overflow.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck/build and `git diff --check` pass.
- [x] `docs/request-validation-checklist.md` contains browser evidence and the unresolved screenreader/viewport limits.
- [ ] Independent screenreader review remains open; browser AX inspection is not presented as a substitute.

**Gate:** DoD is actionable; no placeholder item is being treated as passed. Proceed to Tasks.
