export type ComponentStatus = 'Implemented' | 'Adapted' | 'Proposed' | 'Deferred'

export type ComponentRecord = {
  /** Stable machine-readable identifier; never derive this from the display label. */
  id: string
  /** Stable URL fragment after `#component-`. */
  slug: string
  /** Human-facing component name. */
  name: string
  /** Search metadata only; it does not define visual grouping. */
  tags: readonly string[]
  /** Readiness in this repository, not a claim of production suitability. */
  status: ComponentStatus
  /** Short explanation of the readiness decision. */
  note: string
  /** Repository-relative path to the component's independent contract. */
  contractPath: string
  /** Key consumed by the visual specimen renderer. */
  specimenKey: string
  /** Verified Vue package entry, present only for implemented components. */
  adapter?: { module: string; exportName: string }
  /** Key for a documented usage snippet. */
  usageKey?: string
}
