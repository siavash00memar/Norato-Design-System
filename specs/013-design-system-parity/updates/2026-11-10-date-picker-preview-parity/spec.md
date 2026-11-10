# Specify — Date Picker preview parity

The current Date Picker specimen is narrower and shorter than the shared component stage and uses its own blue-tinted inner background. The live reference stage uses the same dotted, warm-to-cool Norato-style preview composition already used by the shared Button specimen.

Acceptance:
- At the same desktop viewport, the inert Date Picker stage matches the shared Button frame width and 300px block size.
- At 390px and 320px viewports, its stage follows the same responsive frame bounds as the shared specimen and creates no horizontal page overflow.
- The outer stage uses the shared dotted background, border and elevation; the inner static calendar stays legible and does not paint a competing background.
- The seven-mode interactive playground and `NoratoDatePicker` runtime remain unchanged.
- RTL and the existing Norato colors, including yellow selected-day state, remain intact.
