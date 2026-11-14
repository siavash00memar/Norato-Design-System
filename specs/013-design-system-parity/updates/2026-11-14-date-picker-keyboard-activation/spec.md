# Specification — Date Picker keyboard activation follow-up

## Goal

Add fresh evidence for opening the Date Picker and selecting a day through RTL keyboard navigation.

## Acceptance

- The calendar opens from its labeled trigger and exposes the Jalali month, weekday order, and selected day in the browser accessibility tree.
- RTL Right Arrow moves focus to the preceding calendar day, including across a month boundary.
- Enter selects the focused date, closes the calendar, and synchronizes the field and generated Vue example.
- The reset action restores the original playground value.
- This check does not claim an independent screen-reader review or close the family DoD.
