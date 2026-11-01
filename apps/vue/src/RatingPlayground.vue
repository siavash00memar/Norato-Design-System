<script setup lang="ts">
import { computed, ref } from 'vue'
import { NoratoRating } from '@norato/vue'

defineProps<{ copiedKey: string }>()
const emit = defineEmits<{ copy: [key: string, value: string] }>()
const value = ref<number | undefined>(4)
const size = ref<'medium' | 'large'>('medium')
const displaySize = ref<'small' | 'medium' | 'large'>('medium')
const disabled = ref(false)
const score = ref(4.5)
const count = ref(128)
const distribution = { 5: 76, 4: 28, 3: 14, 2: 6, 1: 4 } as const
const snippet = computed(() => `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { NoratoRating } from '@norato/vue'\nconst value = ref<number | undefined>(${value.value ?? 'undefined'})\n<\\/script>\n<template><NoratoRating id="review" variant="input" v-model="value" label="امتیاز شما" size="${size.value}"${disabled.value ? ' disabled' : ''} /></template>`)
</script>

<template>
  <div class="button-playground rating-playground" dir="rtl">
    <header><strong>آزمایش Rating اجرایی</strong><span>یکی از پنج ستاره را با ماوس یا کلیدهای جهت انتخاب کن.</span></header>
    <div class="button-playground-preview rating-playground-preview">
      <NoratoRating id="rating-playground" variant="input" v-model="value" :size="size" :disabled="disabled" label="امتیاز شما" :helper-text="value ? `امتیاز انتخابی: ${new Intl.NumberFormat('fa-IR').format(value)} از ۵` : 'امتیازت رو انتخاب کن'" />
      <NoratoRating id="rating-display-playground" variant="display" :value="score" :count="count" :size="displaySize" />
      <NoratoRating id="rating-summary-playground" variant="summary" :value="score" :count="count" :distribution="distribution" />
    </div>
    <div class="button-playground-toggles">
      <label class="select-playground-setting"><span>اندازه</span><select v-model="size"><option value="medium">متوسط</option><option value="large">بزرگ</option></select></label>
      <label class="select-playground-setting"><span>اندازهٔ نمایش</span><select v-model="displaySize"><option value="small">کوچک</option><option value="medium">متوسط</option><option value="large">بزرگ</option></select></label>
      <label class="select-playground-setting"><span>امتیاز نمایشی</span><select v-model.number="score"><option :value="0">۰ از ۵</option><option :value="1">۱ از ۵</option><option :value="2">۲ از ۵</option><option :value="3">۳ از ۵</option><option :value="3.5">۳٫۵ از ۵</option><option :value="4">۴ از ۵</option><option :value="4.5">۴٫۵ از ۵</option><option :value="5">۵ از ۵</option></select></label>
      <label class="select-playground-setting"><span>تعداد نظرها</span><input v-model.number="count" type="number" min="0" aria-label="تعداد نظرها" /></label>
      <label class="button-playground-switch"><input v-model="disabled" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>غیرفعال</span></label>
      <button class="copy-section-button" type="button" @click="value = undefined">پاک‌کردن انتخاب</button>
    </div>
    <div class="button-playground-code"><div class="button-playground-codebar"><strong>کد Vue</strong><button class="copy-section-button" type="button" @click="emit('copy', 'rating-playground', snippet)">{{ copiedKey === 'rating-playground' ? 'کپی شد' : copiedKey === 'rating-playground-error' ? 'ناموفق' : 'کپی کد' }}</button></div><pre class="usage-code" dir="ltr"><code>{{ snippet }}</code></pre></div>
  </div>
</template>
