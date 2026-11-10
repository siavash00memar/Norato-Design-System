# Analyze — Date Picker preview parity

The Date Picker wrapper currently has a dedicated class and a capped 640px token, but it does not inherit `.sample-button-specimen`; its dedicated selector also paints a separate surface and its `.sample-calendar` paints an inner blue-tinted gradient. In a same-browser desktop screenshot, the local specimen is visibly narrower and shorter than the reference stage. The existing 2026-11-07 evidence records local 584×302px versus reference 628×300px at desktop, and local 320×288px versus reference 327×300px at 390px.

The stable fix is to reuse the existing shared specimen class and background treatment rather than introducing a separate palette or dimension system. Preserve the Date Picker-specific calendar card and mode behavior; make its inner calendar backdrop transparent. After correction, exact local CSS measurements are 628×300px at 1280×720, 327×300px at 390×844, and 257×300px at 320×844; recorded reference values are 628×300, 327×300, and 256.8×300. The local document has no horizontal overflow and keeps a 24px inset on mobile.

The reference was visually available in the browser at the time of this analysis. Independent screen-reader evidence is outside this visual update and remains as recorded in the family DoD.
