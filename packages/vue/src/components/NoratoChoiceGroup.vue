<script setup lang="ts">
const props = defineProps<{ kind: 'checkbox' | 'radio'; id: string; label: string; options: { value: string; label: string; disabled?: boolean }[]; selected?: string[]; errorText?: string }>()
const emit = defineEmits<{ 'update:selected': [value: string[]] }>()
const updateSelected = (event: Event) => {
  const input = event.target as HTMLInputElement
  const current = props.selected ?? []
  const next = props.kind === 'radio'
    ? [input.value]
    : input.checked
      ? [...new Set([...current, input.value])]
      : current.filter(value => value !== input.value)
  emit('update:selected', next)
}
</script>
<template><fieldset class="norato-choice-group" dir="rtl" :aria-invalid="errorText ? 'true' : undefined" :aria-describedby="errorText ? `${id}-error` : undefined"><legend>{{ label }}</legend><label v-for="option in options" :key="option.value" class="norato-choice"><input :type="kind" :name="id" :value="option.value" :checked="selected?.includes(option.value)" :disabled="option.disabled" @change="updateSelected" /><span>{{ option.label }}</span></label><p v-if="errorText" :id="`${id}-error`" class="norato-choice__error" role="alert">{{ errorText }}</p></fieldset></template>
