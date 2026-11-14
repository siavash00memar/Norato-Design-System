# Checklist — Select disabled/error Stroke precedence

## Requirements quality (pre-implementation)

- [x] Default, enabled Error, Disabled + Error, and Loading + Disabled + Error outcomes are distinguished.
- [x] Disabled visual precedence is explicit while error semantics/message and loading announcement are preserved.
- [x] RTL, minimum target, focus/hover, selected value, and API invariants are named.
- [x] The fix is constrained to existing semantic tokens and the Select trigger; global fields/native controls are excluded.
- [x] Validation includes live browser states and the required repository gates.

## Implementation evidence (complete after execution)

- [x] Enabled Error still uses error Stroke; Error + Disabled and Error + Disabled + Loading use neutral disabled Stroke/surface.
- [x] Browser AX exposes the error message, disabled trigger, and loading status. Source retains `aria-invalid` and described-by bindings whenever `errorText` is set.
- [x] Default state is restored to Tehran, RTL, Large, label outside, searchable, enabled, no error/loading; RTL and target size rules were unchanged.
- [x] Component contract, visual rules, validation log and error log are updated.
- [x] Token, catalog, typecheck, build and diff checks pass.
- [ ] Broader Select state screenshot matrix and independent screen-reader review remain open.
