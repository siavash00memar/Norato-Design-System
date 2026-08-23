<script setup lang="ts">
withDefaults(defineProps<{ id: string; label: string; placeholder?: string; modelValue?: string; helperText?: string; errorText?: string; disabled?: boolean; loading?: boolean; required?: boolean; dir?: 'rtl' | 'ltr' | 'auto' }>(), { dir: 'rtl' });
</script>
<template>
  <div class="norato-textarea-group" :class="{ 'is-invalid': errorText, 'is-loading': loading }"><label class="norato-textarea__label" :for="id">{{ label }}<span v-if="required" aria-hidden="true"> *</span></label><textarea class="norato-textarea" :id="id" :dir="dir" :value="modelValue" :placeholder="placeholder" :disabled="disabled || loading" :required="required" :aria-invalid="errorText ? 'true' : undefined" :aria-describedby="[helperText && `${id}-helper`, errorText && `${id}-error`].filter(Boolean).join(' ') || undefined" /><p v-if="helperText" class="norato-textarea__message" :id="`${id}-helper`">{{ helperText }}</p><p v-if="errorText" class="norato-textarea__message norato-textarea__error" :id="`${id}-error`" role="alert">{{ errorText }}</p></div>
</template>
