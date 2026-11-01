<script setup lang="ts">
import { computed, ref } from 'vue'
import { NoratoCheckbox } from '@norato/vue'

defineProps<{ copiedKey: string }>()
const emit = defineEmits<{ copy: [key: string, value: string] }>()
const value = ref<boolean | 'indeterminate'>(false)
const disabled = ref(false)
const required = ref(false)
const invalid = ref(false)
const size = ref<16 | 20>(20)
const indeterminate = computed({
  get: () => value.value === 'indeterminate',
  set: (next: boolean) => { value.value = next ? 'indeterminate' : false },
})
const stateText = computed(() => value.value === 'indeterminate' ? 'نیمه‌انتخاب‌شده' : value.value ? 'انتخاب‌شده' : 'انتخاب‌نشده')
const snippet = computed(() => `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { NoratoCheckbox } from '@norato/vue'\nconst accepted = ref<boolean | 'indeterminate'>(${value.value === 'indeterminate' ? "'indeterminate'" : String(value.value)})\n<\/script>\n\n<template>\n  <NoratoCheckbox id="terms" v-model="accepted" label="قوانین را قبول دارم" description="با ادامه، شرایط استفاده را می‌پذیرید." :size="${size.value}"${required.value ? ' required' : ''}${disabled.value ? ' disabled' : ''}${invalid.value ? ' error-text="برای ادامه باید تأیید کنید."' : ''} />\n</template>`)
</script>

<template>
  <div class="button-playground" dir="rtl">
    <header><strong>آزمایش Checkbox اجرایی</strong><span>حالت انتخاب، indeterminate، اندازه و پیام خطا را بررسی کنید.</span></header>
    <div class="button-playground-preview checkbox-playground-preview">
      <NoratoCheckbox id="checkbox-playground-terms" v-model="value" label="قوانین را قبول دارم" description="با ادامه، شرایط استفاده را می‌پذیرید." :size="size" :required="required" :disabled="disabled" :error-text="invalid ? 'برای ادامه باید تأیید کنید.' : undefined" />
      <span role="status" aria-live="polite">{{ disabled ? 'چک‌باکس غیرفعال است' : stateText }}</span>
    </div>
    <div class="button-playground-toggles">
      <label class="button-playground-switch"><input v-model="indeterminate" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>نیمه‌انتخاب</span></label>
      <label class="button-playground-switch"><input v-model="required" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>الزامی</span></label>
      <label class="button-playground-switch"><input v-model="invalid" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>خطا</span></label>
      <label class="button-playground-switch"><input v-model="disabled" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>غیرفعال</span></label>
      <label class="select-playground-setting"><span>اندازه</span><select v-model="size"><option :value="16">۱۶px</option><option :value="20">۲۰px</option></select></label>
    </div>
    <div class="button-playground-code"><div class="button-playground-codebar"><strong>کد Vue</strong><button class="copy-section-button" type="button" @click="emit('copy', 'checkbox-playground', snippet)">{{ copiedKey === 'checkbox-playground' ? 'کپی شد' : copiedKey === 'checkbox-playground-error' ? 'ناموفق' : 'کپی کد' }}</button></div><pre class="usage-code" dir="ltr"><code>{{ snippet }}</code></pre></div>
  </div>
</template>
