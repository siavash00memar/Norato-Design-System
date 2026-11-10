# Specify — File Upload required accessibility

## Observed problem

The live accessibility tree exposes the Dropzone button named only from the label. The clipped native file input is absent from that tree. When `required` is enabled, the input has the native constraint but its required state is not conveyed by the action users can reach with assistive technology.

## Acceptance

- With `required=true`, the native file input keeps its `required` property and the accessible Dropzone action communicates «الزامی» together with the visible field label.
- With `required=false`, the Dropzone action exposes only the field label and no required indicator.
- The visible star, page geometry, file picker activation, helper/error descriptions, RTL layout, and 48px target remain unchanged.

## Verification

Use the live browser accessibility tree for both required states and read the native input's `required` and empty `validity.valueMissing` properties. Run token and TypeScript gates and record remaining form-submit/independent screen-reader limits honestly.
