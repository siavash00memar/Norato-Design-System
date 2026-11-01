# Navbar — source and implementation analysis

- Catalog record is `Proposed`; there is no Vue adapter, public export, usage example, or interactive playground. The design-only contract covers six parts/41 variants but does not define an executable API.
- The current live Lemon page exposes 9 sections and a compact Website/Bar default. It documents 3 desktop layouts × 3 styles, 4 mobile types × 2 styles, 2 link styles × 2 sizes × 5 states, and a Brand size pair.
- The current `ComponentSpecimen.vue` has a static `<nav class="sample-navbar">` with a hard-coded brand/link/action row. Legacy CSS hides its link text on narrow viewports and in compact mode, so this must be removed when changing the preview.
- Detail-page implementation gates the usage snippet by catalog record and routes most non-special playgrounds to static code only; Navbar needs a dedicated branch/component to meet Button parity.
- Existing app has Vue 3.5.43 and Reka UI 2.11.0. Installed NavigationMenu and Dialog are suitable; no shadcn package exists. Technical docs confirm NavigationMenu uses web navigation link semantics and managed keyboard focus, while Dialog manages modal focus, accessible title/description, and Escape.
- No Navbar-specific semantic tokens or established runtime patterns exist yet. Use shared Norato semantic tokens for surface, text, brand, focus, radius, elevation and spacing. The 700px breakpoint is established in shared specimen CSS and is recorded as the responsive switch point.
- Acceptance risk: menu structure and mobile drawer are more than a visual header; avoid claiming the 41-variant family as complete based only on one playground configuration. Validate both rendered responsive compositions and Reka's composed behavior.
