# Input — Family Specification

**Visual reference:** `https://lemonui.ir/#input` (inspected 2026-11-01)
**Governing project:** `.specify/memory/constitution.md` v1.2.0
**Norato contract:** `docs/component-contracts/input.md`
**Current status:** eight independent executable Vue adapters specified and clarified; existing `NoratoField` remains backward-compatible and `NoratoTextarea` remains exported.

## User need

The Norato Input page should make its text-entry family understandable and usable from the same independent, nine-section page structure as Button. It should reflect Lemon's actual Input composition while using Norato colors, tokens, typography and RTL behavior. Real controls must not stretch to fill specimen frames, and their interaction targets must remain at least 48px.

## Source observations

- Lemon describes eight related controls: Text, Password, Phone, OTP, Text Area, Number, Amount and Search.
- Lemon uses a single email-field preview with label, glass field, email icon, placeholder and helper text, inside a 636×300px stage at desktop 1920×919; the field's visible shell is about 324×41px.
- Lemon documents 264 variants across the family, including four display sizes, text label placement, control-specific states, and 4/5/6-digit OTP.
- Norato's page uses the Button-style nine-section shell, an inert single-field preview and a live playground for all eight adapters. In matching 1280×900 desktop viewports the frame is 584×288px (column-constrained) with a 324×49.6px field; at matching 390×844 mobile viewports it measures 320×288px with a 310.4×49.6px field and 375px document width. The family gallery now has recognizable per-subtype field specimens; state cards remain inert visual references.
- Norato's semantic contract requires 48px minimum interaction targets, so Lemon's 32/40px sizes may describe visual density only; real controls remain 48px or larger.
- **Refinement acceptance (2026-11-01):** all eight adapters expose the shared four-size control; single-line controls use 50/52/56/60px outside and 62/64/68/72px inside so targets remain at least 48px and floating labels do not collide. OTP cells use 48/52/56/60px and wrap on narrow viewports. Three-row Textarea measures 103/108/120/128px. Suppress native Number spinners beside Norato's own 48px increment/decrement controls; preserve keyboard ArrowUp/ArrowDown behavior. Shared success/loading states must render on all eight adapters, with text status semantics and reduced-motion handling.
- **Browser evidence:** mobile 390×844 local viewport remained 375px document width across four sizes; six OTP cells wrap only at Large/XLarge, without overflow. Four Number stepper targets remain 48×48px; ArrowUp from 98 stops at max 99. Full visual state matrix and screen-reader DoD remain open.
- **States-gallery acceptance (2026-11-01):** render the 41 family/state references in compact Lemon-like cards (two columns at a 390px viewport, three adaptive columns on wide screens). Each card must show the appropriate bounded mini-control; Error, Success, Disabled, Loading, Active, Hover and Read-only must be visually distinct where documented. Preserve family name, state title and description; the entire gallery stays inert and aria-hidden. No new runtime API is added.

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

## Public adapter contract

- `NoratoTextInput`: controlled text field, label placement (`inside|outside`), four sizes, helper/error/required/disabled/loading/success/read-only states, optional leading/trailing affordances, and `dir`.
- `NoratoPasswordInput`: controlled password field, visibility toggle, four sizes, common field states, strength bar driven by the caller's `strength` prop (`empty|weak|fair|good|strong`); never derive strength internally.
- `NoratoPhoneInput`: controlled telephone string, fixed configurable calling-code prefix (default `+98`, no country picker), four sizes, common field states, LTR number entry while preserving RTL label/helper.
- `NoratoOtpInput`: controlled code, length 4/5/6, four sizes, common states; sequential typing, full-code paste, Backspace and arrow navigation; no automatic submission.
- `NoratoTextarea`: retain existing export; add controlled character limit/counter, four sizes, common states, and a vertical resize affordance.
- `NoratoNumberInput`: controlled numeric value, `stepper|stacked` presentation, min/max/step, four sizes and common field states; native keyboard behavior and increment/decrement actions use numeric constraints.
- `NoratoAmountInput`: controlled numeric amount, localized grouping and Persian words, configurable currency with default `تومان`, four sizes and common field states; serialization is a canonical numeric string without display separators.
- `NoratoSearchInput`: controlled query, clear action, loading/disabled states, four sizes and a platform-aware Ctrl/Cmd+K focus shortcut; preserve ordinary text editing and do not intercept while another editable control owns input.

Common behavior: every true interactive button (visibility/step/clear) is at least 48×48px; the 32/40px reference sizes are visual densities only. Labels connect to native controls, helper/error IDs connect through `aria-describedby`, error sets `aria-invalid`, disabled/read-only/loading have native semantics, and Focus remains visible. Number, amount, OTP and phone entry use LTR within the RTL page; Persian labels and helper content remain RTL. Every separate adapter is publicly exported and has a reviewed Vue example.

## Decision status

The user selected eight independent executable adapters and delegated the control-specific defaults to Lemon/Norato conventions. Decisions and adapter behavior/API are recorded in `input-clarify.md` and the public adapter contract above. **Specify gate: passed. Implementation scope is eight adapters plus Input family galleries and playground.**
