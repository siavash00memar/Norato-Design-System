# Specify — Radio disabled/error precedence

## Evidence

Live browser inspection shows an Error-only Radio border at `rgb(199, 32, 56)` and a Disabled-only border at neutral `rgb(107, 107, 107)`. With Error and Disabled together, every option is natively disabled and `aria-invalid="true"` remains exposed, but the border incorrectly remains red because the invalid selector outranks the disabled selector.

## Acceptance contract

- Error-only continues to use the semantic error stroke.
- Disabled-only uses the neutral disabled stroke.
- Disabled+Error uses the neutral disabled stroke and disabled text/indicator treatment, while retaining native `disabled`, `aria-invalid`, and the linked validation message.
- The selected value remains selected and cannot be changed while the group is disabled.
- RTL, 48px minimum target, and the fixed 2px keyboard focus ring remain unchanged.
- The correction is scoped to Radio; unrelated components keep their existing precedence.

## Scope

Change only Radio disabled/error styling and the evidence/contract records needed to describe and verify that priority.
