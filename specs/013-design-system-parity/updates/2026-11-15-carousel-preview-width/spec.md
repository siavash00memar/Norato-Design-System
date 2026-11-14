# Specification — Carousel preview width

## Problem

The inert specimen's header spans the whole dotted stage even though its slide track is token-capped. This pushes the title and arrows to opposite frame edges, unlike the centered, compact reference composition, and makes the preview look horizontally stretched.

## Requirement

Center the complete specimen composition within a token-based width that groups three medium slides and their spacing. On narrower stages, let it contract to the available width without overflow. Keep slide geometry, RTL order, palette, stage height and live Carousel behavior unchanged.

## Acceptance

- Desktop specimen composition is centered and approximately 368px wide within the 632px Norato stage.
- Reference measurement at the same 1280×720 viewport is 367.2px; the local content width should be within 2px.
- At narrow widths, the content width is bounded by its parent and page scroll width equals client width.
- Three square slides remain intrinsic, indicators centered, arrows and title remain at the logical ends of the compact header.
- No changes occur to the executable `NoratoCarousel` adapter.
