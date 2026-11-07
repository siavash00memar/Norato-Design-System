<script setup lang="ts">
import './stepper-contract-showcase.css'
import { NoratoStepper } from '@norato/vue'

const props = defineProps<{ section: 'Anatomy' | 'Variants' | 'Sizes' | 'States' }>()
const steps = [
  { id: 'cart', label: 'سبد خرید' },
  { id: 'address', label: 'آدرس' },
  { id: 'payment', label: 'پرداخت' },
]
const variants = [
  { id: 'horizontal', label: 'Horizontal', variant: 'horizontal' as const },
  { id: 'vertical', label: 'Vertical', variant: 'vertical' as const },
  { id: 'compact', label: 'Compact', variant: 'compact' as const },
  { id: 'dots', label: 'Dots', variant: 'dots' as const },
]
const sizes = [
  { id: 'small', label: 'Small', size: 'small' as const },
  { id: 'medium', label: 'Medium', size: 'medium' as const },
  { id: 'large', label: 'Large', size: 'large' as const },
]
const states = [
  { id: 'upcoming', label: 'Upcoming', current: 'cart', error: '' },
  { id: 'current', label: 'Current', current: 'address', error: '' },
  { id: 'completed', label: 'Completed', current: 'payment', error: '' },
  { id: 'error', label: 'Error', current: 'payment', error: 'address' },
]
</script>

<template>
  <div class="stepper-contract-showcase" :class="`stepper-contract-showcase--${props.section.toLowerCase()}`" aria-hidden="true" inert>
    <template v-if="props.section === 'Anatomy'">
      <div class="stepper-contract-anatomy__visual"><NoratoStepper id="stepper-anatomy" :steps="steps" model-value="address" /></div>
      <ol class="stepper-contract-anatomy__legend">
        <li><b>۰۱</b><span><strong>Step Indicator</strong><small>شماره یا نشان تیکِ وضعیت مرحله</small></span></li>
        <li><b>۰۲</b><span><strong>Connector</strong><small>خط اتصال مراحل در جهت جریان</small></span></li>
        <li><b>۰۳</b><span><strong>Title</strong><small>نام کوتاه هر مرحله</small></span></li>
        <li><b>۰۴</b><span><strong>Description</strong><small>توضیح اختیاری برای نمایش عمودی</small></span></li>
      </ol>
    </template>
    <template v-else-if="props.section === 'Variants'">
      <article v-for="item in variants" :key="item.id" class="stepper-contract-card">
        <header><strong>{{ item.label }}</strong><small>Stepper</small></header>
        <NoratoStepper :id="`stepper-variant-${item.id}`" :steps="steps" model-value="address" :variant="item.variant" size="small" />
      </article>
    </template>
    <template v-else-if="props.section === 'Sizes'">
      <article v-for="item in sizes" :key="item.id" class="stepper-contract-card stepper-contract-card--size">
        <header><strong>{{ item.label }}</strong><small>{{ item.size }}</small></header>
        <NoratoStepper :id="`stepper-size-${item.id}`" :steps="[steps[1]]" model-value="address" :size="item.size" />
      </article>
    </template>
    <template v-else>
      <article v-for="item in states" :key="item.id" class="stepper-contract-card">
        <header><strong>{{ item.label }}</strong><small>Step</small></header>
        <NoratoStepper :id="`stepper-state-${item.id}`" :steps="steps" :model-value="item.current" :error-step="item.error" error-text="اطلاعات این مرحله را بررسی کنید." size="small" />
      </article>
    </template>
    <span class="visual-kind">نمونه‌های واقعی adapter؛ نمایش ایستا و بدون تعامل</span>
  </div>
</template>
