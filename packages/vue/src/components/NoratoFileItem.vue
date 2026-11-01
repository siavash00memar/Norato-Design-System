<script setup lang="ts">
import type { NoratoUploadItem } from './NoratoFileUpload.vue'
withDefaults(defineProps<{ item: NoratoUploadItem; disabled?: boolean }>(), { disabled: false })
const emit = defineEmits<{ remove: []; cancel: []; retry: [] }>()
const statusText = (status: NoratoUploadItem['status']) => ({ selected: 'آمادهٔ بارگذاری', uploading: 'در حال بارگذاری', complete: 'بارگذاری‌شده', error: 'بارگذاری ناموفق' }[status])
const formatSize = (size: number) => size < 1_000_000 ? `${(size / 1000).toLocaleString('fa-IR', { maximumFractionDigits: 0 })} کیلوبایت` : `${(size / 1_000_000).toLocaleString('fa-IR', { maximumFractionDigits: 1 })} مگابایت`
</script>
<template>
  <article class="norato-file-item" :class="`is-${item.status}`" dir="rtl">
    <span class="norato-file-item__icon" aria-hidden="true">{{ item.type.startsWith('image/') ? '▧' : '▤' }}</span>
    <div class="norato-file-item__meta"><b dir="ltr" :title="item.name">{{ item.name }}</b><small dir="ltr">{{ formatSize(item.size) }} · {{ statusText(item.status) }}</small><p v-if="item.errorText" class="norato-file-item__error" role="alert">{{ item.errorText }}</p><div v-if="item.status==='uploading' && item.progress!==undefined" class="norato-file-item__progress" role="progressbar" :aria-label="`پیشرفت ${item.name}`" :aria-valuemin="0" :aria-valuemax="100" :aria-valuenow="Math.min(100,Math.max(0,item.progress))"><span :style="{inlineSize:`${Math.min(100,Math.max(0,item.progress))}%`}" /></div></div>
    <button v-if="item.status==='error'" type="button" class="norato-file-item__action" :disabled="disabled" :aria-label="`تلاش دوباره برای ${item.name}`" @click="emit('retry')">↻</button>
    <button v-else-if="item.status==='uploading'" type="button" class="norato-file-item__action" :disabled="disabled" :aria-label="`لغو بارگذاری ${item.name}`" @click="emit('cancel')">×</button>
    <button v-else type="button" class="norato-file-item__action" :disabled="disabled" :aria-label="`حذف ${item.name}`" @click="emit('remove')">×</button>
  </article>
</template>
