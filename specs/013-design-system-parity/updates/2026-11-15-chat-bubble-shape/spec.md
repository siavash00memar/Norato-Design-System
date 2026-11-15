# Specify — Chat bubble shape and typography

## Problem

The inert specimen's message copy uses an 11px caption/18.7px line-height and 12px radius, while the public adapter uses 12px body-small/its matching line-height and the measured reference shows 12px/21.6px with a 20px main bubble radius and 6px sender corner. The static and executable presentations therefore disagree, and the static sample is visibly denser/squarer than the reference.

## Acceptance contract

- Use Norato body-small typography and a semantic Chat message line-height token of 1.8 for the inert specimen and live message body.
- Add one semantic Chat bubble radius token that resolves to the existing 20px shape token.
- Apply the Chat radius to static and live bubbles; in RTL keep the 6px corner at lower-right for incoming and lower-left for outgoing.
- Preserve the Norato yellow outgoing bubble and neutral incoming surface; do not copy the reference's black outgoing fill.
- Preserve width caps, RTL sender placement, concise neutral Persian sample content, timestamps, focus, keyboard behavior and all API behavior.
- Verify the same desktop and mobile viewport dimensions against the selected visual reference; inspect all sender/type combinations for wrapping and clipping.
- Run token/catalog/typecheck/build/diff checks.
