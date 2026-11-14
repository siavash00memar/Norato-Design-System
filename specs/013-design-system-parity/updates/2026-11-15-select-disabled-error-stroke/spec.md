# Specify — Select disabled/error Stroke precedence

## Problem

In the live Select playground, Error + Disabled retained the red error Stroke. The disabled selector already declares the neutral border and muted surface, but the more-specific invalid-group rule wins the cascade. Loading also disables the trigger, so Error + Disabled + Loading shows the same red Stroke.

## Acceptance

- A disabled Select trigger uses the semantic neutral border and muted disabled surface, whether or not error/loading states are also set.
- Error text and validation semantics remain present; disabled appearance must not clear `aria-invalid` or the associated message.
- Loading remains announced and the trigger remains disabled.
- Enabled Error retains its error Stroke; enabled focus/hover remains Norato yellow.
- RTL, 48px target, selection value, generated example and public API remain unchanged.
- No raw color, global field override, or browser-native dropdown is introduced.

**Gate:** Scope and observable acceptance are specific and measurable; no new API or unresolved product behavior is introduced.
