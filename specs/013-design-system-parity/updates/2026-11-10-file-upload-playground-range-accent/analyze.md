# Analyze — File Upload playground Range accent

- Evidence: the live screenshot shows a blue active track/thumb. Source audit found no `accent-color` rule for this File Upload range control; it inherits the browser's automatic accent.
- Root cause: demo markup uses a native `input[type=range]` inside the File Upload toggles and only the shared focus ring is tokenized.
- Smallest aligned fix: scoped `accent-color: var(--norato-color-brand-yellow)` and 48px target sizing on the File Upload playground's range input. This leaves semantics, keyboard behavior, public Range component, and global styles untouched.
