# Implement — Shared contract marker colors

Shared Usage “Do” now uses semantic success fill/text; “Avoid” uses semantic error fill/text; RTL remains yellow; implementation and Accessibility markers are neutral. Removed Tag, Chip and Empty State palette overrides that contradicted the shared rules.

Local browser review at `http://127.0.0.1:5175` confirms green success markers across Empty State, Tag, Chip and Split Button; error markers remain red, RTL markers yellow, and Accessibility tiles neutral. No layout or RTL regression is visible in the captured sections.

`pnpm check:tokens`, `pnpm check:catalog` (49 routes/contracts/exports), Vue typecheck, production build and `git diff --check` pass. Vite reports the existing 454KB main JS chunk and 315KB CSS chunk as advisory-size output; build succeeds.

This targeted shared-style correction does not close any component's broader DoD.
