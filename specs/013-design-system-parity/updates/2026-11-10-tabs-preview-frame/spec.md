# Tabs preview frame — Specification

## Goal
Give the Tabs top specimen the same bounded dotted frame composition used by the Button-aligned component pages, and correct its mobile frame dimensions.

## Acceptance criteria
- At 1920×959, the local Tabs top frame is centered, dotted, and within 1px of the measured reference frame (636×300px).
- At 390×844 and 320×844, the local frame measures 327×300px and 257×300px at x=24px, matching the measured reference.
- The three Tabs samples remain 48px interaction-size visuals, horizontally arranged and RTL; no vertical or horizontal stretch/overflow.
- At narrow widths, horizontal scrolling remains available only if needed; no native vertical scrollbar appears inside the tab row.
- Only the inert Tabs specimen/frame changes; the playground and adapter behavior remain unchanged.
- Token, catalog, TypeScript, build, browser, and diff checks are recorded.

## Out of scope
No changes to Tabs adapter props, keyboard behavior, selection state, variants, or other component pages.
