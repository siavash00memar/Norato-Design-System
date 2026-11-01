<script setup lang="ts">
import { ref, watchEffect } from 'vue'

type CheckboxValue = boolean | 'indeterminate'
const props = withDefaults(defineProps<{
  id: string
  label: string
  modelValue?: CheckboxValue
  description?: string
  disabled?: boolean
  required?: boolean
  size?: 16 | 20
  errorText?: string
}>(), { modelValue: false, size: 20 })
const emit = defineEmits<{ 'update:modelValue': [value: CheckboxValue] }>()
const input = ref<HTMLInputElement>()
watchEffect(() => { if (input.value) input.value.indeterminate = props.modelValue === 'indeterminate' })
const describedBy = () => [props.description && `${props.id}-description`, props.errorText && `${props.id}-error`].filter(Boolean).join(' ') || undefined
const update = (event: Event) => emit('update:modelValue', (event.target as HTMLInputElement).checked)
</script>

<template>
  <div class="norato-checkbox" :data-size="size" :data-invalid="errorText ? '' : undefined" :data-disabled="disabled ? '' : undefined" dir="rtl">
    <label class="norato-checkbox__row" :for="id">
      <input :id="id" ref="input" class="norato-checkbox__input" type="checkbox" :checked="modelValue === true" :disabled="disabled" :required="required" :aria-required="required ? 'true' : undefined" :aria-checked="modelValue === 'indeterminate' ? 'mixed' : undefined" :aria-invalid="errorText ? 'true' : undefined" :aria-describedby="describedBy()" @change="update" />
      <span class="norato-checkbox__copy"><span class="norato-checkbox__label">{{ label }}<span v-if="required" aria-hidden="true"> *</span></span><span v-if="description" :id="`${id}-description`" class="norato-checkbox__description">{{ description }}</span></span>
    </label>
    <p v-if="errorText" :id="`${id}-error`" class="norato-checkbox__error" role="alert">{{ errorText }}</p>
  </div>
</template>
