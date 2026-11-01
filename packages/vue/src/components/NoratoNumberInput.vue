<script setup lang="ts">
import NoratoInputShell from './NoratoInputShell.vue'
import type { NoratoInputFieldProps } from './inputTypes'
const props = withDefaults(defineProps<NoratoInputFieldProps & { min?: number; max?: number; step?: number; presentation?: 'stepper' | 'stacked' }>(), { dir: 'ltr', size: 'medium', labelPlacement: 'outside', step: 1, presentation: 'stepper' })
const emit = defineEmits<{ 'update:modelValue': [value: string] }>()
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
  const current = props.modelValue === '' || props.modelValue === undefined ? (direction > 0 ? props.min ?? 0 : props.max ?? 0) : Number(props.modelValue)
  const next = current + direction * props.step
  emit('update:modelValue', String(Math.min(props.max ?? Infinity, Math.max(props.min ?? -Infinity, next))))
}
</script>
<template><NoratoInputShell v-bind="props" dir="rtl"><template #leading><div class="norato-number-stepper" :data-presentation="presentation" dir="ltr"><button class="norato-input-field__action" type="button" aria-label="افزایش مقدار" :disabled="disabled || loading || readOnly || (max !== undefined && Number(modelValue) >= max)" @click="stepBy(1)">+</button><button class="norato-input-field__action" type="button" aria-label="کاهش مقدار" :disabled="disabled || loading || readOnly || (min !== undefined && Number(modelValue) <= min)" @click="stepBy(-1)">−</button></div></template><template #control="{ describedby, invalid }"><input :id="id" class="norato-input-field__input" type="number" dir="ltr" inputmode="decimal" :value="modelValue ?? ''" :placeholder="placeholder" :min="min" :max="max" :step="step" :disabled="disabled || loading" :readonly="readOnly" :required="required" :aria-invalid="invalid || undefined" :aria-describedby="describedby" @input="update" /></template></NoratoInputShell></template>
