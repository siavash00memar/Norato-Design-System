# Clarify — Combobox preview frame width

- Evidence: the parity ledger recorded a 632px local frame versus 636px in the reference; the frame height is 300px and field width is 324px in both. A fresh local render after tuning measures 632.98×300px. The reference browser was at a different viewport (1280×720), so a new exact desktop comparison was unavailable.
- Decision: use a 1px `--norato-border-thin` allowance as a conservative adjustment; the earlier 2px allowance visually overshot in the fresh local screenshot. Keep exact reference alignment unclaimed until a matched viewport capture is possible.
- Preserve the existing mobile media rule and do not change the field.
