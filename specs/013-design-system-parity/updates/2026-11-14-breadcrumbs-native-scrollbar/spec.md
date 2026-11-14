# Specify — Breadcrumbs narrow-path scrollbar

## Problem

At the narrow local browser view, the live Breadcrumbs row scrolls horizontally to preserve full item labels, but the browser's native scrollbar controls appear beside the path and disrupt the component's visual shape.

## Acceptance contract

- Keep the breadcrumb list horizontally scrollable and preserve natural, uncompressed labels.
- Hide only the scrollbar track/thumb/buttons in supported browser engines.
- Preserve the 48px interactive target, RTL item order, left-facing separators, disclosure, and keyboard reachability of links.
- Do not add raw style values or change the inert specimen, desktop geometry, or public API.

## Out of scope

- Reflowing or removing breadcrumb items.
- Changing disclosure behavior or link semantics.
