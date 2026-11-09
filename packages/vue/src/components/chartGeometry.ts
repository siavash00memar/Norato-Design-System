export interface NoratoChartScale {
  min: number
  max: number
}

const niceStep = (target: number) => {
  const safeTarget = Math.max(target, Number.MIN_VALUE)
  const exponent = Math.floor(Math.log10(safeTarget))
  const magnitude = 10 ** exponent
  if (!Number.isFinite(magnitude) || magnitude === 0) return safeTarget
  const fraction = safeTarget / magnitude
  const niceFraction = fraction <= 1 ? 1 : fraction <= 2 ? 2 : fraction <= 2.5 ? 2.5 : fraction <= 4 ? 4 : fraction <= 5 ? 5 : 10
  const step = niceFraction * magnitude
  return Number.isFinite(step) && step > 0 ? step : safeTarget
}

export function getChartScale(values: readonly number[]): NoratoChartScale {
  const rawMin = Math.min(0, ...values)
  const rawMax = Math.max(1, ...values)
  const step = niceStep(Math.max(Math.abs(rawMin), Math.abs(rawMax)) / 2)
  const roundedMin = Math.floor(rawMin / step) * step
  const roundedMax = Math.ceil(rawMax / step) * step
  const min = Number.isFinite(roundedMin) ? roundedMin : rawMin
  const safeMax = Number.isFinite(roundedMax) && roundedMax > min ? roundedMax : rawMax

  // Keep one tick of headroom when the largest value lands exactly on the axis ceiling.
  const paddedMax = safeMax === rawMax ? safeMax + step : safeMax
  return { min, max: Number.isFinite(paddedMax) && paddedMax > safeMax ? paddedMax : safeMax }
}
