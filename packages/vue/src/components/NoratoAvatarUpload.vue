<script setup lang="ts">
import { ref, watch } from 'vue'
import { syncNativeFileList } from './fileUploadNativeFiles'
const props = withDefaults(defineProps<{ id: string; modelValue?: File | null; previewUrl?: string; label?: string; disabled?: boolean; required?: boolean; name?: string }>(), { modelValue: null, label: 'تصویر پروفایل' })
const emit = defineEmits<{ 'update:modelValue': [file: File | null]; 'file-selected': [file: File] }>()
const input = ref<HTMLInputElement>()
function syncNativeFiles() { syncNativeFileList(input.value, props.modelValue ? [props.modelValue] : []) }
watch([input, () => props.modelValue], syncNativeFiles, { flush: 'post', immediate: true })
function openPicker() { if (!input.value || props.disabled) return; input.value.value = ''; input.value.click() }
function restoreNativeFiles() { syncNativeFiles() }
function change(event: Event) {
  const file = (event.target as HTMLInputElement).files?.[0]
  if (file) { emit('update:modelValue', file); emit('file-selected', file) }
  else syncNativeFiles()
}
</script>
<template>
  <span class="norato-avatar-upload" :class="{ 'is-filled': !!previewUrl || !!modelValue, 'is-disabled': disabled }" dir="rtl">
    <input :id="id" ref="input" class="norato-avatar-upload__input" type="file" accept="image/*" :disabled="disabled" :required="required" :name="name" :aria-label="label" @change="change" @cancel="restoreNativeFiles" />
    <button type="button" class="norato-avatar-upload__button" :disabled="disabled" :aria-label="label" @click="openPicker"><img v-if="previewUrl" :src="previewUrl" alt="" /><span v-else aria-hidden="true">{{ modelValue ? '✓' : '+' }}</span></button>
    <span class="norato-avatar-upload__label">{{ label }}</span>
  </span>
</template>
