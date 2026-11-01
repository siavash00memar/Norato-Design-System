<script setup lang="ts">
import { computed } from 'vue'
import NoratoInputShell from './NoratoInputShell.vue'
import type { NoratoInputFieldProps } from './inputTypes'
const props = withDefaults(defineProps<NoratoInputFieldProps & { currency?: string }>(), { dir: 'ltr', size: 'medium', labelPlacement: 'outside', currency: 'تومان' })
const emit = defineEmits<{ 'update:modelValue': [value: string] }>()
const displayValue = computed(() => {
  const raw = props.modelValue ?? ''
  return /^\d+$/.test(raw) ? new Intl.NumberFormat('fa-IR').format(BigInt(raw)) : ''
})
const amountWords = computed(() => {
  const value = Number(props.modelValue)
  if (!Number.isSafeInteger(value) || value < 0) return ''
  if (!value) return props.modelValue ? `صفر ${props.currency}` : ''
  const ones = ['','یک','دو','سه','چهار','پنج','شش','هفت','هشت','نه']
  const teens = ['ده','یازده','دوازده','سیزده','چهارده','پانزده','شانزده','هفده','هجده','نوزده']
  const tens = ['','','بیست','سی','چهل','پنجاه','شصت','هفتاد','هشتاد','نود']
  const hundreds = ['','صد','دویست','سیصد','چهارصد','پانصد','ششصد','هفتصد','هشتصد','نهصد']
  const scales = ['', 'هزار', 'میلیون', 'میلیارد', 'هزار میلیارد', 'میلیون میلیارد']
  const words = (n: number) => { const p: string[] = []; if (n >= 100) { p.push(hundreds[Math.floor(n / 100)]!); n %= 100 } if (n >= 10 && n < 20) { p.push(teens[n - 10]!); n = 0 } else if (n >= 20) { p.push(tens[Math.floor(n / 10)]!); n %= 10 } if (n) p.push(ones[n]!); return p.join(' و ') }
  const groups: string[] = []; let rest = Math.floor(value); let i = 0
  while (rest) { const group = rest % 1000; if (group) groups.unshift(`${words(group)}${scales[i] ? ` ${scales[i]}` : ''}`); rest = Math.floor(rest / 1000); i++ }
  return `${groups.join(' و ')} ${props.currency}`
})
function update(event: Event) { const normalized = (event.target as HTMLInputElement).value.replace(/[۰-۹]/g, digit => String('۰۱۲۳۴۵۶۷۸۹'.indexOf(digit))).replace(/[٠-٩]/g, digit => String('٠١٢٣٤٥٦٧٨٩'.indexOf(digit))); const raw = normalized.replace(/\D/g, ''); emit('update:modelValue', raw) }
</script>
<template><NoratoInputShell v-bind="props" dir="rtl"><template #control="{ describedby, invalid }"><input :id="id" class="norato-input-field__input" type="text" dir="ltr" inputmode="numeric" :value="displayValue" :placeholder="placeholder" :disabled="disabled || loading" :readonly="readOnly" :required="required" :aria-invalid="invalid || undefined" :aria-describedby="describedby" @input="update" /></template><template #trailing><span class="norato-input-field__suffix">{{ currency }}</span></template><p v-if="amountWords" class="norato-input-field__message">{{ amountWords }}</p></NoratoInputShell></template>
