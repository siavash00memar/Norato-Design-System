<script setup lang="ts">
import './stepper-playground.css'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import PlaygroundSelect from './PlaygroundSelect.vue'
import { NoratoButton, NoratoStepper } from '@norato/vue'
import type { NoratoStep } from '@norato/vue'
import { usageExamples } from './usage-examples'

const props = defineProps<{ copiedKey: string }>()
const emit = defineEmits<{ copy: [key: string, value: string] }>()
const steps: NoratoStep[] = [
  { id: 'cart', label: 'سبد خرید', description: 'مرور محصولات انتخاب‌شده' },
  { id: 'address', label: 'آدرس', description: 'ثبت نشانی ارسال سفارش' },
  { id: 'payment', label: 'پرداخت', description: 'انتخاب روش پرداخت' },
  { id: 'confirm', label: 'تأیید', description: 'بازبینی و ثبت سفارش' },
]
const current = ref('address')
const media = window.matchMedia('(max-width: 480px)')
const variant = ref<'horizontal' | 'vertical' | 'compact' | 'dots'>(media.matches ? 'compact' : 'horizontal')
const manualVariant = ref(false)
const syncResponsiveVariant = () => { if (!manualVariant.value) variant.value = media.matches ? 'compact' : 'horizontal' }
onMounted(() => media.addEventListener('change', syncResponsiveVariant))
onBeforeUnmount(() => media.removeEventListener('change', syncResponsiveVariant))
const size = ref<'small' | 'medium' | 'large'>('medium')
const direction = ref<'rtl' | 'ltr'>('rtl')
const errorStep = ref('')
const currentIndex = computed(() => Math.max(0, steps.findIndex(step => step.id === current.value)))
const next = () => { if (currentIndex.value < steps.length - 1) current.value = steps[currentIndex.value + 1].id }
const previous = () => { if (currentIndex.value > 0) current.value = steps[currentIndex.value - 1].id }
const example = computed(() => usageExamples.stepper
  .replace("const currentStep = ref('address')", `const currentStep = ref('${current.value}')`)
  .replace('<NoratoStepper id="checkout-progress" :steps="steps" :model-value="currentStep" />', `<NoratoStepper id="checkout-progress" :steps="steps" :model-value="currentStep" variant="${variant.value}" size="${size.value}" dir="${direction.value}"${errorStep.value ? ` error-step="${errorStep.value}" error-text="اطلاعات این مرحله را بررسی کنید."` : ''} />`))
</script>

<template>
  <div class="stepper-playground" dir="rtl">
    <div class="stepper-playground__preview">
      <NoratoStepper id="stepper-playground" :steps="steps" :model-value="current" :variant="variant" :size="size" :dir="direction" :error-step="errorStep" error-text="اطلاعات این مرحله را بررسی کنید." />
    </div>
    <div class="stepper-playground__controls">
      <PlaygroundSelect id="stepperplayground-variant" v-model="variant" label="نوع نمایش" :options="[{value:'horizontal',label:'افقی'},{value:'vertical',label:'عمودی'},{value:'compact',label:'فشرده'},{value:'dots',label:'نقطه‌ای'}]" @update:model-value="manualVariant = true" />
      <PlaygroundSelect id="stepperplayground-size" v-model="size" label="اندازهٔ نشانگر" :options="[{value:'small',label:'کوچک'},{value:'medium',label:'متوسط'},{value:'large',label:'بزرگ'}]" />
      <PlaygroundSelect id="stepperplayground-current" v-model="current" label="مرحلهٔ جاری" :options="steps.map(step => ({value:step.id,label:step.label}))" />
      <PlaygroundSelect id="stepperplayground-error" v-model="errorStep" label="مرحلهٔ خطادار" :options="[{value:'',label:'بدون خطا'},...steps.map(step => ({value:step.id,label:step.label}))]" />
      <PlaygroundSelect id="stepperplayground-direction" v-model="direction" label="جهت نمایش" :options="[{value:'rtl',label:'راست‌به‌چپ'},{value:'ltr',label:'چپ‌به‌راست'}]" />
      <div class="stepper-playground__actions">
        <NoratoButton label="مرحلهٔ قبل" variant="secondary" :disabled="currentIndex === 0" @click="previous" />
        <NoratoButton label="مرحلهٔ بعد" variant="primary" :disabled="currentIndex === steps.length - 1" @click="next" />
      </div>
    </div>
    <div class="code-copy-row"><button class="copy-section-button" type="button" @click="emit('copy', 'stepper-code', example)">{{ props.copiedKey === 'stepper-code' ? 'کپی شد' : 'کپی کد' }}</button></div>
    <pre class="usage-code" dir="ltr"><code>{{ example }}</code></pre>
  </div>
</template>
