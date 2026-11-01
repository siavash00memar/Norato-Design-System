<script setup lang="ts">
import type { Component } from 'vue'
import { ToggleGroupItem, ToggleGroupRoot } from 'reka-ui'

export type NoratoSegmentedItem = { value: string; label: string; disabled?: boolean; icon?: Component }

const props = withDefaults(defineProps<{
  id: string
  modelValue: string
  label: string
  items: NoratoSegmentedItem[]
  style?: 'glass' | 'contrast'
  size?: 'small' | 'medium' | 'large' | 'xlarge'
  disabled?: boolean
}>(), { style: 'glass', size: 'medium' })

const emit = defineEmits<{ 'update:modelValue': [value: string] }>()
const update = (value: unknown) => {
  if (typeof value === 'string' && value) emit('update:modelValue', value)
}
</script>

<template>
  <ToggleGroupRoot
    :id="id"
    class="norato-segmented"
    :data-style="style"
    :data-size="size"
    :model-value="modelValue"
    :aria-label="label"
    :disabled="disabled"
    type="single"
    orientation="horizontal"
    dir="rtl"
    @update:model-value="update"
  >
    <ToggleGroupItem
      v-for="item in items"
      :key="item.value"
      class="norato-segmented__item"
      :value="item.value"
      :disabled="disabled || item.disabled"
    >
      <component :is="item.icon" v-if="item.icon" class="norato-segmented__icon" aria-hidden="true" />
      <span>{{ item.label }}</span>
    </ToggleGroupItem>
  </ToggleGroupRoot>
</template>
