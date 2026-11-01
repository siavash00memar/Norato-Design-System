<script setup lang="ts">
import NoratoInputShell from './NoratoInputShell.vue'
import type { NoratoInputFieldProps } from './inputTypes'

const props = withDefaults(defineProps<NoratoInputFieldProps & { autocomplete?: string; maxlength?: number }>(), {
  dir: 'rtl', size: 'medium', labelPlacement: 'outside',
})
const emit = defineEmits<{ 'update:modelValue': [value: string] }>()
</script>

<template>
  <NoratoInputShell
    :id="id" :label="label" :helper-text="helperText" :error-text="errorText" :success-text="successText"
    :required="required" :disabled="disabled" :loading="loading" :read-only="readOnly" :dir="dir"
    :size="size" :label-placement="labelPlacement"
  >
    <template #leading><slot name="leading" /></template>
    <template #trailing><slot name="trailing" /></template>
    <template #control="{ describedby, invalid }">
      <input
        :id="id"
        class="norato-input-field__input"
        type="text"
        :dir="dir"
        :value="modelValue ?? ''"
        :placeholder="placeholder"
        :autocomplete="autocomplete"
        :maxlength="maxlength"
        :disabled="disabled || loading"
        :readonly="readOnly"
        :required="required"
        :aria-invalid="invalid || undefined"
        :aria-describedby="describedby"
        @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      />
    </template>
  </NoratoInputShell>
</template>
