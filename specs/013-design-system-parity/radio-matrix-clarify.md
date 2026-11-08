# Radio Matrix — Clarify Gate

## Decisions

- The requested Radio dimensions/states are already enumerated in the component contract; this task resolves only their visual representation.
- Show all 20 combinations as static, inert state cards; do not add an API or pretend each static cell is an interactive radio.
- Real selection, keyboard and accessibility behavior continue to be verified on the live `NoratoRadioGroup` playground.
- Keep 16px and 20px as visual control diameters and retain the adapter's 48px minimum target.
- Apply the user's active accent rule to selection and hover: yellow is primary in Norato; the existing runtime adapter already uses the yellow dot and yellow hover border. Bring only stale blue specimens and their contract language into alignment; retain dark/error/disabled/focus semantics where those states require them.
- Keep the five state groups visible at both desktop and mobile widths; responsively reduce columns without stretching the radio glyph.

No material behavior/API decision remains open for this bounded visual task.
