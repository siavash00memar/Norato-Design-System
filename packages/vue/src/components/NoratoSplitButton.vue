<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'

export type SplitButtonItem = { value: string; label: string; disabled?: boolean }

const props = withDefaults(defineProps<{
  id: string
  label: string
  items: SplitButtonItem[]
  mode?: 'split' | 'dropdown'
  size?: 'small' | 'medium' | 'large' | 'xlarge'
  variant?: 'primary' | 'secondary' | 'destructive' | 'tertiary'
  disabled?: boolean
  loading?: boolean
}>(), { mode: 'split', size: 'large', variant: 'primary', disabled: false, loading: false })

const emit = defineEmits<{
  'primary-action': []
  select: [value: string]
}>()

const root = ref<HTMLElement | null>(null)
const toggleButton = ref<HTMLButtonElement | null>(null)
const open = ref(false)
const menuId = `${props.id}-menu`
const unavailable = () => props.disabled || props.loading
const menuUnavailable = () => unavailable() || props.items.every(item => item.disabled)

function enabledItems(): HTMLButtonElement[] {
  return Array.from(root.value?.querySelectorAll<HTMLButtonElement>('[role="menuitem"]:not(:disabled)') ?? [])
}

async function openAndFocus(last = false) {
  if (menuUnavailable()) return
  open.value = true
  await nextTick()
  const items = enabledItems()
  ;(last ? items.at(-1) : items[0])?.focus()
}

function closeMenu(restoreFocus = false) {
  open.value = false
  if (restoreFocus) nextTick(() => toggleButton.value?.focus())
}

function onToggleClick() {
  if (menuUnavailable()) return
  open.value ? closeMenu() : (open.value = true)
}

function onToggleKeydown(event: KeyboardEvent) {
  if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    event.preventDefault()
    openAndFocus(event.key === 'ArrowUp')
  } else if (event.key === 'Escape' && open.value) {
    event.preventDefault()
    closeMenu(true)
  }
}

function onMenuKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    event.preventDefault()
    closeMenu(true)
    return
  }
  if (event.key === 'Tab') {
    closeMenu()
    return
  }
  const items = enabledItems()
  const index = items.indexOf(document.activeElement as HTMLButtonElement)
  let nextIndex: number | undefined
  if (event.key === 'ArrowDown') nextIndex = (index + 1) % items.length
  if (event.key === 'ArrowUp') nextIndex = (index - 1 + items.length) % items.length
  if (event.key === 'Home') nextIndex = 0
  if (event.key === 'End') nextIndex = items.length - 1
  if (nextIndex !== undefined && items.length) {
    event.preventDefault()
    items[nextIndex]?.focus()
  }
}

function onSelect(value: string) {
  emit('select', value)
  closeMenu(true)
}

function onDocumentPointerDown(event: PointerEvent) {
  if (root.value && !root.value.contains(event.target as Node)) closeMenu()
}

watch(() => [props.disabled, props.loading], () => { if (unavailable()) closeMenu() })
onMounted(() => document.addEventListener('pointerdown', onDocumentPointerDown))
onBeforeUnmount(() => document.removeEventListener('pointerdown', onDocumentPointerDown))
</script>

<template>
  <div ref="root" class="norato-split-button" :data-variant="variant" :data-mode="mode" :data-size="size" :data-disabled="unavailable() ? 'true' : undefined" dir="rtl">
    <div class="norato-split-button__control">
      <button v-if="mode === 'split'" class="norato-split-button__main" type="button" :disabled="unavailable()" :aria-busy="loading ? 'true' : undefined" @click="emit('primary-action')">{{ label }}</button>
      <button ref="toggleButton" class="norato-split-button__toggle" type="button" :disabled="menuUnavailable()" :aria-busy="loading ? 'true' : undefined" :aria-label="mode === 'split' ? 'گزینه‌های بیشتر' : undefined" aria-haspopup="menu" :aria-expanded="open" :aria-controls="menuId" @click="onToggleClick" @keydown="onToggleKeydown"><span v-if="mode === 'dropdown'">{{ label }}</span><span class="norato-split-button__chevron" :class="{ 'is-open': open }" aria-hidden="true">⌄</span></button>
    </div>
    <div v-if="open" :id="menuId" class="norato-split-button__menu" role="menu" :aria-label="`${label} — گزینه‌ها`" @keydown="onMenuKeydown">
      <button v-for="item in items" :key="item.value" class="norato-split-button__item" type="button" role="menuitem" :disabled="item.disabled" @click="onSelect(item.value)">{{ item.label }}</button>
    </div>
  </div>
</template>
