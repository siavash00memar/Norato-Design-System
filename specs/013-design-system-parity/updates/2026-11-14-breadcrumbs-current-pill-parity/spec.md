# Specify — Breadcrumbs current-page specimen parity

## Browser evidence

- At the same 1280×720 CSS viewport, the reference frame measured 636×300px and its current-page capsule 88.10×29.16px, with an 8px radius, translucent glass surface, and subtle elevation.
- The local frame measured 639.98×300px. Its current item measured 88.27×36.80px, with an opaque white surface, 25px radius, and no shadow.
- The local specimen already has the correct RTL order, intrinsic 48px breadcrumb row, 16px left-pointing separators, and home icon. The live adapter is separate from this static specimen.

## Acceptance contract

- Make only the inert specimen's current-page capsule compact and raised: target 29px height, use Norato's glass surface/elevation and a semantic card radius, and preserve its current width and content.
- Keep links and disclosure at their existing minimum 48px targets; do not change live adapter styles, route behavior, specimen frame size, or sibling components.
- Confirm matched desktop geometry, RTL order, no text stretch/clipping, and a clean live Breadcrumbs playground after the change.

