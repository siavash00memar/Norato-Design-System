# Switch Toggle Consistency — Analyze

## Pre-implementation evidence

- `apps/vue/src/styles.css` uses a 36×20px playground track, 12px knob and a 20px checked translation. The actual travel available after 4px inset on each end is only 16px, so the checked knob reaches the track edge.
- The live adapter and static matrix use 40×24px medium tracks and 16px knobs, but the checked knob is dark and has an elevation shadow, contrary to the latest user rule.
- The browser shows separate preview and playground switches; shared generic toggle CSS is used by many component playgrounds, so the correction must be centralized.
- Latest screenshot review finds two remaining visual defects in the track: checked track inherits `border-strong` gray; unchecked track renders nearly white from `glass-surface-strong`.

## Decision

Use the existing semantic medium Switch dimensions and logical positioning. Place the knob 4px from inline-start while off and `calc(100% - 20px)` from inline-start while on (40px track − 16px knob − 4px inset). Remove knob border/outline/shadow. Remove the checked track's gray border and use the existing muted surface token for the unchecked fill; keep the keyboard focus ring on the track/control.
