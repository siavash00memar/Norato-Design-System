<script setup lang="ts">
import '../menu.css'
import {
  DropdownMenuContent,
  DropdownMenuPortal,
  DropdownMenuRoot,
  DropdownMenuTrigger,
} from 'reka-ui'
import NoratoMenuItem from './NoratoMenuItem.vue'
import type { NoratoMenuItemData } from './NoratoMenuItem.vue'

export type NoratoMenuItem = NoratoMenuItemData

withDefaults(defineProps<{
  id: string
  label: string
  items: NoratoMenuItem[]
  size?: 'small' | 'medium' | 'large'
  dir?: 'rtl' | 'ltr'
  portal?: boolean
}>(), {
  size: 'medium',
  dir: 'rtl',
  portal: true,
})

const emit = defineEmits<{ select: [value: string] }>()
const open = defineModel<boolean>('open', { default: false })
</script>

<template>
  <DropdownMenuRoot v-model:open="open" :dir="dir" :modal="false">
    <div class="norato-menu" :data-size="size" :dir="dir">
      <DropdownMenuTrigger as-child>
        <button class="norato-menu__trigger" type="button" :aria-label="label" :aria-controls="`${id}-content`">
          <slot name="trigger" :open="open">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="5" cy="12" r="1.6" /><circle cx="12" cy="12" r="1.6" /><circle cx="19" cy="12" r="1.6" /></svg>
          </slot>
        </button>
      </DropdownMenuTrigger>
      <template v-if="portal">
        <DropdownMenuPortal>
          <DropdownMenuContent :id="`${id}-content`" class="norato-menu__panel" :data-size="size" :dir="dir" align="start" :side-offset="8" :collision-padding="8">
            <NoratoMenuItem v-for="item in items" :key="item.value" :item="item" :dir="dir" :size="size" :portal="portal" @select="emit('select', $event)" />
          </DropdownMenuContent>
        </DropdownMenuPortal>
      </template>
      <DropdownMenuContent v-else :id="`${id}-content`" class="norato-menu__panel" :data-size="size" :dir="dir" align="start" :side-offset="8" :collision-padding="8">
        <NoratoMenuItem v-for="item in items" :key="item.value" :item="item" :dir="dir" :size="size" :portal="portal" @select="emit('select', $event)" />
      </DropdownMenuContent>
    </div>
  </DropdownMenuRoot>
</template>

