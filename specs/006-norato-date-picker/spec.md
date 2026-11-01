# Feature Specification: Norato Date Picker Component

**Feature Branch**: `006-norato-date-picker`
**Created**: 2026-08-23
**Status**: Clarified for Lemon parity implementation

## Clarifications

### Session 2026-11-01 — Lemon parity scope

- The latest active user goal makes Lemon the reference for the remaining components and requires continuing through completion. This supersedes the historical single-date-only limitation below. Implement all seven Lemon modes: Single, Range, Range + Presets, Date & Time, Month, Year, and Wheel; keep Norato palette/tokens and Vue 3 product authority.
- Holidays are supplied as optional Jalali dates by the consumer; Fridays are always indicated. No official holiday dataset exists in the repository, so none is bundled.
- Date-time values keep local wall-clock time; range presets resolve against the user's local date.

### Session 2026-08-23

- Q: تقویم نسخهٔ اول شمسی باشد یا میلادی؟ → A: شمسی (جلالی).
- Q: انتخاب یک تاریخ یا بازهٔ تاریخ؟ → A: انتخاب یک تاریخ.

## User Scenarios & Testing

### User Story 1 — Choose Jalali values in each reference mode (Priority: P1)

As a user, I need to choose a Jalali day, range, month, year, or date-time through the mode appropriate to my task.

**Acceptance Scenarios**

1. Given a closed Date Picker, when focused, then its label, value, calendar affordance, and focus state are clear.
2. Given an open calendar in Single or Date & Time mode, when a Jalali day is chosen, then the selected value is emitted in the documented model.
3. Given Range or Range + Presets mode, when start and end dates or a preset are chosen, then the ordered range is emitted and the current month is on the right.
4. Given Month or Year mode, when a cell is chosen, then a Jalali month/year value is emitted without requiring day-by-day navigation.
5. Given Wheel mode on a narrow viewport, when a user changes year, month, and day columns, then the chosen Jalali value is emitted without horizontal overflow.

### User Story 2 - Recover from invalid date (Priority: P1)

As a user, I need a clear validation message without losing the selected date.

## Edge Cases

- Empty value shows the Figma placeholder.
- Disabled and loading states cannot open or change the date.
- Invalid or unavailable dates expose an actionable message.
- Keyboard and assistive technology users can open, navigate, select, and close the calendar.

## Requirements

- **FR-001**: Date Picker MUST support all seven Lemon modes: Single, Range, Range + Presets, Date & Time, Month, Year, and Wheel.
- **FR-002**: The closed control MUST follow the Figma section’s visual language, including calendar affordance, typography, spacing, radius, and approved colors.
- **FR-003**: Date Picker MUST expose a persistent associated label and optional helper/error message.
- **FR-004**: Date Picker MUST support default, focus, open, selected, disabled, loading, and invalid states.
- **FR-005**: Date Picker MUST use Norato semantic tokens and Material interaction/accessibility rules.
- **FR-006**: Date Picker MUST expose accessible name, expanded state, selected date, dialog/calendar semantics, and error association.
- **FR-007**: The supported product adapter MUST be Vue 3; framework-neutral calendar conversion helpers MAY be shared, while legacy HTML and Next.js surfaces MUST NOT receive new feature behavior.
- **FR-008**: Date Picker MUST preserve a minimum 48px interaction target.

## Success Criteria

- **SC-001**: The closed control is visually traceable to the Figma reference and Norato tokens.
- **SC-002**: Each of the seven modes emits its documented controlled value with pointer and keyboard interaction.
- **SC-003**: The Vue 3 product adapter exposes the documented contract; the current documentation site page mirrors Button's independent structure.

## Assumptions

- Figma is authoritative for UI appearance.
- Material Design 3 is authoritative for behavior and accessibility.
- Light Mode only for v1.
