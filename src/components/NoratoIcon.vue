<script setup lang="ts">
type IconName =
  | 'arrow-left'
  | 'arrow-right'
  | 'calendar'
  | 'check'
  | 'caret-down'
  | 'chevron-down'
  | 'close'
  | 'clock'
  | 'drag'
  | 'search'
  | 'upload'
  | 'user'
  | 'like'
  | 'dislike'
  | 'man'
  | 'woman'

defineProps<{
  name: IconName
  size?: number
}>()
</script>

<template>
  <svg
    :width="size ?? 24"
    :height="size ?? 24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path v-if="name === 'arrow-left'" d="M19 12H5m6-6-6 6 6 6" />
    <path v-else-if="name === 'arrow-right'" d="M5 12h14m-6-6 6 6-6 6" />
    <g v-else-if="name === 'calendar'">
      <path d="M8 2v4M16 2v4M3 10h18" />
      <rect x="3" y="5" width="18" height="16" rx="3" />
    </g>
    <path v-else-if="name === 'check'" d="m5 12 4 4L19 6" />
    <path v-else-if="name === 'caret-down'" d="M6 9h12l-6 7-6-7Z" fill="currentColor" stroke="none" />
    <path v-else-if="name === 'chevron-down'" d="m6 9 6 6 6-6" />
    <path v-else-if="name === 'close'" d="M18 6 6 18M6 6l12 12" />
    <g v-else-if="name === 'clock'">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </g>
    <g v-else-if="name === 'drag'">
      <path d="M8 7h8M8 12h8M8 17h8" />
    </g>
    <g v-else-if="name === 'search'">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </g>
    <g v-else-if="name === 'upload'">
      <path d="M12 16V4m0 0L7 9m5-5 5 5" />
      <path d="M5 16v3h14v-3" />
    </g>
    <g v-else-if="name === 'user'">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </g>
    <g v-else-if="name === 'like'">
      <path d="M7 10v10H4V10h3Z" />
      <path d="M7 10 11 3c1.2.2 2 .9 2 2.2V8h5.4c1.1 0 1.9 1 1.6 2.1l-1.7 7.3A2 2 0 0 1 16.4 19H7" />
    </g>
    <g v-else-if="name === 'dislike'">
      <path d="M17 14V4h3v10h-3Z" />
      <path d="m17 14-4 7c-1.2-.2-2-.9-2-2.2V16H5.6c-1.1 0-1.9-1-1.6-2.1l1.7-7.3A2 2 0 0 1 7.6 5H17" />
    </g>
    <g v-else-if="name === 'man'" fill="currentColor" stroke="none">
      <circle cx="12" cy="4.5" r="2.5" />
      <rect x="9" y="8" width="6" height="14" rx="1.5" />
    </g>
    <g v-else-if="name === 'woman'" fill="currentColor" stroke="none">
      <circle cx="12" cy="4.5" r="2.5" />
      <path d="M12 8.5 7 18h3v4h4v-4h3L12 8.5Z" />
    </g>
  </svg>
</template>
