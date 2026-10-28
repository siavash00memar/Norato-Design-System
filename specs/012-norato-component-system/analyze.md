# Analyze: گسترش سیستم طراحی نوراتو طراحی

## Button silhouette correction (2026-10-28)

- The supplied render shows the Button labels/colors, but the ends do not reach a full capsule.
- The source uses a 25px `radius-control` on approximately 60px-high Buttons; the repository already records a 50px observed shape value.
- Changing the global control radius would also reshape inputs and cards. A semantic pill alias, scoped to Buttons, fixes the mismatch without changing unrelated controls.
- Acceptance evidence: inspect Primary, Secondary and cancellation specimen on the local component page, then run token, Vue type and build validation.

## Consistency Review

- Scope is consistent: all observed خانواده‌های کامپوننت are cataloged; implementation status is explicit.
- Brand authority is consistent: Norato yellow `#fdc101` and blue `#356ae6`/secondary blue remain the only brand accents.
- Framework authority is consistent: new runtime behavior targets Vue 3.
- RTL/accessibility constraints are carried from Constitution into requirements, plan and tasks.
- No component may be marked implemented without a contract and validation evidence.

## Figma documentation-system alignment analysis — 2026-10-28

- Authority check: Figma is the visual reference; the Norato constitution remains authoritative for brand ownership, Vue 3, RTL, semantic tokens and approved typography. The source includes legacy type styles and incomplete extraction, so those values are recorded as evidence, not copied indiscriminately.
- Evidence audit: reviewed the overview and 13 chapter frames. Yellow `#FDC101`, Blue `#134F89`, neutral/info/tag samples, spacing examples, radii, borders and elevation values are represented in a source ledger with uncertainty labels. Irregular spacing examples are not promoted as a regular scale; missing success/error/focus values remain Norato-owned.
- Conflict audit: old documentation blue and gray page canvas conflict with the current Figma page hierarchy; existing semantic Info/Tag roles were conflated. Align the documentation surfaces and split semantics while retaining component contracts and user-approved Button treatments.
- Layout audit: legacy logical margin/grid selectors could put the evidence rail on the wrong side in RTL and cause width overflow. Explicit RTL grid placement was added and checked in the local desktop render. Narrow viewport and keyboard activation remain unverified and are not counted as passed.
- Decision: proceed within existing clarified scope; no new material product/API question is introduced. Maintain the 49 independent component routes and document the 14-chapter foundation separately.

## Component documentation rollout analysis — 2026-10-28

- Evidence: `App.vue` already has one Markdown-driven detail renderer and the 49 contract files; Button alone currently renders variant/state/size galleries and section copy controls. Existing Input/Select/ChoiceGroup adapters expose controlled model updates, label/options, disabled and error props, so their examples can be real, copyable snippets.
- Risks: global `.component-doc` layout uses a two-column grid; applying its old shared card rules would preserve the spacing defect Button already corrected. Styling must target `.component-doc:not(.button-doc)`; Button gallery styles must remain untouched.
- State coverage: Input/Select support helper, invalid/error, disabled, loading, required; ChoiceGroup supports selected options, per-option disabled and error (but not a loading prop). Do not show unsupported states as adapter behavior. Its documented Size axes are reference-only because current adapter has no size prop.
- Source limit: contracts contain axes for many subcomponents that do not map to the current adapter. Keep those labels as static contract-only visuals; do not claim exhaustive executable combinations or invent API.
- Decision: first batch is Input, Select, Checkbox and Radio Button. A shared data-driven showcase may reuse presentational card patterns, but each page remains a separate route/contract and source data stays family-specific.
- Gate: specification, clarification, plan, requirements-quality checklist and implementation tasks are updated. Implementation can proceed for this bounded batch; remaining component families are explicitly staged for subsequent batches.

- Implementation follow-up: all 9 contract headings now receive a copy control; four family-specific galleries render under Variants. Field/Select top previews are disabled and ChoiceGroup samples receive fixed selected values, so inert showcases cannot be modified. Input, Select, Checkbox and Radio Button pages have each been reviewed in the actual desktop browser; their mobile layout and full keyboard clipboard behavior remain unverified.

## Canonical catalog/data architecture analysis — 2026-10-28

- Finding: component data is split among seven category arrays + two status sets + a generated item list in `App.vue`, slug exceptions and a second explicit slug function, hand-authored Vue snippet and adapter maps, a name-conditional specimen component, 49 Markdown contracts addressed by a computed path, and an obsolete nine-entry `packages/components/src/inventory.ts`. Foundation chapter names/descriptions are duplicated in two arrays.
- Impact: changing a component label, slug, status, specimen or adapter requires synchronized edits in multiple files. Current browser counts cannot be reconciled from the package inventory; the package inventory is not the source used by the app.
- Alternative assessed: putting all nine-section prose into a large TypeScript object would centralize it technically but reduce editor readability and duplicate the accepted standalone Markdown docs. Rejected; keep catalog metadata typed and prose in its current files.
- Adapter evidence: the workspace export currently contains NoratoButton, NoratoField, NoratoSelect, NoratoChoiceGroup, NoratoTextarea and NoratoDatePicker. The current product maturity set marks only five families Implemented; Date Picker must not be accidentally upgraded just because an adapter file exists.
- Decision: catalog stores explicit adapter module/export metadata only for statuses with validated implementations, and explicit document/specimen references for all components. A validator checks the relationship edges and the 49-entry total. Catalog tags are optional filters, never visual grouping or navigation hierarchy.
- Gate: specification, clarification, plan, requirements checklist and tasks were updated before implementation; decisions are explicit and no blocking uncertainty remains.

## Risks

- The الگوی ساختاری is richer than the current Vue inventory; full visual parity is not claimed where behavior is not specified.
- Existing `site/` is a legacy/reference surface; the primary new preview is the Vue app.
- Visual browser verification is required before final handoff because source inspection alone cannot establish layout correctness.
- معماری اطلاعات مستندات is represented by grouped component navigation, foundation/component pages, a page-level `On this page` rail, and explicit component maturity states.

## Gate

**Analyze status**: Complete after implementation. No unresolved material contradiction found; mobile screenshot evidence remains a documented follow-up, not a hidden pass.

## Follow-up analysis — 2026-10-27

- The user named nine exact sections. Existing files have headings, but inspection of Button, Split Button, Combobox, and Chat found generic filler under several sections and a compact source note rather than section-by-section contracts.
- The prior “49 contracts complete” assumption was falsified: heading presence alone was not evidence of accurate, source-specific content.
- Follow-up resolution: all 49 source records were inspected, each standalone contract was regenerated from its family data, and missing source details are explicit. All 49 local routes were checked for title, source link, nine sections, and corresponding specimen; static inventory, token, TypeScript, build, and mobile render checks passed.
- The documentation acceptance gate now passes. Production behavior maturity remains correctly differentiated by each family’s Norato status; specimen presence is not treated as production implementation.
- Persistent Terminator guidance is now in the root agent instructions; this is verified by file inspection.

## Team usability follow-up analysis — 2026-10-27

- Verified defect: `App.vue` retains both `page==='component'` (generic hand-written content) and `page==='component-detail'` (contract-driven content), while the `component` route is not reached by current navigation. This stale branch is a concrete source of contract divergence and maintenance noise.
- Verified limitation: the catalog includes 49 maturity statuses but only six marked Implemented; a component-specific specimen alone cannot provide a Vue import/API for the rest. Team usability must distinguish documented source contracts, static proposals, and executable package components.
- Verified UI quality risk: `styles.css` contains many unscoped page-level literal dimensions/colors and an asymmetric three-column grid with a fixed 260px sidebar plus 180px rail. These choices can impair density/responsiveness and violate project token authority. A render audit is still required to prioritize actual visual defects.
- Decision: preserve all current source-derived contracts; simplify routing to one renderer; create a local adoption guide and revise the visual system/layout around readable content width, stronger maturity cues, and semantic tokens.
- Additional source audit: Vue SFCs had no shared CSS for their `norato-*` classes; Field/Select had no `update:modelValue`; ChoiceGroup had no selected-state event; Date Picker's trigger was nonfunctional. Root workspace configuration supports private packages, so internal installable exports are feasible without external publishing.

## Emil design-engineering quality analysis — 2026-10-27

### Skill coverage

Applied the available `emil-design-eng` skill as the primary craft/motion framework, with directly relevant focused skills: heuristic-evaluation, accessibility-audit, responsive-design, critique-visual-hierarchy, critique-typography, critique-color, critique-information-density, design-system, spacing-system, typography-scale, animation-principles, animation-performance, feedback-patterns, and Fitts's Law. `design-critique` was reviewed and intentionally not used as the execution format because this is a solo expert audit; its own guidance routes solo reviews to heuristic evaluation. Unrelated skills are outside this UI task.

### Rendered findings (desktop, local Vue app)

| Severity | Evidence | User impact | Planned correction |
| --- | --- | --- | --- |
| Major | Component detail screenshot displays Markdown `-`/`###` syntax as ordinary text; lists and subheadings are not semantic. | Long component contracts are hard to scan and inaccessible as structured content. | Escape and render supported Markdown as semantic HTML, preserving safe links and code. |
| Major | Shared documentation uses 10–13px body/metadata tokens; rendered inventory/navigation labels appear notably small. | Scanning, reading, and operating a dense 49-family catalog takes extra effort. | Add doc-only typography tokens at 16px body, 14px compact, and 12px metadata; retain Figma source-scale tokens for component implementation. |
| Major | Placeholder/disabled neutral `#a1a1a1` on white has 2.58:1 contrast; yellow focus ring on white is below 3:1. | Placeholder and keyboard focus indicators are difficult to perceive. | Darken neutral text token; preserve the contract-approved yellow focus accent and add a separate Norato blue contrast outline; use text labels alongside status color. |
| Minor | Detail-page sample card has large blank area, while documentation content is visually flat. | Visual specimen and actionable contract compete poorly for attention. | Keep specimen identifiable but reduce excessive vertical space; increase contract headings, list rhythm and inline link affordance. |
| Minor | Team guide code examples for Select/ChoiceGroup omit state declarations; no direct action takes a teammate to the runnable lab. | Examples require reconstruction before they can be tried. | Make examples self-contained where concise and add a direct “try adapters” action. |
| Open | Browser viewport control is unavailable in the current in-app session. | A real mobile screenshot cannot be claimed in this pass. | Review responsive CSS and attempt a mobile browser check; report it open if unavailable. |

### Focus-token conflict resolution

The initial proposed fix was to change the focus token to blue. Cross-checking `specs/002-norato-field/spec.md` showed the approved Field contract explicitly requires the Norato yellow focus token. Keep that yellow ring and pair it with a separate blue outline: yellow on white alone measures 1.64:1, while the blue outline against white measures 4.82:1. This preserves brand intent and meets the 3:1 non-text indicator threshold on light surfaces. The implementation and all 50 individual component mappings now reflect the two-layer indicator.

### Gate

Analysis confirms no new material UX/API question: project constitution and user direction already fix Vue, RTL, typography families, semantic tokens, contrast and touch target rules. Requirements/plan/checklist/tasks are updated in sequence. Proceed to implementation and re-evaluate with the rendered browser.

## Contrast measurements — 2026-10-27

| Pair | Contrast | Result |
| --- | ---: | --- |
| Primary text `#1a1a1a` / white | 17.40:1 | Pass |
| Secondary text `#484848` / white | 9.20:1 | Pass |
| Secondary text `#484848` / page `#f7f7f7` | 8.54:1 | Pass |
| Placeholder/disabled `#6b6b6b` / white | 5.33:1 | Pass |
| Link `#2a60e7` / white | 5.35:1 | Pass |
| Action/focus outline `#356ae6` / white | 4.82:1 | Pass |
| Success status `#17834b` / `#effdde` | 4.51:1 | Pass |
| Warning status `#9a6500` / `#fff8e0` | 4.66:1 | Pass |
| Yellow focus accent `#fdc101` / white | 1.64:1 | Fails alone; paired with blue outline |

Measured ratios use the WCAG relative-luminance contrast formula; these are color-pair measurements rather than a complete automated WCAG conformance audit.

## Button reference-card evidence audit — 2026-10-28

- Observed in `apps/vue/src/styles.css`: the shared detail grid pins preview/implementation to one column and every contract card to the other, producing unbalanced whitespace. Scope correction with a `button-doc` class to avoid silently changing other component pages.
- Verified in `packages/vue/src/components/NoratoButton.vue`: API variants are exactly `primary`, `secondary`, `inverse`, `destructive`; no size prop exists. The separate Button contract records eight visual types and four reference sizes.
- Decision: render actual package components for the four supported variants and style the remaining contract types as explicitly visual-only examples; do not invent Vue props or claim unsupported API.
- Risk/check: clipboard can be denied by browser context; provide visible failure feedback and verify in localhost secure context. Mobile viewport tooling availability is unknown until browser inspection.

## Button stretch and accent root-cause — 2026-10-28

- User observation is supported by source inspection: `.button-variant-card` and `.button-state-card` use `align-content: space-between`, distributing children over the full card height; this is the direct cause of excessive empty space inside the visual galleries.
- The shared `.component-sample` minimum height applies to every specimen. For Button it creates unnecessary vertical whitespace around four compact buttons; add a Button-only class and compact that specimen without affecting other families.
- `packages/vue/src/components.css` currently assigns blue Primary and blue 1px Secondary stroke. The user's explicit brand rule supersedes this older styling: use `--norato-color-brand-yellow` and `--norato-border-medium` (2px). Keep dark label contrast and existing blue contrast outline for focus.
- Verified semantic tokens exist for brand yellow and 2px medium border. Wide desktop screenshot remains unavailable; validate responsive render at the current local viewport.

## Button typography and silhouette audit — 2026-10-28

- Verified tokens: `--norato-font-heading` resolves to Estedad and `--norato-type-body-bold-weight` is 700; `--norato-radius-control` is 25px, yielding a pill on the 48px minimum Button.
- Legacy collision: `.component-sample button { font: inherit }` has greater selector specificity than `.norato-button` and can override its typography inside the Button specimen. Exclude the real Norato adapter from that legacy specimen rule before applying its font.
- Scope: apply heading font/weight and control radius to the adapter, dashboard Button class, and Button-only visual mocks; preserve copy action button styling and other component/card radii.

## Button desktop stacking audit — 2026-10-28

- Verified cause: `.component-doc.button-doc` declares three desktop columns; media rules change it to two columns at 1399px and 1023px, with one column only at 700px. The preview spans two tracks while contract cards span one, so the desktop card row is intentionally side-by-side.
- Verified content issue: `button.md` packs multiple English axes and numeric facts into long bilingual list items; the renderer escapes Markdown but does not isolate inline code as an independent LTR run. This makes the dense mixed-direction data harder to scan.
- Verified visual source: Button documentation uses `.glass-card` styling and generous generic card padding; the Button-scoped rules currently do not reduce card chrome or normalize all cards into one reading sequence.
- Decision: use an explicit single-column Button grid at every breakpoint; keep variant/state/size mini examples inside their parent contract card, since these are data visualizations rather than sibling documentation cards. Rewrite only Button contract copy with Persian-first short rows and code-isolated identifiers. Use existing surface/border/spacing tokens and keep copy target/focus rules intact.
- Limitation: the currently connected in-app viewport is narrow; the desktop CSS behavior can be statically checked and the rendered page checked at the available viewport, but do not claim a wide desktop visual inspection unless the browser viewport is widened.

## Button documentation visual hierarchy audit — 2026-10-28

- Verified: page heading inherits a responsive 32–56px display token, generic section headings use 18px, body copy is 16px, and documentation cards add 16px padding plus a repeated bordered/shadowed surface. This hierarchy makes the information shell visually dominant relative to the actual compact Button samples.
- Verified scope boundary: Button specimen and variant/state/size demos have separate selectors (`.component-sample`, `.button-variant-*`, `.button-state-*`) from the `.button-doc` shell and `.doc-section` content. Documentation can be restyled without changing their appearance.
- Decision: retain the one-column sequence; reduce the page title to the existing section scale, use existing label/compact typography tokens for section/body levels, and render documentation sections as transparent rows with subtle semantic dividers. Quiet code and copy chrome while keeping copy controls at accessible 48px targets and preserving their focus ring.
- Apple Design skill application: hierarchy is built with type weight/size/leading, nonessential surface decoration is removed, and spacing clarifies content relationships. No motion or translucent material is needed for this static documentation page.
- Limit: the connected browser viewport is narrow; compare visual content there and verify component specimen CSS is untouched. Do not claim a wide-desktop visual check.

## Button usage code block color audit — 2026-10-28

- Verified: the Vue snippet is the only `<pre class="usage-code">` in the Button page. Current surface is the generic subtle surface token and code inherits the page text color. The color token file has no dedicated code block role; `#484848` currently appears as secondary text, which is not a suitable semantic background token.
- Decision: add dedicated Norato code surface (`#484848`) and code text (`#ffffff`) semantic tokens, then scope them only to `.button-doc .usage-code` and its code child. Keep inline contract code chips and all component visual selectors unchanged.
- Contrast check: white against `#484848` provides strong text contrast (approximately 9.15:1); confirm on the actual rendered code block.

## Button variant gallery arrangement audit — 2026-10-28

- Verified from the supplied screenshot and CSS: nine variants are displayed in four columns (`repeat(4,...)`) at desktop widths. This necessarily creates rows of 4, 4 and 1. The demo well stretches to the full grid-column width even though the Button sample is intrinsically narrow.
- Verified component boundary: `NoratoButton` and `.variant-visual` define the actual sample; `.variant-demo`, `.button-variant-card`, and `.button-variant-grid` control only the surrounding information/gallery layout. Copy controls have their own minimum target token and focus rules.
- Decision: use three columns for desktop (exactly three rows of three), two columns at tablet and one on narrow mobile. Make the demo well an intrinsic-width inline grid, aligned to the RTL start edge. Tighten only card wrapper padding and gaps; do not alter any Button sample styling or content.
- Viewport limit: attached screenshot gives direct wide-desktop evidence for the current defect. Local browser is narrow, so verify the responsive render there and inspect the desktop media rules statically; do not claim wide desktop browser re-render.

## Button variant duplicate and gray backplate audit — 2026-10-28

- Supplied screenshot shows every sample inside a wide gray well; `Tertiary` uses the same subtle surface tint, so it visually collapses into the well and looks like `Text`. `Tertiary` has a filled surface treatment while `Text` is transparent; removing the well preserves and reveals this difference.
- `Danger` renders the real API `destructive` as a red solid pill. `Danger Solid` is a visual-only mock with the same red solid pill, dimensions, and no separate supported API; the two cards are visually redundant.
- Decision: make `.variant-demo` transparent; remove only the `danger-solid` gallery record and its Button contract references. Keep Danger, retain Tertiary/Text, and update count from 8×4×6=192 to 7×4×6=168. Leave Icon Button data intact because the user's evidence and request are scoped to the Button gallery.
- The gallery has eight visual cards after cleanup because Inverse is an additional supported API treatment beyond the seven contract type axes. Its 3-column desktop grid uses six tracks so the last pair can be centered evenly.
- Validate actual remaining gallery and confirm no unused Danger Solid visual CSS or stale Button count remains in the active contract/source.

## Button top specimen content audit — 2026-10-28

- Verified: the top Button preview is a single `.sample-button-row` currently rendering four actual API controls: Primary, Secondary, Inverse (black), and Destructive (red). The preview wrapper is `aria-hidden` and `inert`, so its examples are presentation-only.
- User-supplied image shows a pill-shaped `انصراف` control with a neutral gray outline and dark bold label. This is a visual reference, not evidence for a new Vue API variant.
- Decision: retain the real Primary and Secondary samples, remove only the Inverse/Destructive preview nodes, and add an inert span styled as the cancellation appearance. Use a semantic Norato border token; preserve API and the separate variant gallery.

## Shared component-shell and visual contract audit — 2026-10-28

- Constitution reviewed: project `AGENTS.md` is binding. It requires the exact Spec Kit order, 49 independent Vue 3 component documents, nine named sections, RTL-first semantics, truthful adapter states, token-backed styles, 48px action targets and local rendered validation.
- Evidence: 49 catalog-backed contract documents are present (README excluded); every one has the nine canonical headings. Their structures differ: Overview ranges from one paragraph to several, Anatomy/Parts contain component-specific lists, Variants often encode nested subcomponents and multidimensional counts, and Usage uses nested headings for do/avoid/RTL. A plain shared text renderer will not make this information easy to scan visually.
- Existing presentation evidence: `App.vue` renders an independent route, the specimen, adapter-gated Vue snippet/maturity note, nine contract sections and copy controls. Button alone has custom Variants/States/Sizes visualizers; Input, Select, Checkbox and Radio Button use a limited shared showcase. Other component specimens are already individually authored in `ComponentSpecimen.vue`.
- Visual reference interpretation: the screenshot defines the outer document sequence and quiet section dividers. Button defines the information treatment: visible examples, captions, API/reference distinction and useful copy actions. They are compatible when the Button-specific galleries are embedded in the shared page shell.
- Decision: retain Markdown as the only content source and build one section-aware renderer that transforms its actual paragraphs, nested headings and list items into visual layouts. Use different visual grammar by section (summary, annotated composition, comparison tiles, scale, state board, usage flow, accessibility criteria, token chips/swatches). Keep the original section copy and accessible names; avoid a second hand-authored 49×9 dataset.
- Fidelity safeguard: visual tiles can display the documented subcomponent name, axis values, sizes, states and explicit counts. Only render an interactive-looking API preview when the catalog and current adapter verify it; remaining diagrams are inert conceptual visuals labeled according to maturity. A generic miniature must not imply that unsupported variants work in Vue.
- Main implementation risk: contract text formats vary and some sentences contain more than one dimension. The parser must preserve every source statement or provide a visible text fallback; it must not silently discard content. CSS styling should unify the outer shell without overwriting approved Button samples.
- Scope decision: implement for all 49 individual component pages at once with representative browser review plus route/content coverage validation. Do not alter package APIs, maturity statuses, source contracts or unrelated dashboard views.
# Button Anatomy exploded-map audit — 2026-10-28

- **Contract evidence:** Button Anatomy defines four parts in order: Container, Leading Icon, Label, Trailing Icon. It explicitly says icons are not supported in the current API. The top specimen uses the actual primary adapter, but must remain inert in documentation.
- **Current renderer:** `ContractVisualShowcase.vue` uses one generic anatomy block for both Anatomy and Parts. It places the component name and anonymous numbered circles beside the source-derived part list; for Button, this does not depict how the actual control is composed.
- **Design decision:** Add a narrow Button/Anatomy-only branch. Show the primary assembled pill and the four separated conceptual layers with RTL connectors and numbered labels. Mark icon layers as conceptual/not in current adapter; retain the source-derived textual details and copy affordance.
- **Implementation risk:** A diagram that renders icons as supported slots would contradict the contract. Therefore all exploded layers are inert, clearly illustrative, and no API snippet or behavior is added. No generic renderer or other component is changed.
# Button Anatomy shell/content relationship audit — 2026-10-28

- **Observed defect:** Current four-item diagram creates a Container outline that itself contains «ذخیره», then renders Label as a second «ذخیره». Container is an enclosure, not a peer content node, so the diagram communicates a false duplicate.
- **Contract authority:** Button contract names Container, Leading Icon, Label and Trailing Icon; the label is one part. The two icon parts are unsupported in the current API.
- **Correction:** Use an empty, full-width capsule outline for the Container shell and place three independent content parts outside it in RTL sequence: Leading Icon → Label → Trailing Icon. Dashed guides map those parts back to the enclosing shell; retain note that icons are conceptual only.
- **Risk check:** Avoid making shell look like a second actionable Button. Keep both assembled specimen and diagram inert and visually distinct.

## Button finalization audit — 2026-10-28

- **Constitution/spec/plan consistency:** The current page already has the approved minimal nine-section shell, yellow/outlined top specimen and Vue adapter gating. The request is a refinement of that route, not a new component API.
- **Browser findings:** At the attached 606px viewport, Anatomy squeezes four long descriptions into narrow columns with 10–12px text. Sizes shows yellow number capsules rather than labeled button shapes. States places every sample on a gray well, although the user previously removed such demo backplates from Button variants. Parts shows related families with a generic numbered diagram, repeating Variants instead of explaining internal parts. The token section uses tiny identifiers and ends with malformed text: “توکن‌های مورد استفاده: و .”.
- **Source/API findings:** `ButtonVariantShowcase.vue` renders eight cards although the contract calls seven types; `inverse` is the additional supported API appearance. `ButtonStateShowcase.vue` copies the Default snippet for Hover/Pressed/Focus, so the copy label overpromises. `NoratoButton.vue` has real `label`, `variant`, `type`, `disabled`, `loading`, `pressed`, `iconOnly`, `accessibleLabel` props, but no size or icon-placement API. `pressed` sets ARIA state without a persistent pressed visual.
- **CSS audit:** Active rules for `.button-variant-*`, `.button-size-*`, `.button-state-*`, `.button-anatomy-*`, `.token-visual-*` are in `apps/vue/src/styles.css`; a later shared shell supersedes old `.component-doc` layout rules. Change the active visual selectors directly and scope new sections to Button to avoid another override chain.
- **Risk/mitigation:** A live playground could make a visual reference look production-ready; label it as the actual adapter and retain inert top specimens. Token values can depend on CSS resolution; read them from computed custom properties and show the source token name. Related families remain in the Variants contract, so Parts can become a genuine internal-part contract without losing discoverability.
- **Gate result:** No missing material decision; implementation may proceed under FR-062–FR-068.
