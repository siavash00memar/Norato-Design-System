# Specify — Avatar Upload native form sync

## Problem

`NoratoAvatarUpload` sets `required` on its native file input but clears that input immediately after every selection. The controlled `modelValue` can show a selected image while native form validity still reports the field empty. The adapter also has no `name` prop, so its selected image cannot enter a host form’s `FormData` under a field name.

## Acceptance contract

- Add optional `name` to the Vue adapter and bind it to the native file input.
- Keep the real selected `File` in the input while `modelValue` is non-null; a required field becomes eligible to pass native validation, and a named field can be included in native `FormData`.
- When the controlled value becomes `null`, clear the input FileList.
- Clear the input value immediately before opening the picker to allow same-file reselection. If the chooser is cancelled, restore the currently controlled FileList.
- Keep `update:modelValue` and `file-selected` payloads unchanged; preserve image-only `accept`, RTL, labels, disabled behavior, and 48px target.
- No upload transport, URL creation, removal control, error surface, or visual changes are introduced.

## Out of scope

- Browser verification of actual OS file selection, `ValidityState`, submitted `FormData`, chooser cancellation and same-file reselection remains a required final check, not something to infer from source or a helper test.
- OS drag/drop is not part of Avatar Upload's current API.
