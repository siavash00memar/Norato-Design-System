# Specification — Command Palette desktop composition

## Problem

At 1904×950 the local frame is 631.98×332px vs the matched reference's 636×333.88px. The local panel is 452×244px vs 453.6×246.1px; rows are 450px wide vs 438.48px; and the keyboard footer is 32px high vs 73.17px. Its search icon is also placed after the text instead of at the RTL start edge.

## Acceptance

- At 1904×950, local frame/panel match the reference within 1px in both dimensions.
- Search, group title, rows and footer match the recorded reference within 2px; row inset and key hint groups remain visibly distinct.
- Search icon appears at the RTL start edge; row icons have a bounded 26px tile with a 16px icon.
- Preserve 390×844/320×844 measurements, RTL, 18×18 mobile search icon, no page overflow, Norato colors, and the live dialog/API.
