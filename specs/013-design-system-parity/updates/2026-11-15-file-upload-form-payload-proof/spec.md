# Specify — File Upload native form payload proof

## Problem

The local File Upload playground places named Dropzone and Avatar inputs in a form but prevents submission without exposing the constructed `FormData`. The browser inspection bridge cannot access the `FormData` constructor or native `FileList` entries directly, so named payload behavior remains unverified.

## Requirement

Provide a local playground action that submits the form in-place, constructs `FormData` from that form, and displays only field names plus selected filenames/sizes. It must prevent any network submission. The action must respect native required/disabled behavior and clear stale output when the controlled files change.

## Acceptance

- The form remains local and does not issue a request.
- Real browser-selected files appear in the report under their declared field names.
- Removing/clearing a controlled file removes it from the next report; required empty fields remain blocked by native validity.
- The action and status report are keyboard accessible, RTL-aware, and responsive.
- The public Vue adapter API and production file handling are unchanged.
