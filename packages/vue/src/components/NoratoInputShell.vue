<script setup lang="ts">
import { computed } from 'vue'
import type { NoratoInputFieldProps } from './inputTypes'

const props = withDefaults(defineProps<NoratoInputFieldProps>(), {
  dir: 'rtl',
  size: 'medium',
  labelPlacement: 'outside',
})

const describedBy = computed(() => [
  props.helperText && `${props.id}-helper`,
  props.errorText && `${props.id}-error`,
  props.successText && `${props.id}-success`,
  props.loading && `${props.id}-loading`,
].filter(Boolean).join(' ') || undefined)
</script>

<template>
  <div
    class="norato-input-field"
    :data-size="size"
    :data-label-placement="labelPlacement"
    :data-invalid="Boolean(errorText) || undefined"
    :data-disabled="Boolean(disabled || loading) || undefined"
    :data-readonly="Boolean(readOnly) || undefined"
    :aria-busy="loading || undefined"
    :dir="dir === 'ltr' ? 'rtl' : dir"
  >
    <label v-if="labelPlacement === 'outside'" class="norato-input-field__label" :for="id">
      {{ label }}<span v-if="required" aria-hidden="true"> *</span>
    </label>
    <div class="norato-input-field__control">
      <label v-if="labelPlacement === 'inside'" class="norato-input-field__floating-label" :for="id">
        {{ label }}<span v-if="required" aria-hidden="true"> *</span>
      </label>
      <slot name="leading" />
      <slot name="control" :describedby="describedBy" :invalid="Boolean(errorText)" />
      <slot name="trailing" />
      <span v-if="loading" class="norato-input-field__loading" aria-hidden="true" />
    </div>
    <slot />
    <p v-if="loading" class="norato-input-field__message" :id="`${id}-loading`" role="status" aria-live="polite">در حال بارگذاری</p>
    <p v-if="helperText" class="norato-input-field__message" :id="`${id}-helper`">{{ helperText }}</p>
    <p v-if="errorText" class="norato-input-field__message norato-input-field__error" :id="`${id}-error`" role="alert">{{ errorText }}</p>
    <p v-if="successText && !errorText" class="norato-input-field__message norato-input-field__success" :id="`${id}-success`" role="status">{{ successText }}</p>
  </div>
</template>
