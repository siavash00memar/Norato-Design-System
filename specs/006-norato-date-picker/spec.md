# Feature Specification: Norato Date Picker Component

**Feature Branch**: `006-norato-date-picker`
**Created**: 2026-08-23
**Status**: Draft

## Clarifications

### Session 2026-08-23

- Q: تقویم نسخهٔ اول شمسی باشد یا میلادی؟ → A: شمسی (جلالی).
- Q: انتخاب یک تاریخ یا بازهٔ تاریخ؟ → A: انتخاب یک تاریخ.

## User Scenarios & Testing

### User Story 1 - Choose a Persian date (Priority: P1)

As a user, I need to choose one Jalali date through a control that visually matches the Norato Figma design.

**Acceptance Scenarios**

1. Given a closed Date Picker, when focused, then its label, value, calendar affordance, and focus state are clear.
2. Given an open calendar, when a Jalali date is chosen, then the selected date is shown in the field and can be submitted.

### User Story 2 - Recover from invalid date (Priority: P1)

As a user, I need a clear validation message without losing the selected date.

## Edge Cases

- Empty value shows the Figma placeholder.
- Disabled and loading states cannot open or change the date.
- Invalid or unavailable dates expose an actionable message.
- Keyboard and assistive technology users can open, navigate, select, and close the calendar.

## Requirements

- **FR-001**: Date Picker MUST support one Jalali date, not a date range.
- **FR-002**: The closed control MUST follow the Figma section’s visual language, including calendar affordance, typography, spacing, radius, and approved colors.
- **FR-003**: Date Picker MUST expose a persistent associated label and optional helper/error message.
- **FR-004**: Date Picker MUST support default, focus, open, selected, disabled, loading, and invalid states.
- **FR-005**: Date Picker MUST use Norato semantic tokens and Material interaction/accessibility rules.
- **FR-006**: Date Picker MUST expose accessible name, expanded state, selected date, dialog/calendar semantics, and error association.
- **FR-007**: Date Picker MUST support equivalent HTML/CSS, Vue, and Next.js behavior.
- **FR-008**: Date Picker MUST preserve a minimum 48px interaction target.

## Success Criteria

- **SC-001**: The closed control is visually traceable to the Figma reference and Norato tokens.
- **SC-002**: A user can select one Jalali date with keyboard or pointer and recover from validation errors.
- **SC-003**: HTML/CSS, Vue, and Next.js expose the same contract.

## Assumptions

- Figma is authoritative for UI appearance.
- Material Design 3 is authoritative for behavior and accessibility.
- Light Mode only for v1.
