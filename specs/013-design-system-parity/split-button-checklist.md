# Split Button — DoD

- [x] Top specimen forms one connected capsule with a divider; toggle sits physically left in RTL, and neither segment stretches vertically. Desktop and 390px mobile measured 48px height.
- [x] Direct action and menu actions emit the correct Vue events; disabled/loading suppress action in the browser demo.
- [x] Two independent focus stops, visible focus ring, named toggle, accurate expanded state and menu semantics inspected in the browser.
- [x] Toggle, ArrowDown/ArrowUp, Home/End, Escape, Tab exit and outside-click behavior verified in browser.
- [x] Dedicated Variants, States and Sizes galleries and both Split/Dropdown-only parts are present. All four sizes use the Vue adapter; Small/Medium visual heights are 32/40px while their native targets remain 48px.
- [x] Desktop and 390px mobile renders compared with design reference; menu adjusted to remain in viewport, no overflow and all runtime targets at least 48px.
- [x] Contract, catalog, usage snippet, rules, error log and request checklist updated; API and maturity match the verified adapter.
- [x] Token, catalog, TypeScript and production build checks pass (2026-11-01, after gallery, specimen, loading and status changes).
- [x] Loading renders an accessible spinner and `aria-busy`; reduced-motion animation fallback is present.
- [x] Browser AX tree exposes named split/dropdown controls, accurate expanded state and native menu items; independent screen-reader software was not run.
- [x] Re-ran the 390×844 browser viewport after the final 288px preview-frame update: document width is 375px, the frame is 320×288px within the 343px content column, specimen control is centered at 48px tall, and no horizontal overflow is present. design reference was compared in the same viewport; its frame is about 314×288px. Norato keeps its own palette and comparable scale.
