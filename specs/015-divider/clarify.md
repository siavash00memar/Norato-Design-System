# Divider — Clarify

## Evidence
- Lemon page `https://lemonui.ir/#divider` was opened and inspected at desktop size. It documents 12 variants, 1px line, horizontal/vertical orientation, three types, three spacing values and two tones. Its Default preview is one subtle horizontal line inside the shared dotted specimen frame.
- The variant count is 2 orientations × 3 types × 2 tones = 12; spacing (0/4/8) is a separate prop. This resolves the contract's apparent arithmetic ambiguity.
- Lemon accessibility text says the Divider is decorative unless it begins a section. Norato exposes this as an explicit `decorative` prop, defaulting to true.
- Repository policy requires Norato yellow/blue palette ownership and Vue 3; the divider itself uses only neutral semantic border tokens.
- `reka-ui@2.11.0` is installed and includes a Separator primitive; use it for separator semantics rather than a generic hand-rolled role.

## Resolved decisions
- Defaults: horizontal, line, subtle, spacing 8, decorative true.
- `label-center` and `label-start` share the same two-rule composition; logical inline-start places Label Start on the right in RTL and left in LTR.
- A semantic divider receives `role=separator` and `aria-orientation`; when a visible label is supplied, use it as the accessible name. Decorative mode remains hidden from assistive technology.
- Vertical orientation keeps rules exactly 1px wide; no label rotation. Label remains upright and splits the vertical rule. Spacing affects inline margins for vertical layout and block margins for horizontal layout.
- No further clarification is necessary: API and visual decisions are fully determined by reference, existing contract, and project rules.

**Gate:** Ambiguity resolved with source evidence and documented defaults. Proceed to Plan.

