<script setup lang="ts">
import { computed } from 'vue'
import { SwitchRoot, SwitchThumb } from 'reka-ui'

const props = withDefaults(defineProps<{
  id: string
  modelValue: boolean
  label: string
  description?: string
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  errorText?: string
}>(), { size: 'medium' })

const emit = defineEmits<{ 'update:modelValue': [value: boolean] }>()
const describedBy = computed(() => [props.description && `${props.id}-description`, props.errorText && `${props.id}-error`].filter(Boolean).join(' ') || undefined)
</script>

<template>
  <div class="norato-switch-field" :data-disabled="disabled ? '' : undefined" :data-invalid="errorText ? '' : undefined" dir="rtl">
    <div class="norato-switch-field__copy">
      <span :id="`${id}-label`" class="norato-switch-field__label">{{ label }}</span>
      <span v-if="description" :id="`${id}-description`" class="norato-switch-field__description">{{ description }}</span>
    </div>
    <SwitchRoot :id="id" class="norato-switch" :data-size="size" :model-value="modelValue" :aria-labelledby="`${id}-label`" :aria-describedby="describedBy" :aria-invalid="errorText ? 'true' : undefined" :disabled="disabled" @update:model-value="emit('update:modelValue', $event)">
      <span class="norato-switch__track" aria-hidden="true"><SwitchThumb class="norato-switch__knob" /></span>
    </SwitchRoot>
    <p v-if="errorText" :id="`${id}-error`" class="norato-switch-field__error" role="alert">{{ errorText }}</p>
  </div>
</template>
