# Switch State Gallery — Specification

## Need

Switch's States section currently shows generic horizontal pill artwork with marks. design reference uses text cards with a state title and explanation; actual Switch controls are presented in Preview and Variants.

## Acceptance contract

1. Keep exactly five Switch states and three Switch Field states derived from the existing contract.
2. Show state title, family, concise Persian explanation, and semantic Norato status accent without pill/control artwork.
3. Keep the gallery static; preserve Preview, live playground, adapter API and runtime behavior.
4. Use responsive two-column mobile layout, RTL, bounded card geometry, no overflow, and no stretched control art.
5. Preserve other families' galleries; verify the related Radio/Select/Button renderers.
6. Compare Norato and design reference at equal desktop/mobile viewports and record browser and technical-gate evidence.

## Out of scope

Switch runtime API/behavior redesign, other component families, and independent screen-reader certification.
