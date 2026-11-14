# Charts preview update — Clarify

- Fresh matched 1265×713 reference frame: 636×331.69px at x=317; card 367.2×243.74px. Local frame: 631.98×300px at x=309.02; card 360×233.66px. Frame height is short by 31.69px and card by 10.09px.
- At 390×844, reference frame/card are 327×300px and 320.76×221.97px; local are 343×300px and 333×220.98px. Reference plot is 288.36×135.17px; local is 309×144.98px.
- At 320×844, reference frame/card/plot are 257×300px, 245.16×186.54px, and 212.76×99.73px. Local frame/card/plot are 273×300px, 263×222.38px, and 280×131.38px; the 280px plot minimum creates an internal scrollbar in the inert preview. Local document remains 305px wide without page overflow.
- Keep the shared chart API's mobile plot minimum and scrolling intact; use inert-preview-only sizing and disable that minimum on this specimen.
