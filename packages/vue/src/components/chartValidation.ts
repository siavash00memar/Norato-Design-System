import type { NoratoChartSeries, NoratoChartType } from './chartTypes'

export function getChartDataIssue(categories: readonly string[], series: readonly NoratoChartSeries[], type: NoratoChartType): string {
  if (categories.length === 0) return 'برای نمایش نمودار، دست‌کم یک دسته لازم است.'
  if (series.length === 0 || series.length > 8) return 'نمودار باید بین یک تا هشت سری داشته باشد.'
  if (new Set(series.map(item => item.id)).size !== series.length) return 'شناسهٔ هر سری نمودار باید یکتا باشد.'

  const invalid = series.find(item => item.values.length !== categories.length || item.values.some(value => !Number.isFinite(value)))
  if (invalid) return `مقادیر سری «${invalid.label}» باید برای هر دسته یک عدد معتبر داشته باشند.`
  if ((type === 'bar' || type === 'horizontal-bar') && series.length !== 1) return 'نمودار میله‌ای ساده فقط یک سری می‌پذیرد؛ برای چند سری از نمودار گروهی استفاده کنید.'

  if (type === 'donut') {
    const values = series[0].values
    const total = values.reduce((sum, value) => sum + value, 0)
    if (series.length !== 1 || values.some(value => value < 0) || !Number.isFinite(total) || total <= 0) return 'نمودار دونات به یک سری با مقادیر نامنفی و مجموع محدود و بزرگ‌تر از صفر نیاز دارد.'
  }

  const values = series.flatMap(item => item.values)
  const minimum = values.reduce((value, current) => Math.min(value, current), 0)
  const maximum = values.reduce((value, current) => Math.max(value, current), 1)
  if (!Number.isFinite(maximum - minimum)) return 'محدودهٔ مقادیر برای رسم نمودار بیش از حد بزرگ است.'

  return ''
}
