# Analyze — Command Palette desktop composition

- The current rendered reference and local sample share the same one-group/two-row content; the gaps were geometry and arrangement rather than item count.
- The reference stage scales its specimen by 1.08. Its rendered row inset is 6px per edge, row height is 43.2px, and gap is 10px. Semantic tokens reproduce the rendered dimensions locally without transforms or stretched live controls.
- The reference footer has two rows, a 14px rendered gap and 8px block padding. The static preview now follows this RTL composition; live dialog styles stay separate.
- Desktop DOM comparison after implementation measures frame/panel/search/group/rows/footer within 1.52px of reference. Previously measured 390/320 mobile frame and panel bounds stay fixed, with no page overflow.
