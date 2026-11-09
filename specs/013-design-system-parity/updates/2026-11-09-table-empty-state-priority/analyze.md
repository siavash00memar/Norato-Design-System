# Analyze — Table empty-state priority

- The current template selects `noResultsLabel` whenever `query` is non-empty, even if `props.rows` is empty.
- Query state is internal and persists when the host replaces rows, so a previously searched populated table can transition to an empty dataset while keeping the query.
- The source dataset is the authoritative distinction: `props.rows.length === 0` means no data; a non-empty source plus zero `visibleRows` means no query matches.
- Loading is already rendered before either empty branch and therefore retains precedence.
- The initial live Table review reproduced a second defect: keyboard activation of Next on the final page disables the focused button and leaves focus at the document root. The same boundary exists for Previous on page one.
- Keep pager focus in its navigation region by moving to the enabled opposite-direction control after the boundary transition, then expose the current page through a polite live region.
- Visual inspection also showed the fixed SVG paths point left for Previous and right for Next even when the component is RTL; mirror both SVGs in RTL to match their inline navigation direction.
- The adapter accepts `dir`, but the playground did not expose it. Add a direction selector so browser evidence covers the actual LTR as well as RTL arrangement.
