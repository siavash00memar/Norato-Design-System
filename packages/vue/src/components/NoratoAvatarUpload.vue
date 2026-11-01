<script setup lang="ts">
import { ref } from 'vue'
const props = withDefaults(defineProps<{ id: string; modelValue?: File | null; previewUrl?: string; label?: string; disabled?: boolean; required?: boolean }>(), { modelValue: null, label: 'تصویر پروفایل' })
const emit = defineEmits<{ 'update:modelValue': [file: File | null]; 'file-selected': [file: File] }>()
const input = ref<HTMLInputElement>()
function change(event: Event) { const file = (event.target as HTMLInputElement).files?.[0]; if (file) { emit('update:modelValue', file); emit('file-selected', file) }; if (input.value) input.value.value = '' }
</script>
<template>
  <span class="norato-avatar-upload" :class="{ 'is-filled': !!previewUrl || !!modelValue, 'is-disabled': disabled }" dir="rtl">
    <input :id="id" ref="input" class="norato-avatar-upload__input" type="file" accept="image/*" :disabled="disabled" :required="required" :aria-label="label" @change="change" />
    <button type="button" class="norato-avatar-upload__button" :disabled="disabled" :aria-label="label" @click="input?.click()"><img v-if="previewUrl" :src="previewUrl" alt="" /><span v-else aria-hidden="true">{{ modelValue ? '✓' : '+' }}</span></button>
    <span class="norato-avatar-upload__label">{{ label }}</span>
  </span>
</template>
