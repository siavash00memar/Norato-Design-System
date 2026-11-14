# Analyze — Modal optional trigger and uncontrolled open

- Evidence: `NoratoModal.vue` defines an internal `open` model defaulting to false and renders only DialogContent; it imports no DialogTrigger and exposes no trigger slot. The playground always supplies `v-model:open` and its external launch button sets a separate ref.
- Root cause: the model can represent internal state, but no child trigger can set it true when a host omits the model. Footer actions also mutate the playground's ref, which does not own an uncontrolled DialogRoot.
- Decision: use Reka's established `DialogTrigger as-child` only when the optional slot exists; expose the model-backed close function to body/footer slots. Keep the existing controlled contract and UI unchanged by default.
- Risks: slot forwarding and duplicate controls could break controlled callers; the playground must render exactly one launch trigger in either mode, and focus return must target the correct trigger.
