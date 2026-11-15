# Plan — Time Picker field capsule

1. Audit every current Time Picker input/control selector and the existing Vue field markup; replace the legacy shape rules instead of layering overrides.
2. Add one non-semantic visual wrapper around the readonly input. Draw its 36px capsule on the wrapper and keep the input itself covering the full 48px target.
3. Scope rest, hover, focus, invalid, and disabled/loading surface precedence to the wrapper; retain LTR time formatting and existing target sizing for XLarge.
4. Update the canonical Time Picker contract and record the issue in the error log.
5. Verify mobile and desktop rendering, computed capsule/target geometry, keyboard focus, opening/selection/Escape, disabled/error precedence, RTL/LTR, and console state.
6. Run token/catalog/typecheck/build/diff gates; record results and leave independent screen-reader review open if it cannot be performed.
