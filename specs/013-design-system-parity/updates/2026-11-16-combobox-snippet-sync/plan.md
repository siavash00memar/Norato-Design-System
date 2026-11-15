# Combobox sample synchronization — Plan

1. Audit the playground value, clear/search/commit paths, and adapter's emitted value types.
2. Replace the hard-coded model literal in the computed Vue sample with a serializer derived from the committed `value` and `multiple` state.
3. Keep search text separate from the committed value; preserve all existing snippet props.
4. In the browser, verify clear in single and multiple modes, then filter and commit a non-default result by keyboard; compare value, status, and generated sample.
5. Restore the default `design` selection and playground property settings.
6. Record the result, run token/catalog/TypeScript/build/diff gates, and keep remaining Combobox DoD items open.
