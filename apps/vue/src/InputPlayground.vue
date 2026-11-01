<script setup lang="ts">
import { computed, ref } from 'vue'
import { NoratoAmountInput, NoratoNumberInput, NoratoOtpInput, NoratoPasswordInput, NoratoPhoneInput, NoratoSearchInput, NoratoTextInput, NoratoTextarea } from '@norato/vue'

defineProps<{ copiedKey: string }>()
const emit = defineEmits<{ copy: [key: string, value: string] }>()
const name = ref('')
const password = ref('')
const phone = ref('')
const otp = ref('')
const number = ref('1')
const amount = ref('1250000')
const query = ref('')
const description = ref('')
const strength = ref<'empty' | 'weak' | 'fair' | 'good' | 'strong'>('empty')
const disabled = ref(false)
const loading = ref(false)
const invalid = ref(false)
const required = ref(false)
const snippet = computed(() => `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { NoratoAmountInput, NoratoNumberInput, NoratoOtpInput, NoratoPasswordInput, NoratoPhoneInput, NoratoSearchInput, NoratoTextInput, NoratoTextarea } from '@norato/vue'\nconst name = ref('')\nconst password = ref('')\nconst phone = ref('')\nconst otp = ref('')\nconst description = ref('')\nconst quantity = ref('1')\nconst amount = ref('')\nconst query = ref('')\n<\\/script>\n\n<template>\n  <NoratoTextInput id="name" v-model="name" label="نام"${required.value ? ' required' : ''}${disabled.value ? ' disabled' : ''}${loading.value ? ' loading' : ''}${invalid.value ? ' error-text="نام را بررسی کنید"' : ''} />\n  <NoratoPasswordInput id="password" v-model="password" label="گذرواژه" strength="${strength.value}" />\n  <NoratoPhoneInput id="phone" v-model="phone" label="شمارهٔ تلفن" calling-code="+98" />\n  <NoratoOtpInput id="otp" v-model="otp" label="کد یک‌بارمصرف" :length="6" />\n  <NoratoTextarea id="description" v-model="description" label="توضیحات" :maxlength="180" />\n  <NoratoNumberInput id="quantity" v-model="quantity" label="تعداد" :min="0" :max="99" />\n  <NoratoAmountInput id="amount" v-model="amount" label="مبلغ" currency="تومان" />\n  <NoratoSearchInput id="query" v-model="query" label="جست‌وجو" />\n</template>`)
</script>

<template>
  <div class="button-playground" dir="rtl">
    <header><strong>آزمایش ورودی اجرایی</strong><span>هشت زیرنوع با v-model و حالت‌های مشترک؛ قدرت رمز را برنامهٔ میزبان تعیین می‌کند.</span></header>
    <div class="button-playground-preview">
      <NoratoTextInput id="input-playground-name" v-model="name" label="نام و نام خانوادگی" placeholder="نام خود را بنویسید" :required="required" :disabled="disabled" :loading="loading" :error-text="invalid ? 'نام معتبر وارد کنید' : undefined" :helper-text="invalid ? undefined : 'نام کامل خود را وارد کنید'" />
      <NoratoPasswordInput id="input-playground-password" v-model="password" label="گذرواژه" :strength="strength" :required="required" :disabled="disabled" :loading="loading" :error-text="invalid ? 'گذرواژه را بررسی کنید' : undefined" />
      <NoratoPhoneInput id="input-playground-phone" v-model="phone" label="شمارهٔ تلفن" placeholder="۹۱۲ ۳۴۵ ۶۷۸۹" :required="required" :disabled="disabled" :loading="loading" :error-text="invalid ? 'شمارهٔ تلفن را بررسی کنید' : undefined" />
      <NoratoOtpInput id="input-playground-otp" v-model="otp" label="کد یک‌بارمصرف" :length="6" :required="required" :disabled="disabled" :loading="loading" :error-text="invalid ? 'کد واردشده معتبر نیست' : undefined" />
      <NoratoTextarea id="input-playground-description" v-model="description" label="توضیحات" placeholder="متن را بنویسید" :rows="3" :maxlength="180" :required="required" :disabled="disabled" :loading="loading" :error-text="invalid ? 'توضیحات را بررسی کنید' : undefined" />
      <NoratoNumberInput id="input-playground-number" v-model="number" label="تعداد" :min="0" :max="99" :required="required" :disabled="disabled" :loading="loading" :error-text="invalid ? 'تعداد را بررسی کنید' : undefined" />
      <NoratoAmountInput id="input-playground-amount" v-model="amount" label="مبلغ" :required="required" :disabled="disabled" :loading="loading" :error-text="invalid ? 'مبلغ را بررسی کنید' : undefined" />
      <NoratoSearchInput id="input-playground-search" v-model="query" label="جست‌وجو" placeholder="عبارت را بنویسید" :required="required" :disabled="disabled" :loading="loading" :error-text="invalid ? 'عبارت جست‌وجو را بررسی کنید' : undefined" />
      <label class="input-playground-strength">قدرت نمایشی گذرواژه<select v-model="strength"><option value="empty">خالی</option><option value="weak">ضعیف</option><option value="fair">متوسط</option><option value="good">خوب</option><option value="strong">قوی</option></select></label>
      <span v-if="!loading" role="status" aria-live="polite">{{ disabled ? 'ورودی‌ها غیرفعال‌اند' : name ? `نام: ${name}` : 'هنوز مقداری وارد نشده است' }}</span>
    </div>
    <div class="button-playground-toggles">
      <label class="button-playground-switch"><input v-model="required" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>الزامی</span></label>
      <label class="button-playground-switch"><input v-model="invalid" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>خطا</span></label>
      <label class="button-playground-switch"><input v-model="disabled" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>غیرفعال</span></label>
      <label class="button-playground-switch"><input v-model="loading" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>بارگذاری</span></label>
    </div>
    <div class="button-playground-code"><div class="button-playground-codebar"><strong>کد Vue</strong><button class="copy-section-button" type="button" @click="emit('copy', 'input-playground', snippet)">{{ copiedKey === 'input-playground' ? 'کپی شد' : copiedKey === 'input-playground-error' ? 'ناموفق' : 'کپی کد' }}</button></div><pre class="usage-code" dir="ltr"><code>{{ snippet }}</code></pre></div>
  </div>
</template>
