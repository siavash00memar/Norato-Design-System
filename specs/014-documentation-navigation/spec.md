# Documentation Navigation Specification

## Acceptance contract

Selecting any component keeps the app shell mounted, updates the URL to its component hash, marks its sidebar item with a clear yellow active treatment and `aria-current="page"`, and scrolls that item into view inside the component list when needed. Browser Back/Forward and direct hash entry restore the correct page and active item. Choosing another component does not trigger a full-page navigation.

## Out of scope

Persisting a scroll position across component pages, changing the mobile navigation model, or changing the component detail page layout.
