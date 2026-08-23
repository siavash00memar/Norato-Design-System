# Feature Specification: Norato Textarea Component

**Feature Branch**: `004-norato-textarea`
**Created**: 2026-08-23
**Status**: Draft

## Clarifications

### Session 2026-08-23

- Q: ارتفاع Textarea در نسخهٔ اول چگونه باشد؟ → A: ارتفاع ثابت با اسکرول داخلی.

## User Scenarios & Testing

### User Story 1 - Enter multiline Persian content (Priority: P1)

As a user, I need a clearly labeled multiline field so I can write content without losing context.

**Acceptance Scenarios**

1. Given a labeled Textarea in RTL, when it receives focus, then the label remains associated and focus is visible.
2. Given long content, when the user types multiple lines, then the content remains readable and scrollable without clipping.

### User Story 2 - Recover from validation errors (Priority: P1)

As a user, I need an actionable error message without losing my content.

**Acceptance Scenarios**

1. Given invalid content, when validation runs, then the error is associated with the Textarea and the value is preserved.

## Edge Cases

- Placeholder is never the only label.
- Disabled and loading states remain perceivable and non-editable.
- Very long content remains usable without forcing page overflow.
- Error messaging does not rely on color alone.

## Requirements

- **FR-001**: Textarea MUST expose a persistent associated label, optional helper, and optional error message.
- **FR-002**: Textarea MUST default to RTL and right-aligned Persian text while allowing explicit direction.
- **FR-003**: Textarea MUST use Norato typography and semantic tokens only.
- **FR-004**: Textarea MUST support default, focus, filled, disabled, loading, and invalid states.
- **FR-005**: Textarea MUST expose semantic accessible name, description, invalid state, and error association.
- **FR-006**: Textarea MUST preserve a minimum 48px interaction target and visible approved focus.
- **FR-007**: Textarea MUST support equivalent HTML/CSS, Vue, and Next.js behavior.
- **FR-008**: Textarea MUST be a separate contract from the single-line Field.
- **FR-009**: Version 1 MUST use a fixed height with internal scrolling and MUST NOT auto-grow.

## Success Criteria

- **SC-001**: 100% of documented Textarea states have visual, semantic, and interaction rules before implementation.
- **SC-002**: Invalid content preserves the user value and provides an associated recovery message.
- **SC-003**: The contract remains equivalent across HTML/CSS, Vue, and Next.js.

## Assumptions

- Material Design 3 governs accessibility and interaction.
- Figma governs visual inspiration; Light Mode only for v1.
