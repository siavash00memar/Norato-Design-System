# Clarify: گسترش سیستم طراحی نوراتو طراحی

**Status**: Complete

## Decision

The user selected the complete observed inventory کامپوننت‌ها (approximately 49 component families). The delivery must therefore:

- inventory all observed families;
- preserve Norato yellow and blue as the only brand accents;
- distinguish implemented, adapted, proposed and deferred items;
- avoid claiming a component is implemented until its Vue 3 contract and validation are complete.

## Follow-up clarification — 2026-10-27

The user clarified the required contents of **every individual component document**. Each of the 49 component documents and its local component page must include these exact sections, in order:

1. Overview
2. Anatomy
3. Variants
4. Sizes
5. States
6. Parts
7. Usage
8. Accessibility
9. Tokens

Each section contains component-specific Norato guidance. If the current contract does not define a value or behavior, record an explicit unspecified note rather than infer it. Preview may remain supplementary; it does not replace the nine required sections.

## Acceptance contract

## Button card correction clarification — 2026-10-28

- User direction: first repair Button card layout, give component cards visual content (especially Variants), and make useful code/text copyable; use Button as the reference before applying the pattern elsewhere.
- Acceptance: only Button's detail presentation changes in this iteration; the 9 contract sections stay separate; supported Vue variants are visibly distinguished from visual-only contract variants; code copy has a keyboard-accessible 48px control and success/failure feedback; responsive layout has no horizontal overflow.
- Evidence-backed API boundary: current `NoratoButton` exposes `primary`, `secondary`, `inverse`, and `destructive`; no size prop exists. The contract also lists additional visual variants and size references, which must not be presented as implemented API.

## Button visual correction — 2026-10-28

- User correction: Norato action accent is yellow; Primary fill is yellow; Secondary stroke is yellow at 2px. The current page also looks stretched.
- Acceptance: Primary uses the semantic Norato yellow token with dark readable text; Secondary uses a 2px yellow stroke; existing focus contrast remains visible. Variant/State card contents pack to their intrinsic height with consistent gaps, and Button's specimen preview loses excess vertical padding. Keep all changes scoped to Button appearance except the shared adapter's Primary/Secondary colors, which are package-level Button semantics.
- Root-cause evidence: `.button-variant-card` and `.button-state-card` use `align-content: space-between`; `component-sample` has a large family-wide minimum height. The Vue package currently colors Primary and Secondary blue, with thin stroke.

## Button typography and silhouette correction — 2026-10-28

- User direction: Button text uses Estedad Bold; button ends are fully rounded (pill silhouette).
- Acceptance: actual Norato Vue Button, dashboard Button class, Button gallery/state visual references use the semantic Estedad heading family at bold weight and `--norato-radius-control`; copy controls and unrelated chips/cards retain their own shape/typography.

- Exactly one Markdown contract per catalog family.
- All nine required headings appear on every contract and in the listed order.
- The corresponding Vue page renders those same nine sections and no external attribution or link.
- No generic placeholder sentence may stand in for component-specific anatomy, variants, sizes, states, usage, accessibility, or tokens.
- Norato semantic tokens are documented directly in each component contract.
- Terminator is a persistent project instruction in the root `AGENTS.md`.

## Evidence

The نمای کلی مجموعه exposes 49 component families across actions, inputs, navigation, feedback, data display, overlays, media and chat. Norato currently has a smaller Vue inventory, so the gap must be documented rather than silently hidden.

## Team usability follow-up — 2026-10-27

- User outcome: the Vue team can adopt this as a working team reference; the dashboard and component presentation must be visually corrected.
- Acceptance contract: one canonical detail renderer must show the selected component's standalone Norato contract; remove the duplicate legacy generic detail page. Every catalog card/page must disclose implementation maturity and provide a real Vue usage/import path where implementation exists, or clearly identify proposal-only samples. Add a team onboarding page covering install/use, token consumption, RTL, accessibility, status meaning, and contribution/validation workflow. Improve dashboard hierarchy, legibility, responsive navigation, and token compliance.
- Assumption: “team usable” means private installable workspace packages for Vue adapters and tokens, not publishing to an external registry; no external release was requested.
- Source audit found the Vue adapters had class hooks but no shared stylesheet, and Field/Select/ChoiceGroup did not emit controlled updates. These are concrete adoption blockers; include shared component styling and model update contracts for native controls. Keep Date Picker Proposed until its calendar selection behavior exists.

## Design-engineering quality follow-up — 2026-10-27

- The request “use Emil's skills” is interpreted against the available project skill catalog: apply the `emil-design-eng` philosophy and all directly relevant review skills, not unrelated skills for other product types.
- Review scope: dashboard, Vue team guide, 49-family inventory, component detail page, shared typography/spacing/color tokens, control/navigation states, reduced motion, and responsive breakpoints.
- Design authority remains the Norato project constitution: Vue 3, RTL-first, Estedad/Vazirmatn, semantic tokens, 48px minimum targets, yellow/blue brand, and WCAG-conscious semantics.
- No material scope/API decision is unresolved. The goal is review and correction of this local documentation/product surface; user research and registry publishing are not implied.
- Accepted UX direction: contract Markdown must render as semantic/scannable content; body and metadata type sizes must meet the newly specified floors; motion is purposeful and reduced-motion aware; status remains text-labeled.
- Focus-color decision: preserve the established Norato yellow focus accent, and pair it with a separate blue outer outline so the indicator remains visible against white/light surfaces. A yellow-only ring is not sufficient contrast; replacing the approved yellow accent with blue alone would conflict with the existing Field contract.
- Gate result: clarification complete; proceed to plan/checklist/tasks after recording these requirements.

## Component separation clarification — 2026-10-27

- User direction: “کامپوننت هارو خوشه بندی نکن هر کامپوننت جدا باشه”.
- Acceptance: each of 49 components is independently listed, directly navigable, and retains its own route, Norato contract and specimen. Category metadata can describe/search/filter but must not group the sidebar or merge cards/pages/examples.
- Implementation detail: replace category navigation with a flat list of all components; keep category as metadata only and omit it from each card/detail header where it implies clustered presentation.

## Norato-only presentation clarification — 2026-10-28

- User direction: do not name or link the external design system anywhere in the team-facing Norato product.
- Acceptance: remove external product names, attribution, outbound reference links and external token names from the application, component contracts, team guide and consumption documentation. Present visible guidance as Norato contracts; mark unspecified Norato behavior explicitly.

## Button desktop stacking and data clarity — 2026-10-28

- User direction: on desktop, Button cards must stack vertically; the card data is visually broken and the design should be more minimal.
- Acceptance contract: preview, implementation, and each independent Button contract section occupy a single full-width RTL column at every breakpoint; no Button documentation cards sit side-by-side. Mixed Persian/Latin labels are isolated and content is concise/scannable. Reduce excess card chrome and spacing only within Button detail; keep the yellow primary, 2px yellow secondary, Estedad Bold pill buttons, copy affordances, accessibility, and existing semantic tokens.
- Scope: Button detail page and its standalone contract only; do not modify other component layouts or APIs. This is a clarified visual/data presentation request with no unresolved material decision.

## Button documentation visual restraint — 2026-10-28

- User clarification: “کامپوننت هارو نمیگم” — the requested redesign applies to how information is presented on the Button page, not the Button components themselves. Use Apple design principles for the page's information hierarchy and restraint.
- Acceptance contract: reduce oversized title, section headings, body typography, excess framing and code/copy chrome using existing semantic Norato tokens. Keep an editorial one-column flow with subtle separators and compact but legible spacing. Preserve all nine content sections, copy actions, focus/target accessibility, and existing specimen/gallery visuals exactly.
- Scope: Button documentation shell and rendered contract information only. Do not change component styles, component showcase cards, actual variant buttons, or other pages. No material decision remains open.

## Button usage code block colors — 2026-10-28

- User direction: “بخش کد رو بکش رو ۴۸۴۸۴۸ بزار و کد رو سفید بنویس”. Interpreted as the Vue usage snippet background `#484848` and code foreground white.
- Acceptance: apply these exact colors through semantic Norato code-surface/text tokens, scoped to the Button page's usage block; preserve LTR code, wrapping, copy control and keyboard focus. Do not recolor inline code chips, Button specimens, or other pages.

## Button variant gallery arrangement — 2026-10-28

- User direction: fix the attached Button variant gallery screenshot. It showed nine variant cards in a four-column layout, leaving the ninth card isolated on the last row and long empty sample wells.
- Acceptance: arrange variants in a balanced three-column desktop gallery and center any incomplete final row; make each sample well fit its actual sample rather than stretching across the card; keep content compact. Reflow to two columns at tablet and one column on narrow mobile. Preserve Button visuals, labels, support statuses, and copy controls. FR-038 later removes a duplicate, leaving eight gallery items. Scope only the gallery presentation; no component style/API changes.

## Button variant duplication and gray sample wells — 2026-10-28

- User direction: remove the gray boxes behind all variants and remove variants that are duplicated under separate titles.
- Evidence: the gray well makes the `Tertiary` fill blend into its background, visually matching the transparent `Text` treatment; removing the well reveals their distinct treatments. The visual-only `Danger Solid` card is an exact red-fill duplicate of API-supported `Danger` (`destructive`) and has no distinct API behavior.
- Acceptance: remove the gray backplate from every variant sample; remove `Danger Solid` from the Button variant gallery and standalone Button contract, retain `Danger` as the one destructive treatment, and recalculate Button's count as 7 types × 4 sizes × 6 states = 168. Preserve all other Button treatments and the separate Icon Button contract. Copy controls and actual Button styling remain unchanged.

## Button top specimen content — 2026-10-28

- User direction: remove the black and red examples from the top visual specimen and add the supplied `انصراف` button image.
- Acceptance: keep the existing yellow Primary and yellow-stroke Secondary actual examples, remove Inverse and Destructive only from this top specimen, and add an inert visual-only gray-stroke pill labeled `انصراف`. Preserve API support and gallery examples elsewhere; do not imply the new sample is an executable variant.

## Component documentation rollout — 2026-10-28

- User direction: make the remaining component pages like Button, one at a time.
- Acceptance: retain all 49 standalone routes and the required nine sections; improve the editorial one-column page hierarchy, provide visual specimens for documented variants/states/sizes where source evidence supports them, add copy actions and feedback for each useful contract section, and show Vue usage only where an actual implemented adapter supports it.
- Scope decision: proceed in small component-family batches, reviewing source contracts and existing Vue adapters before each batch. Batch 1 starts with Input, Select, Checkbox and Radio Button because all four are currently marked Implemented and have existing adapters. Do not fabricate additional runtime APIs, alter the Button specimen, cluster the inventory, or mark proposed components implemented.
- Clarification status: no material product/API ambiguity remains; source gaps are recorded per component rather than guessed.

## Data architecture and discoverability — 2026-10-28

- User direction: engineer all design-system data so it is accessible, clear and understandable.
- Acceptance: one typed component catalog is authoritative for the 49 IDs/slugs/names, document paths, tags, maturity, actual adapters/exports and specimen keys; the nine-section Markdown files remain the human-readable contract source; foundation chapters use one dataset. Preserve all independent component routes and never infer runtime readiness from a document or visual sample.
- Decision: use catalog metadata plus the existing per-component Markdown contracts, not a second generated copy of contract prose. This keeps engineering filters/API status structured while allowing the team to review and edit full component guidance in the current familiar format.
- Migration scope: replace duplicated runtime component/foundation arrays and slug/snippet/sample lookup maps with catalog-derived data; migrate the stale partial `packages/components/src/inventory.ts` to the same full catalog; add a validation script for referential integrity and API truth.
- Clarification status: resolved from user's goal and existing documentation requirements; no further product decision needed.

## Button silhouette correction — 2026-10-28

- User evidence: attached render shows Primary, Secondary and neutral cancellation specimen with visibly less than a full capsule silhouette.
- Source audit: all three use `--norato-radius-control: 25px`; at approximately 60px rendered height, this leaves a slight flat portion at each end.
- Decision: add semantic `--norato-radius-pill` as an alias of the already observed 50px shape value. Apply it to Button implementations/specimens only; preserve the 25px control radius for inputs and unrelated controls.

## Shared component-page presentation and visual contract data — 2026-10-28

- Constitution stage: reviewed the project `AGENTS.md` requirements. Preserve Vue 3, RTL-first behavior, 49 independent component pages, nine contract sections, semantic tokens, verified adapter boundaries, 48px interaction targets and actual-browser validation. No constitution exception is requested.
- User clarification: the supplied Split Button page is the presentation-shell benchmark for every component page; Button's data treatment is the information-design benchmark, and all nine contract areas should be made visual.
- Scope resolved: apply to all 49 independent routes and their nine canonical sections. Do not cluster pages or merge contracts. The top specimen, status/maturity, Vue usage note/snippet, copy actions and source identity remain in each page.
- Meaning of “visual”: render the contract's actual entries as visual comparisons, diagrams, miniature component samples, flows, check indicators or semantic token chips/swatches. Concise text remains as captions and accessible labels; useful contract source remains copyable.
- Truth boundary: keep actual Vue examples gated by catalog-verified adapters and props. Any visual model for an unsupported or proposed component is inert and explicitly labeled “مرجع بصری”; do not invent runtime behavior, token values, sizes, states or accessibility guarantees absent from that component's contract.
- Presentation resolution: one shared RTL single-column document shell follows the supplied page's compact heading/status, preview, usage/maturity note and quiet dividers. Preserve Button's approved visual samples and specialized galleries inside this shared shell.
- Clarification outcome: all material decisions are resolved by the user's request, attached page, existing catalog/contracts and AGENTS.md. No additional product/API question is needed before implementation.

## Figma design-system alignment — 2026-10-28

- Source inspected: Figma file `WWw9btcZcWPxJGpWw8fko5`, selected overview node `9678:29838`, 14 top-level chapter frames `00–13`; high-fidelity design contexts and screenshots were retrieved for all 14 frames.
- User outcome: make the implemented Norato documentation and foundation reflect the selected current design-system file.
- Acceptance: align overview, foundations, chapter navigation, evidence labels, token values and the documentation shell; retain independently navigable 49 component documents and approved Button examples. Keep RTL/Vue/semantic tokens.
- Verified Figma evidence: Yellow `#FDC101`, Blue `#134F89`, neutral values `#FFFFFF/#F5F5F5/#F2F2F2/#E8E8E8/#D5D5D5/#A1A1A1/#484848/#1A1A1A`, Info `#FFF8E0/#FBEAB2`, Tag Blue `#E4F2FF/#B0D7FE`; observed spacing `2/5/6/8/10/12px`; radii `5/12/25/36/50px`; component surface radius `25px`; yellow secondary border `2px`; elevations include Box `0 2px 4px #00000026`, Modal `0 10px 8px #00000040`, Pressed inset `2px 4px 4px #0000002E`, Chatbot `0 2px 10px #00000026`, Drop `0 -4px 10px #0000001A`, New `0 2px 12px #00000026`, Main `-2px 3px 4px #0000001A`.
- Evidence limits: Figma labels these as an initial extraction needing review; 7 color variables/8 styles, 33 screens inspected; legacy direct link colors differ (`#2A60E7`, `#2D81FF`); it says global error/success/focus colors were not extracted; typography has 50 legacy/unavailable font layers; product type samples cluster at 11–13px and observed spacing values do not form a confirmed scale. Do not infer a new product token or component contract from these gaps.
- Policy conflict resolved from existing project instruction: Figma contains legacy Lalezar roles, but Norato's binding constitution forbids Lalezar; map heading/title roles to Estedad and body/input to Vazirmatn, and document the deviation.
- Scope decision: present all 14 Figma chapters as standalone foundation/documentation links while preserving the existing flat component list and routes. Adapt information architecture and design-token presentation, not production component behavior.
# Button Anatomy exploded-map clarification — 2026-10-28

- **User intent:** Keep the current component-page presentation model and make Button → Anatomy visual, like an exploded diagram of the button.
- **Source of truth:** `docs/component-contracts/button.md` Anatomy and Overview; the assembled specimen may use the verified primary visual, while the component text states leading/trailing icon support is absent from the current Vue API.
- **Decision:** Show an inert assembled Button plus a separated, labeled RTL component map for Container, optional Leading Icon, Label, optional Trailing Icon. Connect the parts visually. Mark optional icon anatomy as conceptual/reference-only and unsupported by the current adapter.
- **Unresolved decisions:** None; preserve existing shell and other Button galleries.
# Button Anatomy map correction — 2026-10-28

- **New evidence from rendered review:** The Container tile was drawn as an outlined miniature button containing «ذخیره», while the Label tile separately repeated «ذخیره». This visually represented the shell as content and duplicated the label.
- **Correction:** Depict Container as an empty outline/surface. Explode only the actual contents (Leading Icon, Label, Trailing Icon) from that enclosing shape. Preserve RTL order and the no-icon-slot API caveat.
- **Scope:** Button Anatomy only; keep Parts as the per-part explanatory list and preserve all other Button samples and sections.
- **Unresolved decisions:** None.

## Button page finalization clarification — 2026-10-28

- **Active user intent:** Finish the Button documentation page for the Vue team and fix concrete UI and information defects. Disregard the pasted static-site design-system extraction.
- **Verified implementation boundary:** `NoratoButton.vue` supports `label`, `variant` (`primary`, `secondary`, `inverse`, `destructive`), `type`, `disabled`, `loading`, `pressed`, `iconOnly`, and `accessibleLabel`. It has no size or icon-placement prop/slot. `pressed` sets `aria-pressed` and does not alone render a visual pressed state. `loading` disables the native button and sets `aria-busy`.
- **Visual classification:** Seven types are documented in the contract; `inverse` is an additional supported API appearance, shown separately. The top specimen remains Primary, Secondary and inert «انصراف».
- **Anatomy versus Parts:** Anatomy is the spatial map; Parts specifies the native root, label, optional conceptual icon positions and loading indicator. Related Icon/Social/Brand families remain under Variants.
- **Interaction boundary:** The new playground is explicitly live and uses the real Vue adapter; all upper specimens/galleries remain inert. Sizes below 48px are visual references only.
- **Decision status:** No material user preference is unresolved. Existing approved Norato rules govern the choices.

- 2026-10-28: User screenshot identifies malformed playground controls and requests Animated UI. Official Animate UI is React-only; implement its restrained motion principles in Vue without importing React. Acceptance: clear RTL fields, animated toggles/selection, compact code toolbar, 48px targets and reduced-motion support.

- User supplied two screenshots: select chevrons hug the left border and toggle group has unwanted outer pills. Acceptance is an inset clear select chevron and bare switch+label rows. No new behavior or library requested.
- 2026-10-28: Screenshot shows native Windows select popup with blue highlight. User wants a different opening. Existing NoratoSelect is also native select, so a page-local Vue menu is the intended scope.
- 2026-10-28: User requests all numbers Persian. Interpreted as visible prose/UI numbers on every route and live state, while preserving exact technical syntax in code and identifiers so team snippets remain executable.
