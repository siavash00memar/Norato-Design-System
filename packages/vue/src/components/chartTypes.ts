export type NoratoChartType = 'bar' | 'grouped-bar' | 'horizontal-bar' | 'line' | 'area' | 'donut'
export type NoratoChartTrend = 'up' | 'down' | 'neutral'

export interface NoratoChartSeries {
  id: string
  label: string
  values: readonly number[]
}

export interface NoratoChartDirectLabel {
  seriesId: string
  categoryIndex: number
  text?: string
}
