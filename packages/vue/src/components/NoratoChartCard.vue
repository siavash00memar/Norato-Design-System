<script setup lang="ts">
import { computed, useId } from 'vue'
import NoratoChartLegendItem from './NoratoChartLegendItem.vue'
import type { NoratoChartDirectLabel, NoratoChartSeries, NoratoChartType } from './chartTypes'
import { getChartScale } from './chartGeometry'
import { getChartDataIssue } from './chartValidation'

const props = withDefaults(defineProps<{ title: string; subtitle?: string; categories: readonly string[]; series: readonly NoratoChartSeries[]; type?: NoratoChartType; directLabel?: NoratoChartDirectLabel; dir?: 'rtl' | 'ltr' }>(), { type: 'bar', dir: 'rtl' })
const uid = useId()
const headingId = `norato-chart-heading-${uid}`
const summaryId = `norato-chart-summary-${uid}`
const tableId = `norato-chart-data-${uid}`
const plot = { left: 39, top: 13, width: 481, height: 198 }
const issue = computed(() => getChartDataIssue(props.categories, props.series, props.type))
const values = computed(() => props.series.flatMap(series => series.values))
const scale = computed(() => {
  return getChartScale(values.value)
})
const minValue = computed(() => scale.value.min)
const maxValue = computed(() => scale.value.max)
const span = computed(() => Math.max(1, maxValue.value - minValue.value))
const y = (value: number) => plot.top + (maxValue.value - value) / span.value * plot.height
const baseline = computed(() => y(0))
const ticks = computed(() => [maxValue.value, (maxValue.value + minValue.value) / 2, minValue.value])
const pointX = (index: number) => plot.left + (props.categories.length === 1 ? plot.width / 2 : 16 + index * (plot.width - 42) / (props.categories.length - 1))
const seriesColor = (index: number) => `var(--norato-color-chart-series-${index + 1})`
const activeLabel = computed(() => props.directLabel ?? (props.series.length ? { seriesId: props.series[0].id, categoryIndex: props.categories.length - 1 } : undefined))
const directPoint = computed(() => {
  if (props.type === 'donut' || props.type === 'horizontal-bar') return null
  const selected = activeLabel.value
  const series = props.series.find(item => item.id === selected?.seriesId)
  if (!series || selected!.categoryIndex < 0 || selected!.categoryIndex >= props.categories.length) return null
  const value = series.values[selected!.categoryIndex]
  return { x: pointX(selected!.categoryIndex), y: y(value) - 10, text: selected!.text ?? new Intl.NumberFormat('fa-IR').format(value) }
})
const barRects = computed(() => {
  const result: Array<{ x: number; y: number; w: number; h: number; color: string; opacity: number }> = []
  const count = props.categories.length
  const seriesCount = props.type === 'grouped-bar' ? props.series.length : 1
  const categoryWidth = count === 1 ? plot.width : (plot.width - 42) / (count - 1)
  const barWidth = Math.min(27, categoryWidth * 0.3 / seriesCount)
  props.categories.forEach((_, categoryIndex) => {
    const barSeries = props.type === 'grouped-bar' ? props.series : props.series.slice(0, 1)
    barSeries.forEach((item, seriesIndex) => {
      const value = item.values[categoryIndex]
      const endY = y(value)
      const x = pointX(categoryIndex) - (barWidth * barSeries.length) / 2 + seriesIndex * barWidth
      const opacity = props.type === 'bar' && barSeries.length === 1 && categoryIndex !== activeLabel.value?.categoryIndex ? 0.3 : 1
      result.push({ x, y: Math.min(endY, baseline.value), w: Math.max(1, barWidth - 3), h: Math.max(1, Math.abs(baseline.value - endY)), color: seriesColor(seriesIndex), opacity })
    })
  })
  return result
})
const linePoints = (series: NoratoChartSeries) => series.values.map((value, index) => `${pointX(index)},${y(value)}`).join(' ')
const areaPath = (series: NoratoChartSeries) => `${series.values.map((value, index) => `${index ? 'L' : 'M'} ${pointX(index)} ${y(value)}`).join(' ')} L ${pointX(series.values.length - 1)} ${baseline.value} L ${pointX(0)} ${baseline.value} Z`
const horizontalBars = computed(() => props.categories.flatMap((_, index) => {
  const row = plot.height / props.categories.length
  const zeroX = plot.left + (-minValue.value / span.value) * plot.width
  return props.series.map((series, seriesIndex) => {
    const width = (series.values[index] / span.value) * plot.width
    const barHeight = row * .68 / props.series.length
    return { x: Math.min(zeroX, zeroX + width), y: plot.top + index * row + (row - barHeight * props.series.length) / 2 + seriesIndex * barHeight, w: Math.abs(width), h: Math.max(1, barHeight - 2), color: seriesColor(seriesIndex) }
  })
}))
const donutSlices = computed(() => {
  if (issue.value || props.type !== 'donut') return []
  const vals = props.series[0].values
  const total = vals.reduce((sum, value) => sum + value, 0)
  let angle = -Math.PI / 2
  return vals.map((value, index) => {
    const next = angle + value / total * Math.PI * 2
    const r = 62, cx = 272, cy = 122
    const sx = cx + Math.cos(angle) * r, sy = cy + Math.sin(angle) * r
    const ex = cx + Math.cos(next) * r, ey = cy + Math.sin(next) * r
    const large = next - angle > Math.PI ? 1 : 0
    const d = value / total >= .999999 ? '' : `M ${cx} ${cy} L ${sx} ${sy} A ${r} ${r} 0 ${large} 1 ${ex} ${ey} Z`
    const slice = { d, value, color: seriesColor(index), cx, cy, r, dash: `${value / total * 2 * Math.PI * r} ${2 * Math.PI * r}`, offset: -angle / (2 * Math.PI) * (2 * Math.PI * r) }
    angle = next
    return slice
  })
})
const chartSummary = computed(() => `${props.title}. ${props.categories.length} دسته و ${props.series.length} سری. ${issue.value || 'داده‌ها در جدول همراه نمودار موجودند.'}`)
</script>

<template>
  <section class="norato-chart-card" :data-type="type" :dir="dir" :aria-labelledby="headingId" :aria-describedby="summaryId">
    <header class="norato-chart-card__header">
      <div class="norato-chart-card__titles"><h3 :id="headingId">{{ title }}</h3><p v-if="subtitle">{{ subtitle }}</p></div>
      <div v-if="$slots.action" class="norato-chart-card__action"><slot name="action" /></div>
    </header>
    <div class="norato-chart-card__legend" :dir="dir" v-if="type === 'donut' || series.length > 1"><NoratoChartLegendItem v-for="(item,index) in (type === 'donut' ? categories : series.map(item => item.label))" :key="`${item}-${index}`" :label="item" :series="(index % 8 + 1) as 1|2|3|4|5|6|7|8" /></div>
    <p :id="summaryId" class="norato-chart-card__summary">{{ chartSummary }}</p>
    <p v-if="issue" class="norato-chart-card__issue" role="status">{{ issue }}</p>
    <div v-else class="norato-chart-card__plot-wrap" dir="ltr">
      <svg class="norato-chart-card__plot" viewBox="0 0 520 244" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        <template v-if="type !== 'donut'">
          <g v-if="type !== 'horizontal-bar'" class="norato-chart-card__axis">
            <line v-for="(tick,index) in ticks" :key="`grid-${index}`" :x1="plot.left" :x2="plot.left + plot.width" :y1="y(tick)" :y2="y(tick)" />
            <text v-for="(tick,index) in ticks" :key="`tick-${index}`" :x="plot.left - 10" :y="y(tick) + 3" text-anchor="end">{{ new Intl.NumberFormat('fa-IR',{maximumFractionDigits:0}).format(tick) }}</text>
            <text v-for="(category,index) in categories" :key="`cat-${index}`" :x="pointX(index)" y="238" text-anchor="middle">{{ category }}</text>
          </g>
          <g v-else class="norato-chart-card__axis">
            <line v-for="(category,index) in categories" :key="`grid-${index}`" :x1="plot.left" :x2="plot.left + plot.width" :y1="plot.top + (index + 1) * plot.height / categories.length" :y2="plot.top + (index + 1) * plot.height / categories.length" />
            <text v-for="(category,index) in categories" :key="`cat-${index}`" :x="plot.left - 8" :y="plot.top + index * plot.height / categories.length + plot.height / categories.length * .58" text-anchor="end">{{ category }}</text>
          </g>
          <g v-if="type === 'bar' || type === 'grouped-bar'" class="norato-chart-card__marks"><rect v-for="(bar,index) in barRects" :key="`bar-${index}`" :x="bar.x" :y="bar.y" :width="bar.w" :height="bar.h" :fill="bar.color" :fill-opacity="bar.opacity" /></g>
          <g v-else-if="type === 'horizontal-bar'" class="norato-chart-card__marks"><rect v-for="(bar,index) in horizontalBars" :key="`bar-${index}`" :x="bar.x" :y="bar.y" :width="bar.w" :height="bar.h" :fill="bar.color" /></g>
          <g v-else-if="type === 'line'" class="norato-chart-card__marks"><g v-for="(item,index) in series" :key="item.id"><polyline :points="linePoints(item)" :stroke="seriesColor(index)" /><circle class="norato-chart-card__terminal" :cx="pointX(item.values.length - 1)" :cy="y(item.values[item.values.length - 1])" :fill="seriesColor(index)" /></g></g>
          <g v-else-if="type === 'area'" class="norato-chart-card__marks"><path v-for="(item,index) in series" :key="item.id" :d="areaPath(item)" :fill="seriesColor(index)" fill-opacity=".22" /><polyline v-for="(item,index) in series" :key="`line-${item.id}`" :points="linePoints(item)" :stroke="seriesColor(index)" /></g>
          <text v-if="directPoint" class="norato-chart-card__direct-label" :x="directPoint.x" :y="directPoint.y" text-anchor="middle">{{ directPoint.text }}</text>
        </template>
        <g v-else class="norato-chart-card__marks norato-chart-card__donut">
          <template v-for="(slice,index) in donutSlices" :key="`slice-${index}`"><circle v-if="slice.value / series[0].values.reduce((sum,value)=>sum+value,0) > .999999" :cx="slice.cx" :cy="slice.cy" :r="slice.r" fill="none" :stroke="slice.color" stroke-width="25" /><path v-else :d="slice.d" :fill="slice.color" stroke="var(--norato-color-surface-default)" stroke-width="2" /></template>
          <text class="norato-chart-card__donut-total" x="272" y="118" text-anchor="middle">{{ new Intl.NumberFormat('fa-IR').format(series[0].values.reduce((sum,value)=>sum+value,0)) }}</text><text class="norato-chart-card__donut-label" x="272" y="140" text-anchor="middle">مجموع</text>
        </g>
      </svg>
    </div>
    <details class="norato-chart-card__data"><summary>نمایش داده‌های نمودار</summary><div class="norato-chart-card__table-wrap"><table :id="tableId"><caption class="norato-chart-card__table-caption">جدول داده‌های {{ title }}</caption><thead><tr><th scope="col">دسته</th><th v-for="item in series" :key="item.id" scope="col">{{ item.label }}</th></tr></thead><tbody><tr v-for="(category,index) in categories" :key="`${category}-${index}`"><th scope="row">{{ category }}</th><td v-for="item in series" :key="item.id" dir="ltr">{{ item.values[index] }}</td></tr></tbody></table></div></details>
  </section>
</template>
