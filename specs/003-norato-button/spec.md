# Feature Specification: Norato Button Component

**Feature Branch**: `003-norato-button`
**Created**: 2026-08-23
**Status**: Draft
**Input**: User selected Button as the next Norato Design System component.

## Clarifications

### Session 2026-08-23

- Q: نسخهٔ اول Norato Button باید Icon-only را هم پشتیبانی کند؟ → A: Button متنی و Icon-only هر دو پشتیبانی می‌شوند؛ Icon-only قرارداد و کامپوننت مستقل دارد.

## User Scenarios & Testing

### User Story 1 - Trigger an action (Priority: P1)

As a user, I need a clear, accessible button so I can trigger an action with confidence.

**Acceptance Scenarios**

1. Given a button with a Persian label, when it is visible, then its label and hierarchy are clear.
2. Given keyboard or assistive technology use, when the button is reached, then its name, role, focus, and state are perceivable.

### User Story 2 - Understand action state (Priority: P1)

As a user, I need the button to communicate disabled, loading, and pressed states so I understand whether an action is available or in progress.

**Acceptance Scenarios**

1. Given a disabled button, when the user reaches it, then it cannot trigger the action and remains perceivable.
2. Given a loading action, when submission starts, then progress is communicated and duplicate activation is prevented.

## Edge Cases

- Long Persian labels must remain readable without clipping.
- Icon-only buttons must provide an accessible name.
- Destructive actions must have distinct meaning and not rely on color alone.
- Focus must remain visible at narrow widths and browser zoom.
- A submit button must expose the correct button type to prevent accidental form submission.

## Requirements

### Functional Requirements

- **FR-001**: The Button MUST expose a clear label and semantic button role.
- **FR-002**: The Button MUST support primary, secondary, inverse, and destructive intent variants only when their usage meaning is documented.
- **FR-003**: The Button MUST support default, hover, pressed, focus, disabled, loading, and icon-only states where applicable.
- **FR-004**: The Button MUST use Norato semantic tokens, approved typography, radius, spacing, and minimum 48px interaction target.
- **FR-005**: The Button MUST default to RTL-compatible content alignment while allowing explicit direction.
- **FR-006**: Loading MUST prevent duplicate activation and expose an accessible progress/state announcement.
- **FR-007**: Icon-only buttons MUST require an accessible name.
- **FR-010**: Text Button and Icon-only Button MUST be separate public contracts; Icon-only MUST require an accessible name and MUST preserve the minimum interaction target.
- **FR-008**: The Button MUST have equivalent behavior in HTML/CSS, Vue, and Next.js adapters.
- **FR-009**: The corresponding shadcn button primitive MUST be evaluated before accepting a custom implementation.

## Success Criteria

- **SC-001**: 100% of documented Button states have visual, semantic, and interaction rules before implementation.
- **SC-002**: Every Button variant can be traced to Norato tokens, Material rationale, and an acceptance scenario.
- **SC-003**: The representative Button contract remains equivalent across HTML/CSS, Vue, and Next.js.
- **SC-004**: No icon-only Button lacks an accessible name in the contract review.

## Key Entities

- **Button Contract**: label, intent, type, state, direction, icon, accessibility, and interaction properties.

## Assumptions

- Material Design 3 is authoritative for interaction and accessibility guidance.
- Figma remains the visual inspiration for Norato appearance.
- Version 1 supports Light Mode only.
- Textarea, Select, and Date Picker remain separate components.
