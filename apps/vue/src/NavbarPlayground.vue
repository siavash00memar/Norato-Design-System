<script setup lang="ts">
import { computed, ref } from 'vue'
import { NoratoButton, NoratoNavbar, type NoratoNavbarLink, type NoratoNavbarLayout, type NoratoNavbarLinkSize, type NoratoNavbarLinkStyle, type NoratoNavbarMobileType, type NoratoNavbarStyle } from '@norato/vue'
import PlaygroundSelect from './PlaygroundSelect.vue'

defineProps<{ copiedKey: string }>()
const emit = defineEmits<{ copy: [key: string, value: string] }>()

const layout = ref<NoratoNavbarLayout>('website')
const style = ref<NoratoNavbarStyle>('bar')
const mobileType = ref<NoratoNavbarMobileType>('default')
const mobileStyle = ref<'bar' | 'transparent'>('bar')
const linkStyle = ref<NoratoNavbarLinkStyle>('pill')
const linkSize = ref<NoratoNavbarLinkSize>('medium')
const disabled = ref(false)
const search = ref('')
const showMegaMenu = ref(true)
const activationCount = ref(0)

const demoLinks = computed<NoratoNavbarLink[]>(() => [
  { label: 'خانه', href: '#component-navbar', current: true, icon: 'home' },
  { label: 'محصولات', href: '#component-navbar', icon: 'grid', ...(showMegaMenu.value ? { children: [{ label: 'طراحی رابط', href: '#component-navbar' }, { label: 'سامانهٔ طراحی', href: '#component-navbar' }, { label: 'راهنما', href: '#component-navbar' }, { label: 'در دسترس نیست', disabled: true }] } : {}) },
  { label: 'قیمت‌ها', href: '#component-navbar' },
  { label: 'راهنما', href: '#component-navbar', count: 3 },
])

const snippet = computed(() => {
  const links = showMegaMenu.value
    ? `const links = [\n  { label: 'خانه', href: '/', current: true },\n  { label: 'محصولات', children: [\n    { label: 'طراحی رابط', href: '/products/interface' },\n    { label: 'سامانهٔ طراحی', href: '/products/design-system' },\n  ] },\n  { label: 'قیمت‌ها', href: '/pricing' },\n  { label: 'راهنما', href: '/docs' },\n]`
    : `const links = [\n  { label: 'خانه', href: '/', current: true },\n  { label: 'محصولات', href: '/products' },\n  { label: 'قیمت‌ها', href: '/pricing' },\n  { label: 'راهنما', href: '/docs' },\n]`
  return `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { NoratoNavbar } from '@norato/vue'\n${links}\nconst search = ref('')\n<\\/script>\n\n<template>\n  <NoratoNavbar id="main-navigation" :links="links" type="${layout.value}" style="${style.value}" mobile-type="${mobileType.value}" mobile-style="${mobileStyle.value}" link-style="${linkStyle.value}" link-size="${linkSize.value}" v-model:search="search" />\n</template>`
})

const stateVariants = computed(() => {
  return (['pill', 'underline'] as const).flatMap(style =>
    (['small', 'medium'] as const).flatMap(size =>
      (['default', 'hover', 'active', 'disabled', 'focus'] as const).map(state => ({ style, size, state })),
    ),
  )
})
function recordActivation() { activationCount.value += 1 }
</script>

<template>
  <div class="button-playground navbar-playground" dir="rtl">
    <header><strong>آزمایش Navbar اجرایی</strong><span>همین adapter در بستهٔ Vue؛ پیش‌نمایش بالای صفحه فقط نمای بصری است.</span></header>
    <div class="button-playground-preview navbar-playground-preview">
      <NoratoNavbar id="navbar-playground" :links="demoLinks" :type="layout" :style="style" :mobile-type="mobileType" :mobile-style="mobileStyle" :link-style="linkStyle" :link-size="linkSize" :disabled="disabled" v-model:search="search" mobile-title="محصولات نوراتو" @navigate="recordActivation">
        <template #actions>
          <NoratoButton label="شروع کن" variant="primary" :disabled="disabled" @click="recordActivation" />
        </template>
        <template #avatar>
          <button class="navbar-playground-avatar" type="button" aria-label="حساب کاربری" :disabled="disabled">ن</button>
        </template>
      </NoratoNavbar>
      <p class="navbar-playground-feedback" role="status" aria-live="polite">{{ activationCount ? `تعامل ثبت‌شده: ${activationCount}` : 'لینک، مگامنو و منوی موبایل را با صفحه‌کلید و اشاره‌گر بررسی کنید.' }}</p>
    </div>
    <div class="button-playground-controls navbar-playground-controls">
      <PlaygroundSelect id="navbar-layout" v-model="layout" label="چیدمان دسکتاپ" :options="[{ value: 'app', label: 'App' }, { value: 'website', label: 'Website' }, { value: 'centered', label: 'Centered' }]" />
      <PlaygroundSelect id="navbar-style" v-model="style" label="سبک دسکتاپ" :options="[{ value: 'bar', label: 'Bar' }, { value: 'floating', label: 'Floating' }, { value: 'transparent', label: 'Transparent' }]" />
      <PlaygroundSelect id="navbar-mobile-type" v-model="mobileType" label="نوع هدر موبایل" :options="[{ value: 'default', label: 'Default' }, { value: 'back', label: 'Back' }, { value: 'search', label: 'Search' }, { value: 'large-title', label: 'Large Title' }]" />
      <PlaygroundSelect id="navbar-mobile-style" v-model="mobileStyle" label="سبک موبایل" :options="[{ value: 'bar', label: 'Bar' }, { value: 'transparent', label: 'Transparent' }]" />
      <PlaygroundSelect id="navbar-link-style" v-model="linkStyle" label="سبک لینک" :options="[{ value: 'pill', label: 'Pill' }, { value: 'underline', label: 'Underline' }]" />
      <PlaygroundSelect id="navbar-link-size" v-model="linkSize" label="اندازهٔ لینک" :options="[{ value: 'small', label: 'Small' }, { value: 'medium', label: 'Medium' }]" />
      <label class="button-playground-switch"><input v-model="showMegaMenu" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>نمایش زیرمنو</span></label>
      <label class="button-playground-switch"><input v-model="disabled" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>غیرفعال</span></label>
    </div>
    <p class="button-playground-note">برای هدر Transparent، زمینهٔ میزبان باید خوانایی متن را حفظ کند. لینک‌های نمایشی به همین صفحه برمی‌گردند تا مسیر آزمایش صفحهٔ مستقل تغییر نکند.</p>
    <div class="navbar-link-matrix" aria-hidden="true" inert>
      <header><strong>۲۰ ترکیب Nav Link</strong><span>Style × Size × State · نمونه‌ها غیرفعال‌اند</span></header>
      <div class="navbar-link-matrix-grid">
        <div v-for="item in stateVariants" :key="`${item.style}-${item.size}-${item.state}`" class="navbar-link-matrix-card">
          <a href="#" :class="[`is-${item.style}`, `is-${item.state}`, `size-${item.size}`]">{{ item.state === 'active' ? 'صفحهٔ جاری' : item.state === 'disabled' ? 'غیرفعال' : 'محصولات' }}</a>
          <small dir="ltr">{{ item.style }} · {{ item.size }} · {{ item.state }}</small>
        </div>
      </div>
      <div class="navbar-brand-matrix"><strong>Brand</strong><span class="small">ن · نوراتو</span><span class="medium">ن · نوراتو</span></div>
    </div>
    <div class="button-playground-code"><div class="button-playground-codebar"><strong>کد Vue</strong><button class="copy-section-button" type="button" @click="emit('copy', 'navbar-playground', snippet)">{{ copiedKey === 'navbar-playground' ? 'کپی شد' : copiedKey === 'navbar-playground-error' ? 'ناموفق' : 'کپی کد' }}</button></div><pre class="usage-code" dir="ltr"><code>{{ snippet }}</code></pre></div>
  </div>
</template>

<style>
.navbar-playground-preview{display:grid;min-inline-size:0;overflow:visible;padding:0}
.navbar-playground-preview>.norato-navbar{margin:0}
.navbar-playground-avatar{display:grid;place-items:center;inline-size:var(--norato-control-target-min);block-size:var(--norato-control-target-min);border:var(--norato-border-thin) solid var(--norato-color-border-default);border-radius:var(--norato-radius-pill);background:var(--norato-color-info-container);color:var(--norato-color-brand-blue);font:inherit;font-weight:700}
.navbar-playground-avatar:focus-visible{outline:var(--norato-border-medium) solid var(--norato-color-focus-contrast);outline-offset:var(--norato-space-1)}
.navbar-playground-feedback{margin:0;padding:var(--norato-space-2) var(--norato-space-3);color:var(--norato-color-text-secondary);font-size:var(--norato-type-body-small-size)}
.navbar-link-matrix{display:grid;gap:var(--norato-space-3);margin-block-start:var(--norato-space-4);padding:var(--norato-space-3);border:var(--norato-border-thin) solid var(--norato-color-border-default);border-radius:var(--norato-radius-card);background:var(--norato-color-surface-default)}
.navbar-link-matrix>header{display:flex;justify-content:space-between;gap:var(--norato-space-2);font-size:var(--norato-type-body-small-size)}
.navbar-link-matrix>header span,.navbar-link-matrix-card small{color:var(--norato-color-text-secondary);font-size:var(--norato-type-body-min-size)}
.navbar-link-matrix-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,var(--norato-navbar-matrix-card-inline-size)),1fr));gap:var(--norato-space-2)}
.navbar-link-matrix-card{display:grid;align-content:start;justify-items:start;gap:var(--norato-space-2);min-inline-size:0;min-block-size:calc(var(--norato-control-target-min) + var(--norato-space-6));padding:var(--norato-space-2);border:var(--norato-border-thin) solid var(--norato-color-border-default);border-radius:var(--norato-radius-card)}
.navbar-link-matrix-card>a{display:inline-flex;align-items:center;justify-content:center;min-inline-size:var(--norato-control-target-min);min-block-size:var(--norato-control-target-min);padding-inline:var(--norato-space-3);border-radius:var(--norato-radius-pill);color:var(--norato-color-text-secondary);text-decoration:none}
.navbar-link-matrix-card>a.is-pill.is-active{background:var(--norato-color-info-container);color:var(--norato-color-brand-blue)}
.navbar-link-matrix-card>a.is-underline{border-radius:0}
.navbar-link-matrix-card>a.is-underline.is-active{box-shadow:inset 0 calc(-1 * var(--norato-border-medium)) var(--norato-color-brand-blue);color:var(--norato-color-brand-blue)}
.navbar-link-matrix-card>a.is-hover{background:var(--norato-color-info-container);color:var(--norato-color-brand-blue)}
.navbar-link-matrix-card>a.is-focus{outline:var(--norato-border-medium) solid var(--norato-color-focus-contrast);outline-offset:var(--norato-space-1)}
.navbar-link-matrix-card>a.is-disabled{color:var(--norato-color-text-disabled)}
.navbar-link-matrix-card>a.size-small{font-size:var(--norato-type-body-caption-size)}
.navbar-brand-matrix{display:flex;align-items:center;gap:var(--norato-space-3);padding-block-start:var(--norato-space-2);border-block-start:var(--norato-border-thin) solid var(--norato-color-border-default)}
.navbar-brand-matrix .small{font-size:var(--norato-type-body-small-size)}
.navbar-brand-matrix .medium{font-size:var(--norato-type-heading-small-size);font-weight:700}
@media(max-width:700px){.navbar-link-matrix-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.navbar-link-matrix-card{padding:var(--norato-space-1)}}
</style>

