# Playground Field Styling — Analysis

## Inventory

- Shared `.button-playground-controls` fields: Progress, Spinner, Toast, Tooltip and general playground controls.
- Shared `.input-playground-selects` fields: Input playground settings (three numeric controls and phone calling code).
- Dedicated field wrappers: Button, Split Button, Divider, Rating, and Pagination.

## Findings

- Most shared controls already have a 36px capsule and yellow hover/focus stroke, but bare labels do not consistently use Estedad Bold.
- Pagination fields are outside the shared control selector and lack the shared field dimensions/stroke.
- Divider has a parallel local field selector that must be superseded by the shared class.
- Rating's numeric setting needs to join the shared class while preserving its label and current value binding.
- Preserve the explicit LTR phone calling-code control; all other setting fields remain RTL.

## Decision

Use one explicit `.playground-text-field` class for every in-scope label/control, then remove the duplicate Button, Input, and Divider field rules. Keep layout-only selectors where the Button playground depends on them. A source audit after implementation found 18 text/number controls across 10 component playgrounds; each uses the shared class.
