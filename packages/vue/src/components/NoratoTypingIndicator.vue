<script setup lang="ts">
import '../chat.css'
withDefaults(defineProps<{ label?: string; dir?: 'rtl' | 'ltr' }>(), { label: 'در حال نوشتن', dir: 'rtl' })
</script>
<template><div class="norato-typing" :dir="dir" role="status" :aria-label="label"><span>{{ label }}</span><i aria-hidden="true"><b></b><b></b><b></b></i></div></template>
