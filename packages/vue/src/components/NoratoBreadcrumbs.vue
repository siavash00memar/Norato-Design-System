<script setup lang="ts">
import { computed, ref } from 'vue'

export type NoratoBreadcrumbItem = { label: string; home?: boolean } & ({ href: string; current?: false } | { href?: never; current: true })
const props = withDefaults(defineProps<{ id: string; label?: string; items: NoratoBreadcrumbItem[]; style?: 'plain' | 'glass'; size?: 'small' | 'medium' | 'large'; separator?: 'chevron' | 'slash'; collapsed?: boolean; dir?: 'rtl' | 'ltr' }>(), { label: 'مسیر صفحه', style: 'plain', size: 'medium', separator: 'chevron', collapsed: true, dir: 'rtl' })
const expanded = ref(false)
const currentIndex = computed(() => {
  const explicit = props.items.findIndex(item => item.current)
  return explicit >= 0 ? explicit : props.items.findIndex((item, index) => index === props.items.length - 1 && !item.href)
})
const shouldCollapse = computed(() => props.collapsed && props.items.length > 4 && currentIndex.value === props.items.length - 1)
const hiddenItems = computed(() => shouldCollapse.value ? props.items.slice(1, -2) : [])
const visibleItems = computed(() => shouldCollapse.value ? [props.items[0], ...props.items.slice(-2)] : props.items)
const isCurrent = (item: NoratoBreadcrumbItem, index: number) => index === currentIndex.value || item.current === true
</script>

<template>
  <nav :id="id" class="norato-breadcrumbs" :data-style="style" :data-size="size" :dir="dir" :aria-label="label">
    <ol class="norato-breadcrumbs__list">
      <template v-if="shouldCollapse">
        <li class="norato-breadcrumbs__item">
          <span v-if="isCurrent(items[0], 0)" class="norato-breadcrumbs__current" aria-current="page">{{ items[0].label }}</span>
          <a v-else-if="items[0].href" class="norato-breadcrumbs__link" :href="items[0].href"><svg v-if="items[0].home" class="norato-breadcrumbs__home-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-6v-7h-4v7H4a1 1 0 0 1-1-1z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg>{{ items[0].label }}</a>
          <span v-else class="norato-breadcrumbs__current" aria-current="page">{{ items[0].label }}</span>
          <span class="norato-breadcrumbs__separator" aria-hidden="true">{{ separator === 'slash' ? '/' : '‹' }}</span>
        </li>
        <li class="norato-breadcrumbs__item norato-breadcrumbs__collapse">
          <button class="norato-breadcrumbs__disclosure" type="button" :aria-expanded="expanded" :aria-controls="`${id}-hidden`" @click="expanded = !expanded">
            <span aria-hidden="true">…</span><span class="norato-breadcrumbs__sr-only">نمایش مسیرهای میانی</span>
          </button>
          <ol v-show="expanded" :id="`${id}-hidden`" class="norato-breadcrumbs__hidden-list">
            <li v-for="hidden in hiddenItems" :key="hidden.label"><a :href="hidden.href">{{ hidden.label }}</a></li>
          </ol>
          <span class="norato-breadcrumbs__separator" aria-hidden="true">{{ separator === 'slash' ? '/' : '‹' }}</span>
        </li>
        <li v-for="(item, index) in items.slice(-2)" :key="item.label" class="norato-breadcrumbs__item">
          <span v-if="isCurrent(item, items.length - 2 + index)" class="norato-breadcrumbs__current" aria-current="page">{{ item.label }}</span>
          <a v-else-if="item.href" class="norato-breadcrumbs__link" :href="item.href"><svg v-if="item.home" class="norato-breadcrumbs__home-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-6v-7h-4v7H4a1 1 0 0 1-1-1z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg>{{ item.label }}</a>
          <span v-else class="norato-breadcrumbs__current" aria-current="page">{{ item.label }}</span>
          <span v-if="index < 1" class="norato-breadcrumbs__separator" aria-hidden="true">{{ separator === 'slash' ? '/' : '‹' }}</span>
        </li>
      </template>
      <template v-else>
        <li v-for="(item, index) in visibleItems" :key="item.label" class="norato-breadcrumbs__item">
          <span v-if="isCurrent(item, index)" class="norato-breadcrumbs__current" aria-current="page">{{ item.label }}</span>
          <a v-else-if="item.href" class="norato-breadcrumbs__link" :href="item.href"><svg v-if="item.home" class="norato-breadcrumbs__home-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-6v-7h-4v7H4a1 1 0 0 1-1-1z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg>{{ item.label }}</a>
          <span v-else class="norato-breadcrumbs__current" aria-current="page">{{ item.label }}</span>
          <span v-if="index < visibleItems.length - 1" class="norato-breadcrumbs__separator" aria-hidden="true">{{ separator === 'slash' ? '/' : '‹' }}</span>
        </li>
      </template>
    </ol>
  </nav>
</template>
