<script setup lang="ts">
import { computed, nextTick, ref } from 'vue'
import type { NoratoInputFieldProps } from './inputTypes'
const props = withDefaults(defineProps<Omit<NoratoInputFieldProps, 'modelValue' | 'labelPlacement'> & { modelValue?: string; length?: 4 | 5 | 6 }>(), { dir: 'ltr', size: 'medium', length: 6 })
const emit = defineEmits<{ 'update:modelValue': [value: string] }>()
const fields = ref<HTMLInputElement[]>([])
const digits = computed(() => Array.from({ length: props.length }, (_, i) => props.modelValue?.[i] ?? ''))
function write(index: number, raw: string) {
  const normalized = raw.replace(/[۰-۹]/g, digit => String('۰۱۲۳۴۵۶۷۸۹'.indexOf(digit))).replace(/[٠-٩]/g, digit => String('٠١٢٣٤٥٦٧٨٩'.indexOf(digit)))
  const chars = normalized.replace(/\D/g, '').slice(0, props.length)
  const next = digits.value.slice()
  if (chars.length > 1) {
    for (let i = 0; i < chars.length && index + i < next.length; i++) next[index + i] = chars[i]!
    emit('update:modelValue', next.join(''))
    fields.value[Math.min(index + chars.length, props.length - 1)]?.focus()
    return
  }
  next[index] = chars.slice(-1)
  emit('update:modelValue', next.join(''))
  if (chars) fields.value[Math.min(index + 1, props.length - 1)]?.focus()
}
function keydown(index: number, event: KeyboardEvent) {
  if (event.key === 'ArrowLeft') { event.preventDefault(); fields.value[Math.max(index - 1, 0)]?.focus() }
  if (event.key === 'ArrowRight') { event.preventDefault(); fields.value[Math.min(index + 1, props.length - 1)]?.focus() }
  if (event.key === 'Backspace' && !digits.value[index]) { fields.value[Math.max(index - 1, 0)]?.focus() }
}
async function paste(event: ClipboardEvent, index: number) {
  const text = event.clipboardData?.getData('text') ?? ''
  if (text.replace(/[۰-۹٠-٩]/g, '0').match(/\d{2,}/)) { event.preventDefault(); write(index, text); await nextTick() }
}
</script>
<template><div class="norato-input-field" dir="rtl" :data-size="size" :data-invalid="Boolean(errorText) || undefined" :data-success="Boolean(successText && !errorText) || undefined" :data-disabled="Boolean(disabled || loading) || undefined" :aria-busy="loading || undefined"><label class="norato-input-field__label" :for="`${id}-0`">{{ label }}<span v-if="required" aria-hidden="true"> *</span></label><div class="norato-otp" dir="ltr"><input v-for="(_, index) in length" :id="`${id}-${index}`" :key="index" :ref="el => { if (el) fields[index] = el as HTMLInputElement }" class="norato-otp__cell" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="1" :value="digits[index]" :disabled="disabled || loading" :readonly="readOnly" :required="required && index === 0" :aria-label="`${label}، رقم ${index + 1}`" :aria-invalid="errorText ? 'true' : undefined" :aria-describedby="[helperText && `${id}-helper`, errorText && `${id}-error`, successText && `${id}-success`, loading && `${id}-loading`].filter(Boolean).join(' ') || undefined" @input="write(index, ($event.target as HTMLInputElement).value)" @keydown="keydown(index, $event)" @paste="paste($event, index)" /><span v-if="loading" class="norato-input-field__loading" aria-hidden="true" /></div><p v-if="loading" class="norato-input-field__message" :id="`${id}-loading`" role="status" aria-live="polite">در حال بارگذاری</p><p v-if="helperText" class="norato-input-field__message" :id="`${id}-helper`">{{ helperText }}</p><p v-if="errorText" class="norato-input-field__message norato-input-field__error" :id="`${id}-error`" role="alert">{{ errorText }}</p><p v-if="successText && !errorText" class="norato-input-field__message norato-input-field__success" :id="`${id}-success`" role="status">{{ successText }}</p></div></template>
