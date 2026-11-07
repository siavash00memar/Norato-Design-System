<script setup lang="ts">
import { computed } from 'vue'

export type NoratoStep = {
  id: string
  label: string
  description?: string
}

const props = withDefaults(defineProps<{
  id: string
  steps: NoratoStep[]
  modelValue: string
  label?: string
  variant?: 'horizontal' | 'vertical' | 'compact' | 'dots'
  size?: 'small' | 'medium' | 'large'
  errorStep?: string
  errorText?: string
  dir?: 'rtl' | 'ltr'
}>(), {
  label: 'پیشرفت فرایند',
  variant: 'horizontal',
  size: 'medium',
  errorStep: '',
  errorText: '',
  dir: 'rtl',
})

const number = new Intl.NumberFormat('fa-IR')
const steps = computed(() => {
  const seen = new Set<string>()
  return props.steps.filter(step => {
    if (!step.id.trim() || seen.has(step.id)) return false
    seen.add(step.id)
    return true
  })
})
const currentIndex = computed(() => {
  const index = steps.value.findIndex(step => step.id === props.modelValue)
  return index < 0 ? 0 : index
})
const currentStep = computed(() => steps.value[currentIndex.value])
const genericError = 'این مرحله نیاز به بازبینی دارد.'
const errorStepItem = computed(() => steps.value.find(step => step.id === props.errorStep))
const errorMessage = computed(() => props.errorText || genericError)
const progressPercent = computed(() => steps.value.length <= 1 ? 100 : ((currentIndex.value + 1) / steps.value.length) * 100)
const announcement = computed(() => {
  if (!currentStep.value) return 'مرحله‌ای برای نمایش وجود ندارد.'
  const message = `مرحلهٔ ${number.format(currentIndex.value + 1)} از ${number.format(steps.value.length)}: ${currentStep.value.label}`
  return props.errorStep === currentStep.value.id ? `${message}. ${errorMessage.value}` : message
})
const stateFor = (step: NoratoStep, index: number) => {
  if (props.errorStep === step.id) return 'error'
  if (index === currentIndex.value) return 'current'
  return index < currentIndex.value ? 'completed' : 'upcoming'
}
const stateLabel = (step: NoratoStep, index: number) => {
  const state = stateFor(step, index)
  if (state === 'error') return errorMessage.value
  if (state === 'current') return 'مرحلهٔ جاری'
  if (state === 'completed') return 'انجام‌شده'
  return 'انجام‌نشده'
}
</script>

<template>
  <div :id="id" class="norato-stepper" :data-variant="variant" :data-size="size" :dir="dir">
    <div class="norato-stepper__visual" aria-hidden="true">
      <ol v-if="variant === 'horizontal' || variant === 'vertical'" class="norato-stepper__visual-list">
        <li v-for="(step, index) in steps" :key="step.id" class="norato-stepper__item" :data-state="stateFor(step, index)">
          <span class="norato-stepper__indicator">
            <svg v-if="stateFor(step, index) === 'completed'" viewBox="0 0 24 24" focusable="false"><path d="m5 12.5 4.2 4.2L19 7" /></svg>
            <span v-else-if="stateFor(step, index) === 'error'">!</span>
            <span v-else>{{ number.format(index + 1) }}</span>
          </span>
          <span class="norato-stepper__copy">
            <strong>{{ step.label }}</strong>
            <small v-if="errorStep === step.id" class="norato-stepper__error-copy">{{ errorMessage }}</small>
            <small v-else-if="variant === 'vertical' && step.description">{{ step.description }}</small>
          </span>
          <span v-if="index < steps.length - 1" class="norato-stepper__connector" />
        </li>
      </ol>

      <div v-else-if="variant === 'compact' && currentStep" class="norato-stepper__compact">
        <div class="norato-stepper__compact-heading"><strong>{{ currentStep.label }}</strong><span>مرحلهٔ {{ number.format(currentIndex + 1) }} از {{ number.format(steps.length) }}</span></div>
        <div class="norato-stepper__progress-track"><span :style="{ inlineSize: `${progressPercent}%` }" /></div>
      </div>

      <ol v-else-if="variant === 'dots'" class="norato-stepper__dots">
        <li v-for="(step, index) in steps" :key="step.id" :data-state="stateFor(step, index)"><span /></li>
      </ol>
    </div>

    <p v-if="errorStepItem && variant !== 'horizontal' && variant !== 'vertical'" class="norato-stepper__error-summary">
      <span aria-hidden="true">!</span>
      <strong>{{ errorStepItem.label }}:</strong>
      {{ errorMessage }}
    </p>

    <ol class="norato-stepper__semantics" :aria-label="label">
      <li v-for="(step, index) in steps" :key="step.id" :aria-current="index === currentIndex ? 'step' : undefined">
        {{ step.label }}؛ {{ stateLabel(step, index) }}
        <span v-if="step.description">؛ {{ step.description }}</span>
      </li>
    </ol>
    <span class="norato-stepper__sr-only" role="status" aria-live="polite" aria-atomic="true">{{ announcement }}</span>
  </div>
</template>
