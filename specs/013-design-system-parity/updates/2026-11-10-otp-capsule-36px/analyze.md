# Analyze — OTP visual capsule and target

## Finding

`docs/component-contracts/input.md` and `docs/figma-component-rules.md` already require 36px visual OTP capsules within 48px targets, but the published `NoratoOtpInput` renders each native input as a square 48/52/56/60px box. The inert family and state galleries also use equal width/height, so cells appear circular.

## Design

Use a 48/52/56/60px shell as the native input hit area. A decorative `::before` draws a 36px-tall capsule centered in that shell. The input itself fills the target transparently. State borders live on the capsule pseudo-element, ensuring one Stroke and retaining the full hit area.

## Risks

Wrapping each input changes DOM structure and CSS state targeting; verify label association, ARIA descriptions, focus visibility, keyboard sequence, paste and disabled behavior. Do not claim independent screen-reader verification from the browser accessibility tree.
