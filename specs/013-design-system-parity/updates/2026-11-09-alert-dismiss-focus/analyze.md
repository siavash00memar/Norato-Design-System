# Analyze — Alert playground dismissal focus

`NoratoAlert` emits `update:modelValue` and `dismiss`; the playground's `v-if` removes the Alert when its controlled visibility becomes false. A live browser Space activation confirmed the focused close button disappears and the active element becomes the document root. The playground already replaces the Alert with a status and a “show again” action. Focus that action after the dismiss event and the next DOM update. Do not change reusable adapter focus semantics or visual CSS.
