<script setup lang="ts">
export type NoratoChipMode = 'filter' | 'input'
export type NoratoChipSize = 'small' | 'medium' | 'large' | 'xlarge'

const props = withDefaults(defineProps<{
  label: string
  mode?: NoratoChipMode
  modelValue?: boolean
  disabled?: boolean
  size?: NoratoChipSize
  dir?: 'rtl' | 'ltr'
}>(), { mode: 'filter', modelValue: false, disabled: false, size: 'medium', dir: 'rtl' })

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  remove: [label: string]
}>()

const toggle = () => {
  if (!props.disabled && props.mode === 'filter') emit('update:modelValue', !props.modelValue)
}
const remove = () => {
  if (!props.disabled && props.mode === 'input') emit('remove', props.label)
}
</script>

<template>
  <button
    v-if="mode === 'filter'"
    class="norato-chip"
    type="button"
    data-mode="filter"
    :data-size="size"
    :data-selected="modelValue ? '' : undefined"
    :data-disabled="disabled ? '' : undefined"
    :dir="dir"
    :disabled="disabled"
    :aria-pressed="modelValue"
    @click="toggle"
  >
    <span class="norato-chip__surface">
      <span v-if="modelValue" class="norato-chip__leading-icon" aria-hidden="true"><svg viewBox="0 0 16 16"><path d="m3.5 8 3 3 6-6" /></svg></span>
      <span v-else-if="$slots.leadingIcon" class="norato-chip__leading-icon" aria-hidden="true"><slot name="leadingIcon" /></span>
      <span class="norato-chip__label">{{ label }}</span>
    </span>
  </button>

  <span
    v-else
    class="norato-chip norato-chip--input"
    role="group"
    :aria-label="label"
    data-mode="input"
    :data-size="size"
    :data-disabled="disabled ? '' : undefined"
    :dir="dir"
  >
    <span class="norato-chip__surface">
      <span v-if="$slots.leadingIcon" class="norato-chip__leading-icon" aria-hidden="true"><slot name="leadingIcon" /></span>
      <span class="norato-chip__label">{{ label }}</span>
    </span>
    <button class="norato-chip__remove" type="button" :disabled="disabled" :aria-label="`حذف ${label}`" @click.stop="remove">
      <svg viewBox="0 0 16 16" aria-hidden="true"><path d="m4 4 8 8M12 4l-8 8" /></svg>
    </button>
  </span>
</template>
