# Constitution — Alert uncontrolled dismissal

- Preserve existing Norato Alert API and visual contract.
- Keep RTL, 48px target, semantic tokens, and Button-style page structure.
- A missing `modelValue` means the adapter owns visible state; dismissal hides it without requiring a parent update.
- Do not mark Alert complete while visual, accessibility, or other DoD items remain open.
