<script setup lang="ts">
import NoratoButton from './NoratoButton.vue'
import NoratoIcon from './NoratoIcon.vue'

defineProps<{
  title?: string
}>()
</script>

<template>
  <section class="w-full max-w-[324px] rounded-norato border border-norato-line bg-white p-6 shadow-norato-sm">
    <header class="mb-4 flex items-center justify-center gap-2 text-sm font-bold text-norato-ink">
      <span>{{ title ?? 'تایتل' }}</span>
      <NoratoIcon name="user" :size="22" class="text-norato-subtle" />
    </header>
    <button
      type="button"
      class="mb-4 grid h-44 w-full place-items-center rounded-norato border border-dashed border-norato-subtle bg-norato-field text-norato-muted transition hover:border-norato-primary hover:text-norato-primary"
    >
      <span class="grid place-items-center gap-2 text-sm">
        <NoratoIcon name="upload" :size="28" />
        لورم ایپسوم متن
      </span>
    </button>
    <div class="mb-6 text-right text-sm leading-7 text-norato-muted">
      <strong class="block text-norato-ink">لورم ایپسوم متن</strong>
      شرط اول شرط دوم شرط سوم
    </div>
    <footer class="flex items-center justify-between gap-3">
      <NoratoButton variant="primary">متن</NoratoButton>
      <NoratoButton variant="ghost">متن</NoratoButton>
    </footer>
  </section>
</template>
