# Specify — Modal optional trigger and uncontrolled open

## Problem
The DoD requires the uncontrolled `open` path, but NoratoModal exposes no trigger slot. Without `v-model:open`, its internal default starts closed and the consumer has no way to open it.

## Acceptance contract
- Add an optional native-button-compatible `trigger` slot to NoratoModal, powered by Reka DialogTrigger.
- With no `v-model:open`, clicking that trigger opens the dialog; close button, Escape, and outside click update the internal state and restore focus.
- Expose a `close` callback to body/footer slots so uncontrolled forms can close after successful submission or cancel.
- Preserve controlled `v-model:open`; existing callers and the Dialog wrapper remain compatible.
- Add a live playground path for controlled vs internal-open modes and a matching Vue usage snippet.
- Keep focus management, RTL, disabled/busy and dismissible semantics intact.
