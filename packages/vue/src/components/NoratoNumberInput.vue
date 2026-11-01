<script setup lang="ts">
import NoratoInputShell from './NoratoInputShell.vue'
import type { NoratoInputFieldProps } from './inputTypes'
const props = withDefaults(defineProps<NoratoInputFieldProps & { min?: number; max?: number; step?: number; presentation?: 'stepper' | 'stacked' }>(), { dir: 'ltr', size: 'medium', labelPlacement: 'outside', step: 1, presentation: 'stepper' })
const emit = defineEmits<{ 'update:modelValue': [value: string] }>()
function decimalPlaces(value: number) {
  const [coefficient, exponent = '0'] = value.toString().toLowerCase().split('e')
  return Math.max(0, (coefficient?.split('.')[1]?.length ?? 0) - Number(exponent))
}
function scaledInteger(value: number, precision: number) {
  const [coefficient, exponent = '0'] = value.toString().toLowerCase().split('e')
  const negative = coefficient?.startsWith('-') ?? false
  const unsigned = negative ? coefficient!.slice(1) : coefficient!
  const [whole = '0', fraction = ''] = unsigned.split('.')
  const digits = BigInt(`${whole}${fraction}` || '0')
  const shift = precision - fraction.length + Number(exponent)
  const scaled = shift >= 0 ? digits * 10n ** BigInt(shift) : digits / 10n ** BigInt(-shift)
  return negative ? -scaled : scaled
}
function decimalString(value: bigint, precision: number) {
  const negative = value < 0n
  const digits = (negative ? -value : value).toString().padStart(precision + 1, '0')
  if (precision === 0) return `${negative ? '-' : ''}${digits}`
  const integer = digits.slice(0, -precision)
  const fraction = digits.slice(-precision).replace(/0+$/, '')
  return `${negative ? '-' : ''}${integer}${fraction ? `.${fraction}` : ''}`
}
function update(event: Event) {
  const input = event.target as HTMLInputElement
  if (input.value === '') { emit('update:modelValue', ''); return }
  const value = Number(input.value)
  if (!Number.isFinite(value)) return
  if ((props.min !== undefined && value < props.min) || (props.max !== undefined && value > props.max)) {
    input.value = props.modelValue ?? ''
    return
  }
  emit('update:modelValue', input.value)
}
function stepBy(direction: 1 | -1) {
  const fallback = direction > 0 ? props.min ?? 0 : props.max ?? 0
  const candidate = props.modelValue === '' || props.modelValue === undefined ? fallback : Number(props.modelValue)
  const current = Number.isFinite(candidate) ? candidate : fallback
  const step = Number.isFinite(props.step) && props.step > 0 ? props.step : 1
  const precision = Math.max(decimalPlaces(current), decimalPlaces(step), props.min === undefined ? 0 : decimalPlaces(props.min), props.max === undefined ? 0 : decimalPlaces(props.max))
  let next = scaledInteger(current, precision) + BigInt(direction) * scaledInteger(step, precision)
  if (props.min !== undefined) next = next < scaledInteger(props.min, precision) ? scaledInteger(props.min, precision) : next
  if (props.max !== undefined) next = next > scaledInteger(props.max, precision) ? scaledInteger(props.max, precision) : next
  emit('update:modelValue', decimalString(next, precision))
}
</script>
<template><NoratoInputShell v-bind="props" dir="rtl"><template #leading><div class="norato-number-stepper" :data-presentation="presentation" dir="ltr"><button class="norato-input-field__action" type="button" aria-label="افزایش مقدار" :disabled="disabled || loading || readOnly || (max !== undefined && Number(modelValue) >= max)" @click="stepBy(1)">+</button><button class="norato-input-field__action" type="button" aria-label="کاهش مقدار" :disabled="disabled || loading || readOnly || (min !== undefined && Number(modelValue) <= min)" @click="stepBy(-1)">−</button></div></template><template #control="{ describedby, invalid }"><input :id="id" class="norato-input-field__input" type="number" dir="ltr" inputmode="decimal" :value="modelValue ?? ''" :placeholder="placeholder" :min="min" :max="max" :step="step" :disabled="disabled || loading" :readonly="readOnly" :required="required" :aria-invalid="invalid || undefined" :aria-describedby="describedby" @input="update" /></template></NoratoInputShell></template>
