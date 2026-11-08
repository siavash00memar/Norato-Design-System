<script setup lang="ts">
import { computed, ref } from 'vue'
import { NoratoCard, NoratoContentCard, NoratoPricingCard, NoratoProfileCard, NoratoSelectableCard, NoratoStatCard, type NoratoCardStyle, type NoratoContentCardLayout, type NoratoProfileCardLayout, type NoratoStatTrend } from '@norato/vue'
import PlaygroundSelect from './PlaygroundSelect.vue'

type CardKind = 'surface' | 'content' | 'stat' | 'profile' | 'pricing' | 'selectable'
const kind = ref<CardKind>('content')
const style = ref<NoratoCardStyle>('glass')
const surfaceSelected = ref(false)
const surfaceDisabled = ref(false)
const layout = ref<NoratoContentCardLayout>('vertical')
const profileLayout = ref<NoratoProfileCardLayout>('center')
const statTrend = ref<NoratoStatTrend>('up')
const direction = ref<'rtl' | 'ltr'>('rtl')
const pricingFeatured = ref(false)
const selectedPlan = ref<string | boolean>('pro')
const basicChecked = ref(false)
const proChecked = ref(true)
const control = ref<'radio' | 'checkbox'>('radio')
const disabledState = ref<'enabled' | 'disabled'>('enabled')
const props = defineProps<{ copiedKey?: string }>()
const emit = defineEmits<{ copy: [key: string, text: string] }>()
const snippet = computed(() => {
  const dir = ' dir="' + direction.value + '"'
  const disabled = disabledState.value === 'disabled' ? ' disabled' : ''
  if (kind.value === 'surface') return '<NoratoCard style="' + style.value + '"' + (surfaceSelected.value ? ' selected' : '') + (surfaceDisabled.value ? ' disabled' : '') + dir + '>\n  <h2>عنوان کارت</h2>\n  <p>محتوای مرتبط را اینجا قرار بده.</p>\n</NoratoCard>'
  if (kind.value === 'content') return '<NoratoContentCard id="article-card" title="ساختن یک دیزاین سیستم فارسی" description="از توکن‌ها تا کامپوننت‌ها، قدم‌به‌قدم." meta="راهنما · ۵ دقیقه" layout="' + layout.value + '" style="' + style.value + '" href="/guide"' + disabled + dir + '>\n  <template #footer>نگار محمدی</template>\n</NoratoContentCard>'
  if (kind.value === 'stat') return '<NoratoStatCard label="کاربران فعال" value="۱۲٬۴۸۰" trend="' + statTrend.value + '" trend-label="' + (statTrend.value === 'up' ? '۱۲٪ بیشتر از ماه قبل' : statTrend.value === 'down' ? '۵٪ کمتر از ماه قبل' : 'بدون تغییر نسبت به ماه قبل') + '"' + dir + ' />'
  if (kind.value === 'profile') return '<NoratoProfileCard name="نگار محمدی" role="طراح محصول" layout="' + profileLayout.value + '"' + (profileLayout.value === 'cover' ? ' cover-src="/cover.jpg"' : '') + dir + ' />'
  if (kind.value === 'pricing') return '<NoratoPricingCard name="حرفه‌ای" price="۲۴۹٬۰۰۰ تومان" period="ماهانه" description="برای تیم‌های در حال رشد" :featured="true"' + dir + '>\n  <template #features><li>پروژه‌های نامحدود</li><li>پشتیبانی اولویت‌دار</li></template>\n</NoratoPricingCard>'
  if (control.value === 'radio') return '<NoratoSelectableCard id="plan-basic" title="پلن پایه" control="radio" name="plans" value="basic" v-model="selected"' + disabled + dir + ' />\n<NoratoSelectableCard id="plan-pro" title="پلن حرفه‌ای" control="radio" name="plans" value="pro" v-model="selected"' + disabled + dir + ' />'
  return '<NoratoSelectableCard id="plan-basic" title="پلن پایه" control="checkbox" v-model="basicChecked"' + disabled + dir + ' />\n<NoratoSelectableCard id="plan-pro" title="پلن حرفه‌ای" control="checkbox" v-model="proChecked"' + disabled + dir + ' />'
})
const fullSnippet = computed(() => {
  const components: Record<CardKind, string> = { surface: 'NoratoCard', content: 'NoratoContentCard', stat: 'NoratoStatCard', profile: 'NoratoProfileCard', pricing: 'NoratoPricingCard', selectable: 'NoratoSelectableCard' }
  const state = kind.value === 'selectable' ? (control.value === 'radio' ? "const selected = ref('pro')\n" : 'const basicChecked = ref(false)\nconst proChecked = ref(true)\n') : ''
  const vueImport = kind.value === 'selectable' ? "import { ref } from 'vue'\n" : ''
  return '<script setup lang="ts">\n' + vueImport + "import { " + components[kind.value] + " } from '@norato/vue'\n" + state + '</scr' + 'ipt>\n<template>\n  ' + snippet.value.replaceAll('\n', '\n  ') + '\n</template>'
})
</script>

<template>
  <div class="button-playground card-playground" dir="rtl">
    <header><strong>آزمایش Card اجرایی</strong><span>شش نوع کارت را با قاب، چیدمان و جهت متفاوت بررسی کن.</span></header>
    <div class="button-playground-preview card-playground__preview">
      <NoratoCard v-if="kind === 'surface'" :style="style" :selected="surfaceSelected" :disabled="surfaceDisabled" :dir="direction" class="card-playground__card card-playground__surface"><strong>عنوان کارت</strong><p>محتوای مرتبط را اینجا قرار بده.</p></NoratoCard>
      <NoratoContentCard v-else-if="kind === 'content'" id="card-playground-content" title="ساختن یک دیزاین سیستم فارسی" description="از توکن‌ها تا کامپوننت‌ها، قدم‌به‌قدم." meta="راهنما · ۵ دقیقه" :layout="layout" :style="style" href="/guide" :disabled="disabledState === 'disabled'" :dir="direction" class="card-playground__card">
        <template #media><div class="card-playground__art" aria-hidden="true"><span>ن</span></div></template>
        <template #footer>نگار محمدی</template>
      </NoratoContentCard>
      <NoratoStatCard v-else-if="kind === 'stat'" class="card-playground__card" label="کاربران فعال" value="۱۲٬۴۸۰" :trend="statTrend" :trend-label="statTrend === 'up' ? '۱۲٪ بیشتر از ماه قبل' : statTrend === 'down' ? '۵٪ کمتر از ماه قبل' : 'بدون تغییر نسبت به ماه قبل'" :dir="direction" />
      <NoratoProfileCard v-else-if="kind === 'profile'" class="card-playground__card" name="نگار محمدی" role="طراح محصول" :layout="profileLayout" :dir="direction"><template #avatar><span class="card-playground__avatar">ن‌م</span></template><template v-if="profileLayout === 'cover'" #cover><div class="card-playground__cover" aria-hidden="true" /></template></NoratoProfileCard>
      <NoratoPricingCard v-else-if="kind === 'pricing'" class="card-playground__card" name="حرفه‌ای" price="۲۴۹٬۰۰۰ تومان" period="ماهانه" description="برای تیم‌های در حال رشد" :featured="pricingFeatured" :dir="direction">
        <template #features><li>پروژه‌های نامحدود</li><li>پشتیبانی اولویت‌دار</li></template>
        <template #action><button type="button" class="copy-section-button" @click="pricingFeatured = !pricingFeatured">{{ pricingFeatured ? 'انتخاب شد' : 'انتخاب پلن' }}</button></template>
      </NoratoPricingCard>
      <div v-else class="card-playground__selection-options">
        <template v-if="control === 'radio'">
          <NoratoSelectableCard id="card-playground-basic" class="card-playground__card" title="پایه" description="برای شروع" control="radio" name="card-playground-plans" value="basic" v-model="selectedPlan" :disabled="disabledState === 'disabled'" :dir="direction" />
          <NoratoSelectableCard id="card-playground-pro" class="card-playground__card" title="حرفه‌ای" description="برای تیم‌های در حال رشد" control="radio" name="card-playground-plans" value="pro" v-model="selectedPlan" :disabled="disabledState === 'disabled'" :dir="direction" />
        </template>
        <template v-else>
          <NoratoSelectableCard id="card-playground-basic-check" class="card-playground__card" title="پایه" description="برای شروع" control="checkbox" v-model="basicChecked" :disabled="disabledState === 'disabled'" :dir="direction" />
          <NoratoSelectableCard id="card-playground-pro-check" class="card-playground__card" title="حرفه‌ای" description="برای تیم‌های در حال رشد" control="checkbox" v-model="proChecked" :disabled="disabledState === 'disabled'" :dir="direction" />
        </template>
      </div>
    </div>
    <p class="card-playground__status" role="status" aria-live="polite">{{ kind === 'selectable' ? control === 'radio' ? 'پلن انتخاب‌شده: ' + selectedPlan : 'انتخاب‌ها به‌روزرسانی شدند.' : kind === 'pricing' ? pricingFeatured ? 'پلن ویژه انتخاب شده است.' : 'پلن ویژه در حالت عادی است.' : 'نمونهٔ کارت؛ برای تعامل از کنترل‌های پایین استفاده کن.' }}</p>
    <div class="button-playground-controls card-playground__controls">
      <PlaygroundSelect id="card-kind" v-model="kind" label="نوع کارت" :options="[{value:'surface',label:'پایه'},{value:'content',label:'محتوا'},{value:'stat',label:'آمار'},{value:'profile',label:'پروفایل'},{value:'pricing',label:'قیمت‌گذاری'},{value:'selectable',label:'انتخابی'}]" />
      <PlaygroundSelect v-if="kind === 'surface' || kind === 'content'" id="card-style" v-model="style" label="سبک" :options="[{value:'glass',label:'شیشه‌ای'},{value:'elevated',label:'برجسته'},{value:'outline',label:'خط‌دار'},{value:'filled',label:'پرشده'}]" />
      <PlaygroundSelect v-if="kind === 'surface'" id="card-selected" v-model="surfaceSelected" label="انتخاب" :options="[{value:false,label:'عادی'},{value:true,label:'انتخاب‌شده'}]" />
      <PlaygroundSelect v-if="kind === 'surface'" id="card-surface-disabled" v-model="surfaceDisabled" label="دسترس‌پذیری" :options="[{value:false,label:'فعال'},{value:true,label:'غیرفعال'}]" />
      <PlaygroundSelect v-if="kind === 'content'" id="card-layout" v-model="layout" label="چیدمان" :options="[{value:'vertical',label:'عمودی'},{value:'horizontal',label:'افقی'},{value:'overlay',label:'روی تصویر'},{value:'text',label:'متنی'}]" />
      <PlaygroundSelect v-else-if="kind === 'profile'" id="card-profile-layout" v-model="profileLayout" label="چیدمان" :options="[{value:'center',label:'مرکزی'},{value:'cover',label:'کاور'}]" />
      <PlaygroundSelect v-if="kind === 'stat'" id="card-stat-trend" v-model="statTrend" label="روند" :options="[{value:'up',label:'افزایشی'},{value:'down',label:'کاهشی'},{value:'neutral',label:'خنثی'}]" />
      <PlaygroundSelect v-if="kind === 'selectable'" id="card-control" v-model="control" label="نوع کنترل" :options="[{value:'radio',label:'رادیو'},{value:'checkbox',label:'چک‌باکس'}]" />
      <PlaygroundSelect v-if="kind === 'selectable' || kind === 'content'" id="card-disabled" v-model="disabledState" label="وضعیت تعامل" :options="[{value:'enabled',label:'فعال'},{value:'disabled',label:'غیرفعال'}]" />
      <PlaygroundSelect id="card-direction" v-model="direction" label="جهت" :options="[{value:'rtl',label:'RTL'},{value:'ltr',label:'LTR'}]" />
    </div>
    <div class="button-playground-code">
      <div class="button-playground-codebar"><strong>کد Vue</strong><button class="copy-section-button" type="button" @click="emit('copy','card-playground',fullSnippet)">{{ props.copiedKey === 'card-playground' ? 'کپی شد' : 'کپی کد' }}</button></div>
      <pre class="usage-code" dir="ltr"><code>{{ fullSnippet }}</code></pre>
    </div>
  </div>
</template>

<style scoped>
.card-playground__preview{display:grid;place-items:center;min-block-size:calc(var(--norato-control-target-min) + var(--norato-space-8));padding:var(--norato-space-4)}
.card-playground__card{inline-size:min(100%,var(--norato-card-playground-inline-size))}
.card-playground__selection-options{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));align-items:start;gap:var(--norato-space-3);inline-size:100%}
.card-playground__surface{display:grid;gap:var(--norato-space-2);padding:var(--norato-space-4)}
.card-playground__surface strong{font-family:var(--norato-font-heading);font-weight:var(--norato-type-heading-title-weight)}
.card-playground__surface p{margin:0;color:var(--norato-color-text-secondary)}
.card-playground__art{display:grid;place-items:center;inline-size:100%;block-size:100%;background:linear-gradient(140deg,var(--norato-color-warning-container),var(--norato-color-surface-default) 58%,var(--norato-color-surface-muted))}
.card-playground__art span,.card-playground__avatar{display:grid;place-items:center;inline-size:var(--norato-card-avatar-size);block-size:var(--norato-card-avatar-size);border-radius:var(--norato-radius-pill);background:var(--norato-color-brand-yellow);color:var(--norato-color-text-primary);font-family:var(--norato-font-heading);font-size:var(--norato-type-doc-section-size);font-weight:var(--norato-type-heading-title-weight)}
.card-playground__cover{inline-size:100%;block-size:100%;background:radial-gradient(circle at 70% 35%,var(--norato-color-brand-yellow) 0 18%,transparent 18.5%),linear-gradient(135deg,var(--norato-color-warning-container),var(--norato-color-surface-muted))}
.card-playground__status{min-block-size:var(--norato-type-body-small-line-height);margin:0;color:var(--norato-color-text-secondary);font-size:var(--norato-type-doc-caption-size)}
.card-playground__controls{grid-template-columns:repeat(auto-fit,minmax(min(100%,var(--norato-space-32)),1fr))}
@media(max-width:599px){.card-playground__selection-options{grid-template-columns:minmax(0,1fr)}}
</style>
