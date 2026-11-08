<script setup lang="ts">
withDefaults(defineProps<{
  name: string
  price: string
  period?: string
  description?: string
  featured?: boolean
  dir?: 'rtl' | 'ltr'
}>(), { featured: false, dir: 'rtl' })
</script>

<template>
  <article class="norato-card norato-pricing-card" :data-featured="featured || undefined" :dir="dir">
    <span v-if="featured" class="norato-pricing-card__badge">پیشنهاد ویژه</span>
    <h3 class="norato-pricing-card__name">{{ name }}</h3>
    <p v-if="description" class="norato-pricing-card__description">{{ description }}</p>
    <p class="norato-pricing-card__price"><strong>{{ price }}</strong><span v-if="period"> / {{ period }}</span></p>
    <ul v-if="$slots.features" class="norato-pricing-card__features"><slot name="features" /></ul>
    <div v-if="$slots.action" class="norato-pricing-card__action"><slot name="action" /></div>
  </article>
</template>
