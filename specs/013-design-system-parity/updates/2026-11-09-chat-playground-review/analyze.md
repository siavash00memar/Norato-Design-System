# Analyze — Chat playground review

## Evidence

- `NoratoChat` accepts `dir: 'rtl' | 'ltr'`, defaulting to RTL; it passes direction to header, timeline messages, date divider and composer.
- The ChatPlayground has sender, message-type and composer-state selectors but no direction or empty-list control.
- CSS aligns incoming/outgoing with logical `start`/`end`; direction should reverse placement without new selectors.
- The chat is a non-modal region. A focus trap would be incorrect; validate ordinary keyboard traversal and ability to continue to controls after the widget.
- The empty message collection currently renders an empty timeline. Preserve that behavior and visually inspect it rather than guessing new copy.

## Risks

- A native-looking playground selector can reset state if the preview remounts; verify textarea/direction after each interaction.
- Accessibility tree review is not equivalent to independent screen-reader review.
