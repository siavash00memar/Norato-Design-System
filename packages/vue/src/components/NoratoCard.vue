<script setup lang="ts">
export type NoratoCardStyle = 'glass' | 'elevated' | 'outline' | 'filled'

withDefaults(defineProps<{
  as?: 'article' | 'section' | 'div'
  style?: NoratoCardStyle
  selected?: boolean
  disabled?: boolean
  dir?: 'rtl' | 'ltr'
}>(), {
  as: 'article',
  style: 'glass',
  selected: false,
  disabled: false,
  dir: 'rtl',
})
</script>

<template>
  <component :is="as" class="norato-card" :data-style="style" :data-selected="selected || undefined" :data-disabled="disabled || undefined" :dir="dir">
    <slot />
  </component>
</template>
