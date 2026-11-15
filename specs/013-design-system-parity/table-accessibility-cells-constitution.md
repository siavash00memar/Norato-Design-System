# Constitution — Table accessibility cell examples

## Goal

Make the existing Table playground able to render its public `image` and `progress` cell types, so their real browser presentation and accessibility-tree semantics can be reviewed.

## Non-negotiable rules

- Preserve Vue 3 and the existing `NoratoTable` API; this task adds no runtime behavior to the table adapter.
- Keep the current playground table as its default. The optional accessibility sample is off initially and must not alter the static specimen or other component pages.
- Use a labeled, keyboard-operable Norato control, Persian RTL copy and semantic Norato tokens.
- Use a meaningful `{ src, alt }` object for the informative image sample and a clear column name with a percent unit for progress.
- Keep existing sorting, selection, pagination and responsive behavior intact. Retain the 48px interaction-target minimum.
- Do not claim spoken screen-reader verification from source inspection or the browser accessibility tree alone.
