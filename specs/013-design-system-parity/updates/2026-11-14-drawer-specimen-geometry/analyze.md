# Analyze — Drawer specimen geometry

- The matched screenshot shows the local panel at approximately 252×263px and the reference at approximately 234×232px. Outer frames are both about 629×324px.
- The panel's top inset already aligns relative to the frame. Reduce the existing semantic inline-size token from 252px to 234px and use the existing 32px spacing token as its bottom inset; this should reduce width by 18px and height by about 32px while retaining the same top/right anchoring.
- Falsification: if text or the action clips after the height change, inspect actual rendered content and use a larger semantic inset only if its measured fit demands it.
