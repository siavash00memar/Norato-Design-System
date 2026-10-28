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
  input: { candidate: 'shadcn/input + label contract', decision: 'Compose with Norato RTL and validation contract.' },
  tag: { candidate: 'shadcn/badge', decision: 'Review semantics before use; not a generic button.' },
  checkbox: { candidate: 'shadcn/checkbox', decision: 'Use native keyboard and selected semantics.' },
  radio: { candidate: 'shadcn/radio-group', decision: 'Use for mutually exclusive choices.' },
  'date-picker': { candidate: 'shadcn/calendar + popover', decision: 'Validate RTL and keyboard calendar behavior.' },
  'file-upload': { candidate: 'custom contract', decision: 'Requires drag alternative and file-state contract.' },
  'tree-view': { candidate: 'custom contract', decision: 'Requires multi-select and keyboard navigation review.' },
}
