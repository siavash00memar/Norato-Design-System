<script setup lang="ts">
import NoratoIcon from './NoratoIcon.vue'

defineProps<{
  label: string
  removable?: boolean
}>()

defineEmits<{
  remove: []
}>()
</script>

<template>
  <span class="inline-flex h-[26px] max-w-full items-center gap-2 rounded-norato bg-norato-soft px-3 text-sm text-norato-ink">
    <span class="truncate">{{ label }}</span>
    <button v-if="removable" type="button" class="text-norato-subtle hover:text-norato-danger" @click="$emit('remove')">
      <NoratoIcon name="close" :size="16" />
    </button>
  </span>
</template>
