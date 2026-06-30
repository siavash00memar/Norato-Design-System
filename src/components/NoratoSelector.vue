<script setup lang="ts">
import NoratoIcon from './NoratoIcon.vue'

withDefaults(
  defineProps<{
    modelValue?: boolean
    type?: 'radio' | 'checkbox'
    label?: string
  }>(),
  {
    type: 'radio',
  },
)

defineEmits<{
  'update:modelValue': [value: boolean]
}>()
</script>

<template>
  <button
    type="button"
    class="inline-flex items-center gap-2 text-sm text-norato-ink"
    @click="$emit('update:modelValue', !modelValue)"
  >
    <span
      class="grid size-6 place-items-center border transition"
      :class="[
        type === 'radio' ? 'rounded-full' : 'rounded-norato',
        modelValue ? 'border-norato-primary bg-norato-primary text-white' : 'border-norato-subtle bg-white text-transparent',
      ]"
    >
      <span v-if="type === 'radio'" class="size-2.5 rounded-full bg-current" />
      <NoratoIcon v-else name="check" :size="16" />
    </span>
    <span v-if="label">{{ label }}</span>
  </button>
</template>
