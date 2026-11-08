# Breadcrumbs — Analyze

Native semantic markup is preferable to a menu/navigation primitive: breadcrumbs are a list of destinations, not an application menu. A disclosure button inside the list is used only to reveal collapsed destinations, with `aria-expanded` and an associated list. Current-page derivation is deterministic. Do not truncate labels; enable horizontal scrolling on the trail under narrow widths to preserve 48px link targets.

## Screenshot correction analysis — 2026-11-02

The adapter used the U+2039 glyph `‹` inside an RTL navigation trail. Unicode bidi mirroring rendered it as a right-facing glyph, contrary to the latest user instruction and the former documented assumption. CSS rotation would depend on surrounding direction and preserve the same bidi ambiguity; explicit SVG path geometry is stable in RTL/LTR contexts. Apply the requested left-pointing path to runtime and specimen, retaining slash as a separate non-directional option.
