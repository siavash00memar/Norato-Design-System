<script setup lang="ts">
import { computed, ref } from 'vue'
import { NoratoButton, NoratoChoiceGroup, NoratoField, NoratoSelect } from '@norato/vue'

const name = ref('')
const city = ref('')
const topics = ref<string[]>(['design'])
const plan = ref<string[]>(['monthly'])
const submitted = ref(false)
const nameError = computed(() => submitted.value && !name.value.trim() ? 'نام را وارد کنید.' : '')
const cities = [
  { value: 'tehran', label: 'تهران' },
  { value: 'shiraz', label: 'شیراز' },
  { value: 'tabriz', label: 'تبریز' },
]
const topicOptions = [
  { value: 'design', label: 'طراحی محصول' },
  { value: 'research', label: 'پژوهش کاربر' },
  { value: 'engineering', label: 'مهندسی رابط' },
]
const plans = [
  { value: 'monthly', label: 'ماهانه' },
  { value: 'yearly', label: 'سالانه' },
]
</script>

<template>
  <section class="content-grid component-lab">
    <article class="glass-card demo-card">
      <h2>NoratoField · v-model</h2>
      <NoratoField id="lab-name" v-model="name" label="نام و نام خانوادگی" placeholder="مثلاً نگار محمدی" helper-text="این مقدار با v-model به والد برمی‌گردد." :error-text="nameError" required />
      <p class="lab-value">مقدار فعلی: <b>{{ name || '—' }}</b></p>
      <NoratoButton label="بررسی فرم" variant="primary" @click="submitted = true" />
    </article>
    <article class="glass-card demo-card">
      <h2>NoratoSelect · مقدار کنترل‌شده</h2>
      <NoratoSelect id="lab-city" v-model="city" label="شهر" :options="cities" placeholder="یک شهر انتخاب کنید" helper-text="با صفحه‌کلید هم قابل انتخاب است." />
      <p class="lab-value">انتخاب فعلی: <b>{{ cities.find(option => option.value === city)?.label || '—' }}</b></p>
    </article>
    <article class="glass-card demo-card">
      <h2>NoratoChoiceGroup · Checkbox</h2>
      <NoratoChoiceGroup v-model:selected="topics" kind="checkbox" id="lab-topics" label="موضوع‌های موردعلاقه" :options="topicOptions" />
      <p class="lab-value">مقادیر انتخاب‌شده: <b>{{ topics.join('، ') || '—' }}</b></p>
    </article>
    <article class="glass-card demo-card">
      <h2>NoratoChoiceGroup · Radio</h2>
      <NoratoChoiceGroup v-model:selected="plan" kind="radio" id="lab-plan" label="دورهٔ پرداخت" :options="plans" />
      <p class="lab-value">انتخاب فعلی: <b>{{ plan[0] || '—' }}</b></p>
    </article>
    <article class="glass-card demo-card">
      <h2>Button states</h2>
      <div class="button-stack"><NoratoButton label="عملیات اصلی" variant="primary" /><NoratoButton label="عملیات دوم" variant="secondary" /><NoratoButton label="غیرفعال" disabled /><NoratoButton label="در حال بارگذاری…" loading /></div>
    </article>
    <article class="glass-card demo-card">
      <h2>Date Picker · Proposed</h2>
      <p>adapter فعلی تقویم و انتخاب تاریخ ندارد؛ تا تکمیل تعامل، این خانواده از نمونهٔ اجرایی جدا نگه داشته شده است.</p>
      <span class="status proposed">Proposed</span>
    </article>
  </section>
</template>
