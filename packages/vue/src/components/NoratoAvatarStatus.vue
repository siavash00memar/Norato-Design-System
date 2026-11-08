<script setup lang="ts">
import { computed } from 'vue'
import type { NoratoAvatarPresence } from './NoratoAvatar.vue'

const props = defineProps<{ status: NoratoAvatarPresence; label?: string }>()
const statusLabels: Record<NoratoAvatarPresence, string> = { online: 'آنلاین', busy: 'مشغول', away: 'غایب', offline: 'آفلاین' }
const visibleLabel = computed(() => props.label || statusLabels[props.status])
</script>

<template>
  <span class="norato-avatar-status" :data-status="status" role="img" :aria-label="'وضعیت حضور: ' + visibleLabel">
    <i class="norato-avatar-status__dot" aria-hidden="true" />
    <span>{{ visibleLabel }}</span>
  </span>
</template>
