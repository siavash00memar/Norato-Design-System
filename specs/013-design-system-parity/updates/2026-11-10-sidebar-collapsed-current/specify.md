# Specify — collapsed Sidebar current location

## Scope

When a `NoratoSidebar` is collapsed and `activeHref` points to a descendant item, mark the visible ancestor row as the current location of the navigation context. The ancestor link must not claim to be the current page. When expanded, only the exact active child remains current with `aria-current="page"`.

The Sidebar playground's portaled mobile dialog must intercept demo navigation so its controls do not leave the documentation page. The reusable adapter keeps its normal anchor behavior.

## Acceptance

- Collapsed descendant route: one visible ancestor row receives the Norato-yellow active surface/marker and `aria-current="location"`.
- Expanded descendant route: the ancestor has no `aria-current`; the exact child alone has `aria-current="page"`.
- Direct current item remains `aria-current="page"` in either state.
- The state works for recursive descendants and for link and disabled-row rendering without changing click behavior.
- In the mobile playground, activating a child updates its status, closes the dialog, and leaves the documentation route unchanged.
- Keyboard collapse/expand, RTL, 48px target geometry, other style variants and mobile drawer behavior stay intact.
