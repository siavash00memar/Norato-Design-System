# Norato Field Contract

The Field is a single-line text input. Its visible label is persistent and associated with the native control. Helper and error messages are associated through description semantics; invalid state is exposed semantically and is not conveyed by color alone.

Required behavior is identical across HTML/CSS, Vue, and Next.js. Default direction is RTL, entered and placeholder text use Vazirmatn, and the label uses Estedad. The component reuses the Norato form-section contract with a 12px inter-block gap.

The Vue Field keeps a 48px interactive target with a 36px visible capsule. Its published stylesheet owns the neutral 1px resting Stroke, yellow hover/focus Stroke, semantic error Stroke, disabled neutral priority and RTL Vazirmatn Light 12px placeholder. The docs application must not be required to supply this appearance.
