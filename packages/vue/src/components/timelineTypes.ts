export type NoratoTimelineTone = 'neutral' | 'active' | 'success' | 'warning' | 'danger'
export type NoratoTimelineMarkerType = 'dot' | 'icon' | 'avatar'
export type NoratoTimelineIcon = 'package' | 'check' | 'clock' | 'user'
export type NoratoTimelineLayout = 'default' | 'card' | 'compact'
export type NoratoTimelinePosition = 'first' | 'middle' | 'last' | 'only'

export type NoratoTimelineEvent = {
  id: string
  title: string
  time: string
  /** ISO-8601 datetime for machine-readable time semantics. */
  datetime?: string
  description?: string
  tone?: NoratoTimelineTone
  markerType?: NoratoTimelineMarkerType
  icon?: NoratoTimelineIcon
  avatarName?: string
  avatarSrc?: string
}

export type NoratoActivityGroup = {
  id: string
  label: string
  events: readonly NoratoTimelineEvent[]
}
