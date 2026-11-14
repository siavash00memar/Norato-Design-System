# Plan — OTP balanced mobile wrap

1. Keep the existing flex-wrap sizing and token gap after auditing all package and app selectors.
2. Add `justify-content: center` to the owning OTP group rule, using the existing component stylesheet.
3. Verify the six medium cells at 390px and 320px; inspect positions to prove one row at 390 and centered 4+2 rows at 320.
4. Confirm document width equals the viewport's layout width and the six 52px targets are unchanged.
5. Run token validation, Vue TypeScript validation, and `git diff --check`; record any remaining limitations.
