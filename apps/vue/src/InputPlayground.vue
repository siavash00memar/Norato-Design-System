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
const readOnly = ref(false)
const success = ref(false)
const size = ref<'small' | 'medium' | 'large' | 'xlarge'>('medium')
const labelPlacement = ref<'outside' | 'inside'>('outside')
const otpLength = ref<4 | 5 | 6>(6)
const numberPresentation = ref<'stepper' | 'stacked'>('stepper')
const callingCode = ref('+98')
const shortcut = ref(true)
const snippet = computed(() => `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { NoratoAmountInput, NoratoNumberInput, NoratoOtpInput, NoratoPasswordInput, NoratoPhoneInput, NoratoSearchInput, NoratoTextInput, NoratoTextarea } from '@norato/vue'\nconst name = ref('')\nconst password = ref('')\nconst phone = ref('')\nconst otp = ref('')\nconst description = ref('')\nconst quantity = ref('1')\nconst amount = ref('')\nconst query = ref('')\n<\\/script>\n\n<template>\n  <NoratoTextInput id="name" v-model="name" label="نام" size="${size.value}" label-placement="${labelPlacement.value}"${required.value ? ' required' : ''}${disabled.value ? ' disabled' : ''}${loading.value ? ' loading' : ''}${invalid.value ? ' error-text="نام را بررسی کنید"' : ''} />\n  <NoratoPasswordInput id="password" v-model="password" label="گذرواژه" size="${size.value}" strength="${strength.value}" />\n  <NoratoPhoneInput id="phone" v-model="phone" label="شمارهٔ تلفن" size="${size.value}" calling-code="${callingCode.value}" />\n  <NoratoOtpInput id="otp" v-model="otp" label="کد یک‌بارمصرف" size="${size.value}" :length="${otpLength.value}" />\n  <NoratoTextarea id="description" v-model="description" label="توضیحات" size="${size.value}" label-placement="${labelPlacement.value}" :maxlength="180" />\n  <NoratoNumberInput id="quantity" v-model="quantity" label="تعداد" size="${size.value}" presentation="${numberPresentation.value}" :min="0" :max="99" />\n  <NoratoAmountInput id="amount" v-model="amount" label="مبلغ" size="${size.value}" currency="تومان" />\n  <NoratoSearchInput id="query" v-model="query" label="جست‌وجو" size="${size.value}" :shortcut="${shortcut.value}" />\n</template>`)
</script>

<template>
  <div class="button-playground" dir="rtl">
    <header><strong>آزمایش ورودی اجرایی</strong><span>هشت زیرنوع با v-model و حالت‌های مشترک؛ قدرت رمز را برنامهٔ میزبان تعیین می‌کند.</span></header>
    <div class="button-playground-preview">
      <NoratoTextInput id="input-playground-name" v-model="name" label="نام و نام خانوادگی" placeholder="نام خود را بنویسید" :size="size" :label-placement="labelPlacement" :required="required" :disabled="disabled" :loading="loading" :read-only="readOnly" :success-text="success ? 'مقدار تأیید شد' : undefined" :error-text="invalid ? 'نام معتبر وارد کنید' : undefined" :helper-text="invalid ? undefined : 'نام کامل خود را وارد کنید'" />
      <NoratoPasswordInput id="input-playground-password" v-model="password" label="گذرواژه" :size="size" :label-placement="labelPlacement" :strength="strength" :required="required" :disabled="disabled" :loading="loading" :read-only="readOnly" :success-text="success ? 'گذرواژه تأیید شد' : undefined" :error-text="invalid ? 'گذرواژه را بررسی کنید' : undefined" />
      <NoratoPhoneInput id="input-playground-phone" v-model="phone" label="شمارهٔ تلفن" placeholder="۹۱۲ ۳۴۵ ۶۷۸۹" :size="size" :label-placement="labelPlacement" :calling-code="callingCode" :required="required" :disabled="disabled" :loading="loading" :read-only="readOnly" :success-text="success ? 'شماره تأیید شد' : undefined" :error-text="invalid ? 'شمارهٔ تلفن را بررسی کنید' : undefined" />
      <NoratoOtpInput id="input-playground-otp" v-model="otp" label="کد یک‌بارمصرف" :length="otpLength" :size="size" :required="required" :disabled="disabled" :loading="loading" :read-only="readOnly" :success-text="success ? 'کد تأیید شد' : undefined" :error-text="invalid ? 'کد واردشده معتبر نیست' : undefined" />
      <NoratoTextarea id="input-playground-description" v-model="description" label="توضیحات" placeholder="متن را بنویسید" :rows="3" :size="size" :label-placement="labelPlacement" :maxlength="180" :required="required" :disabled="disabled" :loading="loading" :read-only="readOnly" :success-text="success ? 'توضیحات تأیید شد' : undefined" :error-text="invalid ? 'توضیحات را بررسی کنید' : undefined" />
      <NoratoNumberInput id="input-playground-number" v-model="number" label="تعداد" :size="size" :label-placement="labelPlacement" :presentation="numberPresentation" :min="0" :max="99" :required="required" :disabled="disabled" :loading="loading" :read-only="readOnly" :success-text="success ? 'تعداد تأیید شد' : undefined" :error-text="invalid ? 'تعداد را بررسی کنید' : undefined" />
      <NoratoAmountInput id="input-playground-amount" v-model="amount" label="مبلغ" :size="size" :label-placement="labelPlacement" :required="required" :disabled="disabled" :loading="loading" :read-only="readOnly" :success-text="success ? 'مبلغ تأیید شد' : undefined" :error-text="invalid ? 'مبلغ را بررسی کنید' : undefined" />
      <NoratoSearchInput id="input-playground-search" v-model="query" label="جست‌وجو" placeholder="عبارت را بنویسید" :size="size" :label-placement="labelPlacement" :shortcut="shortcut" :required="required" :disabled="disabled" :loading="loading" :read-only="readOnly" :success-text="success ? 'جست‌وجو تأیید شد' : undefined" :error-text="invalid ? 'عبارت جست‌وجو را بررسی کنید' : undefined" />
      <label class="input-playground-strength">قدرت نمایشی گذرواژه<select v-model="strength"><option value="empty">خالی</option><option value="weak">ضعیف</option><option value="fair">متوسط</option><option value="good">خوب</option><option value="strong">قوی</option></select></label>
      <span v-if="!loading" role="status" aria-live="polite">{{ disabled ? 'ورودی‌ها غیرفعال‌اند' : name ? `نام: ${name}` : 'هنوز مقداری وارد نشده است' }}</span>
    </div>
    <div class="button-playground-toggles">
      <label class="button-playground-switch"><input v-model="required" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>الزامی</span></label>
      <label class="button-playground-switch"><input v-model="invalid" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>خطا</span></label>
      <label class="button-playground-switch"><input v-model="disabled" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>غیرفعال</span></label>
      <label class="button-playground-switch"><input v-model="loading" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>بارگذاری</span></label>
      <label class="button-playground-switch"><input v-model="success" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>موفق</span></label>
      <label class="button-playground-switch"><input v-model="readOnly" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>فقط‌خواندنی</span></label>
    </div>
    <div class="input-playground-selects">
      <label>اندازه<select v-model="size"><option value="small">کوچک</option><option value="medium">متوسط</option><option value="large">بزرگ</option><option value="xlarge">خیلی بزرگ</option></select></label>
      <label>جای برچسب<select v-model="labelPlacement"><option value="outside">بیرون</option><option value="inside">داخل</option></select></label>
      <label>طول کد<select v-model.number="otpLength"><option :value="4">۴ رقم</option><option :value="5">۵ رقم</option><option :value="6">۶ رقم</option></select></label>
      <label>چیدمان عدد<select v-model="numberPresentation"><option value="stepper">کنارهم</option><option value="stacked">روی‌هم</option></select></label>
      <label>پیش‌شماره<input v-model="callingCode" type="text" dir="ltr" /></label>
      <label class="button-playground-switch"><input v-model="shortcut" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>میانبر جست‌وجو</span></label>
    </div>
    <div class="button-playground-code"><div class="button-playground-codebar"><strong>کد Vue</strong><button class="copy-section-button" type="button" @click="emit('copy', 'input-playground', snippet)">{{ copiedKey === 'input-playground' ? 'کپی شد' : copiedKey === 'input-playground-error' ? 'ناموفق' : 'کپی کد' }}</button></div><pre class="usage-code" dir="ltr"><code>{{ snippet }}</code></pre></div>
  </div>
</template>
