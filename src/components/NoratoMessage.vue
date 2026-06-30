<script setup lang="ts">
withDefaults(
  defineProps<{
    kind?: 'intro' | 'welcome' | 'subtle' | 'text'
    title?: string
  }>(),
  {
    kind: 'intro',
  },
)
</script>

<template>
  <div
    class="rounded-norato border border-norato-line bg-white px-6 py-4 text-center shadow-norato-sm"
    :class="{
      'min-h-[60px] text-base font-bold': kind === 'intro',
      'min-h-[86px] text-lg font-bold flex items-center justify-center': kind === 'welcome',
      'min-h-[58px] text-base text-norato-muted flex items-center justify-center': kind === 'subtle',
      'text-sm leading-7 text-norato-ink': kind === 'text',
    }"
  >
    <slot>{{ title ?? 'به فصل اول ماجراجویی نوراتو خوش اومدی' }}</slot>
  </div>
</template>
