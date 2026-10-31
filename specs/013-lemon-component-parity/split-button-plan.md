# Split Button — implementation plan

1. Remove or neutralize legacy `.sample-split .button` and `.sample-caret` treatment, which currently yields two separate fully rounded pills. Replace it with a connected shell and a single divider, using Norato tokens.
2. Add a Vue 3 runtime component composed of native buttons and a positioned action menu. Keep RTL geometry, two Tab stops and keyboard focus management from the contract.
3. Export it, provide an accurate live example in the page, and update catalog maturity only after validation.
4. Compare the preview and live behavior against Lemon's Split Button page; test default action, menu selection, Escape, arrows, outside click, disabled/loading, focus, RTL, responsive rendering, and all required project checks.
5. Add `size` to the Vue API. Draw a single capsule behind the separate buttons so Small/Medium retain 32/40px visual heights while both native button targets remain 48px. Verify the rendered and clickable boxes at every size before upgrading maturity.

Shadcn evaluation: the relevant composition is Button plus Dropdown Menu. The repository has a Norato Button but no installed Vue dropdown primitive. Reusing the existing Button shape and native button/menu semantics keeps this family in the current Vue package; a new dependency is not justified for this single menu. Keyboard semantics must be verified in the browser.
