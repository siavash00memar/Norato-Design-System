# Feature Specification: Norato Design System Foundation

**Feature Branch**: `001-norato-design-system`

**Created**: 2026-08-23

**Status**: Draft

**Input**: User description: Create a reusable Norato design system using the provided Figma section as visual inspiration, with Material Design as the authoritative UI/UX system, Tailwind CSS as the styling utility layer, and support for Vue, Next.js, and HTML/CSS.

## Clarifications

### Session 2026-08-23

- Q: اگر مقدار بصری فیگما با الزام accessibility یا رفتار ضروری Material Design تعارض داشته باشد، کدام قاعده باید اولویت نهایی داشته باشد؟ → A: گزینه C؛ Material Design مرجع کامل UI و UX است و فیگما فقط برای الهام بصری استفاده می‌شود.
- Q: قرارداد responsive نوراتو باید بر اساس کدام مدل باشد؟ → A: گزینه A؛ adaptive بر اساس عرض واقعی پنجره و mobile-first، با کلاس‌های عرضی Material Design.
- Q: مقیاس رسمی فاصله‌ها و اندازه‌گذاری نوراتو باید چگونه تعریف شود؟ → A: گزینه A؛ مبنای ۴ واحدی با ریتم اصلی مضرب‌های ۸.
- Q: نقش نهایی فونت‌های Lalezar، Vazirmatn و Estedad در سیستم نوراتو چگونه باید تعیین شود؟ → A: Vazirmatn برای متن بدنه و Estedad برای تیتر و عنوان؛ Lalezar از سیستم نوراتو حذف می‌شود.
- Q: نسخه‌ی اول سیستم نوراتو باید dark mode را هم به‌صورت رسمی پشتیبانی کند؟ → A: گزینه B؛ نسخه‌ی اول فقط Light Mode است و dark mode به آینده موکول می‌شود.
- Q: قرارداد دقیق width classهای responsive نوراتو چه باشد؟ → A: گزینه A؛ Compact کمتر از 600px، Medium از 600 تا 839px، Expanded از 840 تا 1199px، Large از 1200 تا 1599px، و Extra Large از 1600px به بالا.
- Q: برای line-height و fallback فونت‌ها چه قراردادی داشته باشیم؟ → A: گزینه A؛ برای هر نقش typography line-height unitless اختصاصی تعریف شود و Vazirmatn به Tahoma و sans-serif، و Estedad به Vazirmatn، Tahoma و sans-serif fallback شود.
- Q: در عرض‌های Expanded، Large و Extra Large، رفتار layout نوراتو چه باشد؟ → A: گزینه A؛ layout به‌صورت adaptive گسترش پیدا کند، readable width محدود بماند و فضای اضافه برای navigation پایدار، list-detail، supporting pane یا مقایسه‌ی محتوا استفاده شود.
- Q: برای readable width و gutter در layoutهای عریض، کدام قرارداد رسمی را انتخاب می‌کنی؟ → A: گزینه A؛ readable width حداکثر 65ch و gutter برابر 16px در Compact، 24px در Medium، 32px در Expanded، 48px در Large و 64px در Extra Large.
- Q: قرارداد تعامل‌های immediate و transactional در نوراتو چگونه باشد؟ → A: گزینه A؛ Switch و تنظیم مستقل فوراً اعمال شوند و فرم‌ها و تغییرات چندفیلدی با Save/Apply و Cancel/Revert مدیریت شوند.

## User Scenarios & Testing

### User Story 1 - Reuse Norato UI consistently (Priority: P1)

As a product team, we need a shared design language so that every future page looks and behaves like Norato without re-inventing spacing, typography, colors, or component states.

**Why this priority**: Consistency across future pages is the primary value of the system.

**Independent Test**: Review a representative page built only from the documented tokens and components and compare it with the approved Figma source.

**Acceptance Scenarios**:

1. **Given** the approved Figma source section, **When** a designer or developer selects a documented token or component, **Then** its visual role, value, states, and usage rules are unambiguous.
2. **Given** two pages using the same component contract, **When** they are rendered at the same viewport and content conditions, **Then** their shared elements have the same visual and interaction behavior.

### User Story 2 - Build across supported environments (Priority: P1)

As a product team, we need the system to be usable from Vue, Next.js, and plain HTML/CSS without duplicating the design rules.

**Why this priority**: The system must remain portable across current and future Norato surfaces.

**Independent Test**: Implement the same representative component in each supported environment and verify equivalent tokens, structure, states, and accessibility behavior.

**Acceptance Scenarios**:

1. **Given** a component contract, **When** it is consumed in Vue, Next.js, or HTML/CSS, **Then** its required visual and behavioral states remain equivalent.
2. **Given** a Persian RTL content sample, **When** it is rendered in each environment, **Then** alignment, reading order, focus order, and text wrapping remain correct.

### User Story 3 - Apply safe interaction conventions (Priority: P2)

As a user, I need Norato components to follow Material Design's predictable accessibility, keyboard,
focus, feedback, and responsive behavior while using the Figma source as visual inspiration.

**Why this priority**: Visual fidelity alone is insufficient for a reliable product system.

**Independent Test**: Exercise representative interactive components with keyboard, screen-reader semantics, narrow viewports, zoom, and reduced-motion preferences.

**Acceptance Scenarios**:

1. **Given** an interactive component, **When** it receives focus, keyboard input, loading, success, or error feedback, **Then** each state is visible, understandable, and consistent with its contract.
2. **Given** a narrow viewport or long Persian label, **When** content reflows, **Then** the component remains usable without clipped essential content or broken interaction.

### Edge Cases

- Long Persian labels, mixed Persian/Latin text, and numeric content MUST wrap or truncate according to the component contract.
- Components MUST define empty, loading, disabled, invalid, success, and error states where the interaction requires them.
- Multi-row form sections MUST preserve title-column and field-column alignment when labels or controls have different lengths.
- Browser zoom and narrow viewports MUST NOT hide essential actions or focus indicators.
- Reduced-motion preferences MUST suppress non-essential motion.
- Insufficient contrast between a Figma color pairing and its content role MUST be flagged for resolution before implementation; the brand visual remains the source of truth only where accessibility is not violated.

## Requirements

### Functional Requirements

- **FR-001**: The system MUST use the approved Figma section `8772:1368` and its component/foundation nodes as visual inspiration, while Material Design 3 remains the authoritative source for UI, UX, interaction, accessibility, and responsive behavior.
- **FR-002**: The system MUST document primitive and semantic tokens for color, typography, spacing, radius, border, elevation, motion, direction, and responsive behavior.
- **FR-002A**: The system MUST define spacing from a 4-unit base, with primary rhythm values centered on 8, 16, 24, 32, 48, and 64 units; exceptions MUST be named and justified.
- **FR-003**: The system MUST preserve the documented Norato brand colors, grayscale palette, semantic colors, typography families, weights, and sizes unless an approved decision records a change.
- **FR-003A**: The typography contract MUST assign Vazirmatn to body text and Estedad to headings and titles; Lalezar MUST be excluded from the Norato design system.
- **FR-003C**: The typography size tokens MUST be transcribed from the Figma Typography source node `8773:27429` as follows: Vazirmatn Bold `13, 12, 11px`; Vazirmatn Medium `13, 11px`; Vazirmatn Regular `13, 12, 11, 10px`; Vazirmatn Light `13, 12, 11px`; Estedad-VF Bold `14, 13px`; Estedad-VF SemiBold `12px`; Estedad-VF Medium `13px`; Estedad-VF Light `11px`.
- **FR-003E**: The typography contract MUST define a unitless line-height per semantic typography role and MUST use these fallback chains: Vazirmatn → Tahoma → sans-serif; Estedad → Vazirmatn → Tahoma → sans-serif.
- **FR-003D**: The former Figma Lalezar inventory (`30, 18, 16, 14, 13, 12, 11, 9px`) MUST be recorded as excluded legacy source data and MUST NOT be exposed as a Norato production typography token.
- **FR-003B**: Version 1 MUST formally support Light Mode only; dark mode MAY be planned later but MUST NOT be represented as a supported production theme in version 1.
- **FR-004**: The system MUST provide a component inventory mapped to Figma nodes, including anatomy, variants, states, content rules, and composition boundaries.
- **FR-005**: Each interactive component MUST document semantic structure, keyboard behavior, focus behavior, disabled/loading/error behavior, and RTL behavior.
- **FR-005A**: Independent controls such as switches MUST apply changes immediately; multi-field or reviewable changes MUST use a transactional Save/Apply flow with Cancel or Revert behavior.
- **FR-006**: The system MUST evaluate the corresponding shadcn/ui primitive before defining a custom implementation and MUST record the reason when a custom primitive is necessary.
- **FR-007**: Material Design 3 MUST be the authoritative source for component selection, interaction states, feedback, target sizes, focus, motion, accessibility, responsive behavior, and visual system rules; deviations require an approved decision.
- **FR-008**: The system MUST expose framework-neutral design tokens and CSS contracts that can be consumed by Vue, Next.js, and plain HTML/CSS.
- **FR-008A**: The system MUST provide a Tailwind CSS integration layer that consumes Norato semantic tokens and MUST NOT become the source of truth for design decisions.
- **FR-009**: The system MUST support RTL-first Persian content and remain usable with localization, long labels, browser zoom, and narrow viewports.
- **FR-009A**: The system MUST use an adaptive, mobile-first layout model based on available window width rather than fixed device labels, and MUST define behavior for Compact, Medium, Expanded, Large, and Extra Large width classes.
- **FR-009B**: The adaptive width classes MUST use these ranges: Compact `<600px`, Medium `600–839px`, Expanded `840–1199px`, Large `1200–1599px`, and Extra Large `≥1600px`.
- **FR-009C**: Expanded, Large, and Extra Large layouts MUST preserve a readable maximum content width and MUST use additional space for meaningful context, persistent navigation, list-detail, supporting panes, or comparison rather than empty horizontal stretching.
- **FR-009D**: Readable content MUST be limited to a maximum measure of `65ch`; adaptive horizontal gutters MUST be 16px in Compact, 24px in Medium, 32px in Expanded, 48px in Large, and 64px in Extra Large.
- **FR-010**: Every token and component contract MUST include a verification method that can be used without depending on a single framework.
- **FR-011**: No production implementation MUST begin until this specification is clarified, planned, checked, decomposed into tasks, and analyzed for consistency.
- **FR-012**: A multi-row form section MUST use two aligned blocks: the title block MUST share one common left edge across all titles, the field block MUST share one common right edge across all fields, and the horizontal gap between the two blocks MUST be exactly `12px`.

### Key Entities

- **Design Token**: A named visual or behavioral value with a primitive value, semantic role, usage rule, and verification rule.
- **Typography Scale Record**: A Figma-traceable mapping of family, weight, semantic role, and permitted font sizes; it is not a free-form font-size list.
- **Component Contract**: The public definition of a component's anatomy, inputs, variants, states, behavior, accessibility, responsive rules, and supported environments.
- **Figma Source Node**: The authoritative Figma frame, section, component, or instance linked to a token or component contract.
- **Verification Case**: A repeatable visual, behavioral, accessibility, or responsive check tied to a requirement.

## Success Criteria

### Measurable Outcomes

- **SC-001**: At least 95% of the v1 component inventory is traceable to a Figma node and a documented contract before implementation begins.
- **SC-002**: A new Norato page can be specified using existing tokens and components without introducing undocumented visual values in at least 90% of reviewed cases.
- **SC-003**: Representative components render with equivalent required states in Vue, Next.js, and HTML/CSS without changing the component contract.
- **SC-004**: 100% of v1 interactive components have documented keyboard, focus, RTL, disabled, and error behavior where applicable.
- **SC-005**: 100% of blocking accessibility or contrast findings are resolved or explicitly accepted in a documented decision before implementation approval.
- **SC-006**: A reviewer can trace each implemented v1 component from task to plan, specification requirement, Figma source, and verification case.

## Assumptions

- The Figma section `8772:1368` remains available as visual inspiration for the current design direction.
- The first release targets Persian RTL product interfaces; LTR support is preserved where framework-neutral contracts allow it.
- shadcn/ui and its underlying primitives are candidate starting points, not visual authority.
- Tailwind CSS is the approved styling utility layer for the initial implementation and must consume the framework-neutral token contract.
- Material Design 3 is authoritative for UI, UX, interaction, accessibility, and responsive behavior;
  Norato-specific decisions may define visual brand expression only when they do not conflict with it.
- Exact token naming, component scope, and framework packaging decisions are deferred to Clarify and Plan.
- No application routes or production components are in scope until the design-system foundation is approved.
- Version 1 is Light Mode only; dark mode is deferred to a later specification and plan.
