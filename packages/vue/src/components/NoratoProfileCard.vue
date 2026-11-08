<script setup lang="ts">
export type NoratoProfileCardLayout = 'center' | 'cover'

withDefaults(defineProps<{
  name: string
  role?: string
  avatarAlt?: string
  avatarSrc?: string
  coverSrc?: string
  layout?: NoratoProfileCardLayout
  dir?: 'rtl' | 'ltr'
}>(), { layout: 'center', dir: 'rtl' })
</script>

<template>
  <article class="norato-card norato-profile-card" :data-layout="layout" :dir="dir">
    <div v-if="$slots.cover || (layout === 'cover' && coverSrc)" class="norato-profile-card__cover" aria-hidden="true"><slot name="cover"><img v-if="layout === 'cover' && coverSrc" :src="coverSrc" alt="" /></slot></div>
    <img v-if="avatarSrc" class="norato-profile-card__avatar" :src="avatarSrc" :alt="avatarAlt || ''" />
    <span v-else-if="$slots.avatar" class="norato-profile-card__avatar"><slot name="avatar" /></span>
    <div class="norato-profile-card__content"><strong>{{ name }}</strong><span v-if="role">{{ role }}</span></div>
    <div v-if="$slots.default" class="norato-profile-card__footer"><slot /></div>
  </article>
</template>
