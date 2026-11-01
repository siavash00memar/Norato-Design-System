<script setup lang="ts">
defineProps<{ checked: boolean }>()
</script>

<template>
  <span class="norato-checkbox-visual" :data-checked="checked || undefined" aria-hidden="true">
    <svg v-if="checked" viewBox="0 0 24 24" focusable="false"><path d="m5 12 5 5 9-10" /></svg>
  </span>
</template>
