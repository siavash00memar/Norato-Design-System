# Analyze — Chat preview frame

## Current state

- `ComponentSpecimen.vue` has an explicit condition listing all component specimens that receive the shared Button-style frame; Chat is absent.
- `component-specimen.css` already styles the shared frame with the 640px maximum width, 300px minimum height, dotted Stroke, Norato gradient and bounded intrinsic content. No new styles are needed.
- `.sample-chat` currently renders a full inner chat card with header, date and composer, while the reference's static specimen shows only two opposing bubbles. Its existing rules can be revised in place for the inert two-bubble sample; the live playground provides the full chat shell.
- The reference screenshot shows a 636×300px frame, a Default marker and two bubbles. The local screenshot shows the unframed specimen, confirming a scoped class-eligibility gap rather than a token or shell-height issue.

## Implementation decision

Add `name==='Chat'` to the existing `sample-button-specimen` condition. Change only the inert static sample markup and its existing `.sample-chat` selectors to reproduce the reference composition using Norato tokens. Do not alter chat shell height tokens or runtime behavior.
