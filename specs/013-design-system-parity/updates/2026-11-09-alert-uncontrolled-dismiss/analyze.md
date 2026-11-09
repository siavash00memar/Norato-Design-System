# Analyze — Alert uncontrolled dismissal

- Adapter source shows `visible = modelValue ?? internalVisible`; `dismiss()` sets `internalVisible` only when `modelValue` is absent, while still emitting `dismiss` and `update:modelValue`.
- The current playground binds `v-model`, so it does not demonstrate or browser-verify the independent adapter state documented by the contract.
- Keep the current controlled specimen as-is and add a separate isolated uncontrolled case. Remount with a key to restore the adapter's internal default visibility; do not pass a model prop or handler that changes its state.
