<script setup lang="ts">
import { computed } from 'vue'
import { RadioGroupItem, RadioGroupRoot } from 'reka-ui'

export type NoratoRatingDistribution = Partial<Record<1 | 2 | 3 | 4 | 5, number>>
type RatingMode = 'display' | 'input' | 'summary'

const props = withDefaults(defineProps<{
  id: string
  variant?: RatingMode
  value?: number
  modelValue?: number
  count?: number
  distribution?: NoratoRatingDistribution
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  label?: string
  helperText?: string
}>(), { variant: 'display', size: 'medium', value: 0, count: 0, label: 'امتیاز شما', helperText: 'امتیازت رو انتخاب کن' })

const emit = defineEmits<{ 'update:modelValue': [value: number] }>()
const stars = [1, 2, 3, 4, 5] as const
const summaryOrder = [5, 4, 3, 2, 1] as const
const currentValue = computed(() => props.variant === 'input' ? (props.modelValue ?? 0) : props.value)
const totalReviews = computed(() => Object.values(props.distribution || {}).reduce((sum, count) => sum + Math.max(0, count || 0), 0))
const displayScore = (value: number) => new Intl.NumberFormat('fa-IR', { minimumFractionDigits: Number.isInteger(value) ? 1 : 1, maximumFractionDigits: 1 }).format(value)
const starFill = (value: number, star: number) => value >= star ? 'full' : value >= star - 0.5 ? 'half' : 'empty'
const distributionCount = (star: number) => Math.max(0, props.distribution?.[star as 1 | 2 | 3 | 4 | 5] || 0)
const distributionPercent = (star: number) => totalReviews.value ? `${(distributionCount(star) / totalReviews.value) * 100}%` : '0%'
const accessibleScore = computed(() => `${displayScore(currentValue.value)} از ۵، ${new Intl.NumberFormat('fa-IR').format(props.count)} نظر`)
const inputSize = computed(() => props.size === 'large' ? 'large' : 'medium')
</script>

<template>
  <div class="norato-rating" :class="[`norato-rating--${variant}`, `norato-rating--${size}`, { 'norato-rating--disabled': disabled }]" dir="rtl">
    <template v-if="variant === 'input'">
      <span :id="`${id}-label`" class="norato-rating__input-label">{{ label }}</span>
      <RadioGroupRoot :id="id" class="norato-rating__input" :model-value="modelValue ? String(modelValue) : undefined" :disabled="disabled" :aria-labelledby="`${id}-label`" dir="rtl" @update:model-value="value => value && emit('update:modelValue', Number(value))">
        <RadioGroupItem v-for="star in stars" :key="star" class="norato-rating__choice" :value="String(star)" :aria-label="`${new Intl.NumberFormat('fa-IR').format(star)} از ۵`" :data-star="star">
          <span class="norato-rating__star" :class="`norato-rating__star--${starFill(currentValue, star)}`" aria-hidden="true">★</span>
        </RadioGroupItem>
      </RadioGroupRoot>
      <span class="norato-rating__helper">{{ helperText }}</span>
      <span class="sr-only" aria-live="polite">{{ accessibleScore }}</span>
    </template>

    <div v-else class="norato-rating__readout" role="img" :aria-label="accessibleScore">
      <template v-if="variant === 'summary'">
        <div class="norato-rating__summary-top">
          <strong class="norato-rating__value">{{ displayScore(value) }}</strong>
          <span class="norato-rating__stars" :data-input-size="inputSize">
            <span v-for="star in stars" :key="star" class="norato-rating__star" :class="`norato-rating__star--${starFill(value, star)}`">★</span>
          </span>
          <span class="norato-rating__count">{{ new Intl.NumberFormat('fa-IR').format(count) }} نظر</span>
        </div>
        <ul class="norato-rating__distribution" aria-hidden="true">
          <li v-for="star in summaryOrder" :key="star">
            <span>{{ new Intl.NumberFormat('fa-IR').format(star) }} ستاره</span>
            <span class="norato-rating__bar"><i :style="{ inlineSize: distributionPercent(star) }" /></span>
            <span>{{ new Intl.NumberFormat('fa-IR').format(distributionCount(star)) }}</span>
          </li>
        </ul>
      </template>
      <template v-else>
        <span class="norato-rating__stars">
          <span v-for="star in stars" :key="star" class="norato-rating__star" :class="`norato-rating__star--${starFill(value, star)}`">★</span>
        </span>
        <strong class="norato-rating__value">{{ displayScore(value) }}</strong>
        <span class="norato-rating__count">({{ new Intl.NumberFormat('fa-IR').format(count) }} نظر)</span>
      </template>
    </div>
  </div>
</template>
