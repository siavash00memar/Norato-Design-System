# Checklist — Input state gallery parity

- [x] The canonical Input States section renders exactly ten descriptive cards.
- [x] Matched desktop geometry at 1536×703: Norato grid 635.98×284.6px vs reference 636×284.6px; each Norato card is 151.5×88.2px.
- [x] Matched mobile geometry at 390×844: Norato grid 327.2×442.6px vs reference 327.2×441.4px; card width is 158.6px in both. At 320×844 the Norato grid is 256.8px wide and the document remains 305px without overflow.
- [x] Wide desktop uses four columns; 390px and 320px viewports use two columns without local overflow.
- [x] Error and Success have distinct semantic Norato status colors and Persian descriptions; the inert gallery is excluded from the accessibility tree.
- [x] The 41 adapter-specific inert examples remain in a secondary section after the nine canonical sections.
- [x] Browser render is inspected at desktop and mobile sizes; headings, copy, RTL, card bounds and section order are correct.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck/build and `git diff --check` pass.
- [ ] Changes and current DoD status are pushed to `origin/master`.
