<script setup lang="ts">
import { computed, ref } from 'vue'
const props = withDefaults(defineProps<{ id: string; modelValue?: File | null; previewUrl?: string; state?: 'add' | 'uploading' | 'complete' | 'error'; progress?: number; errorText?: string; accept?: string; disabled?: boolean; label?: string }>(), { modelValue: null, state: 'add', accept: '.png,.jpg,.jpeg,.pdf,image/png,image/jpeg,application/pdf', label: 'افزودن فایل' })
const emit = defineEmits<{ 'update:modelValue': [file: File | null]; 'file-selected': [file: File]; cancel: []; retry: [] }>()
const input = ref<HTMLInputElement>()
const filename = computed(() => props.modelValue?.name || props.label)
function change(event: Event) { const file = (event.target as HTMLInputElement).files?.[0]; if (file) { emit('update:modelValue', file); emit('file-selected', file) }; if (input.value) input.value.value = '' }
</script>
<template>
  <span class="norato-upload-tile" :class="[`is-${state}`, { 'is-disabled': disabled }]">
    <input :id="id" ref="input" class="norato-upload-tile__input" type="file" :accept="accept" :disabled="disabled" :aria-label="label" @change="change" />
    <button type="button" class="norato-upload-tile__button" :disabled="disabled" :aria-label="filename" :aria-describedby="errorText ? `${id}-error` : undefined" @click="state==='error' ? emit('retry') : state==='uploading' ? emit('cancel') : input?.click()">
      <img v-if="previewUrl" :src="previewUrl" alt="" />
      <span v-else aria-hidden="true">{{ state==='error' ? '↻' : state==='uploading' ? '…' : state==='complete' ? '✓' : '+' }}</span>
      <small v-if="state==='uploading' && progress!==undefined" role="progressbar" :aria-valuemin="0" :aria-valuemax="100" :aria-valuenow="Math.min(100,Math.max(0,progress))">{{ Math.round(Math.min(100,Math.max(0,progress))) }}٪</small>
    </button>
    <span class="norato-upload-tile__name" dir="ltr">{{ filename }}</span>
    <span v-if="errorText" :id="`${id}-error`" class="norato-upload-tile__error" role="alert">{{ errorText }}</span>
  </span>
</template>
