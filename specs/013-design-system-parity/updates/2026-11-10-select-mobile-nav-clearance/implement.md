# Implement — Select mobile navigation clearance

Added a breakpoint-scoped max-block-size for `.norato-select__content`, subtracting the existing mobile navigation/content clearance tokens from Reka's available popover height. The content is a three-row grid; the option viewport may shrink and scroll while search and optional action rows keep their natural height.

At 320×844, the popup ends 26px above fixed navigation, manual scroll reveals the final disabled option, and keyboard navigation plus Escape/focus return pass. Token, catalog, typecheck, build and diff gates pass. Exact 390×844 and desktop browser geometry checks remain pending; Select DoD remains open.
