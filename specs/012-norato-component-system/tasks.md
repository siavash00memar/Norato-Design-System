# Tasks: گسترش سیستم طراحی نوراتو طراحی

## Phase 1 — Foundation

- [x] T001 Add semantic Norato theme tokens for Norato surfaces, brand roles, focus and component states in `packages/tokens/src/color.css` and related token files.
- [x] T002 Record the personalized visual rules and legacy selector decision in `docs/figma-component-rules.md` and `docs/error-log.md`.
- [x] T003 Add a complete 49-family inventory data source for the Vue showcase.

## Phase 2 — Vue surface

- [x] T004 Replace the placeholder Vue surface with a responsive RTL documentation shell in `apps/vue/src/App.vue`.
- [x] T005 Implement overview, foundations, inventory filtering/status display and interactive core component specimens.
- [x] T006 Refactor Vue CSS to consume Norato tokens only and cover focus, disabled, loading, invalid and reduced-motion states.

## Phase 3 — Documentation and contracts

- [x] T007 Update `docs/README.md`, `docs/norato-design-system.md` and `docs/figma-component-rules.md` with the personalized architecture and adoption statuses.
- [x] T008 Add/extend the component inventory and contract index under `packages/components/src` and `packages/vue/src/components`.
- [x] T009 Update `docs/request-validation-checklist.md` with this request's acceptance contract and render evidence.

## Phase 4 — Verification

- [x] T010 Run token validation, TypeScript validation and production build.
- [x] T011 Run the local browser render checks at desktop and mobile widths and fix any RTL/overflow/focus defects.
- [x] T012 Mark completed tasks and record passed, failed and unrun checks in the feature evidence.
- [x] T013 Add a visible specimen to every cataloged component family and label non-production specimens clearly.
- [x] T014 Create a component-specific contract section for every one of the 49 cataloged component families.
- [x] T015 Link contract status and source page in the component contract registry documentation.
- [x] T016 Replace the combined contract document with 49 separate component contract files.
- [x] T017 Add source-specific anatomy/variants/usage/RTL details to every individual contract.
- [x] T018 Render the selected Markdown contract as a dedicated, hash-addressable Vue documentation page.
- [x] T019 Verify all 49 component routes and standalone documents in the browser and run project validation.

## Phase 5 — Source-specific contract correction

- [x] T020 Audit all 49 صفحات کامپوننت and capture the nine required source sections, including source token names.
- [x] T021 Rewrite each standalone Markdown contract so all nine sections contain source-specific content or an explicit source-not-specified note; separate Norato mapping.
- [x] T022 Render the nine required sections in the specified order, preserve source links, and provide a family-specific specimen on each local detail page.
- [x] T023 Verify inventory coverage, source-specific contract content, token check, TypeScript/build, all 49 browser routes, and mobile render; update checklist and evidence.
- [x] T024 Add the Terminator skill reference and fallback rules to root and nested design-system AGENTS.md files for project-wide use.

## Phase 6 — Team adoption and UI correction

- [x] T025 Remove the duplicate legacy generic component detail page and dead generic sample renderer from `apps/vue/src/App.vue`.
- [x] T026 Add a Vue team onboarding/adoption route covering setup, import/use, tokens, RTL, accessibility, maturity status, contribution and validation.
- [x] T027 Improve dashboard and component-page visual hierarchy, legibility, responsive behavior and implementation-status presentation using semantic tokens.
- [x] T028 Connect each of the 49 inventory cards to its family-specific inert specimen and distinguish source-backed proposals from existing adapters.
- [x] T029 Run token/TypeScript/build checks and desktop browser QA for dashboard, team guide, inventory, representative component pages and keyboard navigation; update checklist/error log with actual evidence.
- [ ] T030 Visually verify the responsive layout at 390×844 when a browser viewport override is available; keep this gate open until the actual mobile render is inspected.

## Phase 7 — Workspace-ready Vue adapters

- [x] T031 Add private `@norato/vue` and `@norato/tokens` workspace package manifests and install the workspace links.
- [x] T032 Add shared token-backed styling for Vue adapters and expose it from the Vue package entrypoint.
- [x] T033 Implement controlled model updates for Field, Select and ChoiceGroup; verify keyboard/native form semantics.
- [x] T034 Use actual workspace adapters in the Vue showcase and update maturity status so incomplete Date Picker is Proposed.
- [x] T035 Update team guide and contracts/index; rerun token, TypeScript, build, desktop browser rendering and real browser component-state checks. Mobile viewport remains an explicit open validation gate.

## Phase 8 — Emil design-engineering quality pass

- [x] T036 Implement escaped semantic Markdown rendering for component contracts (headings, paragraphs, lists, code, emphasis and safe links) and style it for scannability [FR-025].
- [x] T037 Establish token-backed documentation typography meeting desktop/mobile minimums and revise navigation, metadata and card heading hierarchy [FR-026].
- [x] T038 Refine interactive focus, hover/active feedback and touch targets; use only purposeful explicit-property motion and preserve reduced-motion [FR-027].
- [x] T039 Measure rendered text/action/status contrast and fix any failing semantic pairings while preserving Norato brand colors [FR-028].
- [x] T040 Run the relevant Emil skill review on overview, team guide, inventory and detail; validate actual desktop and keyboard states, inspect responsive rules and browser-check mobile when available; update evidence and error logs. (Mobile browser viewport unavailable; see request checklist.)

## Phase 9 — Individually navigable components

- [x] T041 Remove category clusters from component navigation; expose all 49 component links as a flat, independently scrollable list.
- [x] T042 Remove category emphasis from inventory cards and detail headers while retaining standalone links, documents and specimens.
- [ ] T043 Verify all 49 direct navigation links open the matching unique route/document/specimen; verify flat list accessibility and record desktop/mobile evidence.

## Phase 10 — Norato-only team-facing presentation

- [x] T044 Remove external product name, links, attribution, and external token labels from the application and all 49 component contracts.
- [x] T045 Present team guide and component guidance as Norato-owned documentation; mark unspecified contract behavior clearly.
- [x] T046 Search the complete repository and rendered routes for leaked external references; run token, typecheck, build and browser checks.

## Phase 11 — Button reference card

- [x] T047 Repair Button-only detail card layout with responsive semantic-token grid; preserve other component layouts [FR-031].
- [x] T048 Add visual Button variant gallery; distinguish executable API variants from visual-only contract proposals and size references [FR-031].
- [x] T049 Add accessible clipboard actions for variant and main implementation snippets with success/error feedback [FR-031].
- [x] T050 Validate actual Button browser render, clipboard, RTL, narrow layout, tokens, TypeScript and build; record evidence [FR-008, FR-009, FR-031].

## Phase 12 — Button spacing and accent correction

- [x] T051 Remove stretch distribution in Button variant/state cards and compact Button-only specimen height [FR-032].
- [x] T052 Set Primary to Norato yellow and Secondary to a 2px Norato-yellow stroke while preserving focus visibility [FR-032].
- [x] T053 Recheck actual local render, keyboard focus, tokens, Vue TypeScript and production build; log remaining viewport limits [FR-008, FR-009, FR-032].

## Phase 13 — Button typography and pill silhouette

- [x] T054 Set Estedad Bold for Button labels and Button visual specimens without changing copy controls [FR-033].
- [x] T055 Apply the pill/control radius to actual and visual Button shapes only; record the rule in the Button contract [FR-033].
- [x] T056 Verify browser rendering, focus, tokens, Vue TypeScript and production build [FR-008, FR-009, FR-033].

## Phase 14 — Button single-column and minimalist data

- [x] T057 Replace Button detail's responsive multi-column grid with one vertical column at every breakpoint; remove obsolete Button-specific grid overrides [FR-034].
- [x] T058 Simplify and reformat Button contract data for RTL scanning; isolate LTR identifiers while preserving all nine sections and copy [FR-034].
- [x] T059 Reduce Button-only card chrome and spacing with existing semantic tokens; preserve target sizes and focus states [FR-034].
- [x] T060 Validate page in the local browser and run token, TypeScript, build, and request checklist; log results and any viewport limits [FR-008, FR-009, FR-034].

## Phase 15 — Button documentation hierarchy and restraint

- [x] T061 Audit Button-only documentation selectors and define presentation-only acceptance boundary; exclude all specimen/gallery visual selectors [FR-035].
- [x] T062 Compact title, metadata, headings, prose, code and copy controls with existing tokens; replace repeated heavy surfaces with subtle dividers [FR-035].
- [x] T063 Verify the local page hierarchy and confirm Button specimens/galleries remain visually unchanged; run token, type, build and request checks [FR-008, FR-009, FR-035].

## Phase 16 — Button usage code block colors

- [x] T064 Add semantic code surface/text color tokens for the requested dark background and white foreground [FR-036].
- [x] T065 Apply the new colors only to the Button Vue usage block; preserve LTR, wrapping, copy and focus behavior [FR-036].
- [x] T066 Verify local render and run token, TypeScript, and production-build checks [FR-008, FR-009, FR-036].

## Phase 17 — Button variant gallery balance

- [x] T067 Audit current gallery columns, sample well sizing, and responsive overrides against nine-variant data [FR-037].
- [x] T068 Set 3-column desktop, 2-column tablet, and 1-column narrow layouts; center the final odd card on tablet, size wells to content and compact only gallery card spacing [FR-037].
- [x] T069 Validate balanced desktop grid rule, preserved Button samples/copy affordances, narrow-browser reflow, tokens, TypeScript and build; record wide-render limitation [FR-008, FR-009, FR-037].

## Phase 18 — Button variant de-duplication

- [x] T070 Compare gray well and each inner Button treatment to distinguish true duplicate data from background-induced visual similarity [FR-038].
- [x] T071 Remove gallery backplates and duplicate Danger Solid entry; update Button contract count and content without changing Icon Button [FR-038].
- [x] T072 Validate eight distinct gallery examples, the 7-type/168-combination Button contract, copy actions, tokens, TypeScript and build [FR-008, FR-009, FR-038].

## Phase 19 — Button top specimen content

- [x] T073 Audit the top Button specimen separately from its API gallery and identify reusable semantic neutral border treatment [FR-039].
- [x] T074 Remove Inverse/Destructive only from the top specimen and add the inert visual-only `انصراف` pill; clarify it in the Button contract [FR-039].
- [x] T075 Verify specimen render, preserved API gallery, RTL, tokens, TypeScript and build [FR-008, FR-009, FR-039].

## Phase 20 — Figma design-system alignment

- [x] T076 Record source-backed chapter architecture and values/uncertainty ledger from all 14 Figma frames [FR-040, FR-041, FR-043].
- [x] T077 Audit and update semantic brand/neutral/info/tag tokens; add observed spacing, radius and elevation tokens without overriding approved component contracts or guessing missing state values [FR-041, FR-042].
- [x] T078 Rebuild overview/foundation chapter presentation and documentation shell to reflect the Figma chapter grammar, visual examples and confidence labels; preserve RTL flat component routes [FR-040, FR-043, FR-044].
- [x] T079 Update team docs, Figma rules, error log and source ledger with the typography mapping, observed values and unresolved Figma evidence [FR-041, FR-044].
- [x] T080 Inspect live localhost overview, foundation, representative component and Button routes; run desktop RTL/overflow review, token check, Vue typecheck, build, and complete request checklist [FR-008, FR-009, FR-040–FR-044]. Narrow viewport and chapter jump keyboard activation remain open.

## Phase 21 — Non-Button detail pages, batch 1

- [x] T081 Audit the canonical detail shell, active legacy selectors, Input/Select/Checkbox/Radio contracts, source specimens and actual Vue adapter props/events before editing [FR-045–FR-048].
- [x] T082 Apply the Button editorial single-column hierarchy to non-Button pages using scoped neutral selectors; retain Button styles and Figma-approved sample unchanged [FR-048].
- [x] T083 Add accessible copy actions and success/error feedback for each contract section on all component pages, preserving 48px targets and keyboard focus [FR-045].
- [x] T084 Add visually distinct variant/state/size specimens to Input, Select, Checkbox and Radio Button using only documented evidence; clearly label visual-only details [FR-046].
- [x] T085 Ensure existing adapter usage snippets exactly match current Vue exports, props, events and model semantics; show no executable API for non-implemented components [FR-047].
- [x] T086 Review all four local routes individually, keyboard copy feedback, RTL/responsive layout, token validation, Vue typecheck/build, and complete request checklist; record remaining gaps [FR-045–FR-048]. Visual desktop review passed; mobile actual render and full keyboard clipboard interaction remain unverified.

## Phase 22 — Canonical catalog and data discoverability

- [x] T087 Audit all 49 contract documents, current workspace component exports, specimens, maturity assignments, stale inventory metadata, and all duplicated route/group/chapter/snippet maps [FR-049–FR-052].
- [x] T088 Add a typed canonical catalog with stable unique IDs/slugs, labels, independent document paths, optional tags, verified maturity, actual adapter/export metadata, and specimen keys [FR-049–FR-051].
- [x] T089 Add one typed Foundation chapter dataset and migrate overview/Foundation navigation and card data to it without losing the 14 independent chapter IDs [FR-052].
- [x] T090 Refactor Vue inventory, navigation, direct route resolution, implementation snippets and specimen mapping to consume catalog data; retain all 49 separate component URLs [FR-049–FR-050].
- [x] T091 Replace legacy partial inventory with a typed compatibility export; add integrity validation for uniqueness, contract files, statuses and actual adapter/export references [FR-049–FR-051].
- [x] T092 Run data integrity validation, token check, Vue typecheck/build, inspect the full 49-item inventory and representative independent routes, update error log and request checklist [FR-049–FR-052]. Directly verified Foundation, Button, Radio Button, Date Picker, Team Guide, and search-by-ID behavior. Mobile visual review and full keyboard-only navigation remain unrun.

## Phase 23 — Button full-pill radius

- [x] T093 Audit Button and legacy specimen selectors against the supplied image and capsule rule [FR-053].
- [x] T094 Add semantic `--norato-radius-pill` mapped to the observed 50px value; keep `--norato-radius-control` unchanged [FR-053].
- [x] T095 Apply the pill token to Norato Button and Button-only dashboard/specimen/gallery styles; leave fields/cards/unrelated components unchanged [FR-053–FR-054].
- [x] T096 Update Button token documentation/rules and verify localhost render, token check, Vue typecheck and build [FR-054].

## Phase 24 — Shared component presentation and visual contract data

- [x] T097 Audit all nine section shapes across the 49 Markdown contracts and verify presentation-shell differences between Button and the supplied Split Button reference [FR-055–FR-059].
- [x] T098 Refactor the component detail shell into one shared RTL presentation matching the supplied page; preserve the Button preview, API snippet and custom galleries [FR-055, FR-059].
- [x] T099 Implement contract-derived visual presentations for Overview, Anatomy, Variants, Sizes, States, Parts, Usage, Accessibility and Tokens; retain per-section copy actions and accessible text [FR-056, FR-058].
- [x] T100 Bind visuals to the selected catalog item and its own contract; preserve verified adapter gating and clearly inert/reference-only previews [FR-057–FR-058].
- [x] T101 Audit all 49 records for source content and visual fallback coverage; fix missing or structurally different Markdown cases without adding fabricated API or token facts [FR-056–FR-058].
- [x] T102 Validate representative and exhaustive routes in the browser, check RTL/keyboard/focus/available responsive views, run catalog/token/type/build checks, update error log and request checklist [FR-055–FR-059]. All 49 routes rendered all nine visual sections (Button retains its specialized galleries); keyboard focus and narrow attached viewport were checked. Wide-desktop/mobile viewport resize and assistive-technology testing were unavailable.

# Phase 25 — Button Anatomy exploded map

- [x] T103 Audit Button Anatomy contract, renderer branch, primary visual tokens and responsive rules [FR-060].
- [x] T104 Replace Button Anatomy generic placeholder with assembled + exploded RTL parts map, preserving source labels and documenting unsupported icon slots [FR-060].
- [x] T105 Review actual Button route, responsive/keyboard reading order; run catalog, token, typecheck, build and request checklist; record findings [FR-060].
# Phase 26 — Button Anatomy shell/content distinction

- [x] T106 Inspect the rendered anatomy map for wrapper/content confusion and compare its visual pieces to the contract [FR-061].
- [x] T107 Redraw Container as an empty enclosing shell; show Label and optional icons only once as exploded contents [FR-061].
- [x] T108 Verify Anatomy and Parts in-browser, then run required project checks and update the request checklist [FR-061].

## Phase 27 — Button page finalization

- [x] T109 Audit the Button route, nine-section contract, adapter API, source snippets and all active Button visual selectors against the approved rules [FR-062–FR-068].
- [x] T110 Correct Button contract Parts and state/API guidance; add a Button-only live Vue playground to the implementation area [FR-063, FR-066].
- [x] T111 Separate seven contract variants from additional Inverse API support; fix state copy semantics and render four real pill size silhouettes [FR-064–FR-065].
- [x] T112 Make Anatomy explanations readable, Parts per-piece, and Tokens legible/copyable without affecting other components [FR-066–FR-067].
- [x] T113 Refine only the affected existing CSS selectors, preserving token, pill, RTL and target constraints [FR-062–FR-067].
- [x] T114 Review Button in the browser and run required validation; update feature checklist, request checklist and error log [FR-068].

- [x] T115 Restructure Button playground markup and apply compact animated Vue controls.
- [x] T116 Validate keyboard, responsive, reduced motion, generated code and browser checklist; record defects.


- [x] T117 Update Button playground selects and switch wrapper CSS [FR-070].
- [x] T118 Verify browser geometry, keyboard affordance and required checks [FR-070].
- [x] T119 Build reusable Vue playground dropdown and replace native select controls [FR-071].
- [x] T120 Verify browser interactions and update docs/error log/checklist [FR-071].
- [x] T121 Implement app-wide Persian UI digit normalization with scoped technical exemptions [FR-072].
- [x] T122 Validate route content, live state, code-copy semantics and required project checks [FR-072].
