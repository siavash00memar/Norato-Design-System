<script setup lang="ts">
withDefaults(defineProps<{
  id: string
  label: string
  dir?: 'rtl' | 'ltr'
}>(), { dir: 'rtl' })
</script>

<template>
  <li class="norato-list-group" role="presentation">
    <h3 class="norato-list-group__label" :id="`${id}-label`">{{ label }}</h3>
    <ul class="norato-list-group__items" :dir="dir" :aria-labelledby="`${id}-label`"><slot /></ul>
  </li>
</template>
