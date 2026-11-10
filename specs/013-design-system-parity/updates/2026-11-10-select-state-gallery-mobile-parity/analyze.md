# Analyze — Select state gallery mobile parity

- The local Select state grid inherits the content column width (343px at 390px) while the reference gallery is inset 24px from the viewport (327px). The local grid therefore gives each card 167.5px versus 158.5px in the reference.
- The shared mobile media rule hard-codes two columns through 599px. The reference naturally fits two cards at 390px and one at 320px.
- A Select-only responsive rule can reproduce those breakpoints using the existing 48px interaction-target token as the minimum-width basis and the existing space-4 inset, without changing shared shell or other component selectors.
- Verify at actual browser dimensions; matching container bounds alone does not prove card-layout parity.
