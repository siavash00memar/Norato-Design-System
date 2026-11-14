# Timeline preview update — Analyze

- The shared Button-style shell is 300px high, but the reference Timeline specimen is 327.5px on desktop and 311.5px on mobile. Its frame therefore needs family-scoped sizing; changing the shared frame would regress unrelated components.
- The current inert Timeline default uses 32px icon markers for two rows while the reference uses small status dots and a 12.96px active outline. This is a specimen composition mismatch, not a missing runtime capability.
- The live Timeline Item uses approximately 65.4px rows in the current sample versus ~59.8px reference rail cadence. Verify whether specimen-only spacing correction is enough after removing the two oversized icon markers; preserve the public adapter's behavior until evidence supports a shared token change.
- Mobile frame correction must inset the outer static sample; generic parent padding currently yields 343px at 390 and x=16, versus 327px at x=24 in reference.
- Remaining risks include CSS selector order, reference page horizontal overflow at 320px (the local document must still remain bounded), and keyboard/screen-reader requirements that cannot be closed by frame measurements alone.
