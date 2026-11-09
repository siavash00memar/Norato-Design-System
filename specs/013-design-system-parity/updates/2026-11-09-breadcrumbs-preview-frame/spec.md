# Specify — Breadcrumbs preview frame parity

## Browser evidence

- The visual reference Breadcrumbs frame measures 636×300px at the inspected desktop viewport.
- The local `ComponentSpecimen` currently uses the generic `.component-sample` treatment for Breadcrumbs. Its generic minimum height is 136px and it lacks the dotted preview frame and Default marker used by Button-style specimens.
- The breadcrumb row itself is a 48px target row; the larger frame is presentation space and must not stretch the component.

## Acceptance contract

- At desktop, the inert Breadcrumbs specimen uses the same 636×300px dotted Norato preview frame as the Button specimen.
- The frame includes the Default state marker, keeps its visual content centered, and preserves the left-pointing RTL separators, home icon, and raised current item.
- At 390px and 320px viewports, the frame adapts within the page without horizontal document overflow; its 300px height and intrinsic crumb-row geometry remain intact.
- Only the Breadcrumbs specimen frame and marker change. Live playground behavior and unrelated specimens remain unchanged.
