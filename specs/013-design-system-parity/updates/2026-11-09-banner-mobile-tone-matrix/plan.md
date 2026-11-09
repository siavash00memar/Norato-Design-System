# Plan — Banner mobile tone matrix

1. Audit Banner's existing component CSS and state controls; avoid adding conflicting selectors.
2. Render all six tones in Mobile layout at exact 390px and 320px same-origin frames; record document width, role, card and target geometry.
3. Compare the local mobile sample against the supplied reference at a matched width; fix only verified defects.
4. Update Banner DoD, request validation, component rules and error log with evidence and remaining limits.
5. Run token/catalog/TypeScript/build/diff gates, then commit and push.
