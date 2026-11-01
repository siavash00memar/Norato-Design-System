# Input — Family Specification

**Visual reference:** `https://lemonui.ir/#input` (inspected 2026-11-01)
**Governing project:** `.specify/memory/constitution.md` v1.2.0
**Norato contract:** `docs/component-contracts/input.md`
**Current status:** specification in progress; runtime scope awaits user clarification.

## User need

The Norato Input page should make its text-entry family understandable and usable from the same independent, nine-section page structure as Button. It should reflect Lemon's actual Input composition while using Norato colors, tokens, typography and RTL behavior. Real controls must not stretch to fill specimen frames, and their interaction targets must remain at least 48px.

## Source observations

- Lemon describes eight related controls: Text, Password, Phone, OTP, Text Area, Number, Amount and Search.
- Lemon uses a single email-field preview with label, glass field, email icon, placeholder and helper text, inside a 636×300px stage at desktop 1920×919; the field's visible shell is about 324×41px.
- Lemon documents 264 variants across the family, including four display sizes, text label placement, control-specific states, and 4/5/6-digit OTP.
- Norato's current page has the Button-style nine-section shell and a live generic `NoratoField` playground. The visual specimen currently renders as a 490×48px field in a 540×147px wrapper at the current 1195px browser viewport. Other documented variants are generic generated reference cards, not executable APIs.
- Norato's semantic contract requires 48px minimum interaction targets, so Lemon's 32/40px sizes may describe visual density only; real controls remain 48px or larger.

## Family contents in the reference

1. Text Input: Label Inside/Outside; Small/Medium/Large/XLarge; Default/Hover/Active/Error/Disabled/Loading/Success/Read-only.
2. Password Input: four sizes; Empty/Weak/Fair/Good/Strong strength presentation.
3. Phone Input: four sizes; Default/Hover/Active/Success/Error/Disabled; country calling code is placed on the physical left in Lemon.
4. OTP Input: four sizes, 4/5/6 digits; Default/Active/Error/Success/Disabled.
5. Text Area: Label Inside/Outside; four sizes; Default/Hover/Active/Filled/Error/Disabled/Read-only; count and resize affordance.
6. Number Input: Stepper/Stacked; four sizes; Default/Hover/Active/Error/Disabled.
7. Amount Input: four sizes; Default/Hover/Active/Error/Disabled; grouped amount and Persian words in Lemon.
8. Search Input: four sizes; Default/Hover/Typing/Loading/Disabled; clear affordance and platform shortcut.

## Requirements

- **IN-01:** Keep the Button page's section order and detail-page shell: specimen, truthful Vue usage/readiness, then Overview, Anatomy, Variants, Sizes, States, Parts, Usage, Accessibility and Tokens.
- **IN-02:** Make the top specimen reproduce Lemon's one-field composition and proportions, translated to Norato's semantic palette and Persian typography.
- **IN-03:** Show the eight family parts and their supported state/size matrices in Input-specific galleries rather than generic mock cards.
- **IN-04:** Separate real Vue capabilities from visual-only claims; use only props/events that exist in the relevant adapters.
- **IN-05:** Keep all rendered widths bounded, preserve intrinsic control height, prevent mobile horizontal overflow, and retain RTL/LTR field-specific text direction.
- **IN-06:** For every implemented control, verify associated labels, error descriptions, focus, keyboard, disabled/loading behavior, and minimum target sizes.
- **IN-07:** Run project token/catalog/TypeScript/build gates and compare desktop/mobile browser renders with Lemon before closing DoD.

## Open decision

Should this family implement Vue adapters for all eight reference controls, or remain a visual family page with only the current generic text adapter? This materially changes API, behavior, accessibility and task scope and is awaiting user clarification. **Specify gate: drafted; runtime scope unresolved.**
