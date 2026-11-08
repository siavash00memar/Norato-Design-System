<script setup lang="ts">
import type { NoratoCardStyle } from './NoratoCard.vue'

export type NoratoContentCardLayout = 'vertical' | 'horizontal' | 'overlay' | 'text'

withDefaults(defineProps<{
  id: string
  title: string
  description?: string
  meta?: string
  layout?: NoratoContentCardLayout
  style?: NoratoCardStyle
  href?: string
  disabled?: boolean
  dir?: 'rtl' | 'ltr'
}>(), { layout: 'vertical', style: 'glass', disabled: false, dir: 'rtl' })
</script>

<template>
  <article class="norato-card norato-content-card" :data-style="style" :data-layout="layout" :data-disabled="disabled || undefined" :dir="dir">
    <a v-if="href && !disabled" class="norato-content-card__link" :href="href" :aria-labelledby="`${id}-title`" :aria-describedby="description ? `${id}-description` : undefined">
      <span v-if="$slots.media && layout !== 'text'" class="norato-content-card__media"><slot name="media" /></span>
      <span class="norato-content-card__content">
        <span v-if="meta || $slots.tag" class="norato-content-card__eyebrow"><slot name="tag">{{ meta }}</slot></span>
        <h3 :id="`${id}-title`" class="norato-content-card__title">{{ title }}</h3>
        <span v-if="description" :id="`${id}-description`" class="norato-content-card__description">{{ description }}</span>
        <span v-if="$slots.footer" class="norato-content-card__footer"><slot name="footer" /></span>
      </span>
    </a>
    <div v-else class="norato-content-card__link" :aria-disabled="disabled || undefined">
      <span v-if="$slots.media && layout !== 'text'" class="norato-content-card__media"><slot name="media" /></span>
      <span class="norato-content-card__content">
        <span v-if="meta || $slots.tag" class="norato-content-card__eyebrow"><slot name="tag">{{ meta }}</slot></span>
        <h3 :id="`${id}-title`" class="norato-content-card__title">{{ title }}</h3>
        <span v-if="description" :id="`${id}-description`" class="norato-content-card__description">{{ description }}</span>
        <span v-if="$slots.footer" class="norato-content-card__footer"><slot name="footer" /></span>
      </span>
    </div>
  </article>
</template>
