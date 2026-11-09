<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import type { Component } from 'vue'
import {
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
} from 'reka-ui'
import '../command-palette.css'

export type NoratoCommandItem = {
  id: string
  label: string
  description?: string
  keywords?: string[]
  icon?: Component
  shortcut?: string
  kind?: 'command' | 'navigation' | 'recent'
  disabled?: boolean
}

export type NoratoCommandGroup = {
  id: string
  label: string
  items: NoratoCommandItem[]
}

const props = withDefaults(defineProps<{
  id: string
  groups: NoratoCommandGroup[]
  label?: string
  loading?: boolean
  emptyText?: string
  shortcut?: string | false
  dir?: 'rtl' | 'ltr'
}>(), {
  label: 'جست‌وجو یا فرمان',
  loading: false,
  emptyText: 'نتیجه‌ای پیدا نشد؛ عبارت دیگری را جست‌وجو کن.',
  shortcut: 'k',
  dir: 'rtl',
})

const emit = defineEmits<{ select: [item: NoratoCommandItem] }>()
const open = defineModel<boolean>('open', { default: false })
const query = defineModel<string>('query', { default: '' })
const searchInput = ref<HTMLInputElement | null>(null)
const activeId = ref('')
let returnFocusElement: HTMLElement | null = null

const normalize = (value: string) => value.normalize('NFKC').toLocaleLowerCase('fa').replace(/[يى]/g, 'ی').replace(/ك/g, 'ک')
const visibleGroups = computed(() => {
  const needle = normalize(query.value.trim())
  return props.groups.map(group => ({
    ...group,
    items: group.items.filter(item => !needle || normalize([item.label, item.description || '', ...(item.keywords || [])].join(' ')).includes(needle)).slice(0, 8),
  })).filter(group => group.items.length)
})
const visibleItems = computed(() => visibleGroups.value.flatMap(group => group.items))
const enabledItems = computed(() => visibleItems.value.filter(item => !item.disabled))
const listboxId = computed(() => `${props.id}-listbox`)
const activeOptionId = computed(() => activeId.value ? `${props.id}-option-${activeId.value.replace(/[^a-z\d_-]+/gi, '-')}` : undefined)
const optionId = (item: NoratoCommandItem) => `${props.id}-option-${item.id.replace(/[^a-z\d_-]+/gi, '-')}`
const groupId = (id: string) => `${props.id}-group-${id.replace(/[^a-z\d_-]+/gi, '-')}`

function setActive(item: NoratoCommandItem | undefined) {
  activeId.value = item && !item.disabled ? item.id : ''
}

function moveActive(direction: 1 | -1) {
  if (!enabledItems.value.length) { activeId.value = ''; return }
  const currentIndex = enabledItems.value.findIndex(item => item.id === activeId.value)
  const nextIndex = currentIndex < 0
    ? (direction > 0 ? 0 : enabledItems.value.length - 1)
    : (currentIndex + direction + enabledItems.value.length) % enabledItems.value.length
  setActive(enabledItems.value[nextIndex])
}

function selectItem(item: NoratoCommandItem | undefined) {
  if (!item || item.disabled) return
  emit('select', item)
  query.value = ''
  open.value = false
}

function onSearchKeydown(event: KeyboardEvent) {
  if (event.isComposing || event.keyCode === 229) return
  if (event.key === 'ArrowDown') { event.preventDefault(); moveActive(1) }
  else if (event.key === 'ArrowUp') { event.preventDefault(); moveActive(-1) }
  else if (event.key === 'Home' && !query.value && enabledItems.value.length) { event.preventDefault(); setActive(enabledItems.value[0]) }
  else if (event.key === 'End' && !query.value && enabledItems.value.length) { event.preventDefault(); setActive(enabledItems.value.at(-1)) }
  else if (event.key === 'Enter') { event.preventDefault(); selectItem(enabledItems.value.find(item => item.id === activeId.value)) }
}

function onGlobalKeydown(event: KeyboardEvent) {
  if (!props.shortcut || !props.shortcut.trim() || open.value || event.repeat || event.isComposing || event.keyCode === 229) return
  if ((!event.ctrlKey && !event.metaKey) || event.altKey || event.shiftKey || event.key.toLocaleLowerCase() !== props.shortcut.toLocaleLowerCase()) return
  const target = event.target
  if (target instanceof HTMLElement && (target.isContentEditable || target.closest('input, textarea, select, [role="textbox"], [role="searchbox"]'))) return
  event.preventDefault()
  open.value = true
}

function preventCloseAutofocus(event: Event) {
  event.preventDefault()
}

watch(() => [query.value, props.groups, props.loading] as const, () => {
  if (props.loading) { activeId.value = ''; return }
  if (!enabledItems.value.some(item => item.id === activeId.value)) setActive(enabledItems.value[0])
}, { immediate: true })

watch(open, async value => {
  if (value) {
    returnFocusElement = typeof document !== 'undefined' && document.activeElement instanceof HTMLElement ? document.activeElement : null
    await nextTick()
    searchInput.value?.focus({ preventScroll: true })
  } else {
    query.value = ''
    activeId.value = ''
    await nextTick()
    if (returnFocusElement?.isConnected) returnFocusElement.focus({ preventScroll: true })
    returnFocusElement = null
  }
})

onMounted(() => window.addEventListener('keydown', onGlobalKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', onGlobalKeydown))
</script>

<template>
  <DialogRoot v-model:open="open">
    <DialogPortal>
      <DialogOverlay class="norato-command-palette__overlay" />
      <DialogContent class="norato-command-palette" :dir="dir" :aria-busy="loading || undefined" @close-auto-focus="preventCloseAutofocus">
        <DialogTitle class="norato-command-palette__sr-only">{{ label }}</DialogTitle>
        <DialogDescription class="norato-command-palette__sr-only">با نوشتن، فرمان‌ها و صفحه‌ها را جست‌وجو کن. Escape پنجره را می‌بندد.</DialogDescription>
        <div class="norato-command-palette__search-row">
          <svg class="norato-command-palette__search-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.4" /><path d="m16 16 4 4" /></svg>
          <input
            :id="`${id}-search`" ref="searchInput" v-model="query" class="norato-command-palette__search"
            type="search" role="combobox" aria-autocomplete="list" :aria-label="label" :aria-expanded="true"
            :aria-controls="!loading && visibleItems.length ? listboxId : undefined" :aria-activedescendant="!loading && visibleItems.length ? activeOptionId : undefined" :placeholder="'جست‌وجو یا فرمان…'"
            autocomplete="off" spellcheck="false" @keydown="onSearchKeydown"
          />
          <kbd class="norato-command-palette__escape" dir="ltr">Esc</kbd>
        </div>
        <div class="norato-command-palette__results" :data-loading="loading || undefined">
          <div v-if="loading" class="norato-command-palette__loading" role="status" aria-live="polite"><span class="norato-command-palette__spinner" aria-hidden="true" />در حال جست‌وجو…</div>
          <div v-else-if="!visibleItems.length" class="norato-command-palette__empty" role="status">{{ emptyText }}</div>
          <div v-else :id="listboxId" class="norato-command-palette__listbox" role="listbox" :aria-label="query ? 'نتایج جست‌وجو' : 'فرمان‌های پیشنهادی'">
            <section v-for="group in visibleGroups" :key="group.id" class="norato-command-palette__group" role="group" :aria-labelledby="groupId(group.id)">
              <h3 :id="groupId(group.id)" class="norato-command-palette__group-title">{{ group.label }}</h3>
              <div
                v-for="item in group.items" :id="optionId(item)" :key="item.id" class="norato-command-palette__option"
                :class="{ 'is-active': activeId === item.id, 'is-disabled': item.disabled }" role="option"
                :aria-selected="activeId === item.id" :aria-disabled="item.disabled || undefined" :data-kind="item.kind || 'command'"
                @pointermove="!item.disabled && setActive(item)" @click="selectItem(item)"
              >
                <component :is="item.icon" v-if="item.icon" class="norato-command-palette__icon" aria-hidden="true" focusable="false" />
                <span v-else class="norato-command-palette__icon-placeholder" aria-hidden="true" />
                <span class="norato-command-palette__item-copy"><span class="norato-command-palette__item-label">{{ item.label }}</span><span v-if="item.description" class="norato-command-palette__item-description">{{ item.description }}</span></span>
                <kbd v-if="item.shortcut" class="norato-command-palette__shortcut" dir="ltr">{{ item.shortcut }}</kbd>
              </div>
            </section>
          </div>
        </div>
        <footer class="norato-command-palette__footer" dir="ltr">
          <span><kbd>↑</kbd><kbd>↓</kbd><span>جابه‌جایی</span></span><span><kbd>↵</kbd><span>باز کردن</span></span><span><kbd>Esc</kbd><span>بستن</span></span>
        </footer>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
