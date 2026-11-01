<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue'

export type NoratoTimePickerType = 'single' | 'range'
export type NoratoTimePickerVariant = 'columns' | 'columns-12h' | 'wheel' | 'slots' | 'range'
export type NoratoTimeRange = { start: string; end?: string }
export type NoratoTimePickerValue = string | NoratoTimeRange
export type NoratoTimeSlot = { value: string; disabled?: boolean }

const props = withDefaults(defineProps<{
  id: string
  label: string
  modelValue?: NoratoTimePickerValue
  type?: NoratoTimePickerType
  variant?: NoratoTimePickerVariant
  minuteStep?: number
  slots?: (string | NoratoTimeSlot)[]
  size?: 'small' | 'medium' | 'large' | 'xlarge'
  placeholder?: string
  helperText?: string
  errorText?: string
  required?: boolean
  disabled?: boolean
  loading?: boolean
  name?: string
  dir?: 'rtl' | 'ltr'
}>(), { type: 'single', variant: 'columns', minuteStep: 5, size: 'medium', placeholder: 'ساعت را انتخاب کنید', dir: 'rtl' })

const emit = defineEmits<{ 'update:modelValue': [value: NoratoTimePickerValue]; 'open-change': [open: boolean] }>()
const open = ref(false)
const root = ref<HTMLElement>()
const trigger = ref<HTMLInputElement>()
const panel = ref<HTMLElement>()
const panelStyle = ref<Record<string, string>>()
const selectingEnd = ref(false)
const hour = ref(14)
const minute = ref(30)
const disabled = computed(() => Boolean(props.disabled || props.loading))
const isRange = computed(() => props.type === 'range' || props.variant === 'range')
const safeStep = computed(() => Number.isInteger(props.minuteStep) && props.minuteStep > 0 && props.minuteStep <= 60 ? props.minuteStep : 5)
const hourValues = computed(() => props.variant === 'columns-12h' ? Array.from({ length: 12 }, (_, index) => index + 1) : Array.from({ length: 24 }, (_, index) => index))
const minuteValues = computed(() => Array.from({ length: Math.ceil(60 / safeStep.value) }, (_, index) => index * safeStep.value).filter(value => value < 60))
const around = <T,>(values: T[], current: T) => {
  if (props.variant === 'wheel') return values
  const center = Math.max(0, values.indexOf(current))
  return Array.from({ length: 5 }, (_, offset) => values[(center + offset - 2 + values.length) % values.length]!)
}
const visibleHours = computed(() => around(hourValues.value, displayHour.value))
const visibleMinutes = computed(() => around(minuteValues.value, minute.value))
const persian = (value: number) => new Intl.NumberFormat('fa-IR', { useGrouping: false }).format(value)
const validTime = (value: string) => /^(?:[01]\d|2[0-3]):[0-5]\d$/.test(value)
const slots = computed(() => (props.slots ?? ['09:00', '09:30', '10:00', '10:30']).map(slot => typeof slot === 'string' ? { value: slot, disabled: false } : slot).filter(slot => validTime(slot.value)).sort((a, b) => a.value.localeCompare(b.value)))
const modelStart = computed(() => typeof props.modelValue === 'string' ? props.modelValue : props.modelValue?.start ?? '')
const modelEnd = computed(() => typeof props.modelValue === 'string' || !props.modelValue ? '' : props.modelValue.end ?? '')
const formatted = computed(() => isRange.value ? [modelStart.value, modelEnd.value].filter(Boolean).join(' تا ') : modelStart.value)
const descriptionIds = computed(() => [props.helperText && `${props.id}-helper`, props.errorText && `${props.id}-error`].filter(Boolean).join(' ') || undefined)
const serialized = computed(() => `${String(hour.value).padStart(2, '0')}:${String(minute.value).padStart(2, '0')}`)
const displayHour = computed(() => props.variant === 'columns-12h' ? (hour.value % 12 || 12) : hour.value)
const displayPeriod = computed(() => hour.value < 12 ? 'am' : 'pm')
const toTime = (h: number, m: number) => `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`
const fromTime = (value?: string) => {
  if (!value || !validTime(value)) return { hour: 14, minute: 30 }
  const [h, m] = value.split(':').map(Number)
  return { hour: h, minute: Math.floor(m / safeStep.value) * safeStep.value }
}
const setModel = (value: string) => {
  if (!validTime(value)) return
  if (!isRange.value) emit('update:modelValue', value)
  else if (!selectingEnd.value || !modelStart.value) {
    selectingEnd.value = true
    emit('update:modelValue', { start: value })
  } else if (value < modelStart.value) {
    // Keep chronological order when the end handle crosses the start.
    emit('update:modelValue', { start: value, end: modelStart.value })
    selectingEnd.value = false
  } else {
    emit('update:modelValue', { start: modelStart.value, end: value })
    selectingEnd.value = false
  }
}
const selectHour = (value: number) => {
  let next = value
  if (props.variant === 'columns-12h') next = value % 12 + (displayPeriod.value === 'pm' ? 12 : 0)
  hour.value = next
  if (!isRange.value) setModel(toTime(hour.value, minute.value))
}
const selectMinute = (value: number) => { minute.value = value; if (!isRange.value) setModel(toTime(hour.value, minute.value)) }
const selectPeriod = (value: 'am' | 'pm') => { hour.value = hour.value % 12 + (value === 'pm' ? 12 : 0); if (!isRange.value) setModel(toTime(hour.value, minute.value)) }
const selectSlot = (value: string) => { const parsed = fromTime(value); hour.value = parsed.hour; minute.value = parsed.minute; setModel(value) }
const confirmSelection = () => {
  if (!isRange.value) { setModel(toTime(hour.value, minute.value)); closePanel(); return }
  const wasSelectingEnd = selectingEnd.value
  setModel(toTime(hour.value, minute.value))
  if (wasSelectingEnd) closePanel()
}
const openPanel = async () => {
  if (disabled.value) return
  if (open.value) { closePanel(false); return }
  const current = fromTime(modelStart.value)
  hour.value = current.hour; minute.value = current.minute; selectingEnd.value = Boolean(modelStart.value && !modelEnd.value)
  open.value = true; emit('open-change', true)
  await nextTick(); placePanel(); (panel.value?.querySelector<HTMLButtonElement>('[aria-pressed="true"]') ?? panel.value?.querySelector<HTMLButtonElement>('button:not(:disabled)'))?.focus({ preventScroll: true })
}
const closePanel = (restoreFocus = true) => { open.value = false; panelStyle.value = undefined; emit('open-change', false); if (restoreFocus) nextTick(() => trigger.value?.focus({ preventScroll: true })) }
const placePanel = () => {
  if (!panel.value || !root.value) return
  const token = (name: string, fallback: number) => Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue(name)) || fallback
  const anchor = root.value.getBoundingClientRect(), rect = panel.value.getBoundingClientRect()
  const margin = token('--norato-space-3', 12), gap = token('--norato-space-2', 8)
  const maxWidth = token('--norato-time-picker-panel-inline-size', 360), minWidth = token('--norato-time-picker-panel-min-inline-size', 280)
  const width = Math.max(Math.min(minWidth, innerWidth - margin * 2), Math.min(anchor.width, maxWidth, innerWidth - margin * 2))
  const left = Math.min(Math.max(margin, anchor.right - width), innerWidth - width - margin)
  const below = anchor.bottom + gap
  const top = Math.min(Math.max(margin, below + rect.height <= innerHeight - margin ? below : anchor.top - rect.height - gap), innerHeight - rect.height - margin)
  panelStyle.value = { position: 'fixed', top: `${top}px`, left: `${left}px`, width: `${width}px` }
}
const onOutside = (event: Event) => { if (open.value && !root.value?.contains(event.target as Node) && !panel.value?.contains(event.target as Node)) closePanel(false) }
const onFocusOut = (event: FocusEvent) => { const next = event.relatedTarget as Node | null; if (open.value && next && !root.value?.contains(next) && !panel.value?.contains(next)) closePanel(false) }
const onViewport = () => { if (open.value) placePanel() }
const onKeys = (event: KeyboardEvent) => {
  if (event.key === 'Escape') { event.preventDefault(); event.stopPropagation(); closePanel() }
  if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    const target = event.target as HTMLButtonElement
    if (target.dataset.value !== undefined) {
      event.preventDefault()
      const list = target.parentElement?.querySelectorAll<HTMLButtonElement>('button[data-value]:not(:disabled)')
      if (!list?.length) return
      const index = Array.from(list).indexOf(target), delta = event.key === 'ArrowDown' ? 1 : -1
      list[(index + delta + list.length) % list.length]?.focus()
    }
  }
}
watch(() => props.modelValue, value => { const time = typeof value === 'string' ? value : value?.start; if (time && validTime(time)) { const parsed = fromTime(time); hour.value = parsed.hour; minute.value = parsed.minute } }, { immediate: true })
watch(() => [props.variant, props.type], () => { selectingEnd.value = false; if (open.value) nextTick(placePanel) })
if (typeof window !== 'undefined') { window.addEventListener('pointerdown', onOutside, true); window.addEventListener('click', onOutside, true) }
if (typeof window !== 'undefined') { window.addEventListener('resize', onViewport); window.addEventListener('scroll', onViewport, true) }
onBeforeUnmount(() => { if (typeof window !== 'undefined') { window.removeEventListener('pointerdown', onOutside, true); window.removeEventListener('click', onOutside, true); window.removeEventListener('resize', onViewport); window.removeEventListener('scroll', onViewport, true) } })
</script>

<template>
  <div ref="root" class="norato-time-picker" :class="{ 'is-invalid': errorText, 'is-open': open, 'is-disabled': disabled, 'is-loading': loading }" :dir="dir" :data-size="size" :data-type="type" :data-variant="variant" @focusout="onFocusOut">
    <label class="norato-time-picker__label" :for="`${id}-value`">{{ label }}<span v-if="required" aria-hidden="true"> *</span></label>
    <div class="norato-time-picker__control" :aria-busy="loading ? 'true' : undefined">
      <input ref="trigger" :id="`${id}-value`" class="norato-time-picker__input" type="text" :value="formatted" :placeholder="placeholder" readonly :disabled="disabled" :required="required" :aria-invalid="errorText ? 'true' : undefined" :aria-describedby="descriptionIds" :aria-expanded="open" :aria-controls="open ? `${id}-panel` : undefined" aria-haspopup="dialog" dir="ltr" @click="openPanel" @keydown.enter.prevent="openPanel" @keydown.space.prevent="openPanel" />
      <button class="norato-time-picker__trigger" type="button" :aria-label="open ? 'بستن انتخاب ساعت' : 'باز کردن انتخاب ساعت'" :aria-expanded="open" :aria-controls="open ? `${id}-panel` : undefined" aria-haspopup="dialog" :disabled="disabled" @click="openPanel"><span v-if="loading" class="norato-time-picker__spinner" aria-hidden="true" /><svg v-else aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3.5 2"/></svg></button>
      <input v-if="name" type="hidden" :name="name" :value="isRange ? `${modelStart}/${modelEnd}` : modelStart" :disabled="disabled" />
    </div>
    <span v-if="loading" class="sr-only" role="status">در حال بارگذاری ساعت</span>
    <p v-if="helperText" :id="`${id}-helper`" class="norato-time-picker__message">{{ helperText }}</p>
    <p v-if="errorText" :id="`${id}-error`" class="norato-time-picker__message norato-time-picker__error" role="alert">{{ errorText }}</p>
    <section v-if="open" :id="`${id}-panel`" ref="panel" class="norato-time-picker__panel" :style="panelStyle" role="dialog" :aria-label="`${label} — انتخاب ساعت`" @keydown="onKeys">
      <header class="norato-time-picker__panel-header"><strong>{{ isRange ? 'انتخاب بازهٔ زمانی' : 'انتخاب ساعت' }}</strong><output dir="ltr" aria-live="polite">{{ serialized }}</output></header>
      <p v-if="isRange" class="norato-time-picker__range-hint" role="status" aria-live="polite">{{ selectingEnd ? 'ساعت پایان را انتخاب کنید' : modelEnd ? 'برای تغییر بازه، ساعت شروع را انتخاب کنید' : 'ساعت شروع را انتخاب کنید' }}</p>
      <div v-if="variant === 'slots'" class="norato-time-picker__slots" role="group" aria-label="زمان‌های در دسترس">
        <button v-for="slot in slots" :key="slot.value" type="button" data-value :disabled="disabled || slot.disabled" :aria-pressed="modelStart === slot.value" @click="selectSlot(slot.value)">{{ slot.value }}</button>
        <p v-if="!slots.length" class="norato-time-picker__empty">زمانی موجود نیست.</p>
      </div>
      <div v-else class="norato-time-picker__columns" :class="{ 'is-wheel': variant === 'wheel' }" role="group" aria-label="ستون‌های ساعت و دقیقه">
        <div class="norato-time-picker__column" role="group" aria-label="ساعت"><span>ساعت</span><div class="norato-time-picker__options" role="group" aria-label="ساعت">
          <button v-for="item in visibleHours" :key="item" type="button" data-value :aria-pressed="displayHour === item" :aria-label="`ساعت ${persian(item)}`" @click="selectHour(item)">{{ persian(item) }}</button>
        </div></div>
        <div class="norato-time-picker__column" role="group" aria-label="دقیقه"><span>دقیقه</span><div class="norato-time-picker__options" role="group" aria-label="دقیقه">
          <button v-for="item in visibleMinutes" :key="item" type="button" data-value :aria-pressed="minute === item" :aria-label="`دقیقه ${persian(item)}`" @click="selectMinute(item)">{{ persian(item) }}</button>
        </div></div>
        <div v-if="variant === 'columns-12h'" class="norato-time-picker__column norato-time-picker__period" role="group" aria-label="پیش از ظهر یا پس از ظهر"><span>بازه</span><div class="norato-time-picker__options"><button v-for="item in (['am','pm'] as const)" :key="item" type="button" data-value :aria-pressed="displayPeriod === item" @click="selectPeriod(item)">{{ item === 'am' ? 'ق.ظ' : 'ب.ظ' }}</button></div></div>
      </div>
      <footer class="norato-time-picker__panel-footer"><button type="button" class="norato-time-picker__done" @click="confirmSelection">{{ isRange ? selectingEnd ? 'ثبت پایان' : 'ثبت شروع' : 'تأیید' }}</button><button type="button" class="norato-time-picker__cancel" @click="closePanel()">بستن</button></footer>
    </section>
  </div>
</template>
