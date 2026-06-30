<script setup lang="ts">
const props = defineProps<{
  label: string
  value: string
  modelValue?: string
}>()

defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<template>
  <button
    type="button"
    class="flex h-9 w-full items-center justify-between rounded-norato border px-3 text-right text-sm transition"
    :class="
      modelValue === value
        ? 'border-norato-primary bg-blue-50 text-norato-primary'
        : 'border-norato-line bg-white text-norato-ink hover:bg-norato-soft'
    "
    @click="$emit('update:modelValue', value)"
  >
    <span class="truncate">{{ label }}</span>
    <span
      class="grid size-5 shrink-0 place-items-center rounded-full border"
      :class="modelValue === value ? 'border-norato-primary bg-norato-primary' : 'border-norato-subtle bg-white'"
    >
      <span v-if="modelValue === value" class="size-2 rounded-full bg-white" />
    </span>
  </button>
</template>
