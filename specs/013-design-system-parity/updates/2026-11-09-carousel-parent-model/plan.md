# Plan — Carousel parent model verification

1. Add one parent-owned control beside the playground configuration; it mutates only the existing `active` ref.
2. In the browser, activate it and verify the active index, selected card/dot, enabled controls and selector stay synchronized in RTL.
3. Record this as parent-originated model coverage without conflating it with touch, reduced-motion or screen-reader items.
4. Run project gates, inspect the diff and push the verified change.
