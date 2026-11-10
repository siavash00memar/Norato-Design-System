# Analyze — Empty State mobile frame alignment

- Same-browser 390×844 comparison shows reference frame 327×300px vs local 343×300px; local document width is 375px.
- At 320×844, reference frame is 257×300px vs local 273×300px; local document is bounded at 305px. Both local frames are 16px wider than the reference while retaining the correct height.
- The desktop correction is limited to `min-width:601px` and cannot produce this delta. The mobile branch currently has no dedicated Empty State frame selector.
- Reuse `--norato-space-4` to reduce the mobile frame by 16px total and center it. Do not resize the inner Empty State content or change the mobile document width.
- Preserve the existing frame's 300px height and prior desktop match.
