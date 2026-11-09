# Analyze — Notification Center Popover fit

- The observed overflow is a height constraint failure, not a horizontal width issue: Popper selected the top side, but the 480px Norato cap exceeded the measured 314px above the bell.
- Reka UI 2.11.0's local `PopoverContentImpl.vue` maps `--reka-popover-content-available-height` to `--reka-popper-available-height`. This makes the placement-aware available height the authoritative CSS input.
- The shared `.norato-notification-center__content,.norato-notification-center__panel` rule applies one max-height policy to two different surfaces. A Popover-only override avoids changing the fixed Dialog panel.
- Preserve `overflow:auto`; shortening the panel must not reduce action/row hit targets. After changing the cap, remeasure the exact Popper bounds because placement can change after the content size changes.
