# Implement — Generic component marker colors

Updated shared gallery decoration: Anatomy/Parts numbering, structural icons, variant axes, size diagrams, generic state marks, and data samples now use neutral Norato tokens. Selected/active samples and loading indicators use Norato yellow. Shared selected options use the yellow container. Genuine link and status treatments are outside the edited selectors.

Local Button Anatomy/Parts/Usage screenshots were compared with the same reference page: structural numbering and variant axes are neutral locally; selected/active controls remain Norato yellow; Usage keeps semantic success/error and RTL colors. A fresh Carousel render confirms neutral decorative art and tracks, yellow active dot and unchanged frame/card geometry. Full component-family visual/behavior DoD remains open.

`pnpm check:tokens`, `pnpm check:catalog` (49 routes/contracts/exports), Vue typecheck, production build and `git diff --check` pass. The production build reports the existing 454KB main JS chunk and 315KB shared CSS chunk as advisory-size output. The targeted CSS change did not alter adapter behavior.
