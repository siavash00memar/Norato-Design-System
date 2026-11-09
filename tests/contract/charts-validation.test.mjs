import test from 'node:test'
import assert from 'node:assert/strict'
import { getChartDataIssue } from '../../packages/vue/src/components/chartValidation.ts'
import { getChartScale } from '../../packages/vue/src/components/chartGeometry.ts'

const categories = ['فروردین', 'اردیبهشت', 'خرداد']
const oneSeries = [{ id: 'online', label: 'آنلاین', values: [12, 18, 9] }]

test('accepts all six chart types with valid ordered data', () => {
  for (const type of ['bar', 'grouped-bar', 'horizontal-bar', 'line', 'area', 'donut']) {
    assert.equal(getChartDataIssue(categories, oneSeries, type), '', type)
  }
})

test('accepts negative values outside donut charts', () => {
  const signed = [{ ...oneSeries[0], values: [-12, 18, -9] }]
  for (const type of ['bar', 'horizontal-bar', 'line', 'area']) {
    assert.equal(getChartDataIssue(categories, signed, type), '', type)
  }
})

test('rejects missing categories, missing series, and more than eight series', () => {
  assert.match(getChartDataIssue([], oneSeries, 'line'), /دست‌کم یک دسته/)
  assert.match(getChartDataIssue(categories, [], 'line'), /یک تا هشت سری/)
  const tooMany = Array.from({ length: 9 }, (_, index) => ({ ...oneSeries[0], id: `series-${index}` }))
  assert.match(getChartDataIssue(categories, tooMany, 'line'), /یک تا هشت سری/)
})

test('rejects duplicate IDs, mismatched lengths, and non-finite points', () => {
  assert.match(getChartDataIssue(categories, [oneSeries[0], oneSeries[0]], 'line'), /شناسهٔ هر سری/)
  assert.match(getChartDataIssue(categories, [{ ...oneSeries[0], values: [1, 2] }], 'line'), /عدد معتبر/)
  assert.match(getChartDataIssue(categories, [{ ...oneSeries[0], values: [1, Number.NaN, 2] }], 'line'), /عدد معتبر/)
})

test('rejects invalid donut totals and multiple donut series', () => {
  assert.match(getChartDataIssue(categories, [{ ...oneSeries[0], values: [0, 0, 0] }], 'donut'), /دونات/)
  assert.match(getChartDataIssue(categories, [{ ...oneSeries[0], values: [1, -1, 2] }], 'donut'), /دونات/)
  assert.match(getChartDataIssue(categories, [{ ...oneSeries[0], values: [Number.MAX_VALUE, Number.MAX_VALUE, 1] }], 'donut'), /دونات/)
  const twoSeries = [oneSeries[0], { ...oneSeries[0], id: 'in-person' }]
  assert.match(getChartDataIssue(categories, twoSeries, 'donut'), /دونات/)
})

test('rejects a finite but unrepresentable chart range before SVG geometry is produced', () => {
  const extreme = [{ ...oneSeries[0], values: [-Number.MAX_VALUE, Number.MAX_VALUE, 0] }]
  assert.match(getChartDataIssue(categories, extreme, 'line'), /محدودهٔ مقادیر/)
})

test('simple bar types require one series while grouped bars retain multiple series', () => {
  const twoSeries = [oneSeries[0], { ...oneSeries[0], id: 'in-person' }]
  assert.match(getChartDataIssue(categories, twoSeries, 'bar'), /میله‌ای ساده/)
  assert.match(getChartDataIssue(categories, twoSeries, 'horizontal-bar'), /میله‌ای ساده/)
  assert.equal(getChartDataIssue(categories, twoSeries, 'grouped-bar'), '')
})

test('adds one readable tick above a maximum value that lands on the axis ceiling', () => {
  assert.deepEqual(getChartScale([0, 100]), { min: 0, max: 150 })
  assert.deepEqual(getChartScale([34, 58, 42, 72, 51, 66]), { min: 0, max: 80 })
})
