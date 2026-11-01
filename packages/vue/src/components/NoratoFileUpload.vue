<script lang="ts">
import NoratoFileItem from './NoratoFileItem.vue'
export default { components: { NoratoFileItem } }
</script>
<script setup lang="ts">
import { computed, ref } from 'vue'

export type NoratoUploadStatus = 'selected' | 'uploading' | 'complete' | 'error'
export type NoratoUploadItem = { id: string; file?: File; name: string; size: number; type: string; status: NoratoUploadStatus; progress?: number; errorText?: string }
export type NoratoRejectedFile = { file: File; reason: 'type' | 'size' | 'count' }

const props = withDefaults(defineProps<{ id: string; label: string; modelValue?: NoratoUploadItem[]; accept?: string; maxSize?: number; maxFiles?: number; multiple?: boolean; size?: 'large' | 'compact'; disabled?: boolean; required?: boolean; helperText?: string; errorText?: string; name?: string; dir?: 'rtl' | 'ltr' }>(), {
  modelValue: () => [], accept: '.png,.jpg,.jpeg,.pdf,image/png,image/jpeg,application/pdf', maxSize: 10_000_000, maxFiles: 5, multiple: true, size: 'large', dir: 'rtl',
})
const emit = defineEmits<{ 'update:modelValue': [value: NoratoUploadItem[]]; 'files-selected': [files: File[]]; rejected: [files: NoratoRejectedFile[]]; remove: [item: NoratoUploadItem]; cancel: [item: NoratoUploadItem]; retry: [item: NoratoUploadItem] }>()
const input = ref<HTMLInputElement>()
const dragging = ref(false)
const dragDepth = ref(0)
const rejections = ref<NoratoRejectedFile[]>([])
const effectiveError = computed(() => props.errorText || (rejections.value.length ? rejections.value.map(item => item.reason === 'type' ? 'نوع فایل پشتیبانی نمی‌شود.' : item.reason === 'size' ? 'حجم فایل از حد مجاز بیشتر است.' : 'تعداد فایل‌ها از حد مجاز بیشتر است.').join(' ') : ''))
const helpId = computed(() => `${props.id}-help`)
const errorId = computed(() => `${props.id}-error`)
const acceptedTypes = computed(() => props.accept.split(',').map(value => value.trim().toLowerCase()).filter(Boolean))
const matches = (file: File) => acceptedTypes.value.some(type => type.startsWith('.') ? file.name.toLowerCase().endsWith(type) : type.endsWith('/*') ? file.type.toLowerCase().startsWith(type.slice(0, -1)) : file.type.toLowerCase() === type)
function process(files: File[]) {
  if (props.disabled || !files.length) return
  const accepted: File[] = []
  const rejected: NoratoRejectedFile[] = []
  const limit = props.multiple ? Math.max(0, props.maxFiles - props.modelValue.length) : 1
  for (const file of files) {
    const reason = !matches(file) ? 'type' : file.size > props.maxSize ? 'size' : accepted.length >= limit ? 'count' : undefined
    if (reason) rejected.push({ file, reason })
    else accepted.push(file)
  }
  if (!props.multiple && accepted.length) {
    for (const item of props.modelValue) emit('remove', item)
  }
  const items = accepted.map((file): NoratoUploadItem => ({ id: `${Date.now()}-${Math.random().toString(36).slice(2)}`, file, name: file.name, size: file.size, type: file.type, status: 'selected' }))
  if (items.length) { emit('update:modelValue', props.multiple ? [...props.modelValue, ...items] : items); emit('files-selected', accepted); rejections.value = [] }
  if (rejected.length) { rejections.value = rejected; emit('rejected', rejected) }
}
function onChange(event: Event) { process(Array.from((event.target as HTMLInputElement).files || [])); if (input.value) input.value.value = '' }
function onDrop(event: DragEvent) { dragging.value = false; dragDepth.value = 0; if (!props.disabled) process(Array.from(event.dataTransfer?.files || [])) }
function onDragEnter() { if (!props.disabled) { dragDepth.value += 1; dragging.value = true } }
function onDragLeave() { dragDepth.value = Math.max(0, dragDepth.value - 1); dragging.value = dragDepth.value > 0 }
function itemAction(item: NoratoUploadItem, action: 'remove' | 'cancel' | 'retry') {
  if (action === 'remove') emit('remove', item)
  else if (action === 'cancel') emit('cancel', item)
  else emit('retry', item)
  if (action !== 'retry') emit('update:modelValue', props.modelValue.filter(entry => entry.id !== item.id))
}
</script>

<template>
  <section class="norato-file-upload" :class="[`is-${size}`, { 'is-disabled': disabled, 'is-dragging': dragging, 'is-invalid': !!effectiveError }]" :dir="dir">
    <span class="norato-file-upload__label" :id="`${id}-label`">{{ label }}<b v-if="required" aria-hidden="true">*</b></span>
    <input :id="id" ref="input" class="norato-file-upload__input" type="file" :accept="accept" :multiple="multiple" :disabled="disabled" :required="required" :name="name" :aria-labelledby="`${id}-label`" :aria-describedby="[helperText ? helpId : '', effectiveError ? errorId : ''].filter(Boolean).join(' ') || undefined" :aria-invalid="!!effectiveError" @change="onChange" />
    <button class="norato-file-upload__dropzone" type="button" :disabled="disabled" :aria-labelledby="`${id}-label`" :aria-describedby="[helperText ? helpId : '', effectiveError ? errorId : ''].filter(Boolean).join(' ') || undefined" :aria-invalid="!!effectiveError" @click="input?.click()" @dragenter.prevent="onDragEnter" @dragover.prevent="dragging = !disabled" @dragleave.prevent="onDragLeave" @drop.prevent="onDrop" @keydown.enter.prevent="input?.click()" @keydown.space.prevent="input?.click()">
      <span class="norato-file-upload__icon" aria-hidden="true">↑</span>
      <strong>برای انتخاب فایل کلیک کنید یا فایل را اینجا رها کنید</strong>
      <small>{{ accept.split(',').filter(item => item.startsWith('.')).join('، ').toUpperCase() || 'فایل' }} · حداکثر {{ (maxSize / 1_000_000).toLocaleString('fa-IR') }} مگابایت</small>
    </button>
    <p v-if="helperText" :id="helpId" class="norato-file-upload__message">{{ helperText }}</p>
    <p v-if="effectiveError" :id="errorId" class="norato-file-upload__message is-error" role="alert">{{ effectiveError }}</p>
    <ul v-if="modelValue.length" class="norato-file-upload__list" aria-label="فایل‌های انتخاب‌شده"><li v-for="item in modelValue" :key="item.id"><NoratoFileItem :item="item" :disabled="disabled" @remove="itemAction(item, 'remove')" @cancel="itemAction(item, 'cancel')" @retry="itemAction(item, 'retry')" /></li></ul>
    <ul v-if="rejections.length" class="norato-file-upload__rejected" aria-label="فایل‌های ردشده" aria-live="polite"><li v-for="entry in rejections" :key="`${entry.file.name}-${entry.reason}`" dir="ltr">{{ entry.file.name }} — {{ entry.reason === 'type' ? 'نوع فایل نامعتبر' : entry.reason === 'size' ? 'حجم بیش از حد' : 'تعداد بیش از حد' }}</li></ul>
  </section>
</template>
