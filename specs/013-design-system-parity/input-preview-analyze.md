# Input page visual rule — Analyze

- Input has four visible surfaces on its component page: the top inert specimen (`ComponentSpecimen.vue`), the Variant family matrix, the States cards (`ContractVisualShowcase.vue`) and the interactive InputPlayground. The generic `NoratoField` also appears in the all-components interactive lab and uses its own native input class.
- Prior `36px` styling only addressed the top sample; Variants/States stayed at 48px and the live playground's shells followed 50–72px size tokens. This was the root cause of incomplete page-wide parity.
- Shared component-page styling covers all Norato Input adapters plus generic `NoratoField`; placeholder-only phone fields resolve RTL while entered phone/amount values retain LTR direction. The top sample's own dir is RTL.
- For interactive playground fields, keep their 48px physical hit boxes and render the capsule background/border inset vertically to 36px. OTP input elements also keep 48px targets; static OTP cells can be 36px.
- Textarea is a multiline exception. Its row-based height remains intact; its label still changes to Estedad Bold and placeholder direction to RTL.
