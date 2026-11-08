<script setup lang="ts">
import '../carousel.css'
const props = withDefaults(defineProps<{ active?: boolean; tone?: 'dark' | 'light'; size?: 'small' | 'medium'; index?: number }>(), { active: false, tone: 'dark', size: 'medium', index: 0 })
const emit = defineEmits<{ select: [index: number] }>()
</script>
<template><button class="norato-carousel-dot" :data-tone="tone" :data-size="size" :class="{ 'is-active': active }" type="button" :aria-label="`اسلاید ${index+1}`" :aria-pressed="active" @click="emit('select', index)"></button></template>
