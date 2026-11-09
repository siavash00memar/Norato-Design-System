# Checklist — Command Palette frame parity

- [x] Same-viewport screenshot evidence identifies a 32px outer-frame height difference; widths are within about 2px.
- [x] Update semantic frame token to 332px without changing panel or row dimensions.
- [x] Recheck matched desktop rendering; the local frame is about 628×330px vs 630×331px in the reference.
- [x] Token, catalog, Vue typecheck/build, and diff checks pass.
- [ ] Mobile 390/320 layout and independent screen-reader review remain open.
