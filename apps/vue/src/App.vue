<script setup lang="ts">
import { computed, defineAsyncComponent, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import ComponentSpecimenLoading from './ComponentSpecimenLoading.vue'
const PlaygroundSelect = defineAsyncComponent(() => import('./PlaygroundSelect.vue'))
const ComponentSpecimen = defineAsyncComponent({
  loader: () => import('./ComponentSpecimen.vue'),
  loadingComponent: ComponentSpecimenLoading,
  delay: 0,
})
const ContractVisualShowcase = defineAsyncComponent(() => import('./ContractVisualShowcase.vue'))
const ButtonVariantShowcase = defineAsyncComponent(() => import('./ButtonVariantShowcase.vue'))
const ButtonStateShowcase = defineAsyncComponent(() => import('./ButtonStateShowcase.vue'))
const ButtonSizeShowcase = defineAsyncComponent(() => import('./ButtonSizeShowcase.vue'))
const ButtonPlayground = defineAsyncComponent(() => import('./ButtonPlayground.vue'))
const BadgePlayground = defineAsyncComponent(() => import('./BadgePlayground.vue'))
const TablePlayground = defineAsyncComponent(() => import('./TablePlayground.vue'))
const ListPlayground = defineAsyncComponent(() => import('./ListPlayground.vue'))
const CardPlayground = defineAsyncComponent(() => import('./CardPlayground.vue'))
const TagPlayground = defineAsyncComponent(() => import('./TagPlayground.vue'))
const ChipPlayground = defineAsyncComponent(() => import('./ChipPlayground.vue'))
const InputPlayground = defineAsyncComponent(() => import('./InputPlayground.vue'))
const SelectPlayground = defineAsyncComponent(() => import('./SelectPlayground.vue'))
const ComboboxPlayground = defineAsyncComponent(() => import('./ComboboxPlayground.vue'))
const CheckboxPlayground = defineAsyncComponent(() => import('./CheckboxPlayground.vue'))
const RadioPlayground = defineAsyncComponent(() => import('./RadioPlayground.vue'))
const SwitchPlayground = defineAsyncComponent(() => import('./SwitchPlayground.vue'))
const SegmentedPlayground = defineAsyncComponent(() => import('./SegmentedPlayground.vue'))
const RangePlayground = defineAsyncComponent(() => import('./RangePlayground.vue'))
const RatingPlayground = defineAsyncComponent(() => import('./RatingPlayground.vue'))
const DatePickerPlayground = defineAsyncComponent(() => import('./DatePickerPlayground.vue'))
const TimePickerPlayground = defineAsyncComponent(() => import('./TimePickerPlayground.vue'))
const FileUploadPlayground = defineAsyncComponent(() => import('./FileUploadPlayground.vue'))
const NavbarPlayground = defineAsyncComponent(() => import('./NavbarPlayground.vue'))
const SidebarPlayground = defineAsyncComponent(() => import('./SidebarPlayground.vue'))
const TabsPlayground = defineAsyncComponent(() => import('./TabsPlayground.vue'))
const BreadcrumbsPlayground = defineAsyncComponent(() => import('./BreadcrumbsPlayground.vue'))
const PaginationPlayground = defineAsyncComponent(() => import('./PaginationPlayground.vue'))
const StepperPlayground = defineAsyncComponent(() => import('./StepperPlayground.vue'))
const MenuPlayground = defineAsyncComponent(() => import('./MenuPlayground.vue'))
const CommandPalettePlayground = defineAsyncComponent(() => import('./CommandPalettePlayground.vue'))
const TreeViewPlayground = defineAsyncComponent(() => import('./TreeViewPlayground.vue'))
const AlertPlayground = defineAsyncComponent(() => import('./AlertPlayground.vue'))
const BannerPlayground = defineAsyncComponent(() => import('./BannerPlayground.vue'))
const ToastPlayground = defineAsyncComponent(() => import('./ToastPlayground.vue'))
const NotificationCenterPlayground = defineAsyncComponent(() => import('./NotificationCenterPlayground.vue'))
const TooltipPlayground = defineAsyncComponent(() => import('./TooltipPlayground.vue'))
const ProgressPlayground = defineAsyncComponent(() => import('./ProgressPlayground.vue'))
const SpinnerPlayground = defineAsyncComponent(() => import('./SpinnerPlayground.vue'))
const SkeletonPlayground = defineAsyncComponent(() => import('./SkeletonPlayground.vue'))
const EmptyStatePlayground = defineAsyncComponent(() => import('./EmptyStatePlayground.vue'))
const SplitButtonPlayground = defineAsyncComponent(() => import('./SplitButtonPlayground.vue'))
const DividerPlayground = defineAsyncComponent(() => import('./DividerPlayground.vue'))
const AccordionPlayground = defineAsyncComponent(() => import('./AccordionPlayground.vue'))
const ModalPlayground = defineAsyncComponent(() => import('./ModalPlayground.vue'))
const DrawerPlayground = defineAsyncComponent(() => import('./DrawerPlayground.vue'))
const PopoverPlayground = defineAsyncComponent(() => import('./PopoverPlayground.vue'))
const ImagePlayground = defineAsyncComponent(() => import('./ImagePlayground.vue'))
const CarouselPlayground = defineAsyncComponent(() => import('./CarouselPlayground.vue'))
const ChatPlayground = defineAsyncComponent(() => import('./ChatPlayground.vue'))
const AvatarPlayground = defineAsyncComponent(() => import('./AvatarPlayground.vue'))
const TimelinePlayground = defineAsyncComponent(() => import('./TimelinePlayground.vue'))
const ChartsPlayground = defineAsyncComponent(() => import('./ChartsPlayground.vue'))
const TeamGuide = defineAsyncComponent(() => import('./TeamGuide.vue'))
const ComponentLab = defineAsyncComponent(() => import('./ComponentLab.vue'))
import { componentByName, componentBySlug, componentCatalog, foundationChapters, foundationOverviewCards, type ComponentStatus } from '@norato/components'
import { usageExamples } from './usage-examples'
const contractDocs = import.meta.glob('../../../docs/component-contracts/*.md', { eager: true, query: '?raw', import: 'default' }) as Record<string, string>
const routeAtLoad = window.location.hash.slice(1)
const initialComponent = routeAtLoad.startsWith('component-') ? componentBySlug.get(routeAtLoad.slice('component-'.length)) : undefined
const page = ref(routeAtLoad.startsWith('component-') ? initialComponent ? 'component-detail' : 'inventory' : routeAtLoad || 'overview'), query = ref(''), status = ref<'All' | ComponentStatus>('All')
const selectedComponent = ref(initialComponent?.name || '')
const sideIndex = ref<HTMLElement | null>(null)
const items = componentCatalog
const filtered = computed(() => {
  const needle = query.value.trim().toLocaleLowerCase()
  return items.filter(item => {
    const searchable = [item.name, item.id, item.slug, item.note, ...item.tags].join(' ').toLocaleLowerCase()
    return (!needle || searchable.includes(needle)) && (status.value === 'All' || item.status === status.value)
  })
})
const setRoute = (target: string) => {
  if (window.location.hash === target) return
  window.history.pushState({ noratoRoute: target }, '', `${window.location.pathname}${window.location.search}${target}`)
}
const nav = (next: string) => { page.value = next; setRoute(`#${next}`); window.scrollTo({ top: 0, behavior: 'instant' }) }
const openComponent = (name: string) => {
  const component = componentByName.get(name)
  if (!component) return
  selectedComponent.value = component.name
  page.value = 'component-detail'
  setRoute(`#component-${component.slug}`)
  window.scrollTo({ top: 0, behavior: 'instant' })
}
const scrollToSection = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'instant' })
const scrollToFoundation = (id: string) => document.getElementById(`foundation-${id}`)?.scrollIntoView({ behavior: 'smooth' })
const sectionId = (title: string) => `doc-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
const selectedItem = computed(() => componentByName.get(selectedComponent.value))
const copiedKey = ref('')
const copyFeedback = ref('')
let copyFeedbackTimer: ReturnType<typeof setTimeout> | undefined
const copyText = async (key: string, value: string) => {
  try {
    await navigator.clipboard.writeText(value)
    copiedKey.value = key
    copyFeedback.value = 'متن با موفقیت کپی شد.'
  } catch {
    copiedKey.value = `${key}-error`
    copyFeedback.value = 'کپی انجام نشد؛ دسترسی clipboard را بررسی کنید.'
  }
  if (copyFeedbackTimer) clearTimeout(copyFeedbackTimer)
  copyFeedbackTimer = setTimeout(() => { copiedKey.value = '' }, 2200)
}
const implementationSnippet = computed(() => {
  const component = selectedItem.value
  if (!component?.adapter || !component.usageKey) return null
  const markup = usageExamples[component.usageKey]
  return markup ? { component: component.adapter.module, markup } : null
})
const syncRouteFromHash = () => {
  const hash = window.location.hash.slice(1)
  if (hash.startsWith('component-')) {
    const component = componentBySlug.get(hash.slice('component-'.length))
    if (component) { selectedComponent.value = component.name; page.value = 'component-detail' }
    else page.value = 'inventory'
  } else if (['overview', 'team', 'foundation', 'inventory'].includes(hash)) page.value = hash
  else if (hash === 'components') page.value = 'inventory'
  void nextTick(updateActiveSection)
}
const contractSections = computed(() => {
  const component = selectedItem.value
  if (!component) return []
  const key = `../../../${component.contractPath}`
  const raw = contractDocs[key] || Object.entries(contractDocs).find(([path]) => path.endsWith(component.contractPath))?.[1] || ''
  return raw.split(/^## /m).slice(1).map(block => {
    const newline = block.indexOf('\n')
    return { title: block.slice(0, newline).trim(), body: block.slice(newline + 1).trim() }
  }).filter(section => section.title && section.title !== 'Preview')
})
const activeSection = ref('')
const updateActiveSection = () => {
  const sections = contractSections.value.map(section => document.getElementById(sectionId(section.title))).filter((section): section is HTMLElement => section instanceof HTMLElement)
  const passed = sections.filter(section => section.getBoundingClientRect().top <= 160)
  const current = passed.at(-1) || sections.reduce<HTMLElement | null>((closest, section) => !closest || Math.abs(section.getBoundingClientRect().top - 160) < Math.abs(closest.getBoundingClientRect().top - 160) ? section : closest, null)
  activeSection.value = current?.id || ''
}
const revealSelectedComponent = () => {
  if (page.value !== 'component-detail' || !sideIndex.value) return
  const active = sideIndex.value.querySelector<HTMLElement>('[aria-current="page"]')
  if (!active) return
  const listRect = sideIndex.value.getBoundingClientRect()
  const itemRect = active.getBoundingClientRect()
  if (itemRect.top < listRect.top) sideIndex.value.scrollTo({ top: sideIndex.value.scrollTop + itemRect.top - listRect.top, behavior: 'smooth' })
  else if (itemRect.bottom > listRect.bottom) sideIndex.value.scrollTo({ top: sideIndex.value.scrollTop + itemRect.bottom - listRect.bottom, behavior: 'smooth' })
}
onMounted(async () => { syncRouteFromHash(); await nextTick(); updateActiveSection(); revealSelectedComponent(); window.addEventListener('scroll', updateActiveSection, { passive: true }); window.addEventListener('hashchange', syncRouteFromHash); window.addEventListener('popstate', syncRouteFromHash) })
onBeforeUnmount(() => { window.removeEventListener('scroll', updateActiveSection); window.removeEventListener('hashchange', syncRouteFromHash); window.removeEventListener('popstate', syncRouteFromHash) })
watch([selectedComponent, page], async () => { await nextTick(); updateActiveSection(); revealSelectedComponent() })
</script>

<template>
  <div class="app-shell" dir="rtl">
      <a class="skip-link" href="#main-content">رفتن به محتوای اصلی</a>
      <aside class="sidebar" aria-label="ناوبری مستندات"><div class="brand"><span class="brand-mark">ن</span><div><strong>نوراتو</strong><small>Norato · Vue 3</small></div></div><nav><button v-for="item in [['overview','نمای کلی'],['team','راهنمای تیم Vue'],['foundation','Foundation'],['inventory','همهٔ کامپوننت‌ها']]" :key="item[0]" class="nav-item" :class="{active:page===item[0] || (page==='component-detail' && item[0]==='inventory')}" :aria-current="page===item[0] || (page==='component-detail' && item[0]==='inventory') ? 'page' : undefined" @click="nav(item[0])">{{ item[1] }}</button></nav><nav ref="sideIndex" class="side-index" aria-label="کامپوننت‌ها"><b>کامپوننت‌ها — ۴۹</b><button v-for="item in items" :key="item.name" type="button" :class="{active:page==='component-detail' && selectedComponent===item.name}" :aria-current="page==='component-detail' && selectedComponent===item.name ? 'page' : undefined" @click="openComponent(item.name)"><span>{{ item.name }}</span></button></nav><div class="sidebar-foot">RTL-first · Vue 3</div></aside>
    <main id="main-content" class="main" tabindex="-1">
      <div class="docs-layout">
      <div class="docs-content">
      <TeamGuide v-if="page==='team'" @navigate="nav" />
      <section v-if="page==='overview'" class="document-page overview-page">
        <header class="document-identity"><div class="document-status"><span class="evidence-badge observed">مرجع استخراج‌شده</span><span>نسخهٔ اولیه · ۱۴ فصل · بازبینی در جریان</span></div><strong>نوراتو / کتابخانهٔ رابط کاربری</strong></header>
        <div class="brand-rule" aria-hidden="true"></div>
        <div class="chapter-title"><div><span class="eyebrow">مرجع طراحی و پیاده‌سازی Vue 3</span><h1>دیزاین سیستم جامع نوراتو</h1><p>زبان مشترک برای ساخت تجربه‌های فارسی، راست‌چین و قابل استفاده برای تیم محصول.</p></div><b aria-hidden="true">00</b></div>
        <div class="overview-columns"><div class="overview-main">
          <div class="overview-metrics"><article><strong>۴۹</strong><span>کامپوننت مستقل</span></article><article><strong>۱۴</strong><span>فصل بنیادها و الگوها</span></article><article><strong>۵</strong><span>خانواده با adapter Vue</span></article></div>
          <section class="document-panel"><header><h2>فهرست فصل‌ها</h2><span class="evidence-badge observed">ساختار مشاهده‌شده</span></header><div class="chapter-index"><button v-for="chapter in foundationChapters" :key="chapter.id" @click="nav('foundation')"><span>{{ chapter.id }} <b>{{ chapter.title }}</b></span><small>{{ chapter.description }}</small></button></div></section>
          <section class="document-panel overview-summary"><header><h2>روش استفاده از این مرجع</h2><span class="evidence-badge proposal">قواعد Norato</span></header><p>مقدارهای مشاهده‌شده از نمونه‌های واقعی ثبت شده‌اند؛ موردهای ناسازگار یا استخراج‌نشده علامت دارند. هر کامپوننت صفحه، قرارداد و نمونهٔ مستقل خودش را دارد. وضعیت پیاده‌سازی در هر صفحه از پیشنهاد بصری جداست.</p><div class="overview-links"><button class="button primary" @click="nav('inventory')">فهرست کامپوننت‌ها</button><button class="button secondary" @click="nav('team')">راهنمای تیم Vue</button></div></section>
        </div><aside class="evidence-rail"><h2>دربارهٔ این سند</h2><p>مبنای foundation: نمونه‌های رابط نوراتو در فایل طراحی انتخاب‌شده.</p><h3>خواندن شواهد</h3><p><b>مشاهده‌شده</b> یعنی مقدار در نمونه ثبت شده؛ به‌تنهایی تضمین استاندارد نهایی نیست.</p><p><b>پیشنهادی</b> یعنی تصمیم نگاشت یا API در Norato که در منبع ساخته نشده است.</p><h3>مرز تغییر</h3><p>رفتار APIهای Vue و قراردادهای تأییدشدهٔ کامپوننت حفظ شده‌اند.</p></aside></div>
        <footer class="document-footer"><span>جهت پیش‌فرض: RTL</span><span>Vue 3 · مستندات تیم نوراتو</span></footer>
      </section>
      <section v-else-if="!['team','component-detail'].includes(page)" class="page-heading"><span class="eyebrow">NORATO / {{ page.toUpperCase() }}</span><h1>{{ page==='foundation'?'Foundation شخصی‌سازی‌شده':'همهٔ کامپوننت‌ها' }}</h1><p>{{ page==='foundation'?'۱۴ فصل مستقل؛ داده‌های مستندشده همراه با وضعیت و محدودیت منبع.':'۴۹ کامپوننت مستقل؛ پیش‌نمایش‌ها و نمونه‌های Vue در همین بخش در دسترس‌اند.' }}</p></section>
      <section v-if="page==='foundation'" class="foundation-page">
        <div class="foundation-chapter-list"><button v-for="chapter in foundationChapters" :key="chapter.id" @click="scrollToFoundation(chapter.id)"><b>{{ chapter.id }}</b><span>{{ chapter.title }}</span></button></div>
        <section id="foundation-00" class="foundation-chapter"><header class="chapter-title"><div><span class="eyebrow">ساختار مستندات</span><h2>۱۴ فصل از شواهد تا نگهداشت</h2><p>هر فصل مستقل است و وضعیت دادهٔ مشاهده‌شده را از پیشنهاد پیاده‌سازی جدا می‌کند.</p></div><b>00</b></header><div class="chapter-card-grid"> <article v-for="chapter in foundationOverviewCards" :key="chapter.id" class="document-panel chapter-card"><span class="chapter-card-number">{{ chapter.id }}</span><h3>{{ chapter.title }}</h3><p>{{ chapter.description }}</p><span class="evidence-badge observed">فصل مرجع</span></article></div></section>
        <section id="foundation-01" class="foundation-chapter"><header class="foundation-section-head"><div><span class="eyebrow">01 · مشاهده‌شده</span><h2>رنگ‌های برند و رابط</h2></div><span class="evidence-badge observed">از فریم رنگ‌ها</span></header><div class="token-card-grid"><article v-for="token in [{name:'Yellow',value:'#FDC101',role:'تأکید و اقدام اصلی'},{name:'Blue',value:'#134F89',role:'هویت و ناوبری'},{name:'Info Color',value:'#FFF8E0',role:'سطح اطلاع‌رسانی مشاهده‌شده'},{name:'Info Stroke',value:'#FBEAB2',role:'مرز سطح اطلاع‌رسانی'},{name:'Tag Blue',value:'#E4F2FF',role:'زمینهٔ برچسب'},{name:'Tag Blue Stroke',value:'#B0D7FE',role:'مرز برچسب'},{name:'White',value:'#FFFFFF',role:'سطح اصلی'},{name:'Neutral',value:'#F5F5F5',role:'سطح خنثی'},{name:'Neutral',value:'#F2F2F2',role:'سطح خنثی دوم'},{name:'Border',value:'#E8E8E8',role:'مرز عمومی'},{name:'Gray',value:'#A1A1A1',role:'خنثی میانی'},{name:'Text',value:'#484848',role:'متن ثانویه / سطح کد'},{name:'Text',value:'#1A1A1A',role:'متن اصلی'},{name:'Gray',value:'#D5D5D5',role:'خنثی روشن'}]" :key="token.name+token.value" class="color-token-card"><i :style="{backgroundColor:token.value}" aria-hidden="true"></i><b>{{ token.name }}</b><code dir="ltr">{{ token.value }}</code><span>{{ token.role }}</span></article></div><div class="foundation-note"><b>اختلاف‌ها:</b> رنگ لینک‌های قدیمی <code dir="ltr">#2A60E7</code> و <code dir="ltr">#2D81FF</code> با Blue اصلی برابر نیست. رنگ وضعیت خطا/موفقیت/فوکوس سراسری در استخراج مشخص نشده است.</div></section>
        <section id="foundation-02" class="foundation-chapter"><header class="foundation-section-head"><div><span class="eyebrow">02 · نگاشت Norato</span><h2>تایپوگرافی</h2></div><span class="evidence-badge proposal">سیاست پروژه</span></header><div class="type-token-grid"><article class="document-panel"><span>بدنه و ورودی · Vazirmatn</span><p class="type-body-sample">نام و نام خانوادگی خود را وارد کنید</p><code dir="ltr">11 / 12 / 13 · 400</code></article><article class="document-panel"><span>عنوان و کنترل · Estedad</span><p class="type-heading-sample">مسیر تحصیلی تو</p><code dir="ltr">20 / 22 / 30 · 900</code></article></div><div class="foundation-note">در دادهٔ قدیمی منبع چند نقش Lalezar دیده می‌شود؛ طبق سیاست Norato از Estedad برای عنوان و Vazirmatn برای بدنه استفاده می‌کنیم.</div></section>
        <section id="foundation-03" class="foundation-chapter"><header class="foundation-section-head"><div><span class="eyebrow">03 · مشاهده‌شده</span><h2>فاصله‌ها و اندازه‌ها</h2></div><span class="evidence-badge observed">مقیاس یکپارچه نیست</span></header><div class="space-token-grid"> <div v-for="size in [2,5,6,8,10,12]" :key="size"><i :style="{inlineSize:`${size*3}px`}" aria-hidden="true"></i><b>{{ size }}px</b></div></div><p class="foundation-note">ابعاد نمونه: دکمه <code dir="ltr">121×36</code>، جست‌وجو <code dir="ltr">300×36</code>، محتوای موبایل <code dir="ltr">324</code> و کنترل انتخاب <code dir="ltr">24×24</code>. فاصله‌های ۲۴ و ۳۲ پیکسلِ چیدمان سند، توکن محصول نیستند.</p></section>
        <section id="foundation-04" class="foundation-chapter"><header class="foundation-section-head"><div><span class="eyebrow">04 · مشاهده‌شده</span><h2>گوشه‌ها و خطوط</h2></div><span class="evidence-badge observed">نمونه‌های واقعی</span></header><div class="radius-token-grid"> <article v-for="radius in [5,12,25,36,50]" :key="radius"><i :style="{borderRadius:`${radius}px`}" aria-hidden="true"></i><code dir="ltr">{{ radius }}px</code></article></div><p class="foundation-note">کنترل‌های ۳۶ پیکسلی با شعاع ۲۵ پیکسل ظاهر کپسولی دارند. مرز ورودی E8 برابر ۱ پیکسل و خط زرد Secondary برابر ۲ پیکسل است.</p></section>
        <section id="foundation-05" class="foundation-chapter"><header class="foundation-section-head"><div><span class="eyebrow">05 · مشاهده‌شده</span><h2>عمق، سایه و لایه‌بندی</h2></div><span class="evidence-badge observed">۷ سبک افکت</span></header><div class="elevation-grid"><article v-for="effect in [{name:'Box',token:'--norato-elevation-box'},{name:'Modal',token:'--norato-elevation-modal'},{name:'Pressed · inner',token:'--norato-elevation-pressed'},{name:'Chatbot',token:'--norato-elevation-chatbot'},{name:'Drop',token:'--norato-elevation-drop'},{name:'New',token:'--norato-elevation-new'},{name:'Main page',token:'--norato-elevation-main-page'}]" :key="effect.name"><i :style="{boxShadow:`var(${effect.token})`}" aria-hidden="true"></i><b>{{ effect.name }}</b><code dir="ltr">{{ effect.token }}</code></article></div><p class="foundation-note">Pressed سایهٔ درونی است؛ Drop با offset عمودی منفی ثبت شده است. این دو را با سایهٔ کارت یکی نگیرید.</p></section>
        <section id="foundation-06" class="foundation-chapter"><header class="foundation-section-head"><div><span class="eyebrow">06 · نمونهٔ خانوادگی</span><h2>دکمه‌ها، پیوندها و خانواده‌های کامپوننت</h2></div><span class="evidence-badge observed">۳ سطح تأکید</span></header><div class="component-family-grid"><button v-for="name in items" :key="name.name" @click="openComponent(name.name)"><span>{{ name.name }}</span><small>{{ name.status }}</small></button></div></section>
        <section id="foundation-07" class="foundation-chapter"><header class="foundation-section-head"><div><span class="eyebrow">07 · ورودی‌ها و انتخاب</span><h2>فیلد، جست‌وجو، برچسب و انتخاب‌گر</h2></div><span class="evidence-badge observed">اندازه‌های ثبت‌شده</span></header><div class="foundation-example-grid"><div class="foundation-field"><label for="foundation-name">نام</label><input id="foundation-name" placeholder="نام خود را بنویسید" /></div><div class="foundation-field"><label for="foundation-search">جست‌وجو</label><input id="foundation-search" placeholder="نام مشاور" /></div><div class="foundation-tag">ریاضی فیزیک <span aria-hidden="true">×</span></div><div class="foundation-tag-box"><b>اطلاعات تحصیلی</b><span>رشتهٔ آزمایشی <strong>ریاضی و فیزیک</strong></span></div></div></section>
        <section id="foundation-08" class="foundation-chapter"><header class="foundation-section-head"><div><span class="eyebrow">08 · ناوبری و پیشرفت</span><h2>نوار ناوبری و راهنمای مرحله</h2></div><span class="evidence-badge observed">نمونهٔ محصول</span></header><div class="foundation-nav-demo"><b>پنل مشاور</b><span>جست‌وجوی مسیر آموزشی</span><i><em></em></i><button>قبل</button><button class="button primary">بعد</button></div></section>
        <section id="foundation-09" class="foundation-chapter"><header class="foundation-section-head"><div><span class="eyebrow">09 · کارت‌ها و جدول</span><h2>کارت، فهرست و جدول</h2></div><span class="evidence-badge observed">نمونهٔ داده</span></header><div class="foundation-table"><div><b>خانواده</b><b>نمونهٔ مشاهده‌شده</b><b>ابعاد ثبت‌شده</b></div><div><span>کارت مشاور</span><span>تصویر، نام، رتبه و موقعیت</span><code dir="ltr">300×156</code></div><div><span>کارت دانش‌آموز</span><span>اطلاعات پایه و گزارش</span><code dir="ltr">300×110</code></div><div><span>جدول دسکتاپ</span><span>ردیف فشرده و قابل گسترش</span><code dir="ltr">1248px group</code></div></div></section>
        <section id="foundation-10" class="foundation-chapter"><header class="foundation-section-head"><div><span class="eyebrow">10 · پیام و بازخورد</span><h2>پیام‌ها، مودال و وضعیت ارتباط</h2></div><span class="evidence-badge proposal">بخشی از وضعیت‌ها ثبت نشده</span></header><div class="feedback-demo"><div class="feedback-success">درخواست با موفقیت ثبت شد</div><div class="feedback-warning">این مقدار نیاز به بررسی دارد</div><div class="feedback-error">رنگ سراسری خطا در منبع استخراج نشده</div></div></section>
        <section id="foundation-11" class="foundation-chapter"><header class="foundation-section-head"><div><span class="eyebrow">11 · چیدمان راست‌به‌چپ</span><h2>الگوهای فرم و خرید</h2></div><span class="evidence-badge observed">واکنش‌گرا</span></header><div class="foundation-form-layout"><section><b>اطلاعات هویتی</b><span>نام</span><span>نام خانوادگی</span><button class="button primary">ادامه</button></section><section><b>انتخاب بسته</b><div>آزمون جامع <strong>۸۷۹٬۰۰۰ تومان</strong></div><div>مشاوره <strong>۱۹۵٬۰۰۰ تومان</strong></div><button class="button secondary">خرید</button></section></div></section>
        <section id="foundation-12" class="foundation-chapter"><header class="foundation-section-head"><div><span class="eyebrow">12 · پوشش حالت‌ها</span><h2>حالت‌ها و دسترس‌پذیری</h2></div><span class="evidence-badge proposal">ماتریس کامل نیست</span></header><div class="state-coverage"><span>خانواده</span><span>مشاهده‌شده</span><span>نیازمند تکمیل</span><b>دکمه</b><span>Default · Pressed</span><span>Hover · Focus · Disabled · Loading</span><b>فیلد و جست‌وجو</b><span>Empty · Filled</span><span>Focus · Invalid · Disabled</span><b>چک‌باکس</b><span>خاموش · روشن · نیمه‌انتخاب</span><span>Focus · Disabled</span></div><div class="foundation-note">دسترس‌پذیری نوراتو: جهت RTL، برچسب قابل‌دسترسی و focus واضح، target حداقل ۴۸ پیکسل برای actionها؛ کمبودهای منبع برای هر خانواده باید در قراردادش علامت بخورند.</div></section>
        <section id="foundation-13" class="foundation-chapter"><header class="foundation-section-head"><div><span class="eyebrow">13 · نام‌گذاری</span><h2>نام‌گذاری، ارجاع و نگهداشت</h2></div><span class="evidence-badge proposal">نگاشت پیشنهادی Norato</span></header><div class="naming-map"><div><code dir="ltr">color/brand/primary</code><span>→ Yellow · مشاهده‌شده</span></div><div><code dir="ltr">color/brand/secondary</code><span>→ Blue · مشاهده‌شده</span></div><div><code dir="ltr">text/product/body</code><span>→ Vazirmatn 13 / Regular</span></div><div><code dir="ltr">radius/control</code><span>→ 25px · نگاشت از نمونه</span></div><div><code dir="ltr">space/compact</code><span>→ 10px · نام‌گذاری پیشنهادی</span></div></div><p class="foundation-note">این نام‌ها در فایل Figma به‌عنوان پیشنهاد ثبت شده‌اند، نه متغیرهای ساخته‌شده. مقادیر و تصمیم‌های جدید باید با قرارداد و دلیل تغییر ثبت شوند.</p></section>
      </section>
        <section v-if="page==='component-detail' && selectedItem" class="component-doc"><button class="back-link" @click="nav('inventory')">← فهرست کامپوننت‌ها</button><header class="component-doc-head"><div><span class="eyebrow">COMPONENT · NORATO VUE</span><h1>{{ selectedItem.name }}</h1><p>{{ selectedItem.note }}</p></div><span class="status" :class="selectedItem.status.toLowerCase()">{{ selectedItem.status }}</span></header><span class="sr-only" role="status" aria-live="polite">{{ copyFeedback }}</span><section id="doc-preview" class="glass-card doc-section"><h2>نمونهٔ بصری</h2><ComponentSpecimen :name="selectedItem.specimenKey" /><p class="source-note">{{ selectedItem.name === 'Rating' ? 'این نمونه فقط نمایش بصری است؛ برای تغییر امتیاز از playground اجرایی استفاده کن.' : 'این نمونه برای بررسی ظاهر است؛ وضعیت بالا بلوغ adapter نوراتو را نشان می‌دهد.' }}</p></section><section v-if="implementationSnippet" id="doc-implementation" class="glass-card doc-section"><h2>استفاده در Vue</h2><p>سورس adapter: <code>packages/vue/src/components/{{ implementationSnippet.component }}</code></p><template v-if="selectedItem.name === 'Timeline'"><TimelinePlayground :copied-key="copiedKey" @copy="copyText" /></template><template v-else-if="selectedItem.name === 'Charts'"><ChartsPlayground :copied-key="copiedKey" @copy="copyText" /></template><template v-else-if="selectedItem.name === 'Banner'"><BannerPlayground :copied-key="copiedKey" @copy="copyText" /></template><template v-else-if="selectedItem.name === 'Alert'"><AlertPlayground :copied-key="copiedKey" @copy="copyText" /></template><template v-else-if="selectedItem.name === 'Toast'"><ToastPlayground :copied-key="copiedKey" @copy="copyText" /></template><template v-else-if="selectedItem.name === 'Notification Center'"><NotificationCenterPlayground :copied-key="copiedKey" @copy="copyText" /></template><template v-else-if="selectedItem.name === 'Tooltip'"><TooltipPlayground :copied-key="copiedKey" @copy="copyText" /></template><template v-else-if="selectedItem.name === 'Progress'"><ProgressPlayground :copied-key="copiedKey" @copy="copyText" /></template><template v-else-if="selectedItem.name === 'Spinner'"><SpinnerPlayground :copied-key="copiedKey" @copy="copyText" /></template><template v-else-if="selectedItem.name === 'Skeleton'"><SkeletonPlayground :copied-key="copiedKey" @copy="copyText" /></template><template v-else-if="selectedItem.name === 'Empty State'"><EmptyStatePlayground :copied-key="copiedKey" @copy="copyText" /></template><template v-else-if="selectedItem.name === 'Avatar'"><AvatarPlayground :copied-key="copiedKey" @copy="copyText" /></template><template v-else-if="selectedItem.name === 'Badge'"><BadgePlayground :copied-key="copiedKey" @copy="copyText" /></template><template v-else-if="selectedItem.name === 'Table'"><TablePlayground :copied-key="copiedKey" @copy="copyText" /></template><template v-else-if="selectedItem.name === 'List'"><ListPlayground :copied-key="copiedKey" @copy="copyText" /></template><template v-else-if="selectedItem.name === 'Card'"><CardPlayground :copied-key="copiedKey" @copy="copyText" /></template><template v-else-if="selectedItem.name === 'Tag'"><TagPlayground :copied-key="copiedKey" @copy="copyText" /></template><template v-else-if="selectedItem.name === 'Chip'"><ChipPlayground :copied-key="copiedKey" @copy="copyText" /></template><template v-else-if="selectedItem.name === 'Chip'"><ChipPlayground :copied-key="copiedKey" @copy="copyText" /></template><template v-else-if="selectedItem.name === 'Input'"><InputPlayground :copied-key="copiedKey" @copy="copyText" /></template><template v-else-if="selectedItem.name === 'Select'"><SelectPlayground :copied-key="copiedKey" @copy="copyText" /></template><template v-else-if="selectedItem.name === 'Combobox'"><ComboboxPlayground :copied-key="copiedKey" @copy="copyText" /></template><template v-else-if="selectedItem.name === 'Checkbox'"><CheckboxPlayground :copied-key="copiedKey" @copy="copyText" /></template><template v-else-if="selectedItem.name === 'Radio Button'"><RadioPlayground :copied-key="copiedKey" @copy="copyText" /></template><template v-else-if="selectedItem.name === 'Switch'"><SwitchPlayground :copied-key="copiedKey" @copy="copyText" /></template><template v-else-if="selectedItem.name === 'Segmented Control'"><SegmentedPlayground :copied-key="copiedKey" @copy="copyText" /></template><template v-else-if="selectedItem.name === 'Range'"><RangePlayground :copied-key="copiedKey" @copy="copyText" /></template><template v-else-if="selectedItem.name === 'Rating'"><RatingPlayground :copied-key="copiedKey" @copy="copyText" /></template><template v-else-if="selectedItem.name === 'Date Picker'"><DatePickerPlayground :copied-key="copiedKey" @copy="copyText" /></template><template v-else-if="selectedItem.name === 'Time Picker'"><TimePickerPlayground :copied-key="copiedKey" @copy="copyText" /></template><template v-else-if="selectedItem.name === 'File Upload'"><FileUploadPlayground :copied-key="copiedKey" @copy="copyText" /></template><template v-else-if="selectedItem.name === 'Navbar'"><NavbarPlayground :copied-key="copiedKey" @copy="copyText" /></template><template v-else-if="selectedItem.name === 'Sidebar'"><SidebarPlayground :copied-key="copiedKey" @copy="copyText" /></template><template v-else-if="selectedItem.name === 'Tabs'"><TabsPlayground :copied-key="copiedKey" @copy="copyText" /></template><template v-else-if="selectedItem.name === 'Breadcrumbs'"><BreadcrumbsPlayground :copied-key="copiedKey" @copy="copyText" /></template><template v-else-if="selectedItem.name === 'Pagination'"><PaginationPlayground :copied-key="copiedKey" @copy="copyText" /></template><template v-else-if="selectedItem.name === 'Stepper'"><StepperPlayground :copied-key="copiedKey" @copy="copyText" /></template><template v-else-if="selectedItem.name === 'Menu'"><MenuPlayground :copied-key="copiedKey" @copy="copyText" /></template><template v-else-if="selectedItem.name === 'Command Palette'"><CommandPalettePlayground :copied-key="copiedKey" @copy="copyText" /></template><template v-else-if="selectedItem.name === 'Tree View'"><TreeViewPlayground :copied-key="copiedKey" @copy="copyText" /></template><template v-else-if="selectedItem.name === 'Modal'"><ModalPlayground :copied-key="copiedKey" @copy="copyText" /></template><template v-else-if="selectedItem.name === 'Drawer'"><DrawerPlayground :copied-key="copiedKey" @copy="copyText" /></template><template v-else-if="selectedItem.name === 'Popover'"><PopoverPlayground :copied-key="copiedKey" @copy="copyText" /></template><template v-else-if="selectedItem.name === 'Image'"><ImagePlayground :copied-key="copiedKey" @copy="copyText" /></template><template v-else-if="selectedItem.name === 'Carousel'"><CarouselPlayground :copied-key="copiedKey" @copy="copyText" /></template><template v-else-if="selectedItem.name === 'Chat'"><ChatPlayground :copied-key="copiedKey" @copy="copyText" /></template><template v-else-if="selectedItem.name === 'Accordion'"><AccordionPlayground :copied-key="copiedKey" @copy="copyText" /></template><template v-else-if="selectedItem.name === 'Divider'"><DividerPlayground :copied-key="copiedKey" @copy="copyText" /></template><template v-else><div class="code-copy-row"><button class="copy-section-button" type="button" @click="copyText('main-code', implementationSnippet.markup)">{{ copiedKey === 'main-code' ? 'کپی شد' : 'کپی کد' }}</button></div><pre class="usage-code" dir="ltr"><code>{{ implementationSnippet.markup }}</code></pre></template></section><section v-else-if="selectedItem.name === 'Split Button'" id="doc-implementation" class="glass-card doc-section"><h2>آزمایش Vue</h2><SplitButtonPlayground :copied-key="copiedKey" @copy="copyText" /></section><article v-for="section in contractSections" :id="sectionId(section.title)" :key="section.title" class="glass-card doc-section"><h2>{{ section.title }}</h2><button class="copy-section-button contract-copy-button" type="button" :aria-label="`کپی بخش ${section.title}`" @click="copyText(`section-${section.title}`, section.body)">کپی بخش</button><ContractVisualShowcase :name="selectedItem.name" :section="section.title" :body="section.body" :copied-key="copiedKey" @copy="copyText" /></article><p class="source-note">مستند مستقل: {{ selectedItem.contractPath }} · شناسه <code dir="ltr">{{ selectedItem.id }}</code></p></section>
      <section v-if="page==='inventory'" class="inventory"><div class="status-legend" aria-label="تعریف وضعیت پیاده‌سازی"><span><b class="status implemented">Implemented</b> adapter اجرایی موجود</span><span><b class="status adapted">Adapted</b> قابل ترکیب با primitiveهای فعلی</span><span><b class="status proposed">Proposed</b> قرارداد/نمونهٔ پیشنهادی</span></div><div class="toolbar"><input v-model="query" aria-label="جست‌وجوی کامپوننت، شناسه یا برچسب" placeholder="نام، شناسه یا برچسب…" /><PlaygroundSelect id="inventory-status" v-model="status" label="فیلتر وضعیت" :options="[{value:'All',label:'All'},{value:'Implemented',label:'Implemented'},{value:'Adapted',label:'Adapted'},{value:'Proposed',label:'Proposed'},{value:'Deferred',label:'Deferred'}]" /></div><div class="inventory-grid"><article v-for="item in filtered" :key="item.id" class="glass-card inventory-card"><div class="inventory-top"><button class="component-card-title" @click="openComponent(item.name)"><h2>{{ item.name }}</h2></button><span class="status" :class="item.status.toLowerCase()">{{ item.status }}</span></div><p>{{ item.note }}</p><ComponentSpecimen :name="item.specimenKey" compact /><button class="open-doc" @click="openComponent(item.name)">مستندات و نمونهٔ مستقل ←</button></article></div><p v-if="!filtered.length" class="empty">موردی پیدا نشد.</p><section class="inventory-playground"><h2>نمونه‌های تعاملی Vue</h2><p>نمونه‌های قابل‌اجرا و وضعیت‌های adapterهای موجود برای بررسی سریع.</p><ComponentLab /></section></section>
      </div><aside v-if="page!=='team'" class="on-page" aria-label="در این صفحه"><h2>در این صفحه</h2><button :class="{active:page==='overview'}" :aria-current="page==='overview' ? 'page' : undefined" @click="nav('overview')">نمای کلی</button><button :class="{active:page==='team'}" :aria-current="page==='team' ? 'page' : undefined" @click="nav('team')">راهنمای تیم Vue</button><button :class="{active:page==='foundation'}" :aria-current="page==='foundation' ? 'page' : undefined" @click="nav('foundation')">Foundation · ۱۴ فصل</button><template v-if="page==='foundation'"><hr /><button v-for="chapter in foundationChapters" :key="chapter.id" @click="scrollToFoundation(chapter.id)">{{ chapter.id }} · {{ chapter.title }}</button></template><button :class="{active:page==='inventory' || page==='component-detail'}" :aria-current="page==='inventory' || page==='component-detail' ? 'page' : undefined" @click="nav('inventory')">همهٔ کامپوننت‌ها</button><template v-if="page==='component-detail'"><hr /><strong class="on-page-title">{{ selectedComponent }}</strong><button v-for="section in contractSections" :key="section.title" :class="{active:activeSection===sectionId(section.title)}" :aria-current="activeSection===sectionId(section.title) ? 'location' : undefined" @click="scrollToSection(sectionId(section.title))">{{ section.title }}</button></template><template v-else-if="page!=='foundation'"><hr /><strong class="on-page-title">۴۹ صفحهٔ مستقل</strong><span class="rail-summary">هر کامپوننت مسیر، قرارداد و نمونهٔ جدا دارد.</span></template><hr /><span>RTL-first · Vue 3</span><span>توکن‌های Norato</span></aside></div>
    </main><nav class="mobile-nav" aria-label="ناوبری موبایل"><button :class="{active:page==='overview'}" :aria-current="page==='overview' ? 'page' : undefined" @click="nav('overview')">نمای کلی</button><button :class="{active:page==='team'}" :aria-current="page==='team' ? 'page' : undefined" @click="nav('team')">راهنما</button><button :class="{active:page==='inventory' || page==='component-detail'}" :aria-current="page==='inventory' || page==='component-detail' ? 'page' : undefined" @click="nav('inventory')">همهٔ کامپوننت‌ها</button></nav>
  </div>
</template>
