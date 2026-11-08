<script setup lang="ts">
import '../image.css'
withDefaults(defineProps<{ src: string; alt: string; label?: string; size?: 'small' | 'medium' | 'large'; selected?: boolean; moreCount?: number; disabled?: boolean }>(), { label: '', size: 'medium', selected: false, moreCount: 0, disabled: false })
const emit = defineEmits<{ select: [] }>()
</script>
<template>
  <button class="norato-image-thumbnail" :class="`norato-image-thumbnail--${size}`" type="button" :aria-label="moreCount > 0 ? `${label || alt} و ${moreCount} تصویر دیگر` : label || alt" :aria-pressed="selected" :disabled="disabled" :data-selected="selected || undefined" @click="emit('select')">
    <img :src="src" alt="" />
    <span v-if="moreCount > 0" class="norato-image-thumbnail__more" aria-hidden="true">+{{ moreCount }}</span>
  </button>
</template>
