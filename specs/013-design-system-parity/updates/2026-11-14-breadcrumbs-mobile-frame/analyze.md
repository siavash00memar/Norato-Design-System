# Breadcrumbs mobile specimen — Analyze

- At 390×844, the reference frame is 327×300px at x=24; the local frame was 328×300px at x=23.5.
- At 320×844, the reference is 257×300px at x=24 while local was 273×300px at x=16. Local scroll width already matched its 305px client width; the mismatch was a wide, left-aligned specimen, not page overflow.
- The existing `space-4` token yields the exact reference inset when subtracted from the specimen parent; centering the result provides x=24 at both widths. The existing 328px mobile cap remains sufficient at 390px.
