# Skeleton — Implement

## Delivered implementation

- Added typed Vue exports `NoratoSkeleton` and `NoratoSkeletonPattern` in `packages/vue/src/components/`, with Pulse/Shimmer effects, `dir`, labels, and optional dimensions for the primitive.
- Added semantic Skeleton shape and pattern styles in `packages/vue/src/skeleton.css`; the pattern supports Text, Avatar Text, List Item, Card, Card Horizontal, Input, Table Row, and Stat.
- Registered package exports and styles, component catalog metadata, the Button-structured documentation page, its inert specimen, executable playground, generated usage, and the family contract.
- Removed the legacy hard-coded sample from the shared specimen path. The documented and live patterns use Norato neutral tokens and preserve intrinsic dimensions.
- Corrected the authored `dir` behavior by removing the inherited-direction override. The `dir` attribute now controls computed direction, avatar/text order, and direction-specific Shimmer animation.

## Evidence carried forward

- `skeleton-checklist.md` records the 24 combinations, shape dimensions, RTL/LTR layout, normal-motion Shimmer travel, reduced-motion behavior, accessible busy region, inert decorative blocks, desktop/reference comparison, and 390/320px bounds.
- The recorded technical gates are `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck/build, and `git diff --check`.
- The direction correction was delivered in commit `38e03ab` and its browser evidence is recorded in the family checklist and request-validation log.

## Remaining DoD

- Independent screen-reader review is still open. Browser accessibility-tree inspection and authored accessibility documentation do not satisfy this item.
- Keep the family status open until that independent review is recorded. No claim of strict DoD completion is made here.
