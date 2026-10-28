<script setup lang="ts">
defineEmits<{ navigate: [page: string] }>()
</script>
<template>
  <article class="team-guide">
    <header class="guide-hero">
      <span class="eyebrow">TEAM GUIDE · VUE 3</span>
      <h1>راهنمای استفادهٔ تیم</h1>
      <p>این workspace مجموعهٔ قراردادها و adapterهای Vue نوراتو است. نمونه‌های نمایشی را با API آمادهٔ محصول یکی نگیرید.</p>
      <div class="guide-callout"><b>وضعیت انتشار</b><span>بسته‌های خصوصی workspace با نام‌های @norato/vue و @norato/tokens برای مصرف داخل همین repository آماده‌اند؛ هنوز در registry منتشر نشده‌اند.</span></div>
      <button class="button primary guide-action" type="button" @click="$emit('navigate', 'components')">آزمایش کامپوننت‌های Vue</button>
    </header>
    <div class="guide-section-grid">
    <section class="glass-card guide-section">
      <h2>شروع در همین workspace</h2>
      <ol><li><code>pnpm install</code></li><li>کامپوننت‌ها را از <code>@norato/vue</code> وارد کنید.</li><li>توکن‌ها را در stylesheet برنامه وارد کنید: <code>@import '@norato/tokens/css';</code></li><li>مستندات را با <code>pnpm --dir apps/vue dev</code> اجرا کنید.</li></ol>
      <p class="guide-note">این packageها خصوصی و workspace-local هستند؛ برای مصرف در پروژه‌ای خارج از این repository هنوز باید publish یا به مخزن تیمی منتقل شوند.</p>
    </section>
    <section class="glass-card guide-section">
      <h2>نمونه‌های API فعلی</h2>
      <div class="usage-example"><h3>Button</h3><pre><code>&lt;script setup lang="ts"&gt;
import { NoratoButton } from '@norato/vue'
&lt;/script&gt;
&lt;template&gt;
  &lt;NoratoButton label="ذخیرهٔ تغییرات" variant="primary" /&gt;
&lt;/template&gt;</code></pre><p>Props: <code>label</code>، <code>variant</code>، <code>type</code>، <code>disabled</code>، <code>loading</code>، <code>pressed</code>.</p></div>
      <div class="usage-example"><h3>Field / Input</h3><pre><code>&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import { NoratoField } from '@norato/vue'
const name = ref('')
&lt;/script&gt;
&lt;template&gt;&lt;NoratoField id="full-name" v-model="name" label="نام و نام خانوادگی" helper-text="نام نمایشی شما" /&gt;&lt;/template&gt;</code></pre><p><code>v-model</code> از طریق <code>modelValue</code> و <code>update:modelValue</code> کنترل می‌شود.</p></div>
      <div class="usage-example"><h3>Select</h3><pre><code>&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import { NoratoSelect } from '@norato/vue'
const city = ref('')
const options = [{ value: 'tehran', label: 'تهران' }]
&lt;/script&gt;
&lt;template&gt;&lt;NoratoSelect id="city" v-model="city" label="شهر" :options="options" /&gt;&lt;/template&gt;</code></pre><p>از select بومی استفاده می‌کند و رفتار صفحه‌کلید مرورگر را حفظ می‌کند.</p></div>
      <div class="usage-example"><h3>Checkbox و Radio</h3><pre><code>&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import { NoratoChoiceGroup } from '@norato/vue'
const selected = ref&lt;string[]&gt;([])
const options = [{ value: 'design', label: 'طراحی محصول' }]
&lt;/script&gt;
&lt;template&gt;
  &lt;NoratoChoiceGroup v-model:selected="selected" kind="checkbox" id="topics" label="موضوع‌ها" :options="options" /&gt;
  &lt;NoratoChoiceGroup v-model:selected="selected" kind="radio" id="plan" label="دوره" :options="options" /&gt;
&lt;/template&gt;</code></pre><p>برای Radio مقدار <code>kind="radio"</code> است؛ هر دو حالت با <code>update:selected</code> به والد گزارش می‌شوند.</p></div>
      <div class="usage-example"><h3>Date Picker</h3><p>وضعیت این خانواده Proposed است؛ trigger فعلی پنل تقویم باز نمی‌کند و برای محصول مصرف نشود.</p></div>
    </section>
    <section class="glass-card guide-section">
      <h2>قراردادهای تیم</h2>
      <ul><li>برای استایل مشترک از tokenهای <code>--norato-*</code> مصرف کنید؛ مقدار خام جدید را به foundation تبدیل کنید.</li><li>فارسی و RTL پیش‌فرض‌اند. عدد، شناسه یا متن واقعاً LTR را با <code>dir="ltr"</code> یا <code>dir="auto"</code> مشخص کنید.</li><li>برای ورودی label واقعی، خطای متنی و focus قابل‌مشاهده لازم است.</li><li><b>Implemented</b> یعنی adapter موجود در همین سطح؛ <b>Adapted</b> یعنی قابل‌ترکیب با primitiveها؛ <b>Proposed</b> یعنی قرارداد/طرح پیشنهادی. Preview به‌تنهایی کامپوننت آماده نیست.</li></ul>
      <p>پیش از تحویل: <code>pnpm check:tokens</code>، <code>pnpm --dir apps/vue typecheck</code> و <code>pnpm --dir apps/vue build</code> را اجرا کنید؛ سپس RTL، keyboard و اندازهٔ موبایل را در مرورگر مرور و در اسناد Spec ثبت کنید.</p>
    </section>
    <section class="glass-card guide-section"><h2>داده‌ها را از کجا بخوانیم؟</h2><p>متادیتای ساختاریافتهٔ کامپوننت‌ها از <code>@norato/components</code> وارد می‌شود. متن هر قرارداد فقط در فایل مستقل خودش نگه‌داری می‌شود.</p><pre><code>import { componentCatalog, componentBySlug } from '@norato/components'

const button = componentBySlug.get('button')</code></pre><ul><li><code>packages/components/src/catalog.ts</code> — شناسه، مسیر، برچسب جست‌وجو، بلوغ و adapter</li><li><code>packages/components/src/foundation-chapters.ts</code> — فصل‌های Foundation و کارت‌های مشتق‌شده</li><li><code>packages/components/README.md</code> — معنی فیلدها، API و قواعد نگهداشت داده</li><li><code>packages/vue/src/index.ts</code> — خروجی واقعی runtime برای Vue</li><li><code>apps/vue/src/usage-examples.ts</code> — نمونه‌های API قابل کپی</li><li><code>apps/vue/src/ComponentSpecimen.vue</code> — نمایش بصری که به‌تنهایی نشانهٔ آمادگی API نیست</li><li><code>docs/component-contracts/</code> — متن کامل قرارداد هر کامپوننت</li></ul><p>پس از تغییر کاتالوگ یا قراردادها، <code>pnpm check:catalog</code> را اجرا کنید. این داده‌ها خصوصی و workspace-local هستند.</p></section>
    </div>
  </article>
</template>
