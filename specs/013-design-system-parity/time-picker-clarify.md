# Time Picker — clarification gate

- API: `modelValue: string | { start: string; end?: string }`; `type: 'single' | 'range'`; `variant: 'columns' | 'columns-12h' | 'wheel' | 'slots' | 'range'`; `minuteStep`, optional `slots`, label/id, helper/error, required/disabled/loading, name and dir. Emit `update:modelValue` and `open-change`.
- Keep the single value as canonical 24-hour `HH:mm`, even in 12-hour presentation; this avoids locale-dependent model serialization. Range start is required, end optional until selected.
- Default to five-minute steps. Reject malformed values and clamp keyboard/step changes within 00:00–23:55; in range mode end cannot precede start. Slots must be valid, unique, sorted times and may be disabled individually.
- Persian labels and page flow use RTL; numeric time values use LTR. 12-hour mode uses localized AM/PM labels. Default sample is `14:30`; slots sample `09:00`, `09:30`, `10:00`, `10:30`.
- Focus/open/close behavior follows the acceptance spec. The picker panel is custom and bounded because no installed primitive covers time selection; preserve native button/select keyboard behavior and semantic associations.
- No material decision remains unresolved; implementation can proceed.
- 2026-11-07 visual correction: the user clarified Norato's primary accent is yellow. This supersedes the earlier blue selected-cell interpretation in the Time Picker contract; selected preview and runtime cells use brand yellow with dark text. The runtime already follows this rule; only the inert specimen was found blue.
