# Sidebar Checklist

- [ ] Lemon Sidebar 42 variants/6 parts represented or intentional Norato mapping documented.
- [ ] Preview inert, bounded, visually proportional and same viewport compare performed.
- [ ] Desktop expanded/collapsed, Glass/Bar, active/disabled/focus and child links.
- [ ] Keyboard group toggles; active aria-current; focus ring and accessible collapsed labels.
- [ ] Mobile modal drawer: trigger, Escape/focus restoration/outside click and no overflow.
- [ ] All interactive targets at least 48px; no stretched marks/icons.
- [ ] Usage snippet compiles against exports.
- [ ] Tokens, catalog, typecheck, build and diff checks pass.
- [ ] Independent screen-reader review documented if available.

## Sidebar — implementation checkpoint (2026-11-02)

- [x] Added public NoratoSidebar Vue adapter, Button-style Playground, copy example, inert specimen with dedicated bounded CSS, 42-part Lemon contract, token/primitive/catalog/export records, and API/accessibility docs. Legacy .sample-sidebar is no longer rendered; dedicated selectors have intrinsic icon sizes and fixed panel bounds.
- [x] Lemon reference inspected at 1280×720: six component parts, 42 variants, 3px right active marker, tooltip labels when collapsed, 2px focus ring, max two submenu levels. Local 1280×720: document 1265px, specimen frame 494×288 (column constrained), specimen panel 220×216; Lemon frame about 628×296 and panel about 214×220. The local panel retains its proportions rather than stretching across the frame. Interactive links have 48px block size and exactly one current page in the default playground.
- [x] At local 499×932, mobile trigger opened a labeled Reka Dialog containing nav links; close button closed it. At desktop, collapsing retained 48px links with accessible labels and titles; control restored to expanded.
- [ ] Exact 390px/320px compare could not be set in available browser. Escape, outside click/focus restoration, expanded/collapsed × Glass/Bar combinations, all Lemon state matrix, screen reader and host route behavior require more verification; maturity stays Adapted.
- [ ] Required technical gate commands being rerun after final geometry adjustment.

## Browser and technical record (2026-11-02)

- [x] Lemon desktop parts/variants inspected and local desktop/mobile renders were previously exercised. Static specimen geometry adjusted to avoid vertical stretching.
- [x] Token checker, component catalog checker, Vue typecheck and production build passed after fixing malformed color token; build has advisory for JS chunk >500KB. `git diff --check` passed.
- [ ] This continuation's browser bridge returned `browser.user is unavailable`; no fresh post-fix screenshot was possible. Escape, outside click/focus restore, exact narrow viewports, full state matrix and screen-reader review remain open. Sidebar stays Adapted.
