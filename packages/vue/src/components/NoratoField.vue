<script setup lang="ts">
defineProps<{ id: string; label: string; placeholder?: string; modelValue?: string; helperText?: string; errorText?: string; disabled?: boolean; loading?: boolean; required?: boolean; dir?: 'rtl' | 'ltr' | 'auto' }>();
defineEmits<{ 'update:modelValue': [value: string] }>();
</script>

<template>
  <div class="norato-field-group" :class="{ 'is-invalid': errorText, 'is-loading': loading }" :aria-busy="loading || undefined">
    <label class="norato-field__label" :for="id">{{ label }}<span v-if="required" aria-hidden="true"> *</span></label>
    <input :id="id" class="norato-field" :dir="dir ?? 'rtl'" :value="modelValue" :placeholder="placeholder" :disabled="disabled || loading" :required="required" :aria-invalid="errorText ? 'true' : undefined" :aria-describedby="[helperText && `${id}-helper`, errorText && `${id}-error`, loading && `${id}-loading`].filter(Boolean).join(' ') || undefined" @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" />
    <p v-if="loading" class="norato-field__message" :id="`${id}-loading`" role="status" aria-live="polite">در حال بارگذاری</p>
    <p v-if="helperText" class="norato-field__message" :id="`${id}-helper`">{{ helperText }}</p>
    <p v-if="errorText" class="norato-field__message norato-field__error" :id="`${id}-error`" role="alert">{{ errorText }}</p>
  </div>
</template>
