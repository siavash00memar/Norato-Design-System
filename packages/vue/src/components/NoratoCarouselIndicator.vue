<script setup lang="ts">
import '../carousel.css'
const props = withDefaults(defineProps<{ count: 3 | 5; active?: number; tone?: 'dark' | 'light'; size?: 'small' | 'medium'; label?: string }>(), { count: 3, active: 0, tone: 'dark', size: 'medium', label: 'انتخاب اسلاید' })
const emit = defineEmits<{ select: [index: number] }>()
</script>
<template><div class="norato-carousel-indicator" :data-tone="tone" :data-size="size" role="group" :aria-label="label"><button v-for="index in count" :key="index" type="button" :class="{ 'is-active': index-1 === active }" :aria-label="`رفتن به اسلاید ${index}`" :aria-current="index-1 === active ? 'true' : undefined" @click="emit('select', index-1)" /></div></template>
