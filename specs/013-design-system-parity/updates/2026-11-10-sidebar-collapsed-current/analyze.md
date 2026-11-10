# Analyze — collapsed Sidebar current location

## Browser evidence before change

- Expanded with `activeHref=/projects/active`: exactly one `aria-current="page"` appears on the child `فعال`; selecting it updates the playground status.
- After collapsing the same route: child links are hidden and zero visible links expose `aria-current` or the yellow active state.
- Direct route `/overview` remains one current page in all four Glass/Bar × expanded/collapsed combinations. The collapse button responds to Space and exposes the correct expanded state; compact links keep their 48px targets and Persian labels.
- Disabled mode removes all anchors and disables the collapse button; each remaining row is 48px.
- In the mobile playground, a child link click emitted the expected route change but also performed a full browser navigation. The portaled DialogContent is outside the playground wrapper that intercepts desktop demo links.

## Decision

Use a visible ancestor current-location state only for collapsed descendant routes. WAI-ARIA 1.2 defines `location` as the current location within an environment or context, while `page` represents the current page. This keeps the section visible without incorrectly calling its parent URL the current page. Expanded behavior remains exact-page semantics.

Intercept navigation only for links inside the demo's portaled mobile dialog. The exported Sidebar adapter retains normal anchor navigation and its `navigate(item)` event.

## Verification

- Desktop browser: direct current route remains a single `page` across Glass/Bar × expanded/collapsed. Space toggles state with focus retained and a 2px outline. All measured rows are 48px.
- Nested route browser check: collapsed parent has a yellow surface/indicator and is the sole `location` item; expanded child is the sole `page` item. Disabled collapsed parent remains a non-link current location.
- Mobile browser at 390×844 and 320×844: dialog child selection stays on `#component-sidebar`, updates status and closes. Reopened dialog marks the child `page`; Escape returns focus to the trigger. Frames are 327×300px and 257×300px; trigger is 48×48px; no horizontal overflow.
- `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck, Vue build and `git diff --check` pass. Independent screen-reader review and full 42-variant visual gallery are still open.
