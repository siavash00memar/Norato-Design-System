export const primitiveMap = {
  Button: { candidate: 'shadcn/button', decision: 'Customize with Norato tokens before custom build.' },
  Field: { candidate: 'shadcn/input + label contract', decision: 'Compose with Norato RTL and validation contract.' },
  Tag: { candidate: 'shadcn/badge', decision: 'Review semantics before use; not a generic button.' },
  Search: { candidate: 'shadcn/input', decision: 'Compose as semantic search field.' },
  Checkbox: { candidate: 'shadcn/checkbox', decision: 'Use native keyboard and selected semantics.' },
  Radio: { candidate: 'shadcn/radio-group', decision: 'Use for mutually exclusive choices.' },
  'Date Picker': { candidate: 'shadcn/calendar + popover', decision: 'Validate RTL and keyboard calendar behavior.' },
  Upload: { candidate: 'custom contract', decision: 'Requires drag alternative and file-state contract.' },
  'Tree View': { candidate: 'custom contract', decision: 'Requires multi-select and keyboard navigation review.' },
} as const;
