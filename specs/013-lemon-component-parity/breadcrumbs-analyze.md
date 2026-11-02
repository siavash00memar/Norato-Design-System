# Breadcrumbs — Analyze

Native semantic markup is preferable to a menu/navigation primitive: breadcrumbs are a list of destinations, not an application menu. A disclosure button inside the list is used only to reveal collapsed destinations, with `aria-expanded` and an associated list. Current-page derivation is deterministic. Do not truncate labels; enable horizontal scrolling on the trail under narrow widths to preserve 48px link targets.
