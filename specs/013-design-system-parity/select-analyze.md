# Select — Analyze

## Cross-artifact consistency

- The spec and plan concern only the inert top specimen's frame/marker plus validation of the already-defined Select interaction contract.
- The Clarify gate records the current visual authority and explicitly supersedes the conflicting older native-select proposal.
- Checklist and tasks cover responsive geometry, interactions, RTL/accessibility and technical gates.
- The existing adapter/playground contract remains the implementation authority for Select behavior.

## Evidence and known gaps before implementation

- In the prior 390×844 local render, the preview frame measured 343×296px, and its Select control was bounded at 300×48px. The frame appeared plain, lacked the design reference-like dotted glass treatment and lacked a Default marker.
- design reference's inspected desktop preview frame measured about 636×300px and its field shell about 302×41px. Norato keeps its 48px minimum target.
- The Select menu opened in the 390px viewport, stayed within viewport width, exposed a search textbox and option groups, and used 48px option rows. Full selection semantics and multi-state verification remained outstanding.
- Current parity tracker records Select as implemented but DoD open, consistent with this audit.

## Post-implementation review

- Fresh Vite server `http://127.0.0.1:5177/#component-select` rendered the corrected specimen. At an identical desktop viewport of 1920×863, design reference is 636×300px and Norato is 584×288px (its detail column constrains the frame); controls are 302.4×68.2px and 300×48px respectively, where Norato preserves the 48px minimum target. Screenshots at the same viewport confirm matching centered, single-field composition, Default marker, dotted frame and soft color wash; Norato keeps its palette.
- Actual browser DoD interaction: search menu exposed grouped options and a selected item; ArrowDown moved active focus; choosing Isfahan updated single selection and status. In multi mode, selecting Tehran left committed status as Isfahan; Cancel preserved Isfahan; Confirm committed Tehran + Isfahan. Loading disabled the trigger and announced loading. RTL and 48px trigger height were inspected. The live playground also exposes required/error/disabled/read-only toggles and four sizes; these visual combinations were not exhaustively swept in this pass.
- Browser DOM shows page sections Preview + Vue + Overview + Anatomy + Variants + Sizes + States + Parts + Usage + Accessibility + Tokens (all nine contract sections), matching Button's structure.
- At an identical 390×844 mobile viewport, design reference's preview frame is 327×300px; Norato is 320×288px with a 300×48px control, centered in the frame and RTL. Norato document width is 375px, so there is no horizontal overflow. Screenshots confirm matched composition and Norato's own light color palette. Frame geometry is intentionally capped by tokens to avoid stretch.
- Geometry matrix: 24 combinations (single, or multi Chips/Summary × four sizes × inside/outside labels) were measured at 1920px and repeated at 390px. Every control remained RTL and at least 48px; only 48px/56px heights occurred; no mobile horizontal overflow. Inside labels intentionally use 56px rows at all four visual sizes to keep the stacked label/value legible.
- Accessibility defect discovered: ArrowDown moved focus to the selected option, but `.norato-select__option` had `outline:none` and no replacement `:focus-visible` rule. The active option had no visible focus indicator. This fails the contract and must be fixed before family DoD can close.
- Correction and browser verification: added the semantic Norato 2px focus outline, 4px offset and focus halo to `.norato-select__option:focus-visible`. On the 1195×765 local browser, ArrowDown produced a focused/highlighted option with `outline: 2px solid`, `outline-offset: 4px`, yellow 2px halo and 48px row height; ArrowDown then Enter selected Isfahan and updated the status. A requested 390×844 viewport override was ignored by this browser and reported 1195×765 with 1195px document width; that attempt is explicitly not counted as mobile menu evidence. Earlier 390px closed specimen/24-combination geometry evidence remains recorded above.
- Gates: token check passed; catalog integrity passed (49 routes/contracts); Vue typecheck passed; production build passed (634.56KB JS chunk warns above 500KB); `git diff --check` passed with line-ending warnings only.

## Analyze gate

No scope contradiction blocks the bounded correction. The primary outstanding risks are specimen mismatch and unverified interaction cases. Proceed only with the ordered tasks and keep family DoD open until evidence is complete.
