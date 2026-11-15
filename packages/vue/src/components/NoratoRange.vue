<script setup lang="ts">
import { computed } from 'vue'
import { SliderRange, SliderRoot, SliderThumb, SliderTrack } from 'reka-ui'

type RangeValue = number | [number, number]
const props = withDefaults(defineProps<{
  id: string
  modelValue: RangeValue
  label: string
  min: number
  max: number
  step?: number
  type?: 'single' | 'range'
  size?: 'small' | 'medium'
  disabled?: boolean
  error?: string
  minLabel?: string
  maxLabel?: string
}>(), { step: 1, type: 'single', size: 'medium' })

const emit = defineEmits<{ 'update:modelValue': [value: RangeValue] }>()
const values = computed(() => Array.isArray(props.modelValue) ? props.modelValue : [props.modelValue])
const format = (value: number) => new Intl.NumberFormat('fa-IR', { maximumFractionDigits: 3 }).format(value)
const displayValue = computed(() => values.value.map(format).join(' – '))
const describedBy = computed(() => props.error ? `${props.id}-error` : undefined)
function update(payload: number[] | undefined) {
  const next = payload ?? values.value
  if (props.type === 'range') emit('update:modelValue', [next[0] ?? props.min, next[1] ?? props.max])
  else emit('update:modelValue', next[0] ?? props.min)
}
function handleRangeBoundaryKeydown(event: KeyboardEvent) {
  if (props.type !== 'range' || (event.key !== 'Home' && event.key !== 'End')) return

  const root = event.currentTarget as HTMLElement
  const thumb = (event.target as HTMLElement).closest<HTMLElement>('[role="slider"]')
  const thumbs = Array.from(root.querySelectorAll<HTMLElement>('[role="slider"]'))
  const index = thumb ? thumbs.indexOf(thumb) : -1
  if (index < 0 || values.value[index] === undefined) return

  event.preventDefault()
  event.stopPropagation()

  const precision = Math.max(
    ...[props.min, props.max, props.step].map(value => String(value).split('.')[1]?.length ?? 0),
  )
  const factor = 10 ** precision
  const minUnits = Math.round(props.min * factor)
  const stepUnits = Math.max(1, Math.round(props.step * factor))
  const roundUnits = (units: number) => Number((units / factor).toFixed(precision))
  const currentValues = values.value
  let nextValue: number

  if (event.key === 'Home') {
    if (index === 0) nextValue = props.min
    else {
      const lowerUnits = Math.round((currentValues[index - 1] + props.step) * factor)
      const stepIndex = Math.ceil((lowerUnits - minUnits) / stepUnits)
      nextValue = roundUnits(minUnits + stepIndex * stepUnits)
    }
  } else if (index === currentValues.length - 1) nextValue = props.max
  else {
    const upperUnits = Math.round((currentValues[index + 1] - props.step) * factor)
    const stepIndex = Math.floor((upperUnits - minUnits) / stepUnits)
    nextValue = roundUnits(minUnits + stepIndex * stepUnits)
  }

  if (nextValue === currentValues[index]) return
  const next = [...currentValues]
  next[index] = nextValue
  emit('update:modelValue', next as [number, number])
}
</script>

<template>
  <div class="norato-range-field" :class="[`norato-range-field--${size}`, { 'norato-range-field--disabled': disabled, 'norato-range-field--invalid': error }]" dir="rtl">
    <div class="norato-range-field__label-row"><span :id="`${id}-label`">{{ label }}</span><span class="norato-range-field__value" dir="ltr" aria-hidden="true">{{ displayValue }}</span></div>
    <div class="norato-range-field__control">
      <SliderRoot
        :id="id"
        class="norato-range"
        :data-size="size"
        :model-value="values"
        :min="min"
        :max="max"
        :step="step"
        :disabled="disabled"
        dir="rtl"
        :aria-label="label"
        :aria-labelledby="`${id}-label`"
        :aria-describedby="describedBy"
        :aria-invalid="error ? 'true' : undefined"
        :min-steps-between-thumbs="type === 'range' ? 1 : 0"
        @keydown.capture="handleRangeBoundaryKeydown"
        @update:model-value="update"
      >
        <SliderTrack class="norato-range__track"><span class="norato-range__visual-rail"><SliderRange class="norato-range__fill" /></span></SliderTrack>
        <SliderThumb v-for="(value, index) in values" :id="`${id}-thumb-${index}`" :key="index" class="norato-range__thumb" :aria-label="type === 'range' ? `${label}، ${index === 0 ? 'حداقل انتخاب' : 'حداکثر انتخاب'}` : label" :aria-disabled="disabled ? 'true' : undefined" :aria-invalid="error ? 'true' : undefined" :aria-describedby="describedBy" />
      </SliderRoot>
    </div>
    <div class="norato-range-field__bounds"><span>{{ minLabel || format(min) }}</span><span>{{ maxLabel || format(max) }}</span></div>
    <p v-if="error" :id="`${id}-error`" class="norato-range-field__error" role="alert">{{ error }}</p>
  </div>
</template>
