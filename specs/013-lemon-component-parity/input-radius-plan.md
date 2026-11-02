# Input Radius — Plan

1. Audit all current radius selectors used by Input runtime, family specimens, state cards, and playground.
2. Replace capsule radius only on affected Input field/OTP selectors with `--norato-radius-card`; remove the original declarations rather than stacking overrides.
3. Record the 12px rule in the Input component contract and Figma component rules; append the defect and validation evidence.
4. Verify actual browser-computed radius across all eight specimens, OTP runtime and Input states; check RTL, focus/state styling, and no change to APIs.
5. Run token, component catalog, Vue TypeScript/build, and diff checks; commit/push per the standing Git preference.
