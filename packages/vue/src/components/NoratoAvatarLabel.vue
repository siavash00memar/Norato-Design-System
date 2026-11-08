<script setup lang="ts">
import NoratoAvatar, { type NoratoAvatarPresence, type NoratoAvatarShape, type NoratoAvatarSize, type NoratoAvatarType } from './NoratoAvatar.vue'
import NoratoAvatarStatus from './NoratoAvatarStatus.vue'

export type NoratoAvatarLabelSize = 's' | 'm' | 'l'

withDefaults(defineProps<{
  name: string
  description?: string
  type?: NoratoAvatarType
  src?: string
  initials?: string
  size?: NoratoAvatarLabelSize
  shape?: NoratoAvatarShape
  status?: NoratoAvatarPresence | 'none'
  dir?: 'rtl' | 'ltr'
}>(), { type: 'initials', size: 'm', shape: 'circle', status: 'none', dir: 'rtl' })

const avatarSize: Record<NoratoAvatarLabelSize, NoratoAvatarSize> = { s: 's', m: 'm', l: 'l' }
</script>

<template>
  <div class="norato-avatar-label" :data-size="size" :dir="dir">
    <NoratoAvatar :name="name" :type="type" :src="src" :initials="initials" :size="avatarSize[size]" :shape="shape" :status="status" :dir="dir" decorative />
    <span class="norato-avatar-label__content">
      <span class="norato-avatar-label__name">{{ name }}</span>
      <span v-if="description" class="norato-avatar-label__description">{{ description }}</span>
      <NoratoAvatarStatus v-if="status !== 'none'" :status="status" />
    </span>
  </div>
</template>
