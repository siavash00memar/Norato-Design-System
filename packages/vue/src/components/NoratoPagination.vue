<script setup lang="ts">
import { computed } from 'vue'

type PageEntry = number | 'ellipsis-start' | 'ellipsis-end'
const props = withDefaults(defineProps<{ id: string; modelValue: number; totalPages: number; label?: string; type?: 'numbers' | 'simple'; size?: 'small' | 'medium'; dir?: 'rtl' | 'ltr' }>(), { label: 'صفحه‌بندی', type: 'numbers', size: 'medium', dir: 'rtl' })
const emit = defineEmits<{ 'update:modelValue': [page: number] }>()
const total = computed(() => Math.max(1, Math.floor(props.totalPages) || 1))
const current = computed(() => Math.min(total.value, Math.max(1, Math.floor(props.modelValue) || 1)))
const number = new Intl.NumberFormat('fa-IR')
const pageLabel = (page: number) => `صفحهٔ ${number.format(page)}`
const pages = computed<PageEntry[]>(() => {
  const last = total.value
  if (last <= 7) return Array.from({ length: last }, (_, index) => index + 1)
  if (current.value <= 4) return [1, 2, 3, 4, 5, 'ellipsis-end', last]
  if (current.value >= last - 3) return [1, 'ellipsis-start', last - 4, last - 3, last - 2, last - 1, last]
  return [1, 'ellipsis-start', current.value - 1, current.value, current.value + 1, 'ellipsis-end', last]
})
const go = (page: number) => emit('update:modelValue', Math.min(total.value, Math.max(1, page)))
</script>

<template>
  <nav :id="id" class="norato-pagination" :data-type="type" :data-size="size" :dir="dir" :aria-label="label">
    <template v-if="type === 'simple'">
      <button class="norato-pagination__control" type="button" :disabled="current <= 1" aria-label="رفتن به صفحهٔ قبلی" @click="go(current - 1)"><span aria-hidden="true">{{ dir === 'rtl' ? '›' : '‹' }}</span><span>قبلی</span></button>
      <span class="norato-pagination__summary" aria-live="polite">صفحهٔ {{ number.format(current) }} از {{ number.format(total) }}</span>
      <button class="norato-pagination__control" type="button" :disabled="current >= total" aria-label="رفتن به صفحهٔ بعدی" @click="go(current + 1)"><span>بعدی</span><span aria-hidden="true">{{ dir === 'rtl' ? '‹' : '›' }}</span></button>
    </template>
    <template v-else>
      <button class="norato-pagination__control" type="button" :disabled="current <= 1" aria-label="رفتن به صفحهٔ قبلی" @click="go(current - 1)"><span aria-hidden="true">{{ dir === 'rtl' ? '›' : '‹' }}</span><span>قبلی</span></button>
      <ol class="norato-pagination__pages">
        <li v-for="entry in pages" :key="entry">
          <span v-if="typeof entry !== 'number'" class="norato-pagination__ellipsis" aria-hidden="true">…</span>
          <button v-else class="norato-pagination__page" type="button" :aria-label="pageLabel(entry)" :aria-current="entry === current ? 'page' : undefined" :data-current="entry === current || undefined" @click="go(entry)">{{ number.format(entry) }}</button>
        </li>
      </ol>
      <button class="norato-pagination__control" type="button" :disabled="current >= total" aria-label="رفتن به صفحهٔ بعدی" @click="go(current + 1)"><span>بعدی</span><span aria-hidden="true">{{ dir === 'rtl' ? '‹' : '›' }}</span></button>
    </template>
  </nav>
</template>
