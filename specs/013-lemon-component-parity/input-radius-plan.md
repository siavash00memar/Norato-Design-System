# Input Radius — Plan

1. Audit all current radius selectors used by Input runtime, family specimens, state cards, and playground.
2. Replace the prior 12px radius declarations on Input field/OTP selectors with `--norato-radius-pill`; do not stack overrides.
3. Record the user-approved capsule rule in the Input component contract and Figma component rules; append the defect and validation evidence.
4. Verify actual browser-computed radius across all eight adapters, OTP runtime and Input states; check RTL, focus/state styling, and no change to APIs.
5. Run token, component catalog, Vue TypeScript/build, and diff checks; commit/push per the standing Git preference.
