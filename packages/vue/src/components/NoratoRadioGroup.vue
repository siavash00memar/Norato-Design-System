<script setup lang="ts">
import { computed } from 'vue'

type RadioOption = { value: string; label: string; description?: string; disabled?: boolean }

const props = withDefaults(defineProps<{
  id: string
  label: string
  modelValue?: string
  options: RadioOption[]
  description?: string
  disabled?: boolean
  required?: boolean
  requiredMessage?: string
  size?: 16 | 20
  errorText?: string
  hideLabel?: boolean
}>(), { size: 20 })

const emit = defineEmits<{ 'update:modelValue': [value: string | undefined] }>()
const requiredOption = computed(() => props.options.find(option => !option.disabled)?.value)
const describedBy = (option: RadioOption) => [
  props.description && `${props.id}-description`,
  option.description && `${props.id}-${option.value}-description`,
  (props.errorText || props.requiredMessage) && `${props.id}-error`,
].filter(Boolean).join(' ') || undefined
</script>

<template>
  <fieldset class="norato-radio-group" :data-size="size" :data-disabled="disabled ? '' : undefined" :aria-invalid="errorText || requiredMessage ? 'true' : undefined" :aria-describedby="[description && `${id}-description`, (errorText || requiredMessage) && `${id}-error`].filter(Boolean).join(' ') || undefined" :disabled="disabled" dir="rtl">
    <legend :class="{ 'sr-only': hideLabel }">{{ label }}<span v-if="required" aria-hidden="true"> *</span></legend>
    <p v-if="description" :id="`${id}-description`" class="norato-radio-group__description">{{ description }}</p>
    <label v-for="(option, index) in options" :key="option.value" class="norato-radio" :for="`${id}-${index}`">
      <input :id="`${id}-${index}`" class="norato-radio__input" type="radio" :name="id" :value="option.value" :checked="modelValue === option.value" :disabled="disabled || option.disabled" :required="required && !disabled && option.value === requiredOption" :aria-invalid="errorText || requiredMessage ? 'true' : undefined" :aria-describedby="describedBy(option)" @change="emit('update:modelValue', option.value)" />
      <span class="norato-radio__copy"><span class="norato-radio__label">{{ option.label }}</span><span v-if="option.description" :id="`${id}-${option.value}-description`" class="norato-radio__option-description">{{ option.description }}</span></span>
    </label>
    <p v-if="errorText || requiredMessage" :id="`${id}-error`" class="norato-radio-group__error" role="alert">{{ errorText || requiredMessage }}</p>
  </fieldset>
</template>
