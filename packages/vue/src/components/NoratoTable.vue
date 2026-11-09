<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue'
import './table.css'

export type NoratoTableSize = 'compact' | 'default' | 'comfortable'
export type NoratoTableAlign = 'start' | 'center' | 'end'
export type NoratoTableColumnType = 'checkbox' | 'user' | 'text' | 'number' | 'status' | 'tags' | 'progress' | 'avatar-group' | 'image' | 'link' | 'switch' | 'button' | 'actions' | 'input' | 'select' | 'expand' | 'drag' | 'skeleton' | 'empty' | 'custom'
export type NoratoTableRow = Record<string, unknown>
export type NoratoTableColumn = { key: string; label: string; type?: NoratoTableColumnType; align?: NoratoTableAlign; sortable?: boolean; width?: string }

const props = withDefaults(defineProps<{
  id: string
  label: string
  columns: NoratoTableColumn[]
  rows: NoratoTableRow[]
  rowKey?: string
  size?: NoratoTableSize
  dir?: 'rtl' | 'ltr'
  selectable?: boolean
  searchable?: boolean
  searchPlaceholder?: string
  pageSize?: number
  page?: number
  modelValue?: Array<string | number>
  loading?: boolean
  emptyLabel?: string
  noResultsLabel?: string
  showCount?: boolean
  expandable?: boolean
}>(), {
  rowKey: 'id', size: 'default', dir: 'rtl', selectable: false, searchable: false,
  searchPlaceholder: 'جست‌وجو…', pageSize: 10, loading: false,
  emptyLabel: 'هنوز داده‌ای برای نمایش وجود ندارد.', noResultsLabel: 'نتیجه‌ای پیدا نشد.',
  showCount: true, expandable: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: Array<string | number>]
  'update:page': [value: number]
  sort: [value: { key: string; direction: 'ascending' | 'descending' } | null]
  'row-activate': [row: NoratoTableRow]
}>()

const localSelection = ref<Array<string | number>>([...props.modelValue ?? []])
const selectedKeys = computed(() => props.modelValue ?? localSelection.value)
watch(() => props.modelValue, value => { if (value) localSelection.value = [...value] })
const query = ref('')
const localPage = ref(props.page ?? 1)
watch(() => props.page, value => { if (value !== undefined) localPage.value = value })
const currentPage = computed(() => Math.min(Math.max(1, props.page ?? localPage.value), pageCount.value))
const normalizedPageSize = computed(() => Math.max(1, Math.floor(props.pageSize)))
const sort = ref<{ key: string; direction: 'ascending' | 'descending' } | null>(null)
const expanded = ref(new Set<string | number>())
const generatedRowIds = new WeakMap<NoratoTableRow, number>()
let nextGeneratedRowId = 0

const rowId = (row: NoratoTableRow, index: number): string | number => {
  const key = row[props.rowKey]
  if (typeof key === 'string' || typeof key === 'number') return key
  const existingId = generatedRowIds.get(row)
  if (existingId !== undefined) return `norato-row-${existingId}`
  const generatedId = nextGeneratedRowId++
  generatedRowIds.set(row, generatedId)
  return `norato-row-${generatedId}`
}
function searchableText(value: unknown): string {
  if (value == null) return ''
  if (Array.isArray(value)) return value.map(searchableText).join(' ')
  if (typeof value === 'object') return Object.values(value as Record<string, unknown>).map(searchableText).join(' ')
  return String(value)
}
const filteredRows = computed(() => {
  const needle = query.value.trim().toLocaleLowerCase()
  const filtered = needle ? props.rows.filter(row => searchableText(row).toLocaleLowerCase().includes(needle)) : [...props.rows]
  if (!sort.value) return filtered
  const column = props.columns.find(item => item.key === sort.value?.key)
  if (!column) return filtered
  const direction = sort.value.direction === 'ascending' ? 1 : -1
  return filtered.sort((left, right) => {
    const a = left[column.key], b = right[column.key]
    const leftValue = typeof a === 'number' ? a : searchableText(a).toLocaleLowerCase()
    const rightValue = typeof b === 'number' ? b : searchableText(b).toLocaleLowerCase()
    return (leftValue < rightValue ? -1 : leftValue > rightValue ? 1 : 0) * direction
  })
})
const pageCount = computed(() => Math.max(1, Math.ceil(filteredRows.value.length / normalizedPageSize.value)))
const columnSpan = computed(() => props.columns.length + Number(props.selectable) + Number(props.expandable))
const visibleRows = computed(() => {
  const start = (currentPage.value - 1) * normalizedPageSize.value
  return filteredRows.value.slice(start, start + normalizedPageSize.value)
})
const emptySource = computed(() => props.rows.length === 0)
const firstItem = computed(() => filteredRows.value.length ? (currentPage.value - 1) * normalizedPageSize.value + 1 : 0)
const lastItem = computed(() => Math.min(currentPage.value * normalizedPageSize.value, filteredRows.value.length))
const allVisibleSelected = computed(() => visibleRows.value.length > 0 && visibleRows.value.every(row => selectedKeys.value.includes(rowId(row, 0))))
const someVisibleSelected = computed(() => visibleRows.value.some(row => selectedKeys.value.includes(rowId(row, 0))) && !allVisibleSelected.value)

watch([query, pageCount], () => { setPage(1) })
function setPage(value: number) {
  const next = Math.min(pageCount.value, Math.max(1, value))
  localPage.value = next
  emit('update:page', next)
}
function setSelected(value: Array<string | number>) {
  localSelection.value = value
  emit('update:modelValue', value)
}
function toggleRow(row: NoratoTableRow, index: number) {
  const key = rowId(row, (currentPage.value - 1) * normalizedPageSize.value + index)
  setSelected(selectedKeys.value.includes(key) ? selectedKeys.value.filter(item => item !== key) : [...selectedKeys.value, key])
}
function toggleVisible() {
  if (allVisibleSelected.value) {
    const visible = new Set(visibleRows.value.map(row => rowId(row, 0)))
    setSelected(selectedKeys.value.filter(key => !visible.has(key)))
  } else {
    setSelected([...new Set([...selectedKeys.value, ...visibleRows.value.map(row => rowId(row, 0))])])
  }
}
function toggleSort(column: NoratoTableColumn) {
  if (!column.sortable) return
  sort.value = sort.value?.key !== column.key ? { key: column.key, direction: 'ascending' } : sort.value.direction === 'ascending' ? { key: column.key, direction: 'descending' } : null
  emit('sort', sort.value)
}
function toggleExpanded(row: NoratoTableRow, index: number) {
  const key = rowId(row, (currentPage.value - 1) * normalizedPageSize.value + index)
  const next = new Set(expanded.value)
  if (next.has(key)) next.delete(key); else next.add(key)
  expanded.value = next
}
function cellText(value: unknown): string {
  if (value == null) return '—'
  if (Array.isArray(value)) return value.map(item => typeof item === 'object' && item ? String((item as Record<string, unknown>).label ?? '') : String(item)).filter(Boolean).join('، ')
  if (typeof value === 'object') return String((value as Record<string, unknown>).label ?? (value as Record<string, unknown>).name ?? '—')
  return String(value)
}
function statusTone(value: unknown): string {
  const text = String(value ?? '').toLocaleLowerCase()
  if (/فعال|موفق|تکمیل|انجام|active|success|complete/.test(text)) return 'success'
  if (/مرخص|انتظار|درحال|معلق|pending|waiting/.test(text)) return 'warning'
  if (/خطا|لغو|رد|error|danger|cancel/.test(text)) return 'danger'
  return 'neutral'
}
function progressValue(value: unknown): number {
  const number = Number(value)
  return Number.isFinite(number) ? Math.min(100, Math.max(0, number)) : 0
}
const selectAll = ref<HTMLInputElement | null>(null)
watch([someVisibleSelected, allVisibleSelected], () => { if (selectAll.value) selectAll.value.indeterminate = someVisibleSelected.value })
const previousPageButton = ref<HTMLButtonElement | null>(null)
const nextPageButton = ref<HTMLButtonElement | null>(null)
async function movePage(direction: -1 | 1) {
  const activatedButton = direction < 0 ? previousPageButton.value : nextPageButton.value
  const shouldRestoreFocus = typeof document !== 'undefined' && document.activeElement === activatedButton
  setPage(currentPage.value + direction)
  if (!shouldRestoreFocus) return
  await nextTick()
  if (activatedButton?.disabled) {
    const availableButton = direction < 0 ? nextPageButton.value : previousPageButton.value
    if (availableButton && !availableButton.disabled) availableButton.focus()
  }
}
</script>

<template>
  <section class="norato-table" :class="`norato-table--${size}`" :dir="dir" :aria-labelledby="`${id}-label`" :data-loading="loading || undefined">
    <header class="norato-table__toolbar">
      <div class="norato-table__heading"><h3 :id="`${id}-label`">{{ label }}</h3><span v-if="showCount" class="norato-table__count">{{ filteredRows.length.toLocaleString('fa-IR') }}</span></div>
      <div class="norato-table__tools">
        <label v-if="searchable" class="norato-table__search"><span class="sr-only">جست‌وجو در {{ label }}</span><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.5"/><path d="m16 16 4.5 4.5"/></svg><input v-model="query" type="search" :placeholder="searchPlaceholder" /></label>
        <div v-if="selectedKeys.length" class="norato-table__bulk" aria-live="polite"><slot name="bulk-actions" :selected-keys="selectedKeys" :clear="() => setSelected([])"><span>{{ selectedKeys.length.toLocaleString('fa-IR') }} مورد انتخاب شد</span><button type="button" @click="setSelected([])">پاک‌کردن</button></slot></div>
        <slot name="actions" />
      </div>
    </header>
    <div class="norato-table__scroll" :aria-busy="loading ? 'true' : undefined">
      <table :aria-label="label" :aria-describedby="`${id}-range`">
        <thead><tr>
          <th v-if="selectable" class="norato-table__select-cell" scope="col"><input ref="selectAll" type="checkbox" aria-label="انتخاب همهٔ ردیف‌های این صفحه" :checked="allVisibleSelected" :disabled="loading || !visibleRows.length" @change="toggleVisible" /></th>
          <th v-for="column in columns" :key="column.key" scope="col" :aria-sort="sort?.key === column.key ? sort.direction : column.sortable ? 'none' : undefined" :class="`is-${column.align || 'start'}`" :style="{ inlineSize: column.width }">
            <button v-if="column.sortable" class="norato-table__sort" type="button" :disabled="loading" :aria-label="`مرتب‌سازی بر اساس ${column.label}`" @click="toggleSort(column)"><span>{{ column.label }}</span><svg viewBox="0 0 16 16" aria-hidden="true" :data-direction="sort?.key === column.key ? sort.direction : 'none'"><path d="m4 6 4-4 4 4M4 10l4 4 4-4"/></svg></button>
            <span v-else>{{ column.label }}</span>
          </th>
          <th v-if="expandable" class="norato-table__expand-cell" scope="col"><span class="sr-only">جزئیات</span></th>
        </tr></thead>
        <tbody v-if="loading"><tr><td :colspan="columnSpan"><span class="norato-table__loading" role="status"><span aria-hidden="true" />در حال بارگذاری</span></td></tr></tbody>
        <tbody v-else-if="visibleRows.length">
          <template v-for="(row, rowIndex) in visibleRows" :key="rowId(row, (currentPage - 1) * pageSize + rowIndex)">
            <tr :data-selected="selectedKeys.includes(rowId(row, (currentPage - 1) * pageSize + rowIndex)) || undefined" @dblclick="emit('row-activate', row)">
              <td v-if="selectable" class="norato-table__select-cell" data-label="انتخاب"><input type="checkbox" :aria-label="`انتخاب ردیف ${rowIndex + 1}`" :checked="selectedKeys.includes(rowId(row, (currentPage - 1) * pageSize + rowIndex))" :disabled="loading" @change="toggleRow(row, rowIndex)" /></td>
              <td v-for="column in columns" :key="column.key" :class="[`is-${column.align || 'start'}`, `is-${column.type || 'text'}`]" :data-label="column.label">
                <slot :name="`cell-${column.key}`" :row="row" :column="column" :value="row[column.key]">
                  <slot name="cell" :row="row" :column="column" :value="row[column.key]">
                    <span v-if="column.type === 'status'" class="norato-table__status" :data-tone="statusTone(row[column.key])"><i aria-hidden="true" />{{ cellText(row[column.key]) }}</span>
                    <span v-else-if="column.type === 'user'" class="norato-table__user"><span class="norato-table__avatar" aria-hidden="true">{{ cellText(typeof row[column.key] === 'object' && row[column.key] ? (row[column.key] as Record<string, unknown>).name : row[column.key]).slice(0, 1) }}</span><span><strong>{{ cellText(typeof row[column.key] === 'object' && row[column.key] ? (row[column.key] as Record<string, unknown>).name : row[column.key]) }}</strong><small v-if="typeof row[column.key] === 'object' && row[column.key]">{{ cellText((row[column.key] as Record<string, unknown>).description) }}</small></span></span>
                    <span v-else-if="column.type === 'tags'" class="norato-table__tags"><span v-for="tag in Array.isArray(row[column.key]) ? row[column.key] : []" :key="cellText(tag)">{{ cellText(tag) }}</span></span>
                    <span v-else-if="column.type === 'image' && (typeof row[column.key] === 'string' || typeof row[column.key] === 'object' && row[column.key] && typeof (row[column.key] as Record<string, unknown>).src === 'string')" class="norato-table__image"><img :src="typeof row[column.key] === 'string' ? String(row[column.key]) : String((row[column.key] as Record<string, unknown>).src)" :alt="typeof row[column.key] === 'object' && row[column.key] ? String((row[column.key] as Record<string, unknown>).alt ?? '') : ''" loading="lazy" /></span>
                    <span v-else-if="column.type === 'progress'" class="norato-table__progress" role="progressbar" :aria-label="column.label" :aria-valuenow="progressValue(row[column.key])" aria-valuemin="0" aria-valuemax="100"><span><i :style="{ inlineSize: `${progressValue(row[column.key])}%` }" /></span><b>{{ progressValue(row[column.key]).toLocaleString('fa-IR') }}٪</b></span>
                    <a v-else-if="column.type === 'link' && typeof row[`${column.key}Href`] === 'string'" :href="String(row[`${column.key}Href`])"><span>{{ cellText(row[column.key]) }}</span><span aria-hidden="true">↗</span></a>
                    <span v-else-if="column.type === 'empty'" aria-hidden="true">—</span>
                    <span v-else :dir="column.type === 'number' ? 'ltr' : undefined" :class="{ 'norato-table__numeric': column.type === 'number' }">{{ cellText(row[column.key]) }}</span>
                  </slot>
                </slot>
              </td>
              <td v-if="expandable" class="norato-table__expand-cell" data-label="جزئیات"><button type="button" :disabled="loading" :aria-expanded="expanded.has(rowId(row, (currentPage - 1) * pageSize + rowIndex))" :aria-label="expanded.has(rowId(row, (currentPage - 1) * pageSize + rowIndex)) ? 'بستن جزئیات ردیف' : 'نمایش جزئیات ردیف'" @click="toggleExpanded(row, rowIndex)"><svg viewBox="0 0 20 20" aria-hidden="true"><path d="m6 8 4 4 4-4"/></svg></button></td>
            </tr>
            <tr v-if="expandable && expanded.has(rowId(row, (currentPage - 1) * pageSize + rowIndex))" class="norato-table__detail-row"><td :colspan="columnSpan"><slot name="row-detail" :row="row">{{ cellText(row.detail) }}</slot></td></tr>
          </template>
        </tbody>
        <tbody v-else><tr><td :colspan="columnSpan"><div class="norato-table__empty" role="status"><strong>{{ emptySource ? emptyLabel : noResultsLabel }}</strong><slot name="empty" /></div></td></tr></tbody>
      </table>
    </div>
    <span class="sr-only" :id="`${id}-range`">{{ firstItem.toLocaleString('fa-IR') }} تا {{ lastItem.toLocaleString('fa-IR') }} از {{ filteredRows.length.toLocaleString('fa-IR') }} ردیف</span>
    <footer v-if="pageCount > 1" class="norato-table__footer"><span class="norato-table__range">{{ firstItem.toLocaleString('fa-IR') }}–{{ lastItem.toLocaleString('fa-IR') }} از {{ filteredRows.length.toLocaleString('fa-IR') }}</span><nav class="norato-table__pagination" aria-label="صفحه‌بندی جدول"><button ref="previousPageButton" type="button" aria-label="صفحهٔ قبل" :disabled="currentPage <= 1" @click="movePage(-1)"><svg viewBox="0 0 20 20" aria-hidden="true"><path d="m12 4-6 6 6 6"/></svg></button><span aria-current="page" aria-live="polite">{{ currentPage.toLocaleString('fa-IR') }} / {{ pageCount.toLocaleString('fa-IR') }}</span><button ref="nextPageButton" type="button" aria-label="صفحهٔ بعد" :disabled="currentPage >= pageCount" @click="movePage(1)"><svg viewBox="0 0 20 20" aria-hidden="true"><path d="m8 4 6 6-6 6"/></svg></button></nav></footer>
  </section>
</template>
