<script setup lang="ts">
import { computed, ref } from 'vue'
import { NoratoField } from '@norato/vue'

defineProps<{ copiedKey: string }>()
const emit = defineEmits<{ copy: [key: string, value: string] }>()
const value = ref('')
const disabled = ref(false)
const loading = ref(false)
const invalid = ref(false)
const required = ref(false)
const snippet = computed(() => `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { NoratoField } from '@norato/vue'\nconst name = ref('')\n<\/script>\n\n<template>\n  <NoratoField id="person-name" v-model="name" label="نام و نام خانوادگی" placeholder="نام خود را بنویسید"${required.value ? ' required' : ''}${disabled.value ? ' disabled' : ''}${loading.value ? ' loading' : ''}${invalid.value ? ' error-text="نام معتبر وارد کنید"' : ' helper-text="نام کامل خود را وارد کنید"'} />\n</template>`)
</script>

<template>
  <div class="button-playground" dir="rtl">
    <header><strong>آزمایش ورودی اجرایی</strong><span>مقدار و وضعیت فیلد را تغییر دهید و کد Vue را کپی کنید.</span></header>
    <div class="button-playground-preview">
      <NoratoField id="input-playground-name" v-model="value" label="نام و نام خانوادگی" placeholder="نام خود را بنویسید" :required="required" :disabled="disabled" :loading="loading" :error-text="invalid ? 'نام معتبر وارد کنید' : undefined" :helper-text="invalid ? undefined : 'نام کامل خود را وارد کنید'" />
      <span v-if="!loading" role="status" aria-live="polite">{{ disabled ? 'ورودی غیرفعال است' : value ? `مقدار: ${value}` : 'هنوز مقداری وارد نشده است' }}</span>
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
