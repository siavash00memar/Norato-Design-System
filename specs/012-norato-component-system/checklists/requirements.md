# Specification Quality Checklist: گسترش سیستم طراحی نوراتو طراحی

**Purpose**: Validate specification completeness and quality before proceeding to planning
**Created**: 2026-10-27
**Feature**: [spec.md](../spec.md)

## Content Quality

### Button pill-radius correction

- [x] Need is grounded in the supplied rendering and existing 25px radius token.
- [x] Intended result is explicit: fully rounded Button ends.
- [x] Scope excludes fields, cards and unrelated control radii.
- [x] Validation includes the exact local Button render and required existing checks.

- [x] No implementation details in user-value requirements
- [x] Focused on user value and product/design-system needs
- [x] Written in language usable by product and design stakeholders
- [x] All mandatory sections completed

## Requirement Completeness

- [x] No [NEEDS CLARIFICATION] markers remain — FR-010 scope is complete inventory documentation
- [x] Requirements are testable and unambiguous except the explicitly gated scope decision
- [x] Success criteria are measurable
- [x] Success criteria are technology-agnostic where outcome-focused
- [x] Acceptance scenarios are defined for the primary journeys
- [x] Edge cases are identified
- [x] Scope boundaries and assumptions are documented
- [x] Dependencies and evidence limitations are identified

## Feature Readiness

- [x] Functional requirements have acceptance intent
- [x] User scenarios cover primary flows
- [x] Feature is ready for planning — FR-010 scope is clarified
- [x] No undocumented legacy implementation decision is required by this draft

## Notes

## Figma documentation-system alignment — acceptance checklist

- [x] Fourteen chapter titles and evidence status are represented in the local documentation architecture.
- [x] Overview uses Figma page structure and hierarchy, while preserving Norato's project typography policy and approved Button sample.
- [x] Foundation visibly demonstrates source-backed Yellow/Blue, neutral/info/tag colors, typography, observed spacing, radii/borders, elevations, states/accessibility, and naming.
- [x] Every sourced value is labeled observed/proposed/inconsistent as appropriate; no false global color/typography/spacing standard is inferred.
- [x] Chapter navigation and the 49 flat component routes remain individually discoverable in RTL.
- [x] Semantic token and legacy selector audit is recorded before CSS changes.
- [x] Local Overview, Foundation, and Button routes rendered and inspected; desktop RTL column order and horizontal overflow were measured, and the 49 component routes remain individually discoverable.
- [x] `pnpm check:tokens`, Vue typecheck, and production build pass.
- [ ] Actual narrow viewport layout and keyboard activation of chapter jumps remain unverified.

## Component documentation rollout — requirements quality

- [x] The scope explicitly preserves one independent page per component and does not group navigation cards.
- [x] Required component contract headings and order are stated explicitly.
- [x] Executable API examples are constrained to inspected Vue adapters; proposal visuals cannot be mistaken for executable components.
- [x] Copy interactions specify feedback, keyboard access and the minimum target size.
- [x] Visual-state examples distinguish source-backed contract appearances from real runtime behavior.
- [x] The first batch names its component pages and establishes why they are grouped for this implementation pass.
- [x] RTL, responsive layout, focus and component maturity are explicit acceptance constraints.

## Component documentation rollout — batch 1 implementation evidence

- [x] Input, Select, Checkbox and Radio Button each retain an independent URL and their own nine-section document.
- [x] Non-Button detail content uses a single vertical editorial sequence; Button's scoped page and gallery styling are unchanged.
- [x] All nine contract sections on every detail page expose copy controls; copy failures and success are reflected in the control label and live region.
- [x] Batch 1 galleries show family-specific option/state visuals, size references and copyable usage/reference notes.
- [x] Vue usage examples match the actual NoratoField, NoratoSelect and NoratoChoiceGroup interfaces.
- [x] Preview-only controls remain inert and disabled; implemented choices visibly communicate selected, disabled-option and error states.
- [x] Four routes passed actual desktop browser review; token validation, Vue typecheck and production build passed.
- [ ] Mobile screenshot validation and full keyboard clipboard interaction were not completed in this browser pass.

## Canonical catalog/data architecture — requirements quality

- [x] Canonical metadata fields are explicitly listed and separated from the nine-section prose contract.
- [x] The independent URL and standalone document requirement remains explicit for every component.
- [x] Runtime maturity is distinct from visual specimen presence and contract existence.
- [x] Vue adapter/export fields must be based on repository evidence and validated.
- [x] Foundation chapter metadata has one authoritative dataset requirement.
- [x] Validation defines measurable uniqueness and reference-integrity checks.
- [x] The migration names legacy partial inventory and all duplicated Vue lookup surfaces to replace.

## Follow-up contract acceptance (2026-10-27)

- [x] The user specified the nine exact headings and complete 49-component scope.
- [x] All 49 contracts contain the nine headings in the required order.
- [x] Each section contains component-specific guidance or explicitly states that the Norato contract does not define the detail.
- [x] All 49 contracts use Norato semantic token guidance.
- [x] All 49 local component pages display the required section order and independent specimen, with no external attribution or link.
- [x] The Terminator reference is persisted in root AGENTS.md.

## Team usability follow-up readiness (2026-10-27)

- [x] Audience and outcome clarified: the Vue team needs an adoption-ready local reference and UI correction.
- [x] Working assumption documented: private workspace packages for the team, no external registry publishing.
- [x] Duplicate component detail renderer is confirmed as a defect and added to the implementation plan.
- [x] Vue onboarding route and actionable adoption guidance exist.
- [x] Dashboard/component specimen hierarchy and readability pass rendered desktop review for this request; a narrow viewport override was not available.
- [x] Token, TypeScript, production build, desktop keyboard navigation and controlled Field/Select/Checkbox browser checks pass; mobile remains unverified.
- [x] Adapter audit recorded missing shared styles, missing controlled update events, and the incomplete Date Picker before implementation.
- [x] Workspace package imports resolve from the Vue app.
- [x] Actual adapter styles and form updates pass rendered browser checks.

## Emil design-engineering quality pass (2026-10-27)

- [x] Markdown contract rendering preserves semantic structure and safely handles inline links/code.
- [x] Body/compact type sizes meet FR-026 through Norato tokens; headings, labels and metadata are visually distinct.
- [x] Keyboard focus and action feedback are visible and targets meet the 48px project minimum.
- [x] Color pairings are measured for text contrast; status is understandable without color alone.
- [x] Motion uses explicit properties, a brief press response, and respects reduced-motion.
- [ ] Desktop rendered pages show clear hierarchy and no overflow; responsive breakpoints are reviewed and mobile is browser-verified if viewport controls are available. Desktop and CSS review pass; mobile browser evidence remains open.
- [x] Token, Vue typecheck, production build, and browser route checks pass; remaining limitations are recorded.

## Norato-only presentation (2026-10-28)

- [x] No external design-system name, URL, attribution, or external token label remains in the UI or team-facing documents.
- [x] All 49 contracts retain their nine required sections and use Norato semantic token guidance only.
- [x] Local browser renders overview, component detail, team guide and inventory without external references.
- [x] Token check, Vue typecheck and production build pass; mobile viewport limitation is accurately recorded.

## Button reference-card correction (2026-10-28)

- [x] Button page uses a scoped responsive card layout; the narrow actual render shows two variant columns and single-column contract cards without clipping.
- [x] Variant and state examples show UI; executable API examples use `primary`, `secondary`, `inverse`, and `destructive` (shown under the Danger contract label where appropriate).
- [x] Contract-only types/states are labeled as visual reference; size is shown as contract reference and not an adapter prop.
- [x] Main usage, contract text and variant/state examples have 48px-target copy controls with feedback; clipboard success and keyboard focus were verified in browser.
- [x] RTL, token validation, Vue typecheck and production build checked; narrow browser render reviewed.
- [ ] Wider desktop breakpoint was not available in the in-app browser viewport; desktop CSS path remains to visually verify.

## Button spacing and yellow accent correction (2026-10-28)

- [x] Primary Button uses Norato yellow with readable dark label.
- [x] Secondary Button has a 2px yellow border.
- [x] Variant/State gallery cards pack content naturally; Button preview does not retain excess vertical space.
- [x] Keyboard focus remains visible; local render and token/type/build checks pass.

## Button typography and silhouette (2026-10-28)

- [x] Button labels use Estedad Bold in the real adapter and visual samples.
- [x] Button ends use the semantic pill/control radius; copy controls and cards keep their existing geometry.
- [x] Local browser confirms font, pill shape, yellow Primary/2px Secondary and visible focus; token, TypeScript and build checks pass.

## Button vertical layout and data clarity (2026-10-28)

- [x] Preview, Vue usage, and all nine Button contract cards use one CSS track at desktop and smaller breakpoints; rendered narrow page confirms sequential cards.
- [x] Button contract copy is concise, Persian-first, and LTR identifiers/tokens render as isolated units in the local page.
- [x] Button card chrome and gaps are reduced; content remains legible and copy actions remain available.
- [x] Local render, token check, Vue TypeScript, and production build passed. Wide desktop browser rendering remains unverified because the connected viewport is narrow.

## Button documentation editorial hierarchy (2026-10-28)

- [x] Page title and metadata are compact; section headings/body are reduced to an intentional readable scale.
- [x] Repeated heavy card chrome is removed from documentation-only sections and replaced with subtle dividers; code/copy controls are visually quieter.
- [x] Button specimen and all variant/size/state CSS remain untouched by the page hierarchy rules.
- [x] RTL and nine-section order remain intact; copy target stays 48px, keyboard focus was visibly checked, and local render, tokens, TypeScript, and build passed.

## Button usage code block colors (2026-10-28)

- [x] Vue usage block background is exactly `#484848` and code text is white through semantic tokens.
- [x] Styling is limited to Button usage code; inline chips, Button examples, LTR wrapping and copy/focus behavior remain intact.
- [x] Local browser render, token check, Vue TypeScript, and production build pass.

## Button variant gallery balance (2026-10-28)

- [x] Desktop CSS lays out cards in three equal columns and centers any incomplete final row.
- [x] Sample wells fit samples; card title, description, API status, and copy action align with less empty space.
- [x] Narrow render reflows to two columns with the final card centered; mobile rule switches to one column. Button samples and copy target remain unchanged.
- [ ] Wide desktop after-render was unavailable; local narrow browser render and token/type/build checks pass.

## Button duplicate variants and gray sample wells (2026-10-28)

- [x] Gray sample wells are gone; Tertiary's own subtle fill is distinct from transparent Text.
- [x] Duplicate visual-only Danger Solid is removed; Danger remains the destructive API example.
- [x] Button contract lists 7 types and 168 combinations; other types and Icon Button documentation remain intact.
- [x] Gallery, copy affordance, RTL, tokens, TypeScript and production build are validated.

## Button top visual specimen content (2026-10-28)

- [x] Top specimen shows yellow Primary, yellow-outline Secondary, and the supplied gray-outline `انصراف` visual.
- [x] Black Inverse and red Destructive examples are absent from the top specimen only; the gallery/API remain unchanged.
- [x] Cancellation sample is inert and documented as presentation-only; local render, token, TypeScript and build checks pass.

## Shared page shell and visual contract information (2026-10-28)

- [ ] All 49 individual component routes use the supplied Split Button page's compact RTL shell and section sequence.
- [ ] Button preserves its approved specimen/gallery while using the same shared page shell.
- [ ] All nine canonical sections use a purpose-matched visual representation and retain concise, source-backed, copyable details.
- [ ] The visual renderer reads each component's own Markdown contract and typed catalog metadata; no component prose or runtime API is duplicated in a second data source.
- [ ] Adapter-backed examples match verified API exports/props; proposal-only visuals are inert and labeled as references.
- [ ] Anatomy and Parts, Variants, Sizes, States, Usage, Accessibility and Tokens have visible examples/diagrams rather than plain text-only presentation.
- [ ] All 49 pages stay separate; page navigation, RTL reading order, source identity, copy actions, focus treatment and 48px action targets remain intact.
- [ ] Browser review includes pages with different data structures and confirms no raw Markdown, empty visual section, horizontal overflow or unsupported API claim.
- [ ] Catalog checks, token validation, Vue typecheck/build and `docs/request-validation-checklist.md` pass; unrun viewport/AT checks are disclosed.
# Button Anatomy exploded-map acceptance — 2026-10-28

- [x] Button Anatomy shows the assembled button and an exploded map of its Container, Leading Icon, Label and Trailing Icon.
- [x] RTL ordering and visible connectors make each layer's relationship clear.
- [x] Optional icon layers are identified as conceptual; no claim of current Vue API support is introduced.
- [x] Diagram is inert, token-backed and does not displace the existing copy action or textual contract; wide desktop and 390px mobile render remain unverified.
- [x] Actual browser render, catalog/token/type/build checks and request checklist are recorded.
# Button Anatomy shell/content distinction — 2026-10-28

- [x] Container is an empty enclosing outline with no duplicate button text.
- [x] Label appears once as an independent exploded content part; optional icons retain their API caveat.
- [x] The diagram visually distinguishes enclosure from the contents it holds and preserves RTL order.
- [x] Button Anatomy and the separate Parts presentation both remain accurate in the actual browser render.
- [x] Required catalog, token, typecheck, build and request-checklist results are recorded; wide-desktop and 390px mobile viewport review remain unavailable.

## Button finalization acceptance — 2026-10-28

- [ ] The Button page still has one independent route and all nine canonical sections in the shared minimal RTL shell.
- [ ] The top specimen retains approved Primary, Secondary and «انصراف» visual treatments and remains inert.
- [ ] Vue usage gives a working snippet and a separate live `NoratoButton` playground with labeled 48px controls, keyboard focus and truthful loading/disabled feedback.
- [ ] Seven contract variants and API-only Inverse are clearly distinguished; copy results match actual API support.
- [ ] Sizes are button silhouettes; visual heights below 48px are labeled as references, and States have no gray wells or misleading copy code.
- [ ] Anatomy is readable at the connected width, and Parts describes actual internal elements rather than unrelated families.
- [ ] Token names, resolved values and copy actions are readable; no malformed token note appears.
- [ ] Actual browser render passes RTL, no page overflow, keyboard/focus and copy-feedback review; token/catalog/type/build checks are recorded with unrun coverage disclosed.
