# Data Model: Norato Field

## Field Contract

- `id`: stable control identifier; required for label and message association.
- `label`: persistent visible title; required.
- `value`: single-line text value.
- `placeholder`: optional guidance; never the sole label.
- `helperText`: optional non-error guidance.
- `errorText`: optional actionable validation message.
- `disabled`, `loading`, `required`, `invalid`: state flags.
- `dir`: default `rtl`; explicit `ltr`/`auto` supported where content requires it.

## State transitions

`default → focused → filled → invalid → corrected`; `disabled` and `loading` are non-editable presentation states.

## Constraints

The control is one line, has a minimum 48px target, uses semantic IDs, and changes no layout geometry when helper/error content appears.
