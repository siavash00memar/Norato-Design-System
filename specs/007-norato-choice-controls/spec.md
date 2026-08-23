# Feature Specification: Norato Choice Controls

**Feature Branch**: `007-norato-choice-controls`
**Created**: 2026-08-23
**Status**: Draft

## Clarifications

### Session 2026-08-23

- Q: نسخهٔ اول شامل کدام باشد؟ → A: هر دو، با قراردادهای جداگانه برای Checkbox Group و Radio Group.

## User Scenarios & Testing

### User Story 1 - Make a choice (Priority: P1)

As a user, I need clear choice controls so I can select or deselect options confidently.

### User Story 2 - Understand validation (Priority: P1)

As a user, I need group labels, selected state, disabled state, and actionable errors to remain clear.

## Edge Cases

- Long option labels remain readable.
- Disabled options remain perceivable and cannot change.
- Keyboard focus is visible and order is logical.
- Error messaging is not conveyed by color alone.

## Requirements

- **FR-001**: Choice controls MUST expose an associated group label and accessible option names.
- **FR-002**: Controls MUST support RTL Persian labels and explicit direction overrides.
- **FR-003**: Controls MUST support selected, unselected, focused, disabled, and invalid states.
- **FR-004**: Controls MUST use Norato tokens and preserve a minimum 48px target.
- **FR-005**: Controls MUST expose semantic selection and error state to assistive technology.
- **FR-006**: Controls MUST support equivalent HTML/CSS, Vue, and Next.js behavior.
- **FR-007**: Checkbox Group MUST support multiple selected values; Radio Group MUST support exactly one selected value.
- **FR-008**: Checkbox Group and Radio Group MUST be separate public contracts.

## Success Criteria

- **SC-001**: Every choice state and keyboard rule is documented before implementation.
- **SC-002**: Selected values and validation errors remain understandable across frameworks.

## Assumptions

- Material Design 3 governs behavior and accessibility.
- Figma governs visual inspiration; Light Mode only for v1.
