# Divider — Checklist / Definition of Done

## Requirements quality
- [x] design reference's 12 variant math is resolved as orientation × type × tone; spacing is independent.
- [x] API defaults, layout, RTL, accessibility semantics and token mapping are explicit.
- [x] No interaction behavior is invented for this noninteractive primitive.

## Delivery DoD
- [x] Runtime component, public type exports, catalog, primitive map and usage example agree.
- [x] Page follows Button structure: bounded inert dotted frame, separate live playground, copyable usage and nine contract sections.
- [x] Legacy `.sample-divider` styling is removed; no unexplained override is layered on top.
- [x] All 12 variants and 3 spacing values render, including vertical, labeled and tone differences.
- [x] Rules measure exactly 1 CSS px and do not stretch on the cross axis; frame is responsive at desktop and mobile widths.
- [x] RTL/LTR label-start placement, semantic/decorative accessibility output verified through browser accessibility tree.
- [x] design reference desktop and mobile comparison is recorded with Norato palette differences called out. At matched 1280×720, reference stage/rule measure 636×300px / 345.6×1.08px (320px CSS rule with reference scale), versus Norato 584×288px / 320×1px; line width is 54.3% vs 54.8% of each stage. At 390×844 the stages are 327×300px / 343×288px and rules 320.76×1.08px / 320×1px. At 320×844 they are 257×300px / 273×288px and rules 245.16×1.08px / 263×1px. The narrower documentation column and different stage heights remain visible; Norato keeps its neutral semantic border palette.
- [x] 390px and 320px viewport checks show no overflow.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck/build and `git diff --check` pass.
- [x] `docs/request-validation-checklist.md` contains matched desktop/mobile browser evidence and clearly identifies the remaining independent screenreader review.
- [ ] Independent screenreader review remains open; browser AX inspection is not presented as a substitute.

**Gate:** DoD is actionable; no placeholder item is being treated as passed. Proceed to Tasks.
