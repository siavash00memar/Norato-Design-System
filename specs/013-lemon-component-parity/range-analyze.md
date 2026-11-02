# Range — source and implementation analysis

- Source inspection verified Lemon's 9-section page, compact one-slider preview, five anatomy parts, 8 Range Input variants, 10 Thumb variants, minimum-on-right RTL description, and arrow-key behavior.
- Existing Norato contract matches single/range, Small/Medium, Disabled and right-to-left fill, but its preview currently uses a single native range input within legacy `.sample-range` styling and does not demonstrate two-thumb range, value-over-thumb, or an executable page playground.
- Installed dependency includes Reka UI 2.11.0; runtime confirms `SliderRoot` accepts array `modelValue`, min/max/step, `dir`, disabled and keyboard behavior; two `SliderThumb` nodes represent range mode. The root uses native slider semantics for each thumb.
- Critical failure modes to test: browser defaults reverse the RTL fill unexpectedly; visual thumb and hitbox get conflated causing a stretch or target below 48px; range handles cross; labels drift from thumb; native slider AX labels fail to map to handles; error text is not associated.
- The existing generic documentation frame does not prove the slider itself is correctly sized. Measure each runtime part separately at desktop and mobile.
- Browser analysis resolved the main concerns: at both 1280px and 390px widths every Single/Range × Small/Medium × Default/Disabled combination kept 48×48px thumb targets; RTL fill and positions matched the minimum-on-right contract. Dragging the lower thumb through the other produced sorted values 75/85 rather than overlapping/crossed thumbs.
- The first render showed a duplicate current value and put the thumb value outside the thumb. The value was moved into each thumb and the redundant field value removed; desktop/mobile screenshots now match Lemon's one-label plus value-above-thumb hierarchy. Legacy `.sample-range input` styles were removed so they cannot leak into Reka's hidden form input.

- Follow-up screenshot showed the visible knob left of the keyboard focus ring. inset:50% resolved all four physical sides; in dir=rtl, absolute positioning over-constrained horizontal placement, shifting the knob. Applying the focus outline to the whole 48px target also made the ring visually oversized.
- Corrected the pseudo-element to use explicit physical top/left centering with right/bottom auto, and applied a 2px dark outline plus yellow halo to the 16px visible knob. Browser confirms target remains 48×48px, focus-visible is true, the knob aligns under its value and inside its focus decoration, ArrowLeft/ArrowRight changes then restores 60, and RTL remains set.

## Screenshot correction analysis — 2026-11-02

The range's `SliderRange` already renders the selected portion up to the thumb. A stale `.norato-range__thumb::before` draws an additional yellow segment from the target's inline-start to its center, which visually moves the track boundary by 24px. Repeated overrides also set thumb `::after` to muted surface/neutral border unconditionally, making normal and disabled states indistinguishable. Remove the extra pseudo-track and duplicate selectors rather than compensating with offsets; use the Reka fill as the single source of track geometry and scope muted styles to disabled only.

## Screenshot correction — rendered rail and pointer geometry

Keep Reka SliderTrack at full root width because it owns pointer coordinate mapping. Put an inset visual-rail span inside it and nest SliderRange inside that span; Reka's percentages then map directly onto the center-to-center span without changing root pointer geometry. Browser measurement confirms endpoint fill centers and endpoint clicks across 380px and 1920px.
