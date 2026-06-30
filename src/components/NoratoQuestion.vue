<script setup lang="ts">
import NoratoIcon from './NoratoIcon.vue'

defineProps<{
  number?: number
  question: string
  time?: string
}>()
</script>

<template>
  <article class="rounded-norato border border-norato-line bg-white p-6 shadow-norato-sm">
    <h3 class="mb-3 text-right text-base font-bold text-norato-ink">سوال {{ number ?? 1 }}</h3>
    <p class="text-right text-sm leading-7 text-norato-ink">{{ question }}</p>
    <div v-if="time" class="mt-4 flex items-center justify-center gap-2 text-sm text-norato-muted">
      <NoratoIcon name="clock" :size="20" />
      <span>زمان تقریبی مورد نیاز :</span>
      <strong class="font-bold text-norato-ink">{{ time }}</strong>
    </div>
  </article>
</template>
