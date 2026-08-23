# Data Model: Norato Textarea

`id`, `label`, `value`, `placeholder`, `helperText`, `errorText`, `disabled`, `loading`, `required`, and `dir`.

State flow: `default → focused → filled → invalid`; loading and disabled prevent editing. Height is fixed and overflow scrolls inside the control.
