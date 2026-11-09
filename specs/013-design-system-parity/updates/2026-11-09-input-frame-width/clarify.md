# Clarify — Input preview frame width

- Evidence: same-window 1265×713 screenshots show the local frame about 624px wide and the reference about 628px wide; both are 300px tall.
- Decision: the initial 4px CSS allowance rendered about 4px wider than the reference in the same browser viewport. Reduce the desktop-only allowance to the existing 2px border-medium token on the non-compact Input preview. Preserve the current mobile media rule, which sets the frame from available width.
- No unresolved product or API decision remains; implementation is limited to the shared page stylesheet rule for this one specimen.
