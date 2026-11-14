# Plan — Breadcrumbs narrow-path scrollbar

1. Add a dedicated Breadcrumbs stylesheet with cross-browser scrollbar-hiding declarations scoped to `.norato-breadcrumbs__list`.
2. Import the stylesheet from the Vue package entry while retaining `overflow-x: auto` and existing layout rules.
3. Confirm the scrollbar chrome disappears in a narrow browser render, while the full path remains scrollable and the links/disclosure remain reachable.
4. Record matched visual/behavioral evidence and run token, catalog, type, build, and diff checks.
