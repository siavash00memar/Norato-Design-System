# Plan — Tabs preview frame

1. Audit the Tabs specimen class and its current frame selectors; confirm the existing frame-size tokens before editing.
2. Add the shared dotted Button-aligned frame class to the inert Tabs specimen; use its existing 300px frame token and a scoped `space-1` desktop-width extension to align the measured reference.
3. At mobile widths, inset the frame using semantic spacing and the existing mobile frame cap; constrain only vertical overflow on the tabs scroller.
4. Compare local/reference frame geometry at 1920×959, 390×844, and 320×844; check RTL, target size, no native scrollbar, no stretch, and no overflow.
5. Update evidence/error tracking, run token/catalog/type/build/diff checks, then commit and push.
