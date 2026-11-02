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
const describedBy = computed(() => props.error ? `${props.id}-error` : undefined)
const valueStyle = (value: number) => ({ insetInlineStart: `calc(${((value - props.min) / (props.max - props.min)) * 100}% - var(--norato-space-4))` })
function update(payload: number[] | undefined) {
  const next = payload ?? values.value
  if (props.type === 'range') emit('update:modelValue', [next[0] ?? props.min, next[1] ?? props.max])
  else emit('update:modelValue', next[0] ?? props.min)
}
</script>

<template>
  <div class="norato-range-field" :class="[`norato-range-field--${size}`, { 'norato-range-field--disabled': disabled, 'norato-range-field--invalid': error }]" dir="rtl">
    <div class="norato-range-field__label-row"><span :id="`${id}-label`">{{ label }}</span></div>
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
        @update:model-value="update"
      >
        <SliderTrack class="norato-range__track"><span class="norato-range__visual-rail"><SliderRange class="norato-range__fill" /></span></SliderTrack>
        <SliderThumb v-for="(value, index) in values" :id="`${id}-thumb-${index}`" :key="index" class="norato-range__thumb" :aria-label="type === 'range' ? `${label}، ${index === 0 ? 'حداقل انتخاب' : 'حداکثر انتخاب'}` : label" :aria-disabled="disabled ? 'true' : undefined" :aria-invalid="error ? 'true' : undefined" :aria-describedby="describedBy"><span class="norato-range-field__thumb-value" aria-hidden="true">{{ format(value) }}</span></SliderThumb>
      </SliderRoot>
    </div>
    <div class="norato-range-field__bounds"><span>{{ minLabel || format(min) }}</span><span>{{ maxLabel || format(max) }}</span></div>
    <p v-if="error" :id="`${id}-error`" class="norato-range-field__error" role="alert">{{ error }}</p>
  </div>
</template>
