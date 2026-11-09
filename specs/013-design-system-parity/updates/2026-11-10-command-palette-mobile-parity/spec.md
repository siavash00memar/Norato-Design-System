# Specification — Command Palette mobile specimen parity

## Problem

At 390px and 320px CSS viewports, the inert local specimen frame is 16px wider than the selected reference. Its rows are 3px short, the footer stays on one line instead of matching the reference's two keyboard-hint rows, and the 320px search row is 24px shorter.

## Measured acceptance

| Viewport | Reference frame | Reference panel | Other reference geometry |
| --- | --- | --- | --- |
| 390×844 | 342×318px | 337×246px | Search 335×47px; rows 322×43px; footer 335×73px |
| 320×844 | 272×341px | 261×271px | Search 259×72px; rows 246×43px; footer 259×73px |

The local inert sample should be within 4px of these measurements, keep all rows/icons intrinsic, and have zero document overflow. The live dialog remains unchanged.
