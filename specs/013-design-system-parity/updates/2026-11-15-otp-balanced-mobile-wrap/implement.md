# Implementation — OTP balanced mobile wrap

Updated the existing runtime `.norato-otp` rule in `packages/vue/src/components.css` with `justify-content: center`. The scoped OTP stylesheet remains the component-specific owner for cell visuals; the base group rule was edited directly instead of adding another cascade override. No cell size, gap token, focus styling, or interaction code changed.

Browser verification recorded in `checklist.md`; the broader Input Final DoD remains open.
