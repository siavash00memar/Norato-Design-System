<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { DialogClose, DialogContent, DialogDescription, DialogOverlay, DialogPortal, DialogRoot, DialogTitle, DialogTrigger } from 'reka-ui'

export type NoratoSidebarItem = { label: string; href?: string; icon?: string; count?: string | number; disabled?: boolean; children?: NoratoSidebarItem[] }
export type NoratoSidebarSection = { label: string; items: NoratoSidebarItem[] }
const props = withDefaults(defineProps<{ id: string; sections: NoratoSidebarSection[]; activeHref?: string; collapsed?: boolean; disabled?: boolean; variant?: 'glass' | 'bar'; brand?: string; dir?: 'rtl' | 'ltr' }>(), { collapsed: false, disabled: false, variant: 'glass', brand: 'نوراتو', dir: 'rtl' })
const emit = defineEmits<{ 'update:collapsed': [value: boolean]; navigate: [item: NoratoSidebarItem] }>()
const mobileOpen = ref(false)
const rootClass = computed(() => ['norato-sidebar', `is-${props.variant}`, { 'is-collapsed': props.collapsed, 'is-disabled': props.disabled }])
const current = (item: NoratoSidebarItem) => item.href === props.activeHref
function activate(item: NoratoSidebarItem) { if (!props.disabled && !item.disabled) { emit('navigate', item); mobileOpen.value = false } }
watch(() => props.activeHref, () => { mobileOpen.value = false })
</script>

<template>
  <aside :id="id" :class="rootClass" :dir="dir" aria-label="ناوبری کناری">
    <header class="norato-sidebar__header">
      <slot name="brand" :brand="brand"><a class="norato-sidebar__brand" href="/" :aria-label="brand"><span aria-hidden="true">ن</span><b v-if="!collapsed">{{ brand }}</b></a></slot>
      <slot v-if="!collapsed" name="workspace" />
      <button class="norato-sidebar__collapse" type="button" :disabled="disabled" :aria-label="collapsed ? 'باز کردن نوار کناری' : 'جمع کردن نوار کناری'" :aria-expanded="!collapsed" @click="emit('update:collapsed', !collapsed)"><svg v-if="collapsed" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m14 7-5 5 5 5M5 4v16" /></svg><svg v-else viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m10 7 5 5-5 5M19 4v16" /></svg></button>
    </header>
    <nav class="norato-sidebar__nav" aria-label="بخش‌های ناوبری">
      <section v-for="(section, sectionIndex) in sections" :key="`${section.label}-${sectionIndex}`" class="norato-sidebar__section">
        <h2 v-if="!collapsed" class="norato-sidebar__section-title">{{ section.label }}</h2>
        <ul><li v-for="(item, itemIndex) in section.items" :key="`${item.label}-${itemIndex}`">
          <a v-if="item.href && !disabled && !item.disabled" class="norato-sidebar__item" :class="{ 'is-current': current(item) }" :href="item.href" :title="collapsed ? item.label : undefined" :aria-label="collapsed ? item.label : undefined" :aria-current="current(item) ? 'page' : undefined" @click="activate(item)"><span class="norato-sidebar__icon" aria-hidden="true">{{ item.icon || '•' }}</span><span v-if="!collapsed" class="norato-sidebar__label">{{ item.label }}</span><span v-if="!collapsed && item.count !== undefined" class="norato-sidebar__count">{{ item.count }}</span></a>
          <span v-else class="norato-sidebar__item is-disabled" :aria-disabled="true" :aria-current="current(item) ? 'page' : undefined" :title="collapsed ? item.label : undefined"><span class="norato-sidebar__icon" aria-hidden="true">{{ item.icon || '•' }}</span><span v-if="!collapsed" class="norato-sidebar__label">{{ item.label }}</span><span v-if="!collapsed && item.count !== undefined" class="norato-sidebar__count">{{ item.count }}</span></span>
          <ul v-if="item.children?.length && !collapsed" class="norato-sidebar__children"><li v-for="(child, childIndex) in item.children" :key="`${child.label}-${childIndex}`"><a v-if="child.href && !disabled && !child.disabled" class="norato-sidebar__subitem" :class="{ 'is-current': current(child) }" :href="child.href" :aria-current="current(child) ? 'page' : undefined" @click="activate(child)">{{ child.label }}</a><span v-else class="norato-sidebar__subitem is-disabled" :aria-disabled="true">{{ child.label }}</span></li></ul>
        </li></ul>
      </section>
    </nav>
    <footer class="norato-sidebar__footer"><slot name="footer"><span class="norato-sidebar__user"><i aria-hidden="true">ن</i><span v-if="!collapsed"><b>نگار احمدی</b><small>مدیر فضای کاری</small></span></span></slot></footer>
    <DialogRoot v-model:open="mobileOpen">
      <DialogTrigger as-child><button class="norato-sidebar__mobile-trigger" type="button" :disabled="disabled" aria-label="باز کردن ناوبری" aria-haspopup="dialog"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16" /></svg></button></DialogTrigger>
      <DialogPortal><DialogOverlay class="norato-sidebar__overlay" /><DialogContent class="norato-sidebar__mobile-panel" :dir="dir"><DialogTitle class="norato-sidebar__mobile-title">{{ brand }}</DialogTitle><DialogDescription class="norato-sidebar__sr-only">ناوبری بخش‌های برنامه</DialogDescription><DialogClose class="norato-sidebar__mobile-close" aria-label="بستن ناوبری"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg></DialogClose><nav aria-label="ناوبری موبایل"><section v-for="section in sections" :key="section.label"><h2 class="norato-sidebar__section-title">{{ section.label }}</h2><ul><li v-for="item in section.items" :key="item.label"><a v-if="item.href && !disabled && !item.disabled" class="norato-sidebar__item" :class="{ 'is-current': current(item) }" :href="item.href" :aria-current="current(item) ? 'page' : undefined" @click="activate(item)"><span class="norato-sidebar__icon" aria-hidden="true">{{ item.icon || '•' }}</span>{{ item.label }}</a><span v-else class="norato-sidebar__item is-disabled" :aria-disabled="true">{{ item.label }}</span></li></ul></section></nav></DialogContent></DialogPortal>
    </DialogRoot>
  </aside>
</template>
