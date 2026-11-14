# Specification — File Upload responsive geometry evidence

## Problem

The File Upload checklist recorded narrow screenshots but left the local/reference frame geometry and page overflow unmeasured at matching mobile widths. Measurement then showed the local frame 16px wider at 320px and its inset Dropzone significantly narrower at 390px because mobile frame padding was too large.

## Requirement

Capture actual local and reference browser geometry at 390px and 320px, including frame, inner Dropzone, client width, and scroll width. Adjust only the mobile specimen frame width at narrow phones and its padding so the inner panel aligns more closely with the reference. Preserve the fixed 152px panel height, RTL behavior, live playground, and upload functionality.

## Acceptance

- Both pages are measured at the same viewport widths.
- Screenshots are visually reviewed for RTL, clipping, and vertical stretch.
- At 390px, the frame remains within 1px of 327px and the inner panel width is within 4px of 320.76px.
- At 320px, frame and inner panel are within 3px of 257px and 245.16px respectively; the page remains bounded.
- The fixed 152px local panel height and any remaining reference/local deviations are recorded accurately.
- File Upload Final DoD remains open for unrelated unverified behavior and accessibility items.
