<script setup lang="ts">
import '../chat.css'
withDefaults(defineProps<{ label: string; dateTime?: string; dir?: 'rtl' | 'ltr' }>(), { dateTime: '', dir: 'rtl' })
</script>
<template><div class="norato-chat-date" :dir="dir" role="separator"><time :datetime="dateTime || undefined">{{ label }}</time></div></template>
