<script setup lang="ts">
import type { Component } from 'vue'
import {
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from 'reka-ui'

defineOptions({ name: 'NoratoMenuItem' })

export type NoratoMenuItemData = {
  value: string
  label: string
  description?: string
  shortcut?: string
  icon?: Component
  disabled?: boolean
  danger?: boolean
  separatorBefore?: boolean
  children?: NoratoMenuItemData[]
}

const props = defineProps<{ item: NoratoMenuItemData; dir: 'rtl' | 'ltr'; size: 'small' | 'medium' | 'large'; portal: boolean }>()
const emit = defineEmits<{ select: [value: string] }>()
</script>

<template>
  <DropdownMenuSeparator v-if="item.separatorBefore" class="norato-menu__separator" />
  <DropdownMenuSub v-if="item.children?.length">
    <DropdownMenuSubTrigger class="norato-menu__item" :class="{ 'is-danger': item.danger }" :data-size="size" :disabled="item.disabled" :data-danger="item.danger || undefined">
      <component :is="item.icon" v-if="item.icon" class="norato-menu__icon" aria-hidden="true" focusable="false" />
      <span class="norato-menu__copy"><span class="norato-menu__label">{{ item.label }}</span><span v-if="item.description" class="norato-menu__description">{{ item.description }}</span></span>
      <span class="norato-menu__meta" aria-hidden="true"><svg class="norato-menu__submenu-arrow" viewBox="0 0 24 24" focusable="false"><path d="m9 18 6-6-6-6" /></svg></span>
    </DropdownMenuSubTrigger>
    <template v-if="portal"><DropdownMenuPortal><DropdownMenuSubContent class="norato-menu__panel norato-menu__submenu" :data-size="size" :dir="dir" :side-offset="4" :collision-padding="8"><NoratoMenuItem v-for="child in item.children" :key="child.value" :item="child" :dir="dir" :size="size" :portal="portal" @select="emit('select', $event)" /></DropdownMenuSubContent></DropdownMenuPortal></template>
    <DropdownMenuSubContent v-else class="norato-menu__panel norato-menu__submenu" :data-size="size" :dir="dir" :side-offset="4" :collision-padding="8"><NoratoMenuItem v-for="child in item.children" :key="child.value" :item="child" :dir="dir" :size="size" :portal="portal" @select="emit('select', $event)" /></DropdownMenuSubContent>
  </DropdownMenuSub>
  <DropdownMenuItem v-else class="norato-menu__item" :class="{ 'is-danger': item.danger }" :data-size="size" :disabled="item.disabled" :data-danger="item.danger || undefined" @select="emit('select', item.value)">
    <component :is="item.icon" v-if="item.icon" class="norato-menu__icon" aria-hidden="true" focusable="false" />
    <span class="norato-menu__copy"><span class="norato-menu__label">{{ item.label }}</span><span v-if="item.description" class="norato-menu__description">{{ item.description }}</span></span>
    <span v-if="item.shortcut" class="norato-menu__meta" dir="ltr">{{ item.shortcut }}</span>
  </DropdownMenuItem>
</template>
