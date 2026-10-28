<script setup lang="ts">
import { nextTick, onMounted, onUnmounted, ref } from 'vue'

const props = defineProps<{ id: string; label: string; modelValue: string; options: { value: string; label: string }[] }>()
const emit = defineEmits<{ 'update:modelValue': [value: string] }>()
const root = ref<HTMLElement | null>(null)
const trigger = ref<HTMLButtonElement | null>(null)
const open = ref(false)
const selectedLabel = () => props.options.find(option => option.value === props.modelValue)?.label ?? props.modelValue
const optionElements = () => Array.from(root.value?.querySelectorAll<HTMLElement>('[role="option"]') ?? [])

async function show(focusIndex?: number) {
  open.value = true
  await nextTick()
  const index = focusIndex ?? Math.max(0, props.options.findIndex(option => option.value === props.modelValue))
  optionElements()[index]?.focus()
}
function dismiss(returnFocus = false) {
  open.value = false
  if (returnFocus) nextTick(() => trigger.value?.focus())
}
function choose(value: string) {
  emit('update:modelValue', value)
  dismiss(true)
}
function onTriggerKeydown(event: KeyboardEvent) {
  if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    event.preventDefault()
    show(event.key === 'ArrowUp' ? props.options.length - 1 : undefined)
  }
}
function onMenuKeydown(event: KeyboardEvent) {
  const options = optionElements()
  const index = options.indexOf(document.activeElement as HTMLElement)
  let nextIndex: number | undefined
  if (event.key === 'ArrowDown') nextIndex = (index + 1) % options.length
  if (event.key === 'ArrowUp') nextIndex = (index - 1 + options.length) % options.length
  if (event.key === 'Home') nextIndex = 0
  if (event.key === 'End') nextIndex = options.length - 1
  if (nextIndex !== undefined) {
    event.preventDefault()
    options[nextIndex]?.focus()
  } else if (event.key === 'Escape') {
    event.preventDefault()
    dismiss(true)
  } else if ((event.key === 'Enter' || event.key === ' ') && index >= 0) {
    event.preventDefault()
    choose(props.options[index]!.value)
  }
}
function onOutsidePointer(event: PointerEvent) {
  if (!root.value?.contains(event.target as Node)) dismiss()
}
function onFocusOut(event: FocusEvent) {
  if (event.relatedTarget && !root.value?.contains(event.relatedTarget as Node)) dismiss()
}
onMounted(() => document.addEventListener('pointerdown', onOutsidePointer))
onUnmounted(() => document.removeEventListener('pointerdown', onOutsidePointer))
</script>

<template>
  <div ref="root" class="button-playground-field button-playground-dropdown" @focusout="onFocusOut">
    <span :id="`${id}-label`" class="button-playground-field-label">{{ label }}</span>
    <button ref="trigger" class="button-playground-trigger" type="button" :aria-labelledby="`${id}-label ${id}-value`" aria-haspopup="listbox" :aria-expanded="open" :aria-controls="`${id}-options`" @click="open ? dismiss() : show()" @keydown="onTriggerKeydown">
      <span :id="`${id}-value`" dir="ltr">{{ selectedLabel() }}</span>
      <svg aria-hidden="true" viewBox="0 0 16 16" fill="none"><path d="m4 6 4 4 4-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg>
    </button>
    <Transition name="button-playground-menu">
      <ul v-if="open" :id="`${id}-options`" class="button-playground-options" role="listbox" :aria-labelledby="`${id}-label`" @keydown="onMenuKeydown">
        <li v-for="option in options" :key="option.value" role="option" tabindex="-1" :aria-selected="modelValue === option.value" @click="choose(option.value)">{{ option.label }}</li>
      </ul>
    </Transition>
  </div>
</template>
