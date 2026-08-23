# Feature Specification: Norato Field Component

**Feature Branch**: `002-norato-field`

**Created**: 2026-08-23

**Status**: Draft

**Input**: User request: Define and implement the reusable Norato Field component for RTL Persian forms across Vue, Next.js, and HTML/CSS.

## Clarifications

### Session 2026-08-23

- Q: نسخهٔ اول Norato Field باید چه نوع کنترل‌هایی را پوشش دهد؟ → A: فقط ورودی متنی تک‌خطی؛ Textarea، Select و Date Picker در کامپوننت‌های مستقل تعریف می‌شوند.

## User Scenarios & Testing

### User Story 1 - Enter labeled Persian data (Priority: P1)

As a user, I need every field to have a persistent title, clear input area, placeholder guidance,
and correct RTL alignment so I can enter data without confusion.

**Independent Test**: Review a Field with Persian label, placeholder, entered value, focus, and long text.

**Acceptance Scenarios**:

1. **Given** a labeled Field in RTL, **When** the user focuses it, **Then** the label remains associated and the focus state is visible.
2. **Given** a long Persian or mixed-script value, **When** the value is entered, **Then** essential text is not clipped and the input remains usable.

### User Story 2 - Recover from validation errors (Priority: P1)

As a user, I need Field errors to explain the problem and recovery path without losing entered data.

**Independent Test**: Submit an invalid Field and inspect message association, focus, preserved value, and recovery guidance.

**Acceptance Scenarios**:

1. **Given** an invalid value, **When** validation occurs, **Then** the Field exposes an error message associated with the control and preserves the value.
2. **Given** a recoverable error, **When** the user corrects the value, **Then** the error state can be cleared without changing the surrounding layout unexpectedly.

### Edge Cases

- Disabled Fields MUST remain perceivable and non-interactive.
- Placeholder text MUST NOT be the only label.
- Long labels MUST remain readable and must not overlap the control.
- Error messaging MUST not rely on color alone.
- Field focus MUST remain visible at browser zoom and narrow widths.

## Requirements

### Functional Requirements

- **FR-001**: The Field MUST expose a persistent associated label, input control, optional helper text, and optional error message.
- **FR-002**: The Field MUST default to RTL direction and right-aligned text for Persian content while allowing explicit direction when required by data.
- **FR-003**: The Field MUST use Vazirmatn for entered text and placeholder content, and Estedad for the title/label according to the approved typography tokens.
- **FR-004**: The Field MUST consume Norato semantic tokens and MUST NOT contain page-local raw colors, spacing, radius, or arbitrary values.
- **FR-005**: The Field MUST support default, focus, disabled, invalid, loading, and filled states where applicable.
- **FR-006**: The Field MUST preserve a minimum 48px interaction target, use the approved control radius, and preserve visible focus with the approved yellow focus token.
- **FR-007**: The Field MUST expose accessible name, description, invalid state, and error association through semantic HTML or equivalent framework semantics.
- **FR-008**: The Field MUST support the approved two-block form-section contract: title columns share a visual left edge, field columns share a visual right edge, and the inter-block gap is 12px.
- **FR-009**: The Field MUST have equivalent required behavior in HTML/CSS, Vue, and Next.js adapters.
- **FR-010**: The corresponding shadcn input primitive MUST be evaluated before a custom implementation is accepted.
- **FR-011**: Version 1 MUST support only a single-line text input control; multiline, selection, and date controls are out of scope and MUST be specified as separate components.

### Key Entities

- **Field Contract**: Public properties, states, semantics, validation, direction, and responsive behavior.
- **Field Message**: Helper or error content associated with a Field and its recovery meaning.

## Success Criteria

### Measurable Outcomes

- **SC-001**: 100% of Field states have documented visual, semantic, and interaction behavior before implementation.
- **SC-002**: A reviewer can trace the Field from specification to Material rationale, Norato tokens, Figma inspiration, task, and validation case.
- **SC-003**: The representative Field contract remains equivalent across HTML/CSS, Vue, and Next.js adapters.
- **SC-004**: Invalid Field scenarios preserve entered data and provide an actionable recovery message.

## Assumptions

- Material Design 3 is authoritative for Field semantics, accessibility, states, and interaction.
- Figma section `8772:1368` is visual inspiration for the Field appearance.
- Version 1 supports Light Mode only.
- The existing Norato token layer and form-section alignment contract are reused.
- Version 1 scope is limited to a single-line text input; Textarea, Select, and Date Picker are separate future components.
