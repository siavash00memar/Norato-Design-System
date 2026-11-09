# Clarify — Combobox preview frame width

- Evidence: matched live browser DOM at 1536×703 measures the reference `.stage.solo` at 636×300px. The local specimen with 1px allowance measured 632.98×300px.
- Decision: add semantic `--norato-space-1` (4px) only to the non-compact desktop frame; live measurement after the change is 635.98×300px, within 0.03px of reference. Preserve the mobile override and component field.
- Preserve the existing mobile media rule and do not change the field.
