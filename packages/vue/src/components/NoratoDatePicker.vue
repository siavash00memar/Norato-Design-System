<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, ref, shallowRef, watch } from 'vue'
import { CalendarDate, getDayOfWeek } from '@internationalized/date'
import { calendarMonthCells, formatJalaliDate, jalaliCalendar, parseJalaliDate, serializeJalaliDate, todayJalaliDate } from '../date-picker-calendar'
import NoratoSelect from './NoratoSelect.vue'

export type NoratoDatePickerType = 'single' | 'range' | 'range-presets' | 'date-time' | 'month' | 'year' | 'wheel'
export type NoratoDateRange = { start?: string; end?: string }
export type NoratoDateTime = { date: string; time: string }
export type NoratoDatePickerValue = string | NoratoDateRange | NoratoDateTime

const props = withDefaults(defineProps<{
  id: string
  label: string
  modelValue?: NoratoDatePickerValue
  type?: NoratoDatePickerType
  size?: 'small' | 'medium'
  placeholder?: string
  helperText?: string
  errorText?: string
  disabled?: boolean
  loading?: boolean
  required?: boolean
  holidays?: string[]
  disabledDates?: string[]
  name?: string
  min?: string
  max?: string
  dir?: 'rtl' | 'ltr'
}>(), { type: 'single', size: 'medium', placeholder: 'تاریخ را انتخاب کنید', dir: 'rtl' })

const emit = defineEmits<{ 'update:modelValue': [value: NoratoDatePickerValue]; 'open-change': [open: boolean] }>()
const open = ref(false)
const trigger = ref<HTMLButtonElement>()
const panel = ref<HTMLElement>()
const panelPosition = ref<Record<string, string>>()
const today = todayJalaliDate()
const initialDate = computed(() => {
  const model = props.modelValue
  const candidate = typeof model === 'string' && props.type !== 'year' && props.type !== 'month' ? model : model && typeof model !== 'string' && 'date' in model ? model.date : model && typeof model !== 'string' && 'start' in model ? model.start : undefined
  if (props.type === 'year' && typeof model === 'string' && /^\d{4}$/.test(model)) return new CalendarDate(jalaliCalendar, Number(model), 1, 1)
  if (props.type === 'month' && typeof model === 'string' && /^\d{4}-\d{2}$/.test(model)) return new CalendarDate(jalaliCalendar, Number(model.slice(0, 4)), Number(model.slice(5)), 1)
  return parseJalaliDate(candidate) ?? today
})
const page = shallowRef(initialDate.value)
const focusDate = shallowRef(initialDate.value)
const rangeStart = ref<string>()
const wheelYear = ref(today.year)
const wheelMonth = ref(today.month)
const wheelDay = ref(today.day)
const hour = ref(12)
const minute = ref(0)
const disabled = computed(() => Boolean(props.disabled || props.loading))
const descriptionIds = computed(() => [props.helperText && `${props.id}-helper`, props.errorText && `${props.id}-error`].filter(Boolean).join(' ') || undefined)
const monthViews = computed(() => Array.from({ length: props.type === 'range' || props.type === 'range-presets' ? 2 : 1 }, (_, index) => {
  const month = page.value.add({ months: index })
  return { key: `${month.year}-${month.month}`, year: month.year, month: month.month, label: formatJalaliDate(serializeJalaliDate(month.set({ day: 1 })), { month: 'long', year: 'numeric' }), days: calendarMonthCells(month.year, month.month) }
}))
const weekdays = ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج']
const currentMonthLabel = computed(() => formatJalaliDate(serializeJalaliDate(new CalendarDate(jalaliCalendar, page.value.year, page.value.month, 1)), { month: 'long', year: 'numeric' }))
const monthNames = Array.from({ length: 12 }, (_, i) => formatJalaliDate(serializeJalaliDate(new CalendarDate(jalaliCalendar, today.year, i + 1, 1)), { month: 'long' }))
const yearOptions = computed(() => Array.from({ length: 121 }, (_, i) => today.year - 100 + i))
const dayOptions = computed(() => Array.from({ length: jalaliCalendar.getDaysInMonth(new CalendarDate(jalaliCalendar, wheelYear.value, wheelMonth.value, 1)) }, (_, i) => i + 1))
const dateFormatter = new Intl.DateTimeFormat('fa-IR-u-ca-persian', { dateStyle: 'full', timeZone: 'UTC' })
const persianNumber = (value: number) => new Intl.NumberFormat('fa-IR', { useGrouping: false }).format(value)
const wheelYearOptions = computed(() => yearOptions.value.map((year) => ({ value: String(year), label: persianNumber(year) })))
const wheelMonthOptions = computed(() => monthNames.map((month, index) => ({ value: String(index + 1), label: month })))
const wheelDayOptions = computed(() => dayOptions.value.map((day) => ({ value: String(day), label: persianNumber(day) })))
const timeHourOptions = Array.from({ length: 24 }, (_, hour) => ({ value: String(hour), label: persianNumber(hour) }))
const timeMinuteOptions = Array.from({ length: 60 }, (_, minute) => ({ value: String(minute), label: persianNumber(minute) }))
const dateFromModel = (value?: NoratoDatePickerValue) => {
  if (!value) return undefined
  if (typeof value === 'string') return value
  if ('date' in value) return value.date
  if ('start' in value) return value.start
  return undefined
}
const formattedValue = computed(() => {
  const value = props.modelValue
  if (!value) return ''
  if (typeof value === 'string') {
    if (props.type === 'month') {
      const [year, month] = value.split('-').map(Number)
      return Number.isFinite(month) ? formatJalaliDate(`${year}-${String(month).padStart(2, '0')}-01`, { month: 'long', year: 'numeric' }) : value
    }
    if (props.type === 'year') return persianNumber(Number(value))
    return formatJalaliDate(value)
  }
  if ('start' in value) return [formatJalaliDate(value.start), formatJalaliDate(value.end)].filter(Boolean).join(' تا ')
  if ('date' in value) return `${formatJalaliDate(value.date)}، ${value.time.split(':').map((part) => persianNumber(Number(part))).join(':')}`
  return ''
})
const formValue = computed(() => {
  const value = props.modelValue
  if (typeof value === 'string') return value
  if (value && 'start' in value) return `${value.start ?? ''}/${value.end ?? ''}`
  if (value && 'date' in value) return `${value.date}T${value.time}`
  return ''
})
const isSelected = (date: CalendarDate) => {
  const selected = parseJalaliDate(dateFromModel(props.modelValue))
  return selected?.compare(date) === 0
}
const isRangeDate = (date: CalendarDate) => {
  if (!props.modelValue || typeof props.modelValue === 'string' || !('start' in props.modelValue)) return false
  const start = parseJalaliDate(props.modelValue.start)
  const end = parseJalaliDate(props.modelValue.end)
  return Boolean(start && end && date.compare(start) >= 0 && date.compare(end) <= 0)
}
const isDisabled = (date: CalendarDate) => {
  const value = serializeJalaliDate(date)
  const min = parseJalaliDate(props.min)
  const max = parseJalaliDate(props.max)
  return disabled.value || (min ? date.compare(min) < 0 : false) || (max ? date.compare(max) > 0 : false) || Boolean(props.disabledDates?.includes(value))
}
const isHoliday = (date: CalendarDate) => date.toDate('UTC').getUTCDay() === 5 || Boolean(props.holidays?.includes(serializeJalaliDate(date)))
const openPanel = async () => {
  if (disabled.value) return
  open.value = !open.value
  emit('open-change', open.value)
  if (open.value) {
    page.value = initialDate.value
    focusDate.value = initialDate.value
    if (props.modelValue && typeof props.modelValue !== 'string' && 'start' in props.modelValue) rangeStart.value = undefined
    await nextTick()
    placePanel()
    focusActiveCell()
  } else { panelPosition.value = undefined; trigger.value?.focus() }
}
const closePanel = (restoreFocus = true) => {
  open.value = false
  panelPosition.value = undefined
  rangeStart.value = undefined
  emit('open-change', false)
  if (restoreFocus) nextTick(() => trigger.value?.focus())
}
const focusActiveCell = () => (panel.value?.querySelector<HTMLButtonElement>('[data-focus-date="true"]:not(:disabled)') ?? panel.value?.querySelector<HTMLButtonElement>('[role="gridcell"]:not(:disabled)'))?.focus({ preventScroll: true })
const placePanel = () => {
  if (!panel.value || !trigger.value) return
  const anchor = trigger.value.closest('.norato-date-picker')?.querySelector<HTMLElement>('.norato-date-picker__control') ?? trigger.value
  const triggerRect = anchor.getBoundingClientRect()
  const panelRect = panel.value.getBoundingClientRect()
  const margin = 12
  let top = triggerRect.bottom + 8
  if (top + panelRect.height > window.innerHeight - margin) {
    const above = triggerRect.top - panelRect.height - 8
    if (above >= margin) top = above
    else {
      const overflow = top + panelRect.height - (window.innerHeight - margin)
      const scrollable = document.documentElement.scrollHeight - window.innerHeight - window.scrollY
      if (overflow > 0 && scrollable > 1) {
        window.scrollBy(0, Math.min(overflow + margin, scrollable))
        window.requestAnimationFrame(placePanel)
        return
      }
      top = Math.max(margin, window.innerHeight - panelRect.height - margin)
    }
  }
  const rtl = props.dir !== 'ltr'
  const preferredLeft = rtl ? triggerRect.right - panelRect.width : triggerRect.left
  const left = Math.min(Math.max(margin, preferredLeft), window.innerWidth - panelRect.width - margin)
  panelPosition.value = { position: 'fixed', top: `${top}px`, left: `${left}px` }
}
const selectDate = (date: CalendarDate) => {
  if (isDisabled(date)) return
  const value = serializeJalaliDate(date)
  if (props.type === 'range' || props.type === 'range-presets') {
    if (!rangeStart.value) {
      rangeStart.value = value
      emit('update:modelValue', { start: value })
      return
    }
    const start = parseJalaliDate(rangeStart.value)!
    const ordered = date.compare(start) < 0 ? { start: value, end: rangeStart.value } : { start: rangeStart.value, end: value }
    emit('update:modelValue', ordered)
    rangeStart.value = undefined
    closePanel()
    return
  }
  if (props.type === 'date-time') { emit('update:modelValue', { date: value, time: `${String(hour.value).padStart(2, '0')}:${String(minute.value).padStart(2, '0')}` }); return }
  else if (props.type === 'month') emit('update:modelValue', `${date.year}-${String(date.month).padStart(2, '0')}`)
  else if (props.type === 'year') emit('update:modelValue', String(date.year))
  else emit('update:modelValue', value)
  closePanel()
}
const setMonth = (month: number) => {
  wheelMonth.value = month
  wheelDay.value = Math.min(wheelDay.value, jalaliCalendar.getDaysInMonth(new CalendarDate(jalaliCalendar, wheelYear.value, month, 1)))
  if (props.type === 'month') { emit('update:modelValue', `${wheelYear.value}-${String(month).padStart(2, '0')}`); closePanel() }
  else if (props.type === 'wheel') emit('update:modelValue', serializeJalaliDate(new CalendarDate(jalaliCalendar, wheelYear.value, wheelMonth.value, wheelDay.value)))
}
const navigateYear = (year: number) => { wheelYear.value = year }
const setYear = (year: number) => {
  wheelYear.value = year
  wheelDay.value = Math.min(wheelDay.value, jalaliCalendar.getDaysInMonth(new CalendarDate(jalaliCalendar, year, wheelMonth.value, 1)))
  if (props.type === 'year') { emit('update:modelValue', String(year)); closePanel() }
  else if (props.type === 'wheel') emit('update:modelValue', serializeJalaliDate(new CalendarDate(jalaliCalendar, wheelYear.value, wheelMonth.value, wheelDay.value)))
}
const setWheelDay = (day: number) => {
  wheelDay.value = day
  const value = new CalendarDate(jalaliCalendar, wheelYear.value, wheelMonth.value, day)
  emit('update:modelValue', serializeJalaliDate(value))
}
const choosePreset = (preset: 'week' | 'last-month') => {
  const now = todayJalaliDate()
  if (preset === 'week') {
    const start = now.subtract({ days: getDayOfWeek(now, 'fa-IR') })
    emit('update:modelValue', { start: serializeJalaliDate(start), end: serializeJalaliDate(start.add({ days: 6 })) })
  } else {
    const previous = now.subtract({ months: 1 }).set({ day: 1 })
    const end = previous.add({ months: 1 }).subtract({ days: 1 })
    emit('update:modelValue', { start: serializeJalaliDate(previous), end: serializeJalaliDate(end) })
  }
  closePanel()
}
const movePage = (amount: number) => { page.value = page.value.add({ months: amount }); focusDate.value = page.value.set({ day: Math.min(focusDate.value.day, jalaliCalendar.getDaysInMonth(page.value)) }) }
const moveFocus = (date: CalendarDate) => {
  focusDate.value = date
  if (date.month !== page.value.month || date.year !== page.value.year) page.value = new CalendarDate(jalaliCalendar, date.year, date.month, 1)
  nextTick(focusActiveCell)
}
const onDayKeydown = (event: KeyboardEvent, date: CalendarDate) => {
  const moves: Record<string, number> = { ArrowLeft: 1, ArrowRight: -1, ArrowUp: -7, ArrowDown: 7 }
  if (event.key in moves) {
    event.preventDefault()
    const next = date.add({ days: moves[event.key] })
    moveFocus(next)
  } else if (event.key === 'PageUp' || event.key === 'PageDown') {
    event.preventDefault()
    page.value = page.value.add({ months: event.shiftKey ? (event.key === 'PageUp' ? -12 : 12) : (event.key === 'PageUp' ? -1 : 1) })
    moveFocus(page.value.set({ day: Math.min(date.day, jalaliCalendar.getDaysInMonth(page.value)) }))
  } else if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); selectDate(date) }
  else if (event.key === 'Home' || event.key === 'End') {
    event.preventDefault()
    const offset = getDayOfWeek(date, 'fa-IR')
    moveFocus(event.key === 'Home' ? date.subtract({ days: offset }) : date.add({ days: 6 - offset }))
  } else if (event.key === 'Escape') { event.preventDefault(); closePanel() }
}
const onDocumentPointer = (event: PointerEvent) => {
  if (!open.value) return
  const target = event.target as Element | null
  const ownSelectContent = target?.closest<HTMLElement>('.norato-select__content')
  const selectId = ownSelectContent?.getAttribute('data-norato-select-id') ?? ''
  const isOwnSelect = selectId.startsWith(`${props.id}-wheel-`) || selectId.startsWith(`${props.id}-time-`)
  if (!panel.value?.parentElement?.contains(event.target as Node) && !trigger.value?.contains(event.target as Node) && !isOwnSelect) closePanel(false)
}
const onViewportChange = () => { if (open.value) placePanel() }
watch(() => props.modelValue, (value) => {
  let date = parseJalaliDate(dateFromModel(value))
  if (typeof value === 'string' && props.type === 'year' && /^\d{4}$/.test(value)) date = new CalendarDate(jalaliCalendar, Number(value), 1, 1)
  if (typeof value === 'string' && props.type === 'month' && /^\d{4}-\d{2}$/.test(value)) date = new CalendarDate(jalaliCalendar, Number(value.slice(0, 4)), Number(value.slice(5)), 1)
  if (date) { page.value = date; focusDate.value = date; wheelYear.value = date.year; wheelMonth.value = date.month; wheelDay.value = date.day }
  if (value && typeof value !== 'string' && 'date' in value) {
    const [h, m] = value.time.split(':').map(Number)
    if (Number.isFinite(h)) hour.value = h
    if (Number.isFinite(m)) minute.value = m
  }
}, { immediate: true })
watch(() => props.type, () => nextTick(() => { if (open.value) placePanel() }))
watch([hour, minute], () => {
  const value = dateFromModel(props.modelValue)
  if (props.type === 'date-time' && value) emit('update:modelValue', { date: value, time: `${String(hour.value).padStart(2, '0')}:${String(minute.value).padStart(2, '0')}` })
})
if (typeof document !== 'undefined') document.addEventListener('pointerdown', onDocumentPointer)
if (typeof window !== 'undefined') { window.addEventListener('resize', onViewportChange); window.addEventListener('scroll', onViewportChange, true) }
onBeforeUnmount(() => { if (typeof document !== 'undefined') document.removeEventListener('pointerdown', onDocumentPointer); if (typeof window !== 'undefined') { window.removeEventListener('resize', onViewportChange); window.removeEventListener('scroll', onViewportChange, true) } })
</script>

<template>
  <div class="norato-date-picker" :class="{ 'is-invalid': errorText, 'is-open': open, 'is-disabled': disabled, 'is-loading': loading }" :dir="dir" :data-size="size" :data-type="type">
    <label class="norato-date-picker__label" :for="`${id}-value`">{{ label }}<span v-if="required" aria-hidden="true"> *</span></label>
    <div class="norato-date-picker__control" :aria-busy="loading ? 'true' : undefined">
      <div class="norato-date-picker__value-wrap">
        <input :id="`${id}-value`" class="norato-date-picker__input" type="text" :value="formattedValue" :placeholder="placeholder" readonly :disabled="disabled" :aria-required="required || undefined" :aria-invalid="errorText ? 'true' : undefined" :aria-describedby="descriptionIds" :aria-expanded="open" :aria-controls="open ? `${id}-panel` : undefined" :aria-haspopup="'dialog'" @click="openPanel" @keydown.enter.prevent="openPanel" @keydown.space.prevent="openPanel" />
      </div>
      <button ref="trigger" class="norato-date-picker__trigger" type="button" :aria-label="loading ? 'در حال بارگذاری تقویم' : open ? 'بستن تقویم' : 'باز کردن تقویم'" :aria-expanded="open" :aria-controls="open ? `${id}-panel` : undefined" aria-haspopup="dialog" :disabled="disabled" @click="openPanel">
        <span v-if="loading" class="norato-date-picker__loading" aria-hidden="true" /><svg v-else aria-hidden="true" viewBox="0 0 24 24"><path d="M7 3v3m10-3v3M4.5 9h15M6 5h12a1.5 1.5 0 0 1 1.5 1.5v12A1.5 1.5 0 0 1 18 20H6a1.5 1.5 0 0 1-1.5-1.5v-12A1.5 1.5 0 0 1 6 5Z" /></svg>
      </button>
      <input v-if="name" type="hidden" :name="name" :value="formValue" :disabled="disabled" />
    </div>
    <span v-if="loading" class="sr-only" role="status">در حال بارگذاری تقویم</span>
    <p v-if="helperText" :id="`${id}-helper`" class="norato-date-picker__message">{{ helperText }}</p>
    <p v-if="errorText" :id="`${id}-error`" class="norato-date-picker__message norato-date-picker__error" role="alert">{{ errorText }}</p>
    <section v-if="open" :id="`${id}-panel`" ref="panel" class="norato-date-picker__panel" :style="panelPosition" role="dialog" :aria-label="`${label} — انتخاب تاریخ`" @keydown.esc.stop.prevent="closePanel()">
      <template v-if="type === 'wheel'">
        <p class="norato-date-picker__panel-title">انتخاب تاریخ شمسی</p>
        <div class="norato-date-picker__wheel" role="group" :aria-label="label">
          <NoratoSelect :id="`${id}-wheel-year`" label="سال" :model-value="String(wheelYear)" :options="wheelYearOptions" :dir="dir" size="small" label-placement="inside" @update:model-value="setYear(Number($event))" />
          <NoratoSelect :id="`${id}-wheel-month`" label="ماه" :model-value="String(wheelMonth)" :options="wheelMonthOptions" :dir="dir" size="small" label-placement="inside" @update:model-value="setMonth(Number($event))" />
          <NoratoSelect :id="`${id}-wheel-day`" label="روز" :model-value="String(wheelDay)" :options="wheelDayOptions" :dir="dir" size="small" label-placement="inside" @update:model-value="setWheelDay(Number($event))" />
        </div>
      </template>
      <template v-else-if="type === 'month' || type === 'year'">
        <header class="norato-date-picker__header"><button type="button" aria-label="سال قبل" @click="navigateYear(wheelYear - 1)">‹</button><strong>{{ persianNumber(wheelYear) }}</strong><button type="button" aria-label="سال بعد" @click="navigateYear(wheelYear + 1)">›</button></header>
        <div v-if="type === 'month'" class="norato-date-picker__cells norato-date-picker__months" role="grid" aria-label="ماه‌های سال">
          <button v-for="(month, index) in monthNames" :key="month" type="button" role="gridcell" :aria-selected="wheelMonth === index + 1" :class="{ selected: wheelMonth === index + 1 }" @click="setMonth(index + 1)">{{ month }}</button>
        </div>
        <div v-else class="norato-date-picker__cells norato-date-picker__years" role="grid" aria-label="سال‌ها">
          <button v-for="year in yearOptions.slice(Math.max(0, yearOptions.indexOf(wheelYear) - 5), yearOptions.indexOf(wheelYear) + 7)" :key="year" type="button" role="gridcell" :aria-selected="wheelYear === year" :class="{ selected: wheelYear === year }" @click="setYear(year)">{{ persianNumber(year) }}</button>
        </div>
      </template>
      <template v-else>
        <div v-if="type === 'range-presets'" class="norato-date-picker__presets"><button type="button" @click="choosePreset('week')">این هفته</button><button type="button" @click="choosePreset('last-month')">ماه قبل</button></div>
        <header class="norato-date-picker__header"><button type="button" aria-label="ماه قبل" @click="movePage(-1)">‹</button><strong>{{ type === 'range' || type === 'range-presets' ? 'انتخاب بازهٔ تاریخ' : currentMonthLabel }}</strong><button type="button" aria-label="ماه بعد" @click="movePage(1)">›</button></header>
        <div class="norato-date-picker__month-pair" :class="{ 'is-range': type === 'range' || type === 'range-presets' }">
        <section v-for="month in monthViews" :key="month.key" class="norato-date-picker__month" :aria-label="month.label">
        <div class="norato-date-picker__month-title">{{ month.label }}</div>
        <div class="norato-date-picker__grid" role="grid" :aria-label="`تقویم ${month.label}`">
          <div class="norato-date-picker__week" role="row"><span v-for="day in weekdays" :key="day" role="columnheader">{{ day }}</span></div>
          <div v-for="week in 6" :key="week" class="norato-date-picker__week" role="row">
            <button v-for="date in month.days.slice((week - 1) * 7, week * 7)" :key="serializeJalaliDate(date)" type="button" role="gridcell" :disabled="isDisabled(date)" :data-focus-date="serializeJalaliDate(date) === serializeJalaliDate(focusDate) && date.month === month.month && date.year === month.year" :aria-current="serializeJalaliDate(date) === serializeJalaliDate(today) ? 'date' : undefined" :aria-selected="isSelected(date) || isRangeDate(date)" :aria-label="dateFormatter.format(date.toDate('UTC'))" :class="{ 'is-outside': date.month !== month.month || date.year !== month.year, 'is-today': date.compare(today) === 0, 'is-holiday': isHoliday(date), 'is-selected': isSelected(date) || (rangeStart === serializeJalaliDate(date)), 'is-in-range': isRangeDate(date) }" :tabindex="serializeJalaliDate(date) === serializeJalaliDate(focusDate) && date.month === month.month && date.year === month.year ? 0 : -1" @focus="focusDate = date" @keydown="onDayKeydown($event, date)" @click="selectDate(date)">{{ persianNumber(date.day) }}</button>
          </div>
        </div>
        </section></div>
        <div v-if="type === 'range' || type === 'range-presets'" class="norato-date-picker__range-hint" aria-live="polite">{{ rangeStart ? 'روز پایان بازه را انتخاب کن' : 'روز شروع بازه را انتخاب کن' }}</div>
        <div v-if="type === 'date-time'" class="norato-date-picker__time"><NoratoSelect :id="`${id}-time-hour`" label="ساعت" :model-value="String(hour)" :options="timeHourOptions" :dir="dir" size="small" label-placement="inside" @update:model-value="hour = Number($event)" /><NoratoSelect :id="`${id}-time-minute`" label="دقیقه" :model-value="String(minute)" :options="timeMinuteOptions" :dir="dir" size="small" label-placement="inside" @update:model-value="minute = Number($event)" /><button class="norato-date-picker__confirm" type="button" :disabled="!dateFromModel(modelValue)" @click="closePanel()">ثبت تاریخ و ساعت</button></div>
      </template>
    </section>
  </div>
</template>
