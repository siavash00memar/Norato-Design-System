export type PrimitiveDecision = {
  candidate: string
  decision: string
}

/**
 * Evaluated implementation notes keyed by stable catalog IDs.
 * This is a decision ledger, not a second component inventory or runtime status source.
 */
export const primitiveMap: Readonly<Record<string, PrimitiveDecision>> = {
  button: { candidate: 'shadcn/button', decision: 'Customize with Norato tokens before custom build.' },
  'split-button': { candidate: 'shadcn/button + dropdown-menu', decision: 'Use the existing Norato Button silhouette and native Vue button/menu semantics; a dropdown primitive is not installed in this package. Verify keyboard and RTL behavior before maturity upgrade.' },
  input: { candidate: 'shadcn/input + label contract', decision: 'Compose with Norato RTL and validation contract.' },
  tag: { candidate: 'shadcn/badge', decision: 'Review semantics before use; not a generic button.' },
  checkbox: { candidate: 'shadcn/checkbox', decision: 'Use native keyboard and selected semantics.' },
  radio: { candidate: 'shadcn/radio-group', decision: 'Use for mutually exclusive choices.' },
  switch: { candidate: 'shadcn-vue switch / Reka UI SwitchRoot + SwitchThumb', decision: 'Use the installed Reka UI primitive for controlled switch semantics and keyboard behavior; customize its track, thumb, dimensions, focus and RTL position with Norato tokens.' },
  segmented: { candidate: 'shadcn ToggleGroup / Reka UI ToggleGroupRoot + ToggleGroupItem', decision: 'Use the installed Reka single ToggleGroup for pressed-button semantics and roving keyboard focus; style Norato variants and preserve a non-empty controlled selection.' },
  range: { candidate: 'shadcn Slider / Reka UI SliderRoot + SliderTrack + SliderRange + SliderThumb', decision: 'Use installed Reka Slider for controlled single/range values, pointer and keyboard interaction, and RTL; customize visual thumb while preserving 48px hit targets.' },
  rating: { candidate: 'shadcn RadioGroup / Reka UI RadioGroupRoot + RadioGroupItem', decision: 'Use the installed Reka RadioGroup for five mutually exclusive controlled score choices; render read-only and summary star compositions separately with Norato tokens.' },
  'date-picker': { candidate: 'Reka UI CalendarRoot + RangeCalendarRoot + DatePickerRoot/DateRangePickerRoot + @internationalized/date', decision: 'Evaluated the installed Reka date primitives and the framework-neutral date library. Use @internationalized/date PersianCalendar for calculations/serialization, and a unified custom Vue surface because one shared controlled contract must cover all seven modes, especially presets and mobile Wheel. This deliberately owns grid roving focus and range interaction; Reka date primitives are Alpha and remain a viable alternative if the custom accessibility DoD fails. Verify all modes in-browser before maturity upgrade.' },
  'time-picker': { candidate: 'Reka Popover + native time controls', decision: 'No installed dedicated time picker. Use a bounded tokenized Vue panel with native labeled button/select semantics and explicit RTL/LTR behavior; no extra dependency.' },
  'file-upload': { candidate: 'custom contract', decision: 'Requires drag alternative and file-state contract.' },
  'tree-view': { candidate: 'custom contract', decision: 'Requires multi-select and keyboard navigation review.' },
}
