# Specify — Chat playground review

## Need

Chat's contract already declares RTL/LTR positioning and empty message lists, but the interactive playground cannot select direction or remove its sample messages. This prevents direct browser review of those states.

## Acceptance contract

- RTL remains the default.
- Playground exposes a direction selector that passes `rtl` or `ltr` to `NoratoChat`.
- Playground exposes an empty-conversation review state without changing runtime component API.
- In either direction, incoming and outgoing bubbles occupy opposite inline sides and the document does not overflow at supported narrow widths.
- Chat remains non-modal: keyboard focus advances through controls and can leave the widget; no focus loop is introduced.
- Existing docs identify independent screen-reader review as outstanding until performed with assistive technology.
