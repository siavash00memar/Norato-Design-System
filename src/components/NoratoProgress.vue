<script setup lang="ts">
import NoratoIcon from './NoratoIcon.vue'

withDefaults(
  defineProps<{
    value?: number
    showClose?: boolean
  }>(),
  {
    value: 12,
    showClose: true,
  },
)
</script>

<template>
  <div class="flex w-full items-center gap-4" dir="ltr">
    <button
      v-if="showClose"
      type="button"
      class="grid size-8 place-items-center rounded-full text-norato-subtle transition hover:bg-norato-soft"
      aria-label="بستن"
    >
      <NoratoIcon name="close" :size="22" />
    </button>
    <div class="h-[7px] flex-1 overflow-hidden rounded-full bg-norato-line">
      <div class="h-full rounded-full bg-norato-primary" :style="{ width: `${Math.min(100, Math.max(0, value))}%` }" />
    </div>
  </div>
</template>
