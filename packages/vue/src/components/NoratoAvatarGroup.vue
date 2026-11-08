<script setup lang="ts">
import { computed } from 'vue'
import NoratoAvatar, { type NoratoAvatarSize } from './NoratoAvatar.vue'

export type NoratoAvatarGroupSize = 's' | 'm' | 'l' | 'xl'
export type NoratoAvatarGroupItem = {
  id: string
  name: string
  src?: string
  initials?: string
}

const props = withDefaults(defineProps<{
  items: readonly NoratoAvatarGroupItem[]
  size?: NoratoAvatarGroupSize
  max?: 3 | 4 | 5
  label?: string
  dir?: 'rtl' | 'ltr'
}>(), { size: 'm', max: 5, label: 'اعضای گروه', dir: 'rtl' })

const sizeMap: Record<NoratoAvatarGroupSize, NoratoAvatarSize> = { s: 's', m: 'm', l: 'l', xl: 'xl' }
const visibleItems = computed(() => props.items.slice(0, props.max))
const overflowCount = computed(() => Math.max(0, props.items.length - visibleItems.value.length))
</script>

<template>
  <ul class="norato-avatar-group" :aria-label="label" :data-size="size" :dir="dir">
    <li
      v-for="(item, index) in visibleItems"
      :key="item.id"
      class="norato-avatar-group__item"
      :style="{ '--norato-avatar-stack-index': String(visibleItems.length - index + 1) }"
    >
      <NoratoAvatar :name="item.name" :src="item.src" :initials="item.initials" :size="sizeMap[size]" />
    </li>
    <li v-if="overflowCount" class="norato-avatar-group__item norato-avatar-group__overflow" :style="{ '--norato-avatar-stack-index': String(visibleItems.length + 2) }">
      <span role="img" :aria-label="overflowCount + ' نفر دیگر'">+{{ overflowCount }}</span>
    </li>
  </ul>
</template>
