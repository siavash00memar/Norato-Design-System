# Analyze — OTP required completion

## Verified cause

`NoratoOtpInput.vue` binds `required` only when `index === 0`. The browser playground reproduced the consequence: after enabling Required and filling only cell zero, that cell was valid and cells one through five were also valid because they were optional. The component therefore does not enforce its advertised required-code behavior in native forms.

## Selected fix

Bind the existing boolean prop to every cell. Each input already has its own accessible digit name, so browser constraint validation can identify the first missing position while retaining the current API and form semantics.

## Considered alternative

A hidden aggregate field with `setCustomValidity` would validate one composite value, but it adds synchronization and focus/reporting rules, reduces native per-cell semantics, and is not needed to preserve the public contract. No custom validity mechanism is warranted for this defect.
