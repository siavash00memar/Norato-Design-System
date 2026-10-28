# Feature Specification: گسترش سیستم طراحی نوراتو

**Feature Branch**: `012-norato-component-system`

**Created**: 2026-10-27

**Status**: Team usability and dashboard UI correction in progress; component maturity remains explicit per family

**Input**: هدف کاربر: "سیستم طراحی را با داده‌ها و رنگ‌های خودمان شخصی‌سازی کن، کمبود کامپوننت‌ها را پوشش بده، اسناد کامل فراهم کن و نمایش محلی را با روش Spec بساز."

## Clarifications

### Session 2026-10-27

- Q: «کل دیزاین سیستم» یعنی کل inventory تعریف‌شدهٔ کامپوننت‌ها یا فقط ضعف‌های فعلی Norato؟ → A: کل inventory تعریف‌شدهٔ کامپوننت‌ها، حدود ۴۹ خانوادهٔ کامپوننت.

## User Scenarios & Testing

### User Story 1 - مشاهدهٔ سطح برند Norato (Priority: P1)

به‌عنوان مصرف‌کنندهٔ دیزاین سیستم، می‌خواهم مستندات و نمونه‌های Norato را با زبان بصری یکپارچه، RTL-first و رنگ‌های زرد/آبی خودمان ببینم تا بتوانم تصمیم بگیرم کدام الگو را در محصول استفاده کنم.

**Why this priority**: خروجی قابل مشاهده و قابل بررسی، معیار اصلی درخواست و پایهٔ اعتبارسنجی همهٔ مراحل بعدی است.

**Independent Test**: اجرای سطح مستندات در لوکال و بررسی overview، foundation و component showcase در desktop و mobile.

**Acceptance Scenarios**:

1. **Given** صفحهٔ مستندات در حالت پیش‌فرض، **When** کاربر آن را باز می‌کند، **Then** صفحه فارسی، راست‌چین، قابل پیمایش و دارای نقش‌های رنگی زرد/آبی Norato است.
2. **Given** صفحه در viewport باریک، **When** کاربر به بخش‌های مختلف می‌رود، **Then** هیچ overflow افقی ناخواسته‌ای رخ نمی‌دهد و target تعاملی حداقل ۴۸px باقی می‌ماند.

### User Story 2 - استفاده از foundation و tokenهای شخصی‌سازی‌شده (Priority: P1)

به‌عنوان توسعه‌دهنده، می‌خواهم رنگ، تایپوگرافی، فاصله، radius، elevation، motion و قواعد RTL به‌صورت semantic و قابل‌ردیابی مستند شوند تا کامپوننت‌ها بدون مقدار خام و پراکنده ساخته شوند.

**Why this priority**: شخصی‌سازی پایدار باید در token و قرارداد رخ دهد، نه صرفاً در ظاهر یک صفحه.

**Independent Test**: بررسی token reference، تغییر نقش‌های رنگی، و تأیید اینکه کامپوننت‌های نمایشی از semantic token مصرف می‌کنند.

**Acceptance Scenarios**:

1. **Given** token reference، **When** نقش‌های برند بررسی می‌شوند، **Then** زرد و آبی Norato به‌طور صریح به action/highlight/focus و نقش‌های معنایی متصل هستند.
2. **Given** متن و کنترل فارسی، **When** در RTL نمایش داده می‌شود، **Then** ترتیب، جهت آیکون‌های جهت‌دار، کنترل‌های انتخاب و پرشدن progress مطابق قرارداد RTL است.

### User Story 3 - پوشش شکاف‌های کامپوننتی (Priority: P2)

به‌عنوان تیم محصول، می‌خواهم کامپوننت‌ها و الگوهای موجود در مرجع که Norato ندارد یا ناقص دارد، پس از ارزیابی و با API/قرارداد Norato در سطح Vue 3 اضافه یا پیشنهاد شوند.

**Why this priority**: درخواست صراحتاً پوشش ضعف‌ها را می‌خواهد، اما دامنهٔ دقیق باید در Clarify تثبیت شود.

**Independent Test**: مقایسهٔ inventory Norato با inventory مشاهده‌شدهٔ مرجع و اجرای نمونهٔ هر افزونهٔ پذیرفته‌شده در حالت‌های اصلی.

**Acceptance Scenarios**:

1. **Given** inventory مقایسه‌ای، **When** کامپوننتی در Norato موجود نیست، **Then** وضعیت آن (adopt, adapt, defer) و دلیل تصمیم در اسناد ثبت شده است.
2. **Given** افزونهٔ پذیرفته‌شده، **When** keyboard, focus, disabled, loading, invalid و responsive بررسی می‌شوند، **Then** نتیجه و محدودیت‌ها در checklist و error log ثبت می‌شوند.

## Edge Cases

- رنگ زرد روی متن سفید یا آبی کم‌کنتراست نباید به‌عنوان متن/دکمهٔ معتبر منتشر شود؛ نقش‌های متضاد باید semantic و قابل مشاهده باشند.
- long Persian labels، اعداد/کدهای LTR، browser zoom و viewport باریک نباید layout را بشکنند.
- کامپوننت‌های مرجع که فقط در Figma یا خارج از سطح Vue 3 دیده می‌شوند، نباید بدون قرارداد اجرایی به‌عنوان implemented ثبت شوند.
- اگر مرجع برای بخشی قابل دسترسی یا قابل استخراج نباشد، تصمیم باید به‌عنوان deferred با evidence limitation ثبت شود.

## Requirements

### Functional Requirements

- **FR-001**: System MUST preserve the existing Norato yellow and blue brand values as the only brand accents for this feature, with explicit semantic roles and contrast-safe text pairings.
- **FR-002**: System MUST provide a documented comparison between the current Norato inventory and the observed inventory کامپوننت‌ها, including keep, adapt, add, and defer decisions.
- **FR-003**: System MUST define a personalized foundation covering color, typography, spacing, radius, elevation, motion, icon direction, themes, and RTL rules.
- **FR-004**: System MUST keep Persian content RTL-first and use Vazirmatn for body/input content and Estedad for headings/titles; Lalezar MUST NOT be introduced.
- **FR-005**: System MUST keep new product surface behavior within Vue.js 3 and align every implemented component with a reviewable contract.
- **FR-006**: System MUST document anatomy, variants, states, accessibility, keyboard behavior, responsive reflow and acceptance criteria for every component marked implemented.
- **FR-007**: System MUST expose a local documentation surface showing the personalized overview, foundations, inventory and implemented component examples.
- **FR-008**: System MUST run token validation, TypeScript validation and the request validation checklist against the actual browser render before handoff.
- **FR-009**: System MUST record legacy selector conflicts, evidence limitations, defects and deferred scope in the relevant project documents.
- **FR-010**: System MUST document all approximately 49 observed families کامپوننتی in the Norato inventory; implementation status MUST distinguish implemented, adapted, proposed and deferred items.
- **FR-011**: System MUST provide a Norato contract for each cataloged family using these sections: Preview, Overview, Anatomy, Variants, Sizes, States, Parts, Usage, Accessibility and Tokens.
- **FR-012**: Each component contract MUST describe Norato behavior and include an explicit implementation status; a documented specimen MUST NOT be presented as a completed Vue implementation unless validated.
- **FR-013**: Every component family MUST have its own standalone documentation file and a distinct navigable documentation page in the local Vue preview.
- **FR-014**: Each component page MUST display Norato-specific anatomy, variants, states, usage, RTL and accessibility rules.
- **FR-015**: Every one of the 49 standalone component contracts and detail pages MUST provide Norato-specific content under exactly these nine required sections, in order: Overview, Anatomy, Variants, Sizes, States, Parts, Usage, Accessibility, Tokens. Generic placeholders do not satisfy this requirement.
- **FR-016**: When a property is not defined for Norato, the contract MUST say that the Norato contract does not specify it; implementation guidance and product behavior MUST be labeled separately.
- **FR-017**: The Terminator skill MUST be referenced by the root `AGENTS.md` for all future substantive work in this project, with a fallback that preserves its evidence-first principles if the skill file is unavailable.
- **FR-018**: The Vue documentation MUST provide a team onboarding route covering installation/use, token and RTL conventions, accessibility expectations, component maturity semantics, and contribution/validation steps.
- **FR-019**: Every component detail page MUST have one canonical renderer populated from its standalone contract; generic placeholder detail content MUST NOT coexist as an alternate renderer.
- **FR-020**: The inventory and detail pages MUST expose actionable Vue adoption guidance appropriate to maturity: usable package/API guidance for implemented items and an explicit proposal boundary for non-implemented items.
- **FR-021**: Dashboard typography, hierarchy, spacing, navigation, responsive layout, and statuses MUST be legible and token-backed; real rendered browser checks are required before completion.
- **FR-022**: The repository MUST expose private pnpm workspace packages for Vue adapters and tokens with stable internal imports; the docs MUST distinguish workspace use from external publication.
- **FR-023**: Current implemented native field/selection adapters MUST include shared token-backed styles and controlled value update events required for Vue form usage.
- **FR-024**: Components with incomplete essential interaction, including Date Picker without calendar selection, MUST NOT be labeled Implemented.
- **FR-025**: Component contracts in the Vue documentation MUST render Markdown as semantic headings, paragraphs, lists, inline code and safe local/anchor links; they MUST NOT present raw Markdown markers as body copy.
- **FR-026**: The documentation surface MUST use a readable token-based type scale (body 16px desktop, at least 14px compact/mobile; metadata at least 12px), consistent Persian/Latin direction handling, and a readable line length.
- **FR-027**: Interactive navigation and actions MUST provide visible focus, immediate state feedback, and comfortable targets; motion MUST be limited to purposeful transform/opacity transitions, respect reduced motion, and never use blanket `transition: all`.
- **FR-028**: Rendered text and status/action color pairings MUST preserve WCAG AA text contrast where measured; color MUST NOT be the only way to identify status or interaction state.
- **FR-029**: Every cataloged component MUST remain an individually navigable item with its own standalone documentation page and specimen. Category labels may organize filtering only; they MUST NOT merge components into grouped pages, specimens, or contracts.
- **FR-030**: The application, component contracts, team guide and team-facing documentation MUST NOT display external design-system names, attribution, external links or external token names; all visible guidance MUST be presented as Norato documentation.
- **FR-031**: Button detail MUST use a balanced responsive card layout; its variant, size and state information MUST use visual examples where practical, distinguish supported Vue API from visual-only contract proposals, and expose accessible copy actions for useful code snippets.
- **FR-032**: Button primary MUST use Norato yellow; secondary MUST use a yellow 2px stroke; Button specimen cards MUST keep compact content spacing without distributing content across unused card height.
- **FR-033**: Button labels MUST use Estedad Bold; Button controls MUST use the pill radius so both ends appear fully rounded.
- **FR-034**: The Button detail page MUST place its preview, Vue usage, and every contract card in one vertical column at all viewport widths, including desktop. Button documentation MUST use concise RTL-first content, visually separated data rows, and isolated LTR identifiers; decorative surface treatments MUST be reduced while preserving semantic tokens and accessible controls.
- **FR-035**: The Button documentation page MUST present information with a restrained editorial hierarchy: compact page title and metadata, smaller section headings/body text, quiet dividers instead of repeated heavy cards, and compact code/copy affordances. This presentation-only change MUST NOT alter Button specimen, variant/state/size examples, or their visual contracts.
- **FR-036**: The Vue usage code block on the Button documentation page MUST use a Norato semantic code-surface token with exact color `#484848` and a semantic white code-text token. This change MUST be limited to the code block and preserve its copy action and readable LTR code formatting.
- **FR-037**: The Button variant gallery MUST use a balanced three-column desktop grid, center an incomplete final row, compact the visual sample wells to their content width, and align card content consistently. At narrow widths the gallery MUST reflow without horizontal overflow. The Button samples, labels, API support distinctions, and accessible copy targets MUST remain unchanged.
- **FR-038**: The Button variant gallery MUST NOT show gray backplates behind visual samples. The duplicate visual-only `Danger Solid` entry MUST be removed from the Button gallery and Button contract, retaining API-supported `Danger` as the single destructive treatment; Button's documented variant count MUST update to 7 types and 168 combinations. Other variants, including Tertiary and Text, MUST remain distinguishable by their own treatments.
- **FR-039**: The Button page's top visual specimen MUST omit the black `Inverse` and red `Destructive` buttons and include a non-interactive visual-only `انصراف` sample matching the supplied gray outlined pill. The yellow Primary and yellow-outline Secondary examples MUST remain. This is a preview-only presentation change; Vue API, variant gallery, and Button behavior MUST remain unchanged.
- **FR-040**: The Vue documentation surface MUST align its overview, foundations, navigation hierarchy, and documentation page presentation with the 14-chapter Figma design-system file; all chapters remain independently discoverable without clustering component families.
- **FR-041**: Figma-observed color, spacing, radius, typography, and elevation values MUST be recorded with their source status (observed, inconsistent, or proposed); do not invent product-wide scales from documentation-layout values or unresolved Figma references.
- **FR-042**: The implemented system MUST use observed brand Yellow `#FDC101` and Blue `#134F89` semantic tokens; keep color, typography, spacing, radius, and elevation changes token-backed and preserve approved component-specific contracts unless explicitly superseded.
- **FR-043**: The foundation page MUST show visual examples and source values for color, typography, spacing, radius/borders, elevation, component families, states/accessibility, and naming/maintenance. Where Figma reports missing/inconsistent values, present the evidence gap instead of claiming a canonical value.
- **FR-044**: Preserve the project typography policy (Estedad headings, Vazirmatn body/inputs, no Lalezar); document this as the implementation mapping for Figma's observed legacy text roles.
- **FR-045**: Every non-Button component detail page MUST present its own contract in the nine canonical sections and offer a copy action for each useful contract section, with live success/failure feedback and keyboard-accessible targets.
- **FR-046**: Each component page MUST render family-specific visual specimens for its documented variants, sizes and states where these can be accurately represented. Proposed/reference-only appearances MUST be labeled as such and MUST NOT be described as executable API.
- **FR-047**: Component pages MUST show copyable Vue usage only when an implemented adapter exists; snippets MUST match its actual exports, props, events and model contract. Proposed components MUST show their maturity and visual reference without fabricated import/API examples.
- **FR-048**: Component page information MUST use the compact single-column editorial presentation established on Button, while preserving the approved component specimen visuals, RTL flow, semantic tokens, minimum 48px action targets, focus visibility and responsive behavior.
- **FR-049**: The 49 component entries MUST have one typed canonical catalog containing stable ID/slug, display name, independent document path, optional non-hierarchical tags, maturity status, actual adapter/export when present, and specimen key. Navigation, inventory, detail routing, implementation snippets, and component specimen selection MUST derive from this catalog rather than duplicated hand-maintained conditions.
- **FR-050**: The existing nine-section Markdown documents MUST remain the human-readable contract source during this migration and resolve through the catalog's explicit document path; catalog metadata MUST NOT duplicate contract prose or imply an adapter exists solely because documentation exists.
- **FR-051**: The catalog MUST be validated for exactly 49 unique IDs, slugs and names; every entry MUST resolve to one existing contract and an explicit status; every Implemented entry MUST reference an existing adapter and export; non-implemented entries MUST NOT provide executable import examples.
- **FR-052**: Foundation chapter navigation and overview cards MUST consume one chapter dataset with stable ID, title and description so duplicated chapter arrays cannot drift.

### Key Entities

- **Norato semantic token**: A named role used by components, mapped to Norato's yellow/blue and neutral/feedback values.
- **Component contract**: The reviewable definition of a component's anatomy, API, variants, states, interaction and accessibility behavior.
- **Inventory decision**: The status and rationale for each observed قابلیت کامپوننت relative to Norato.
- **Evidence record**: A source, screenshot, render, test result or limitation supporting a decision.

## Success Criteria

### Measurable Outcomes

- **SC-001**: 100% of implemented component examples render with Persian RTL content and semantic Norato tokens, with no new page-local brand color literals.
- **SC-002**: 100% of implemented interactive examples document and pass default, hover, keyboard focus, disabled, loading, invalid/error and responsive checks where applicable.
- **SC-003**: The local showcase loads the overview, foundation, inventory and component sections without horizontal overflow at the project's desktop and mobile validation viewports.
- **SC-004**: Every inventory item has a documented keep/adapt/add/defer decision, or is explicitly marked as pending the clarified scope.
- **SC-005**: The handoff contains completed Spec Kit artifacts and reports actual pass, fail and unrun checks without claiming unperformed user research.

## Button pill-radius correction — 2026-10-28

- **FR-053**: Button controls and Button visual specimens MUST use a semantic full-pill radius. Form fields, cards and unrelated controls MUST retain their own radius roles.
- **FR-054**: The Button contract and Norato visual rules MUST identify the pill token, and local render validation MUST confirm both ends are fully rounded at the rendered control height.
- **FR-055**: All 49 independent component pages MUST use one shared presentation shell modeled on the supplied Split Button page: compact RTL component heading/status, visual specimen, implementation or maturity note, and the nine contract sections in a calm single-column sequence with lightweight dividers.
- **FR-056**: Information in Overview, Anatomy, Variants, Sizes, States, Parts, Usage, Accessibility and Tokens MUST be presented through meaningful visual structures—such as component previews, labeled diagrams, state/size comparisons, use-flow examples, accessibility indicators and token swatches—with concise copyable source text retained as supporting detail.
- **FR-057**: Each visual structure MUST use only that component's existing contract and verified catalog/adapter metadata. Unsupported proposals MUST be labeled as visual references; the documentation MUST NOT imply that a preview is interactive or that an API exists when it does not.
- **FR-058**: Component pages MUST remain individually addressable and keep their own specimen, contract, copy actions, RTL reading order and source identity. The shared renderer MUST NOT group pages by family or replace component-specific contract content with generic filler.
- **FR-059**: Button's variant/state/size visual galleries remain the quality benchmark for information density and copyability; the supplied Split Button page is the presentation-shell benchmark. Bring Button into that shared shell while retaining its approved yellow/outlined/capsule examples and its specialized galleries.
- **FR-060**: In Button's Anatomy section, the generic numbered placeholder MUST be replaced with an inert, RTL exploded-map illustration of the Button's documented Container, optional Leading Icon, Label, and optional Trailing Icon. The assembled Button and separated parts MUST be visually connected and labeled, and the diagram MUST NOT imply icon slots are supported by the current Vue API.
- **FR-061**: In the Button exploded map, Container MUST be depicted as the empty enclosing surface, not as a second button containing a duplicate label. Label and optional icons MUST be shown as separate contents outside that shell, with the RTL relationship and enclosing role visually clear.
- **FR-062**: Finalize the standalone Button page for Vue 3 team use while keeping its approved yellow/outlined/pill specimens, nine-section order and compact shared document shell. The pasted static-site extraction is not an implementation source for this task.
- **FR-063**: The Vue usage area MUST explain the actual `NoratoButton` props and provide a clearly labeled live adapter playground separate from the inert top specimen; its controls and feedback MUST be keyboard usable with 48px targets.
- **FR-064**: Button variant documentation MUST distinguish the seven contracted visual types from the additional supported `inverse` API variant. Copy controls MUST return executable code only for supported props; visual-only examples MUST copy accurate guidance.
- **FR-065**: Button Sizes MUST show pill silhouettes at the documented visual heights, state samples MUST omit gray demo wells, and the copy action for Hover/Pressed/Focus MUST NOT present a Default snippet as a state-specific implementation.
- **FR-066**: Button Anatomy MUST keep its exploded visual map but move long explanations to a readable legend. Button Parts MUST describe the actual internal pieces and their API support, not repeat the related Button/Icon/Social families already listed under Variants.
- **FR-067**: Button Tokens MUST expose each semantic name with a legible visual role and resolved value where available, plus a direct copy action; the section summary MUST not display broken punctuation left by stripped token names.
- **FR-068**: The completed Button route MUST pass the project request checklist in an actual browser render with RTL, no horizontal overflow, keyboard/focus/copy feedback and truthful disabled/loading boundaries; run token, catalog and Vue TypeScript validation before handoff.

## Assumptions

- Existing Norato token files, Vue components, contracts and documentation remain the implementation authority unless this feature explicitly updates them.
- The first delivery will use the existing local documentation/runtime entrypoint and will not invent backend persistence or product API behavior.
- A complete inventory may require staged delivery; the clarified scope determines whether all items are implemented now or only the highest-value gaps are.

## Evidence and Open Decisions

- Project inspection: existing semantic tokens, Vue 3 components, contracts, docs and local browser preview were found.
- الگوی ساختاری inspected on 2026-10-27: RTL-first, glass surfaces, two-layer token architecture, state completeness, accessibility focus rings, Persian voice/tone, and a broad component inventory were observed.
- الگوی ساختاری limitation: automated text extraction is reliable for structure and guidance, but visual values must be validated from the actual page/render before being adopted.
- Correction (2026-10-27): the prior combined contract registry and shared generic component detail did not meet the user's requirement for an independent document/page per component. This iteration replaces the combined registry with 49 individual Markdown contracts and loads the selected contract into its own hash-addressable Vue documentation page.
- Correction (2026-10-27): user clarified that each component document must include the nine named sections, each populated from that component's قرارداد Norato. Audit found the existing contracts still contain generic filler; feature status is therefore In progress until all 49 documents and rendered pages satisfy FR-015/016.
- Follow-up (2026-10-27): user clarified the audience is the Vue team and reported serious UI defects in component specimens and dashboard. Code inspection confirmed a duplicate legacy detail renderer with generic content remains beside the contract-driven renderer. Treat this as an active defect; team onboarding and one canonical detail route are now acceptance requirements.
- Follow-up implementation audit: Vue adapter classes were not styled by any stylesheet, native inputs/selects lacked emitted model updates, and Date Picker had a no-op trigger. Workspace-package access is part of the clarified team usability target; external registry publication is not requested.


- FR-069: Button playground controls MUST have clear RTL labels, compact responsive layout, visible selected states, animated feedback respecting reduced motion, and an adjacent copy action for executable Vue code.

- FR-070: Button playground selects MUST show an inset, centered chevron inside their border; toggle labels MUST have no outer card or box while retaining accessible target and focus state.
- FR-071: Playground variant and HTML-type menus MUST open as styled, in-page RTL menus with clear selected state; no operating-system popup. Keyboard, outside-click, focus and reduced motion behavior are required.
- FR-072: All user-facing numerals across the Vue documentation UI, including dynamic content, MUST render with Persian digits. Executable code blocks, identifiers and technical inline code MUST retain ASCII digits for correctness and copy.
