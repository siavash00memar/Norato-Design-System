# Implementation Plan: گسترش سیستم طراحی نوراتو

## Button pill-radius correction (2026-10-28)

1. Audit Button selectors and the supplied render against the approved capsule rule.
2. Add semantic `--norato-radius-pill` using the existing observed 50px radius.
3. Apply it to Norato Button, dashboard Button, Button galleries and cancellation specimen only; preserve field/card radii and Button colors/typography/stroke.
4. Update Button contract/rules, then inspect the local render and run token, Vue typecheck and build checks.

## Technical Context

- Primary surface: Vue.js 3 + TypeScript + Vite.
- Existing authority: `packages/tokens/src`, `packages/vue/src/components`, `packages/components/src`, `docs/`, and current contracts.
- Visual direction: Norato RTL information architecture and semantic contracts; yellow/blue values remain authoritative.
- Token architecture: primitive → semantic → component, exposed as CSS custom properties.
- Validation: `pnpm check:tokens`, Vue typecheck/build, browser render at desktop/mobile, and `docs/request-validation-checklist.md`.

## Architecture

1. Add semantic Norato theme tokens for brand, glass surfaces, focus, feedback, spacing and component roles without replacing existing public token names.
2. Add a reusable Vue documentation shell with RTL sidebar, overview, foundation, inventory and interactive component showcase.
3. Keep the complete component inventory as data-driven catalog entries with status and rationale; only validated Vue components are marked implemented.
4. Extend the component contract index and documentation rules with the personalized glass/brand rules.
5. Keep all new CSS values token-backed; use logical properties and `prefers-reduced-motion`.
6. Store one Markdown contract per component under `docs/component-contracts/`; make each page independently addressable and render its own contract sections in the Vue preview.
7. Present a flat, direct navigation list for all 49 components. Categories remain optional metadata/filter criteria only; never use category headings to cluster component navigation, cards, or documentation pages.

## Component Status Strategy

- **Implemented**: existing or newly validated Vue 3 component with contract and states.
- **Adapted**: pattern mapped to an existing Norato primitive but not yet a standalone component contract.
- **Proposed**: accepted gap with documented anatomy and rationale, awaiting implementation.
- **Deferred**: not safe to implement in this delivery due to missing behavior/evidence.

## Verification Strategy

- Token schema and token usage checks.
- TypeScript and production build.
- Browser checks for RTL, brand colors, keyboard focus, disabled/loading/invalid examples and responsive no-overflow.
- Inventory completeness check against the 49 observed خانواده‌های کامپوننت.

## Correction audit

One standalone file and one hash route exist for each of the 49 catalog entries. Browser verification currently covers the Button route only. An audit found that several contract sections and sample renderers still reuse generic content; these do not count as complete source-derived component documentation. Keep T019 open until each route has a unique Norato contract and appropriate component specimen, and all routes have been reviewed in the local browser.

## Contract correction plan

1. Keep the nine user-named sections as the canonical component contract structure; retain Preview/Source notes only as additional sections.
2. Define component-specific Norato behavior, semantic tokens, and explicitly unspecified details.
3. Replace boilerplate in each Markdown contract with concrete Norato guidance.
4. Render the nine sections in the same order on each hash-addressable page; keep component examples and Norato contract links visible.
5. Verify inventory-to-document coverage, section order/content, token references, build, and actual local browser render. Keep incomplete or unverified criteria open.

## Team usability and dashboard correction plan

1. Remove the obsolete duplicate generic component-detail renderer and its dead sample dispatch; keep one canonical Markdown-contract-driven page.
2. Add a team guide route with Vue 3 setup/use instructions, token imports, RTL, accessibility, maturity semantics, contribution path, and validation commands, linked in primary navigation.
3. Improve the dashboard information hierarchy and scanability, inventory maturity cues, and component page layout using semantic tokens and existing fonts.
4. Rework component specimen taxonomy: visually specific and labeled examples, safe static demos for proposals, and clear import/use guidance only where implementation is verified.
5. Validate desktop/mobile rendered pages, RTL, keyboard behavior of navigation and filters, token usage, TypeScript and build; record gaps without overstating production readiness.
6. Package Vue adapters and tokens as private pnpm workspace packages with internal exports; add one shared token-backed component stylesheet.
7. Add controlled update events to Field, Select and ChoiceGroup, exercise those adapters in the Vue showcase, and mark incomplete Date Picker Proposed until calendar selection is implemented.

## Emil design-engineering quality pass — plan (2026-10-27)

- Keep the Vue/Vite surface and existing Norato token architecture; do not add a parallel UI framework or runtime animation dependency.
- Extend typography semantic tokens for readable documentation body, compact labels, and section headings; retain Vazirmatn/Estedad and avoid page-local raw type values.
- Render trusted local Markdown using an escaped, small-purpose renderer that supports headings, paragraphs, lists, inline code, emphasis, and HTTPS/anchor links. Escape source content before formatting; do not execute raw HTML.
- Improve contract typography, spacing, link affordance, card hierarchy and focus feedback through semantic CSS tokens and logical RTL properties.
- Use transform/opacity-only short transitions on interactive elements with a distinct active press state; honor `prefers-reduced-motion`. Do not add motion to frequent navigation beyond immediate feedback.
- Confirm contrast for main text, brand buttons/links, status labels, focus, placeholder and disabled combinations. Preserve the established yellow focus accent and add a blue contrast outline around it for light surfaces; preserve both Norato brand colors.
- Validate desktop in the actual app, keyboard/focus and reduced motion where observable, responsive CSS at 600/900/1100px in source, and browser mobile rendering if viewport control is available. Report the unavailable mobile check as open.
- Explicitly out of scope: implementing production APIs for the 44+ proposed/adapted families or releasing packages to a registry.

8. Keep the app and every team-facing contract free of external product names, attributions, outbound reference links and external token labels.

## Button reference-card correction plan — 2026-10-28

1. Scope detail-page layout changes to Button; arrange its preview/API and nine contract cards in a responsive, balanced grid using existing Norato tokens.
2. Add visual galleries for contract variants, sizes and states. Render the four existing Vue API variants and supported loading/disabled states as actual Norato buttons; label remaining examples as visual contract references because the adapter has no size prop or API for those variants.
3. Add copy controls for each variant's Vue usage and the main implementation example, with accessible labels and feedback.
4. Validate copy output, RTL, desktop/narrow layout, token check, Vue types, and production build; record evidence before applying this pattern to other components.

## Button stretch and accent correction plan — 2026-10-28

1. Fix the verified stretch cause by top-aligning gallery content with compact semantic gaps and reducing only Button specimen's excess height.
2. Change the package Button Primary fill to the Norato yellow token and Secondary border to the semantic 2px border token/yellow; retain focus contrast and readable text.
3. Re-render Button locally at available width, inspect card spacing and color roles, and rerun token, TypeScript and production build checks.

## Button type and pill silhouette plan — 2026-10-28

1. Apply the semantic Estedad heading family and bold weight to actual Button controls and their visual-only Button representations.
2. Apply the existing control-radius token to Button controls so both ends form a pill; leave copy actions and unrelated card/control shapes untouched.
3. Update the Button contract and interaction rules, then inspect actual local rendering and rerun required checks.

## Button single-column and minimalist data plan — 2026-10-28

1. Remove the Button-only multi-column desktop grid and redundant breakpoint overrides; use one semantic-token full-width column at every size.
2. Audit and simplify Button contract prose, make list data RTL-first and isolate API/token identifiers as LTR code; preserve the nine-section contract and copyable source.
3. Reduce Button card decoration and internal gaps using existing tokens; retain visible hierarchy, focus treatment and 48px interactive targets.
4. Validate the full page structure and data at the local render, then run token, Vue type and production-build checks. Record viewport limitations accurately.

## Button information hierarchy and visual restraint plan — 2026-10-28

1. Audit Button-scoped documentation selectors separately from specimen/gallery selectors; keep all component visuals outside the change.
2. Apply a compact hierarchy to page metadata, title, section headings, prose, code sample, and copy labels using existing documentation and spacing tokens.
3. Replace repeated heavy documentation-card surfaces with a clean editorial flow and subtle separators; preserve one-column order, RTL, copy target size, and visible keyboard focus.
4. Compare local renders before/after, confirm component examples remain visually unchanged, and run required token, TypeScript, build, and request-checklist validation.

## Button usage code block contrast plan — 2026-10-28

1. Add semantic code surface and code text tokens with the requested exact colors.
2. Apply the tokens only to the Button Vue usage pre/code block; retain LTR formatting, wrap, copy target, and focus styles.
3. Inspect the actual local render and rerun token, TypeScript, and build checks.

## Button variant gallery balance plan — 2026-10-28

1. Replace the current four-column desktop gallery with three equal columns and center incomplete final rows.
2. Let each sample well size to its Button sample; tighten only variant card padding/gaps and preserve the Button shape, color, font and 48px copy target.
3. Set two-column tablet and one-column narrow mobile layouts, then inspect the actual gallery and run required checks.

## Button variant de-duplication and sample background plan — 2026-10-28

1. Remove the presentation-only gray sample backplate while preserving each inner Button treatment.
2. Remove the visually identical, visual-only Danger Solid sample and its Button contract references; recalculate the Button variant count while leaving the separately scoped Icon Button contract intact.
3. Confirm Tertiary and Text now render distinctly, review the remaining gallery cards and copy controls, and run required checks.

## Button top specimen correction plan — 2026-10-28

1. Restrict the top Button specimen to the existing Primary and Secondary examples; remove Inverse and Destructive only from this specimen.
2. Add the supplied cancellation appearance as an inert, visual-only pill with a neutral gray outline and Persian label; use a semantic Norato border token.
3. Update the Button contract to distinguish preview-only appearance from API behavior, inspect the local specimen, and run required checks.

## Figma design-system alignment plan — 2026-10-28

1. Capture the 14 chapter titles, section guidance, source values and uncertainty in a source ledger; audit current token consumers and legacy documentation selectors before editing.
2. Update semantic brand/neutral/info/tag tokens from direct Figma observations, add the directly observed spacing/radius/elevation values as source-specific tokens, and explicitly preserve state colors where Figma has no source evidence.
3. Align overview, foundation, global documentation shell and navigation with the Figma page grammar: compact document identity, yellow rule, numbered chapter title, primary specimen/content region, RTL guidance rail, evidence badge and source footer.
4. Keep the 49 components as independent routes and maintain the approved Button content. Document the Estedad/Vazirmatn substitution for Figma legacy typography.
5. Validate source ledger completeness, local browser overview/foundation/component/Button, RTL/keyboard/viewport behavior, token check, Vue typecheck, build, and this request checklist; report any actual viewport gap.
- Review note: browser evidence exposed stale document-grid selectors placing the contents at an incorrect inline start; the active RTL grid is now assigned by `.app-shell[dir='rtl']` and measured desktop overflow is within viewport. The connected browser does not expose viewport resizing, so narrow breakpoint rendering remains open.

## Component documentation rollout plan — 2026-10-28

1. Keep one canonical contract-driven detail renderer and apply the Button editorial hierarchy to every non-Button page through a neutral component-doc style; retain the Button's explicitly approved custom styling unchanged.
2. Add copy actions and live feedback to each nine-section contract while keeping targets, focus and RTL behavior accessible.
3. For the first batch, inspect Input, Select, Checkbox and Radio Button contracts and adapters. Add clear visual examples for supported variant/state/size axes and accurately matched usage snippets only for existing adapters.
4. Make specimens read-only/inert, distinguish API support from contract-only references, and show safe default, invalid, disabled, helper/error and selected values where actual adapter props support them.
5. Validate the four separate routes, actual browser layout and keyboard copy interaction; run project token, Vue typecheck/build and request checklist. Leave later component families unchanged until the first batch pattern is reviewed against evidence.

## Canonical catalog/data architecture plan — 2026-10-28

1. Create `packages/components/src/catalog.ts` as the sole typed registry for all 49 independent components, with stable identity, standalone Markdown contract path, optional tags, actual maturity, verified Vue adapter/export metadata, and specimen key.
2. Reuse existing Markdown contracts as the only prose source; expose their paths from catalog entries and validate that each resolves. Do not serialize contract paragraphs into TypeScript.
3. Preserve the 14 existing chapters in one typed `foundation-chapters.ts` module; derive overview cards and Foundation jump navigation from it.
4. Refactor Vue routes, flat component navigation, inventory, implementation snippets, and specimen selection to use catalog lookups. Keep names/paths explicit and do not infer slugs or adapter support with ad hoc transforms.
5. Replace the outdated partial nine-item inventory export with a typed re-export/compatibility surface to the 49-entry catalog; avoid creating a competing source of truth.
6. Add a validation command that checks unique IDs/slugs/names, all 49 documents, explicit maturity, real adapter/export existence, and absence of executable adapter claims for non-implemented entries.
7. Validate counts, references, all independent local routes, representative browser pages, token/type/build checks and the request checklist; document any legacy consumers or deferred migration.

## All component pages: shared shell and visual contract data — 2026-10-28

1. Keep the supplied Split Button page as the outer-shell reference: identity/status, preview, implementation/maturity note, then canonical contract sections as quiet RTL rows. Apply the same shell to Button without touching its approved component samples.
2. Keep all 49 Markdown contracts as the sole content source and the typed catalog as the source for stable component identity, maturity and actual adapter references. Add a data-driven visual layer that parses section structure and turns each source entry into a fitting visual presentation; retain the original section-copy affordance.
3. Provide section-specific visual grammar for Overview (hierarchy/summary), Anatomy and Parts (annotated composition), Variants (sample comparisons), Sizes (relative scale), States (state tiles), Usage (do/avoid or flow panels), Accessibility (requirement/checklist visuals) and Tokens (semantic chips/swatches). Preserve source wording as concise captions; no generated API claims.
4. Reuse existing Button and form visual showcases where they contain verified, component-specific examples. Extend generic samples only when the current contract is sufficiently explicit; mark unsupported appearances as inert visual references and never create copyable executable API from them.
5. Use semantic Norato tokens for all new presentation styles, preserve RTL and minimum copy-target size, ensure all specimen previews are inert, and keep the 49 routes/components visually independent.
6. Inspect representative pages across materially different structures (Button, Split Button, Input, Table, Modal/Date Picker, plus unusual contract headings) and the inventory route; check that all nine sections render visual content with no raw Markdown and no empty renderer fallback.
7. Run the component/catalog validator, `pnpm check:tokens`, Vue typecheck/build, actual-browser request checklist and keyboard/focus/RTL/available viewport checks; record any unavailable browser viewport or assistive-technology coverage honestly.


# Button Anatomy exploded-map implementation — 2026-10-28

1. Special-case only Button + Anatomy inside the existing contract-driven renderer; leave all other pages and sections unchanged.
2. Replace the generic anatomy placeholder with an inert assembled primary sample and an RTL exploded layer diagram derived from the Button contract's four parts.
3. Label leading/trailing icon layers as conceptual anatomy and visibly note that icon slots are not supported by the current Vue adapter.
4. Use existing semantic Norato tokens and responsive CSS; preserve the copy-section action and accessible textual part list.
5. Validate the Button route in the actual browser at the connected viewport, inspect focus/read order, then run token, type, catalog, build and request-checklist validations.
# Button Anatomy shell/content relationship correction — 2026-10-28

1. Make the exploded Container an empty full-size pill outline, without label or icon content.
2. Keep Leading Icon, Label and Trailing Icon as independent exploded elements in RTL order; connect the shell and contents without duplicating labels.
3. Clarify in the diagram that Container encloses the other parts; retain the current API limitation for optional icons.
4. Recheck the actual Button Anatomy render at the attached viewport and verify the Parts section still explains each element without altering it.
5. Run token, catalog, Vue typecheck, production build and request checklist; record viewport limitations accurately.

## Button page finalization plan — 2026-10-28

1. Keep `docs/component-contracts/button.md` as the human-readable contract and `NoratoButton.vue` as the API authority. Correct Parts and state guidance so names, props and supported visuals agree.
2. In the existing Vue detail shell, add a compact Button-only live playground under the verified code example. Reuse `NoratoButton`; use labeled native controls, focus styles and a live click result. Preserve the inert top specimen.
3. Update `ButtonVariantShowcase.vue` to show seven contracted types together and `inverse` in a distinct API-only row. Keep source-backed copy actions and accurate status labels.
4. Replace size circles with non-interactive pill silhouettes at 32/40/48/56px. Remove state gray wells; map state copy to real props or textual CSS guidance.
5. Restructure Button Anatomy as a compact exploded visual plus a readable four-item legend. Render Button Parts as per-piece visual contract cards and Button Tokens with readable values and copyable CSS references. Scope these changes to Button.
6. Edit the existing CSS selectors for each affected visual instead of stacking overrides; use semantic Norato tokens and responsive rules. Preserve the approved yellow Primary, yellow 2px Secondary, Estedad Bold, and full pill radius.
7. Review the actual local Button page section by section, keyboard focus and live playground, RTL/overflow at the connected viewport; check token/catalog/type/build and update the request checklist/error log. Record any viewport or assistive technology gaps.

- Button playground refinement: restructure controls as field groups and accessible animated switches; use native select and existing motion tokens; place code copy in a compact toolbar; verify desktop/mobile render and keyboard behavior.

- Replace text chevron with a fixed SVG icon positioned inside the native select wrapper; remove outer switch borders/background while preserving 48px label area and track focus. Review actual local render.
- Add one reusable playground dropdown Vue component; keep model values and generated code unchanged. Use listbox keyboard pattern, outside dismissal, focus return and short opacity/transform transition.
- Add one bounded Vue app-root text localization layer using a MutationObserver for dynamic content; convert text nodes and accessibility labels, skip technical code/pre and editable controls. Verify representative routes and dynamic Button count.
