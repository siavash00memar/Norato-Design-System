<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import NoratoInputShell from './NoratoInputShell.vue'
import type { NoratoInputFieldProps } from './inputTypes'
const props = withDefaults(defineProps<NoratoInputFieldProps & { shortcut?: boolean }>(), { dir: 'rtl', size: 'medium', labelPlacement: 'outside', shortcut: true })
const emit = defineEmits<{ 'update:modelValue': [value: string] }>()
const input = ref<HTMLInputElement>()
const shortcutLabel = computed(() => typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform) ? '⌘ K' : 'Ctrl K')
function onShortcut(event: KeyboardEvent) {
  if (!props.shortcut || !(event.ctrlKey || event.metaKey) || event.key.toLowerCase() !== 'k') return
  const target = event.target as HTMLElement | null
  if (target?.isContentEditable || target?.closest('input, textarea, select, [contenteditable="true"]')) return
  event.preventDefault()
  input.value?.focus()
}
onMounted(() => window.addEventListener('keydown', onShortcut))
onUnmounted(() => window.removeEventListener('keydown', onShortcut))
</script>
<template><NoratoInputShell v-bind="props"><template #control="{ describedby, invalid }"><input :id="id" ref="input" class="norato-input-field__input" type="search" :dir="dir" :value="modelValue ?? ''" :placeholder="placeholder" :disabled="disabled || loading" :readonly="readOnly" :required="required" :aria-invalid="invalid || undefined" :aria-describedby="describedby" @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)" /></template><template #trailing><button v-if="modelValue" class="norato-input-field__action" type="button" aria-label="پاک کردن جست‌وجو" :disabled="disabled || loading || readOnly" @click="emit('update:modelValue', ''); input?.focus()"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg></button><kbd v-else-if="shortcut" class="norato-input-field__shortcut" dir="ltr">{{ shortcutLabel }}</kbd></template></NoratoInputShell></template>
