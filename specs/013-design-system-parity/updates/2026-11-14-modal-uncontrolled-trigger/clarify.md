# Clarify — Modal optional trigger and uncontrolled open

- No unresolved product decision. The existing DoD explicitly requires an uncontrolled-open check; the least disruptive API is an optional `trigger` slot, while `v-model:open` remains available for host-controlled flows.
- A `close` slot callback is needed for footer actions in uncontrolled mode; relying on the host's unbound model variable would not close the internal DialogRoot state.
