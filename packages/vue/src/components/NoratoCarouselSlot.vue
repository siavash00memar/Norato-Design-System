<script setup lang="ts">
import '../carousel.css'
withDefaults(defineProps<{ size?: 'small' | 'medium' | 'large'; dir?: 'rtl' | 'ltr'; label?: string }>(), { size: 'medium', dir: 'rtl', label: 'محتوای اسلاید' })
</script>
<template><div class="norato-carousel-slot" :data-size="size" :dir="dir" role="group" :aria-label="label"><slot /></div></template>
