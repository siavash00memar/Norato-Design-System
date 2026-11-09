# Checklist — Command Palette mobile specimen parity

- [x] Add semantic mobile/narrow frame, row, and search geometry tokens.
- [x] Group specimen keyboard hints and match mobile wrapping/compact spacing without touching the live dialog.
- [x] Verify same-viewport frame/panel/search/row/footer metrics at 390px and 320px, RTL, icon geometry, and zero overflow. At 390px local measures 342×318 frame, 338×246 panel, 336×48 search, 320×43 rows, 336×72.2 footer; at 320px 272×341 frame, 260×271 panel, 258×72 search, 250×43 rows, 258×72.2 footer. Every measurement is within 4px of reference; document scroll width equals viewport and icons remain 18×18.
- [x] Run token/catalog/typecheck/build/diff and prohibited-text checks; all passed. Production build completed with the existing large-chunk advisory.
- [ ] Commit and push the verified result.
