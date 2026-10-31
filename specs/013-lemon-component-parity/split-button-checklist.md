# Split Button — DoD

- [x] Top specimen forms one connected capsule with a divider; toggle sits physically left in RTL, and neither segment stretches vertically. Desktop and 390px mobile measured 48px height.
- [x] Direct action and menu actions emit the correct Vue events; disabled/loading suppress action in the browser demo.
- [x] Two independent focus stops, visible focus ring, named toggle, accurate expanded state and menu semantics inspected in the browser.
- [x] Toggle, ArrowDown/ArrowUp, Home/End, Escape, Tab exit and outside-click behavior verified in browser.
- [x] Dedicated Variants, States and Sizes galleries and both Split/Dropdown-only parts are present. All four sizes use the Vue adapter; Small/Medium visual heights are 32/40px while their native targets remain 48px.
- [x] Desktop and 390px mobile renders compared with Lemon; menu adjusted to remain in viewport, no overflow and all runtime targets at least 48px.
- [ ] Contract, catalog, usage snippet, rules, error log and request checklist updated.
- [x] Token, catalog, TypeScript and production build checks pass (2026-10-31, after the size API change).
