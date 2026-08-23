# Data Model: Norato Button

## Text Button

`label`, `intent`, `type`, `disabled`, `loading`, `pressed`, `dir`, and optional leading/trailing icon.

## Icon-only Button

`accessibleLabel`, `icon`, `intent`, `type`, `disabled`, `loading`, `pressed`, and `dir`. `accessibleLabel` is required.

## State transitions

`default → hover/focus → pressed`; `loading` prevents activation; `disabled` prevents activation while remaining perceivable.
