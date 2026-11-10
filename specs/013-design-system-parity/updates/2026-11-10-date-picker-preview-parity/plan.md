# Plan — Date Picker preview parity

1. Audit Date Picker specimen class composition, shared Button frame rules, and the legacy Date Picker frame/background selectors.
2. Scope the Date Picker specimen into the shared frame system and neutralize only the legacy selectors that conflict with that frame.
3. Preserve the inner calendar's geometry and palette while making its backdrop transparent to the shared stage.
4. Inspect the actual local browser render at desktop, 390px, and 320px; compare frame geometry and ensure no local overflow.
5. Run token/catalog/TypeScript/build/diff gates; update the component rule, family DoD evidence, request validation, and error log only with observed results; push the verified change.
