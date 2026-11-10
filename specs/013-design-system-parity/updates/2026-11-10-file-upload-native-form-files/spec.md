# Specify — File Upload native form files

## Finding

The file input is named and may be `required`, but `onChange` unconditionally resets `input.value`. That leaves an accepted file in the controlled Vue queue while the native field is empty, so native validity and `FormData` do not match the component state.

## Acceptance

- Accepted files represented in `modelValue` stay represented by the native file input for constraint validation and `FormData`.
- Removing/canceling an item synchronizes the native FileList with the controlled queue.
- Rejected files do not enter the native FileList; valid queued files remain intact.
- Canceling the picker restores the queue to the input; selecting the same file again remains possible.
- Existing RTL, focus, disabled, required accessible naming, and controlled status behavior remain unchanged.
