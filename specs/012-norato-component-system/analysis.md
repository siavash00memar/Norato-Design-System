
- FR-069 trace: ButtonPlayground.vue + styles.css; browser screenshot supplied by user. React-only Animate UI cannot satisfy Vue contract, so use equivalent CSS motion tokens and native Vue controls. Risk: native select appearance differs by browser; keep native selection and focus semantics.

- FR-070 trace: user screenshots, ButtonPlayground.vue and styles.css. Existing unicode chevron is aligned 12px from the control edge and is visually cramped; wrapper border/background creates unwanted toggle pills. Native select semantics remain intact.
- FR-071 trace: screenshot and native select implementation in ButtonPlayground.vue. Existing NoratoSelect.vue also renders native select; using it would reproduce the OS popup. A scoped custom listbox avoids changing all consumers but needs explicit keyboard/focus validation.
- FR-072 trace: app root, generated component documentation and live previews. Updating each source string would miss future contract content; root text normalization covers existing and newly rendered prose. Main risk is accidentally changing code or editable values, so skip those containers and test copy paths.
