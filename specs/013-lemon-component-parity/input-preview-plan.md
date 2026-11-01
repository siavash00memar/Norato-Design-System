# Input Preview — Plan

1. Audit the existing Input specimen markup, shared form-control rules, legacy selectors and token layout source.
2. Add semantic Norato tokens for the preview frame and bounded field, then update the existing Input preview selector in place with the approved frame treatment and geometry.
3. Add the `Default` marker to the inert one-field specimen; preserve the independent live `NoratoField` playground and the Button-like page shell.
4. Compare Lemon and Norato in the same desktop and 390×844 mobile browser viewports; verify proportions, RTL, marker, dots/wash, field height, document overflow and specimen inertness.
5. Run the token/catalog/TypeScript/build/diff gates, update the request report, family record and error log only if a defect is found, then commit and push.

## Constraints

- No changes to public runtime APIs while the separate Input scope clarification is pending.
- Do not weaken the 48px target to match Lemon's smaller field shell.
- Do not add page-local raw design values or stack conflicting CSS overrides.
