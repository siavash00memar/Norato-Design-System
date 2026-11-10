# Analyze — Banner mobile preview frame

- At 390×844, the reference stage is 342×300px at x=24px; the Norato stage is 358×300px at x=16px. Norato is 16px wider.
- At the requested 320px emulation, the reference stage is 272×300px at x=24px. The reference document itself scrolls 6px wider than its viewport; Norato currently measures 288×300px at x=16px and has no overflow.
- Both local frames use the generic 636px desktop specimen rule and have no Banner-specific mobile frame rule. The live `NoratoBanner` adapter is a separate full-width implementation and should not be changed.
- A centered `calc(100% - --norato-space-4)` capped at a 342px semantic token yields the measured target widths (342 and 272) from local content widths (358 and 288), while preserving 300px height and local no-overflow behavior.
