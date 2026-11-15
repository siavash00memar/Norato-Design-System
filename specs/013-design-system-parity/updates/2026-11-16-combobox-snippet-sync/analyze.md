# Combobox sample synchronization — Analyze

## Evidence

- In the local browser, Clear removed the selected value and the live status reported «هنوز مهارتی انتخاب نشده است».
- Typing «پژوهش» filtered the custom list to «پژوهش کاربر» (plus the create action). ArrowDown and Enter closed the menu and the live input/status reported the committed selection.
- The rendered code sample remained `const skill = ref('design')` after the selection changed, while the playground had initially synchronized its value/status. Source inspection confirms the sample literal is hard-coded for both single and multiple modes.
- `NoratoCombobox.vue` emits `string | string[]`; `clear()` emits `''` in single mode and `[]` in multiple mode.
- The hidden test fixture was reset to the single selected option «طراحی محصول» after the interaction.

## Decision

Derive only the sample's model declaration from the committed `value` and `multiple` mode. Use JSON serialization for single strings; serialize arrays without reordering. Do not derive the model from the transient query. Keep the existing options, props, selection behavior and layout unchanged.

## Post-change verification

- Single clear rendered `ref('')`; typing «پژوهش» did not change the model sample until commit. ArrowDown + Enter selected the result and updated the field/status plus sample to `ref("پژوهش")`.
- Multi mode preserved the selected research value as `ref<string[]>(["پژوهش"])`; selecting the interface option appended it in order. Clear produced `ref<string[]>([])` and the empty-selection status.
- Restored single `design`; field, status and sample agreed. Token/catalog checks, Vue typecheck/build, and diff check passed.

## Risk and falsification

- An invalid string literal would break copied Vue code; verify a Persian selection in the generated text.
- If the example reflects query text before commit, it would misrepresent controlled state; explicitly check search-before-commit.
- If multi mode contains fewer/more selected values than the sample array, the serializer is incorrect; verify the exact ordered array and clear state.
