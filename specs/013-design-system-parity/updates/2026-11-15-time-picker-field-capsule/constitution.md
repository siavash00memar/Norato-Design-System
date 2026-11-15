# Constitution — Time Picker field capsule

- The user's global field rule is authoritative: a 36px pill-shaped visual field with a 1px `#e8e8e8` resting stroke and Norato-yellow hover/focus stroke.
- Preserve a minimum 48px interactive target; the visible capsule may sit inside the larger hit area.
- Keep the time value and digits LTR while the component, label, and surrounding page remain RTL.
- Use existing Norato semantic tokens and Vue 3 conventions. Do not add page-local raw values or dependencies.
- Preserve loading, disabled, invalid, required, helper/error, keyboard, and controlled-value behavior.
