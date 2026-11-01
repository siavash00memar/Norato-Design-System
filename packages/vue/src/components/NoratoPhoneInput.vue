<script setup lang="ts">
import NoratoInputShell from './NoratoInputShell.vue'
import type { NoratoInputFieldProps } from './inputTypes'
const props = withDefaults(defineProps<NoratoInputFieldProps & { callingCode?: string }>(), { dir: 'ltr', size: 'medium', labelPlacement: 'outside', callingCode: '+98' })
const emit = defineEmits<{ 'update:modelValue': [value: string] }>()
</script>
<template><NoratoInputShell v-bind="props" dir="rtl"><template #control="{ describedby, invalid }"><input :id="id" class="norato-input-field__input" type="tel" dir="ltr" inputmode="tel" autocomplete="tel-national" :value="modelValue ?? ''" :placeholder="placeholder" :disabled="disabled || loading" :readonly="readOnly" :required="required" :aria-invalid="invalid || undefined" :aria-describedby="describedby" @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)" /></template><template #trailing><span class="norato-input-field__prefix" dir="ltr">{{ callingCode }}</span></template></NoratoInputShell></template>
