<script setup lang="ts">
import { computed } from 'vue'
import SplitButtonShowcase from './SplitButtonShowcase.vue'
import StepperContractShowcase from './StepperContractShowcase.vue'
import NavbarVariantGallery from './NavbarVariantGallery.vue'
import MenuContractShowcase from './MenuContractShowcase.vue'
import CommandPaletteContractShowcase from './CommandPaletteContractShowcase.vue'
import { NoratoChip, NoratoTag, type NoratoChipSize, type NoratoTagAppearance, type NoratoTagSize, type NoratoTagTone } from '@norato/vue'

type Axis = { name: string; values: string[] }
type Entry = { id: number; group: string; label: string; detail: string; source: string; axes: Axis[]; measurements: number[] }
type RadioMatrixState = { id: string; label: string; kind: string }
type SwitchMatrixState = { id: string; label: string; kind: string }
type SegmentedMatrixVariant = { id: string; selected: boolean; state: string; stateLabel: string }
type SidebarVisualVariant = { id: string; state: string; collapsed: boolean; label: string; style?: string; size?: string; kind?: string }
const sidebarStyleVariants: SidebarVisualVariant[] = ['Glass', 'Bar'].flatMap(style => [false, true].map(collapsed => ({ id: `sidebar-${style}-${collapsed}`, state: 'default', collapsed, label: `${style} · ${collapsed ? 'جمع‌شده' : 'باز'}`, style })))
const sidebarItemVariants: SidebarVisualVariant[] = [false, true].flatMap(collapsed => ['Small', 'Medium'].flatMap(size => ['default', 'hover', 'active', 'disabled', 'focus'].map(state => ({ id: `item-${collapsed}-${size}-${state}`, state, collapsed, size, label: `${collapsed ? 'جمع‌شده' : 'باز'} · ${size} · ${state}` }))))
const sidebarSubItemVariants: SidebarVisualVariant[] = ['Small', 'Medium'].flatMap(size => ['default', 'hover', 'active', 'focus'].map(state => ({ id: `sub-${size}-${state}`, state, collapsed: false, size, label: `${size} · ${state}` })))
const sidebarSectionVariants: SidebarVisualVariant[] = [false, true].map(collapsed => ({ id: `section-${collapsed}`, state: 'default', collapsed, label: collapsed ? 'جمع‌شده' : 'باز' }))
const sidebarHeaderVariants: SidebarVisualVariant[] = ['Brand', 'Workspace'].flatMap(kind => [false, true].map(collapsed => ({ id: `header-${kind}-${collapsed}`, state: 'default', collapsed, kind, label: `${kind === 'Brand' ? 'برند' : 'فضای کاری'} · ${collapsed ? 'جمع‌شده' : 'باز'}` })))
const sidebarFooterVariants: SidebarVisualVariant[] = ['User', 'Card'].flatMap(kind => [false, true].map(collapsed => ({ id: `footer-${kind}-${collapsed}`, state: 'default', collapsed, kind, label: `${kind === 'User' ? 'کاربر' : 'کارت'} · ${collapsed ? 'جمع‌شده' : 'باز'}` })))

const props = defineProps<{ name: string; section: string; body: string; copiedKey?: string }>()
const emit = defineEmits<{ copy: [key: string, value: string] }>()
const sectionLabel: Record<string, string> = { Overview: 'نمای کلی', Anatomy: 'جزء', Variants: 'نمونهٔ گونه', Sizes: 'اندازه', States: 'حالت', Parts: 'بخش', Usage: 'راهنمای کاربرد', Accessibility: 'الزام دسترس‌پذیری', Tokens: 'توکن' }

const clean = (value: string) => value
  .replace(/`([^`]+)`/g, '$1')
  .replace(/\*\*(.+?)\*\*/g, '$1')
  .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
  .replace(/<[^>]*>/g, '')
  .trim()

const parseAxes = (source: string): Axis[] => {
  const axes: Axis[] = []
  const axisPattern = /([A-Za-z][A-Za-z /&-]{0,24}):\s*([^؛;]+)/g
  for (const match of source.matchAll(axisPattern)) {
    const values = clean(match[2]).split(/[،,]/).map(value => value.trim()).filter(Boolean)
    if (values.length) axes.push({ name: match[1].trim(), values })
  }
  return axes
}

const entries = computed<Entry[]>(() => {
  const lines = props.body.replace(/\r/g, '').split('\n')
  const result: Entry[] = []
  let group = ''
  const add = (raw: string) => {
    const source = raw.trim()
    if (!source) return
    const bold = source.match(/^\*\*(.+?)\*\*\s*(?:[—–:-]\s*)?([\s\S]*)$/)
    const label = bold ? clean(bold[1]).replace(/\s*\([^)]*variant[^)]*\)/i, '').replace(/\s*[—–-]\s*\d+\s*variant\b/i, '').replace(/[:：]\s*$/, '') : ''
    const detail = clean(bold ? bold[2] : source)
    const measurements = [...source.matchAll(/(?<![\w-])(\d+(?:\.\d+)?)\s*px\b/g)].map(match => Number(match[1])).filter(Number.isFinite)
    result.push({ id: result.length, group, label: label || `${sectionLabel[props.section] || props.section} ${result.length + 1}`, detail, source, axes: parseAxes(bold ? bold[2] : source), measurements })
  }

  let paragraph = ''
  const flush = () => { if (paragraph) add(paragraph); paragraph = '' }
  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed) { flush(); continue }
    const heading = trimmed.match(/^#{3,4}\s+(.+)$/)
    if (heading) { flush(); group = clean(heading[1]); continue }
    const bullet = trimmed.match(/^[-*]\s+(.+)$/)
    if (bullet) { flush(); add(bullet[1]); continue }
    paragraph = paragraph ? `${paragraph} ${trimmed}` : trimmed
  }
  flush()
  return result
})

const title = computed(() => props.section.toLocaleLowerCase())
const isEmptyStatement = (entry: Entry) => /مشخص نشده|مشخص نشده است|وجود ندارد|در قرارداد فعلی.*نیست/i.test(entry.detail)
const description = (entry: Entry) => entry.detail
  .replace(/(?:ابعاد\/حالت‌ها:\s*)?(?:Type|Size|State|Align|Sort|Expanded|Selection|Sender|Style|Layout|Position|Placement|Tone|Label|Icon|Direction|Status|Part)\s*:.*/i, '')
  .replace(/[؛;,]\s*$/, '')
  .trim()
const tokenNames = computed(() => [...new Set(props.body.match(/--norato-[a-z0-9-]+/g) || [])])
const sizeValues = computed(() => [...new Set(entries.value.flatMap(entry => entry.measurements))].sort((a, b) => a - b))
const tokenNote = (entry: Entry) => entry.detail
  .replace(/--norato-[a-z0-9-]+/g, '')
  .replace(/توکن‌های (?:semantic|معنایی) نوراتو\s*:?/gi, '')
  .replace(/[،؛,]\s*[،؛,]*/g, ' ')
  .replace(/\s+/g, ' ')
  .trim()
const stateEntries = computed(() => entries.value.flatMap(entry => {
  if (isEmptyStatement(entry)) return [entry]
  const stateText = entry.detail.replace(/^(?:state|states):\s*/i, '')
  const values = stateText.split(/[،,;]/).map(value => clean(value)).filter(Boolean)
  if (values.length < 2 || values.some(value => value.length > 42)) return [entry]
  return values.map((value, index) => ({ ...entry, id: entry.id * 100 + index, label: value, detail: entry.label, source: value }))
}))
const radioMatrixStates: RadioMatrixState[] = [
  { id: 'default', label: 'Default', kind: 'default' },
  { id: 'hover', label: 'Hover', kind: 'hover' },
  { id: 'disabled', label: 'Disabled', kind: 'disabled' },
  { id: 'focus', label: 'Focus', kind: 'focus' },
  { id: 'error', label: 'Error', kind: 'error' },
]
const radioMatrixCells = [
  { checked: false, size: 16 },
  { checked: true, size: 16 },
  { checked: false, size: 20 },
  { checked: true, size: 20 },
]
const switchMatrixStates: SwitchMatrixState[] = [
  { id: 'default', label: 'Default', kind: 'default' },
  { id: 'hover', label: 'Hover', kind: 'hover' },
  { id: 'disabled', label: 'Disabled', kind: 'disabled' },
  { id: 'focus', label: 'Focus', kind: 'focus' },
  { id: 'error', label: 'Error', kind: 'error' },
]
const switchFieldMatrixStates: SwitchMatrixState[] = [
  { id: 'default', label: 'Default', kind: 'default' },
  { id: 'error', label: 'Error', kind: 'error' },
  { id: 'disabled', label: 'Disabled', kind: 'disabled' },
]
const switchMatrixSizes = [
  { id: 'small', label: 'Small' },
  { id: 'medium', label: 'Medium' },
  { id: 'large', label: 'Large' },
]
const switchMatrixValues = [
  { on: false, label: 'Off' },
  { on: true, label: 'On' },
]
const segmentedMatrixStyles = [
  { id: 'glass', label: 'Glass' },
  { id: 'contrast', label: 'Contrast' },
]
const segmentedMatrixSizes = [
  { id: 'small', label: 'Small' },
  { id: 'medium', label: 'Medium' },
  { id: 'large', label: 'Large' },
  { id: 'xlarge', label: 'XLarge' },
]
const segmentedMatrixStates = [
  { id: 'default', label: 'Default' },
  { id: 'hover', label: 'Hover' },
  { id: 'disabled', label: 'Disabled' },
  { id: 'focus', label: 'Focus' },
]
const segmentedMatrixGroups = computed(() => segmentedMatrixStyles.flatMap(style => segmentedMatrixSizes.map(size => ({
  id: `${style.id}-${size.id}`,
  style,
  size,
  variants: [false, true].flatMap(selected => segmentedMatrixStates.map(state => ({
    id: `${selected ? 'selected' : 'unselected'}-${state.id}`,
    selected,
    state: state.id,
    stateLabel: state.label,
  }))) as SegmentedMatrixVariant[],
}))))
const tagVariantTones: { id: NoratoTagTone; label: string }[] = [
  { id: 'neutral', label: 'خنثی' },
  { id: 'success', label: 'موفقیت' },
  { id: 'warning', label: 'هشدار' },
  { id: 'danger', label: 'خطر' },
  { id: 'info', label: 'اطلاعات' },
]
const tagVariantAppearances: { id: NoratoTagAppearance; label: string }[] = [
  { id: 'soft', label: 'نرم' },
  { id: 'outline', label: 'خط‌دار' },
]
const tagVariantSizes: { id: NoratoTagSize; label: string }[] = [
  { id: 'small', label: 'کوچک' },
  { id: 'medium', label: 'متوسط' },
  { id: 'large', label: 'بزرگ' },
  { id: 'xlarge', label: 'خیلی بزرگ' },
]
const tagSizeHeights: Record<NoratoTagSize, number> = { small: 24, medium: 28, large: 32, xlarge: 36 }
const tagVariantCombos = tagVariantAppearances.flatMap(appearance => tagVariantSizes.map(size => ({ appearance, size })))
const chipSizes: { id: NoratoChipSize; label: string; height: number }[] = [
  { id: 'small', label: 'کوچک', height: 24 },
  { id: 'medium', label: 'متوسط', height: 28 },
  { id: 'large', label: 'بزرگ', height: 32 },
  { id: 'xlarge', label: 'خیلی بزرگ', height: 36 },
]
const chipStates = [
  { id: 'default', label: 'عادی' },
  { id: 'hover', label: 'هاور' },
  { id: 'selected', label: 'انتخاب‌شده' },
  { id: 'disabled', label: 'غیرفعال' },
  { id: 'focus', label: 'فوکوس' },
]

const sampleKind = (entry: Pick<Entry, 'label' | 'source'>) => {
  const item = `${entry.label} ${entry.source}`.toLocaleLowerCase()
  const haystack = `${props.name} ${item}`.toLocaleLowerCase()
  if (/date input|date field|time input|calendar input/.test(item)) return 'form'
  if (/calendar|date picker|picker cell|date cell/.test(haystack)) return 'calendar'
  if (/time picker|clock/.test(haystack)) return 'clock'
  if (/table|column|cell|row|grid|chart|list|timeline/.test(haystack)) return 'data'
  if (/menu|nav|tab|breadcrumb|step|pagination|command/.test(haystack)) return 'navigation'
  if (/input|field|select|checkbox|radio|switch|range|rating|date|time|search|upload/.test(haystack)) return 'form'
  if (/button|action|cta/.test(haystack)) return 'action'
  if (/modal|dialog|drawer|popover|tooltip|overlay/.test(haystack)) return 'overlay'
  if (/toast|alert|banner|progress|spinner|skeleton|status|badge|notification/.test(haystack)) return 'feedback'
  if (/image|avatar|media|carousel|chat|message/.test(haystack)) return 'media'
  return 'surface'
}

const stateKind = (entry: Entry) => {
  const state = `${entry.label} ${entry.detail}`.toLocaleLowerCase()
  if (/disabled|غیرفعال/.test(state)) return 'disabled'
  if (/error|invalid|خطا|نامعتبر/.test(state)) return 'invalid'
  if (/selected|checked|انتخاب‌شده|فعال/.test(state)) return 'selected'
  if (/loading|busy|بارگذاری|انتظار/.test(state)) return 'loading'
  if (/focus|تمرکز|فوکوس/.test(state)) return 'focus'
  if (/hover|شناور/.test(state)) return 'hover'
  if (/pressed|active|فشرده/.test(state)) return 'pressed'
  if (/open|باز/.test(state)) return 'open'
  if (/filled|پرشده/.test(state)) return 'filled'
  if (/read.?only|فقط.?خواندنی/.test(state)) return 'readonly'
  return 'default'
}
const comboboxStateKind = (entry: Entry) => {
  const state = `${entry.label} ${entry.detail} ${entry.source}`.toLocaleLowerCase()
  if (/typing|تایپ/.test(state)) return 'typing'
  if (/hover|شناور/.test(state)) return 'hover'
  if (/filled|پرشده/.test(state)) return 'filled'
  if (/error|invalid|خطا|نامعتبر/.test(state)) return 'invalid'
  if (/disabled|غیرفعال/.test(state)) return 'disabled'
  return 'default'
}
const comboboxStateEntries = computed(() => {
  const kinds = new Set(['default', 'hover', 'typing', 'filled', 'invalid', 'disabled'])
  const seen = new Set<string>()
  return stateEntries.value.filter(entry => {
    const kind = comboboxStateKind(entry)
    if (!kinds.has(kind) || seen.has(kind)) return false
    seen.add(kind)
    return true
  })
})
const comboboxStateValue = (entry: Entry) => {
  const kind = comboboxStateKind(entry)
  if (kind === 'typing') return 'پژوهش'
  if (kind === 'filled') return 'طراحی محصول'
  if (kind === 'invalid') return 'مهارت نامعتبر'
  return 'جست‌وجو یا انتخاب کنید…'
}

const inputStateKind = (entry: Entry) => {
  const state = `${entry.label} ${entry.detail}`.toLocaleLowerCase()
  if (/success|موفق/.test(state)) return 'success'
  if (/typing|تایپ/.test(state)) return 'typing'
  return stateKind(entry)
}

const inputStateValue = (entry: Entry) => {
  const family = entry.detail.toLocaleLowerCase()
  if (family.includes('otp')) return '• • • •'
  if (family.includes('password')) return '••••••'
  if (family.includes('amount')) return '۱٬۲۵۰٬۰۰۰'
  if (family.includes('search')) return /typing|تایپ/i.test(entry.label) ? 'عبارت جست‌وجو' : 'عبارت را بنویسید'
  if (family.includes('phone')) return '۹۱۲ ۳۴۵ ۶۷۸۹'
  if (family.includes('number')) return '۱۲'
  if (family.includes('text area')) return 'متن نمونه'
  return 'مقدار نمونه'
}

const inputStateDescription = (entry: Entry) => {
  const state = entry.label.toLocaleLowerCase()
  if (/success|موفق/.test(state)) return `${entry.detail} · مقدار تأیید شده است.`
  if (/error|invalid|خطا|نامعتبر/.test(state)) return `${entry.detail} · مقدار نیاز به بازبینی دارد.`
  if (/disabled|غیرفعال/.test(state)) return `${entry.detail} · ورودی در دسترس نیست.`
  if (/loading|بارگذاری/.test(state)) return `${entry.detail} · پردازش در حال انجام است.`
  if (/read.?only|فقط.?خواندنی/.test(state)) return `${entry.detail} · مقدار فقط برای مشاهده است.`
  if (/hover|شناور/.test(state)) return `${entry.detail} · نشانگر روی فیلد قرار دارد.`
  if (/active|pressed|فعال/.test(state)) return `${entry.detail} · فیلد در حال ویرایش است.`
  if (/filled|پرشده/.test(state)) return `${entry.detail} · فیلد مقدار دارد.`
  if (/typing|تایپ/.test(state)) return `${entry.detail} · عبارت در حال نوشته‌شدن است.`
  return `${entry.detail} · آمادهٔ دریافت مقدار.`
}

const inputDocumentStates = [
  { id: 'default', label: 'Default', description: 'حالت عادی برای دریافت مقدار.' },
  { id: 'hover', label: 'Hover', description: 'نشانگر روی فیلد قرار دارد.' },
  { id: 'active', label: 'Active', description: 'فیلد در حال ویرایش است.' },
  { id: 'error', label: 'Error', description: 'مقدار نامعتبر است؛ اصلاح لازم است.' },
  { id: 'disabled', label: 'Disabled', description: 'غیرفعال و غیرقابل استفاده.' },
  { id: 'loading', label: 'Loading', description: 'در حال پردازش.' },
  { id: 'success', label: 'Success', description: 'مقدار معتبر و تأیید شده است.' },
  { id: 'readonly', label: 'Read-only', description: 'قابل مشاهده است اما ویرایش نمی‌شود.' },
  { id: 'filled', label: 'Filled', description: 'مقدار وارد شده.' },
  { id: 'typing', label: 'Typing', description: 'در حال تایپ است.' },
]

const isInputFamily = (entry: Entry, family: string) => entry.detail.toLocaleLowerCase().includes(family)

const selectStateDescription = (entry: Entry) => {
  const state = entry.label.toLocaleLowerCase()
  const family = entry.detail.toLocaleLowerCase()
  if (/default|پیش‌فرض/.test(state)) return family.includes('multi') ? 'انتخاب چند مورد از فهرست.' : family.includes('option') ? 'گزینهٔ عادی در فهرست.' : 'آمادهٔ انتخاب از فهرست.'
  if (/hover|شناور/.test(state)) return 'نشانگر روی عنصر است.'
  if (/open|باز/.test(state)) return 'فهرست گزینه‌ها باز است.'
  if (/filled|پرشده/.test(state)) return 'مقدار ثبت شده است.'
  if (/error|invalid|خطا/.test(state)) return 'مرز قرمز، خطا را مشخص می‌کند.'
  if (/disabled|غیرفعال/.test(state)) return 'غیرفعال و غیرقابل انتخاب.'
  if (/read.?only|فقط.?خواندنی/.test(state)) return 'قابل مشاهده؛ بدون امکان ویرایش.'
  if (/selected|checked|انتخاب‌شده/.test(state)) return 'گزینه انتخاب شده است.'
  if (/focus|تمرکز|فوکوس/.test(state)) return 'فوکوس صفحه‌کلید؛ حلقهٔ ۲px.'
  if (/loading|busy|بارگذاری/.test(state)) return 'گزینه‌ها در حال بارگذاری‌اند.'
  return entry.detail
}

const fieldStateDescription = (entry: Entry, component: string) => {
  const state = entry.label.toLocaleLowerCase()
  if (/default|پیش‌فرض/.test(state)) return component === 'Switch' ? 'کلید خاموش و آمادهٔ تغییر است.' : 'حالت عادی؛ آمادهٔ انتخاب.'
  if (/hover|شناور/.test(state)) return 'نشانگر روی کنترل است.'
  if (/disabled|غیرفعال/.test(state)) return 'کنترل غیرفعال و غیرقابل تغییر است.'
  if (/focus|تمرکز|فوکوس/.test(state)) return 'فوکوس صفحه‌کلید؛ حلقهٔ ۲px.'
  if (/error|invalid|خطا/.test(state)) return 'خطا با مرز قرمز مشخص شده.'
  return entry.detail
}

const groupKind = (value: string) => {
  const heading = value.toLocaleLowerCase()
  if (/محدودیت|avoid|don't|نکن/.test(heading)) return 'avoid'
  if (/rtl|راست/.test(heading)) return 'rtl'
  if (/api|پیاده|راه‌اندازی|اجرایی/.test(heading)) return 'implementation'
  return 'guideline'
}

const generatedLabel = (entry: Entry) => entry.label === `${sectionLabel[props.section] || props.section} ${entry.id + 1}`
const usageTitle = (entry: Entry) => entry.group || (generatedLabel(entry) ? 'راهنمای کاربرد' : entry.label)
const usageDetail = (entry: Entry) => entry.group && !generatedLabel(entry) ? `${entry.label} · ${entry.detail}` : entry.detail
const buttonAnatomyDetail = (entry: Entry) => description(entry).replace(/؛?\s*در API فعلی پشتیبانی نمی‌شود\.?/g, '').trim()
const tokenCopyKey = (token: string) => `button-token-${token}`
const resolvedToken = (token: string) => typeof document === 'undefined' ? '' : getComputedStyle(document.documentElement).getPropertyValue(token).trim()
const displayTokenValue = (token: string) => token.includes('font') ? resolvedToken(token).split(',')[0].replace(/['"]/g, '') : resolvedToken(token)
const buttonTokenNote = computed(() => props.body.match(/شعاع pill[^.]*\./)?.[0] || '')
const buttonOverviewLabels = ['کاربرد و ظاهر', 'مرز API Vue', 'محدودیت Icon Button', 'نمونهٔ بالای صفحه']
</script>

<template>
  <div class="contract-visual" :class="[`contract-visual--${title}`, { 'contract-visual--tag': name === 'Tag', 'contract-visual--chip': name === 'Chip' }]" :data-component="name" :data-section="section" dir="rtl">
    <MenuContractShowcase v-if="name === 'Menu' && ['Anatomy', 'Variants', 'Sizes', 'States', 'Parts'].includes(section)" :section="section" />
    <CommandPaletteContractShowcase v-if="name === 'Command Palette' && ['Anatomy', 'Variants', 'Sizes', 'States', 'Parts'].includes(section)" :section="section" />
    <template v-else-if="section === 'Overview'">
      <div v-if="name === 'Button'" class="button-overview-list">
        <article v-for="(entry, index) in entries" :key="entry.id"><b>{{ String(index + 1).padStart(2, '0') }}</b><span><strong>{{ buttonOverviewLabels[index] || 'نکتهٔ قرارداد' }}</strong><p>{{ entry.detail }}</p></span></article>
      </div>
      <div v-else class="overview-visual">
        <span class="visual-index">{{ name }}</span>
        <div class="overview-points">
          <p v-for="entry in entries" :key="entry.id">{{ entry.detail }}</p>
        </div>
        <span class="visual-kind">{{ entries.length ? 'قرارداد همین کامپوننت' : 'اطلاعاتی برای نمایش ثبت نشده' }}</span>
      </div>
    </template>

    <template v-else-if="section === 'Anatomy' || section === 'Parts'">
      <StepperContractShowcase v-if="name === 'Stepper' && section === 'Anatomy'" section="Anatomy" />
      <div v-else-if="name === 'Chip' && section === 'Anatomy'" class="chip-anatomy">
        <div class="chip-anatomy-preview" aria-hidden="true" inert><NoratoChip label="فیلتر فعال" mode="filter" :model-value="true" size="medium" dir="rtl" /><NoratoChip label="برچسب ورودی" mode="input" size="medium" dir="rtl" /></div>
        <ol class="chip-anatomy-parts"><li v-for="entry in entries" :key="entry.id"><b>{{ String(entry.id + 1).padStart(2, '0') }}</b><span><strong>{{ entry.label }}</strong><small dir="auto">{{ entry.detail }}</small></span></li></ol>
        <span class="visual-kind">فیلتر و برچسب ورودی دو رفتار جدا دارند؛ نمونه‌ها از adapter اجرایی ساخته شده‌اند.</span>
      </div>
      <div v-else-if="name === 'Tag' && section === 'Anatomy'" class="tag-anatomy" aria-label="ساختار برچسب">
        <div class="tag-anatomy-preview" aria-hidden="true" inert>
          <NoratoTag tone="success" appearance="soft" size="medium" dot dir="rtl">
            <template #leadingIcon><span class="tag-anatomy-icon">✓</span></template>
            منتشر شده
            <template #trailingIcon><span class="tag-anatomy-icon">›</span></template>
          </NoratoTag>
        </div>
        <ol class="tag-anatomy-parts">
          <li v-for="entry in entries" :key="entry.id">
            <b class="tag-part-index">{{ String(entry.id + 1).padStart(2, '0') }}</b>
            <span><strong>{{ entry.label }}</strong><small dir="auto">{{ description(entry) || entry.detail }}</small></span>
          </li>
        </ol>
        <span class="visual-kind">قطعات نمایشی از adapter عمومی NoratoTag ساخته شده‌اند.</span>
      </div>
      <div v-else-if="name === 'Button' && section === 'Anatomy'" class="button-anatomy-exploded" dir="rtl">
        <div class="button-anatomy-assembled">
          <span class="button-anatomy-caption">ساختار یکپارچه</span>
          <button class="button primary" type="button" tabindex="-1" inert aria-hidden="true">ذخیره</button>
        </div>
        <div class="button-anatomy-parts" role="group" aria-label="نقشهٔ انفجاری اجزای دکمه">
          <template v-for="entry in entries" :key="entry.id">
            <article class="button-anatomy-part" :class="{ 'is-optional': /Icon/.test(entry.label) }">
              <span class="button-anatomy-layer" :class="{ 'is-container': /Container/.test(entry.label) }" :data-part="entry.label" aria-hidden="true">
                <i v-if="/Icon/.test(entry.label)">✦</i>
                <b v-else-if="/Label/.test(entry.label)">ذخیره</b>
                <span v-else class="button-anatomy-container" />
              </span>
              <b class="part-index">{{ String(entry.id + 1).padStart(2, '0') }}</b>
            </article>
          </template>
        </div>
        <ol class="button-anatomy-legend">
          <li v-for="entry in entries" :key="entry.id">
            <b class="part-index">{{ String(entry.id + 1).padStart(2, '0') }}</b>
            <span><strong>{{ entry.label }}</strong><small dir="auto">{{ buttonAnatomyDetail(entry) }}</small><small v-if="/Icon/.test(entry.label)" class="button-anatomy-support-note">جایگاه مفهومی · در API فعلی پشتیبانی نمی‌شود</small></span>
          </li>
        </ol>
        <span class="visual-kind">پوسته و محتوا از هم جدا شده‌اند؛ جایگاه‌های آیکن فعلاً فقط در قرارداد بصری هستند.</span>
      </div>
      <div v-else-if="name === 'Button' && section === 'Parts'" class="button-parts-grid">
        <article v-for="entry in entries" :key="entry.id" class="button-part-card">
          <div class="button-part-sample" aria-hidden="true" inert>
            <span v-if="/ریشه|Root/.test(entry.label)" class="button-part-root">ذخیره</span>
            <span v-else-if="/Label/.test(entry.label)" class="button-part-label">ذخیره</span>
            <span v-else-if="/Progress/.test(entry.label)" class="button-part-spinner" />
            <span v-else class="button-part-icon">✦</span>
          </div>
          <span class="button-part-copy"><strong>{{ entry.label }}</strong><small dir="auto">{{ entry.detail }}</small></span>
          <span class="button-part-status">{{ /Icon/.test(entry.label) ? 'فقط قرارداد بصری' : 'در adapter Vue' }}</span>
        </article>
      </div>
      <div v-else-if="name === 'Tag' && section === 'Parts'" class="tag-parts-grid">
        <article v-for="entry in entries" :key="entry.id" class="tag-part-card">
          <div class="tag-part-sample" aria-hidden="true" inert>
            <NoratoTag v-if="entry.id === 0" tone="neutral" appearance="outline" size="medium" dir="rtl"><template #leadingIcon><span class="tag-anatomy-icon">✓</span></template>برچسب<template #trailingIcon><span class="tag-anatomy-icon">›</span></template></NoratoTag>
            <NoratoTag v-else tone="info" appearance="soft" size="medium" dot dir="rtl">اطلاعات</NoratoTag>
          </div>
          <span><strong>{{ entry.label }}</strong><small dir="auto">{{ entry.detail }}</small></span>
          <b class="tag-part-status">در adapter Vue</b>
        </article>
      </div>
      <div v-else-if="name === 'Chip' && section === 'Parts'" class="chip-parts-grid">
        <article v-for="entry in entries" :key="entry.id" class="chip-part-card">
          <div class="chip-part-sample" aria-hidden="true" inert>
            <NoratoChip v-if="entry.id === 1" label="طراحی" mode="input" size="medium" dir="rtl" />
            <NoratoChip v-else-if="entry.id === 2" label="طراحی" mode="filter" size="medium" dir="rtl"><template #leadingIcon><span class="chip-part-check">✓</span></template></NoratoChip>
            <NoratoChip v-else-if="entry.id === 3" label="پروژه‌های اخیر" mode="filter" :model-value="true" size="xlarge" dir="rtl" />
            <NoratoChip v-else label="طراحی" mode="filter" :model-value="true" size="medium" dir="rtl" />
          </div>
          <span><strong>{{ entry.label }}</strong><small dir="auto">{{ entry.detail }}</small></span>
          <b class="chip-part-status">{{ entry.id === 1 ? 'فقط mode ورودی' : 'در adapter Vue' }}</b>
        </article>
      </div>
      <div v-else class="anatomy-visual">
        <div class="anatomy-component-mark" :data-kind="sampleKind(entries[0] || {label:name, source:name} as Entry)">
          <span>{{ name }}</span>
          <div class="anatomy-diagram-parts"><i v-for="entry in entries" :key="entry.id">{{ String(entry.id + 1).padStart(2, '0') }}</i></div>
        </div>
        <ol class="anatomy-parts">
          <li v-for="entry in entries" :key="entry.id" :class="{ 'is-empty': isEmptyStatement(entry) }">
            <b class="part-index">{{ String(entry.id + 1).padStart(2, '0') }}</b>
            <span><strong>{{ entry.label }}</strong><small v-if="description(entry)" dir="auto">{{ description(entry) }}</small></span>
            <div v-if="entry.axes.length" class="variant-axes part-axes"><div v-for="axis in entry.axes" :key="axis.name" class="variant-axis"><b dir="ltr">{{ axis.name }}</b><span v-for="value in axis.values" :key="value" dir="auto">{{ value }}</span></div></div>
            <i class="part-connector" aria-hidden="true" />
          </li>
        </ol>
      </div>
    </template>

    <template v-else-if="section === 'Variants'">
      <NavbarVariantGallery v-if="name === 'Navbar'" />
      <SplitButtonShowcase v-else-if="name === 'Split Button'" :section="section" :copied-key="copiedKey || ''" @copy="(key, value) => emit('copy', key, value)" />
      <StepperContractShowcase v-else-if="name === 'Stepper'" section="Variants" />
      <div v-else-if="name === 'Sidebar'" class="sidebar-variant-gallery" aria-hidden="true" inert>
        <section class="sidebar-variant-family" aria-label="چهار حالت Sidebar">
          <header><strong>Sidebar</strong><span>۲ سبک × باز/جمع‌شده · ۴</span></header>
          <div class="sidebar-variant-grid sidebar-variant-grid-sidebar">
            <article v-for="variant in sidebarStyleVariants" :key="variant.id" class="sidebar-variant-sample" :data-style="variant.style" :data-collapsed="variant.collapsed" :data-state="variant.state">
              <div class="sidebar-mini" :class="{ 'is-collapsed': variant.collapsed }"><b class="sidebar-mini-brand"><i>ن</i><span v-if="!variant.collapsed">نوراتو</span></b><small v-if="!variant.collapsed">فضای کاری</small><span class="sidebar-mini-row is-active"><i>⌂</i><span v-if="!variant.collapsed">نمای کلی</span></span><span class="sidebar-mini-row"><i>▦</i><span v-if="!variant.collapsed">پروژه‌ها</span></span></div>
              <small class="sidebar-variant-label">{{ variant.label }}</small>
            </article>
          </div>
        </section>
        <section class="sidebar-variant-family" aria-label="بیست حالت Item">
          <header><strong>Item</strong><span>باز/جمع‌شده × Small/Medium × ۵ حالت · ۲۰</span></header>
          <div class="sidebar-variant-grid sidebar-variant-grid-items">
            <article v-for="variant in sidebarItemVariants" :key="variant.id" class="sidebar-variant-sample" :data-size="variant.size" :data-state="variant.state" :data-collapsed="variant.collapsed">
              <span class="sidebar-mini-row"><i>▦</i><span v-if="!variant.collapsed">پروژه‌ها</span></span><small class="sidebar-variant-label">{{ variant.label }}</small>
            </article>
          </div>
        </section>
        <section class="sidebar-variant-family" aria-label="هشت حالت Sub Item">
          <header><strong>Sub Item</strong><span>۲ اندازه × ۴ حالت · ۸</span></header>
          <div class="sidebar-variant-grid sidebar-variant-grid-subitems">
            <article v-for="variant in sidebarSubItemVariants" :key="variant.id" class="sidebar-variant-sample" :data-size="variant.size" :data-state="variant.state">
              <span class="sidebar-mini-row sidebar-mini-subitem"><i>•</i><span>فعال</span></span><small class="sidebar-variant-label">{{ variant.label }}</small>
            </article>
          </div>
        </section>
        <section class="sidebar-variant-family" aria-label="دو حالت Section Title">
          <header><strong>Section Title</strong><span>باز/جمع‌شده · ۲</span></header>
          <div class="sidebar-variant-grid sidebar-variant-grid-parts">
            <article v-for="variant in sidebarSectionVariants" :key="variant.id" class="sidebar-variant-sample" :data-collapsed="variant.collapsed"><small v-if="!variant.collapsed" class="sidebar-mini-section">فضای کاری</small><span v-else class="sidebar-mini-row"><i>⋯</i></span><small class="sidebar-variant-label">{{ variant.label }}</small></article>
          </div>
        </section>
        <section class="sidebar-variant-family" aria-label="چهار حالت Header">
          <header><strong>Header</strong><span>برند/فضای کاری × باز/جمع‌شده · ۴</span></header>
          <div class="sidebar-variant-grid sidebar-variant-grid-parts">
            <article v-for="variant in sidebarHeaderVariants" :key="variant.id" class="sidebar-variant-sample" :data-collapsed="variant.collapsed" :data-kind="variant.kind"><span class="sidebar-mini-row"><i>ن</i><span v-if="!variant.collapsed">{{ variant.kind === 'Brand' ? 'نوراتو' : 'فضای کاری' }}</span></span><small class="sidebar-variant-label">{{ variant.label }}</small></article>
          </div>
        </section>
        <section class="sidebar-variant-family" aria-label="چهار حالت Footer">
          <header><strong>Footer</strong><span>کاربر/کارت × باز/جمع‌شده · ۴</span></header>
          <div class="sidebar-variant-grid sidebar-variant-grid-parts">
            <article v-for="variant in sidebarFooterVariants" :key="variant.id" class="sidebar-variant-sample" :data-collapsed="variant.collapsed" :data-kind="variant.kind"><span class="sidebar-mini-row"><i>{{ variant.kind === 'User' ? 'ن' : '⋯' }}</i><span v-if="!variant.collapsed">{{ variant.kind === 'User' ? 'نگار احمدی' : 'فضای کاری' }}</span></span><small class="sidebar-variant-label">{{ variant.label }}</small></article>
          </div>
        </section>
        <span class="visual-kind">۴۲ حالت از قرارداد Sidebar · نمایش ایستا و غیرتعاملی</span>
      </div>
      <div v-else-if="name === 'Segmented Control'" class="segmented-item-matrix" aria-label="ماتریس ۶۴ حالت Segment Item" aria-hidden="true" inert>
        <section v-for="group in segmentedMatrixGroups" :key="group.id" class="segmented-item-matrix-card" :data-style="group.style.id" :data-size="group.size.id">
          <header><strong>{{ group.style.label }}</strong><span>Segment Item · {{ group.size.label }}</span></header>
          <div class="segmented-item-matrix-grid">
            <div v-for="variant in group.variants" :key="variant.id" class="segmented-item-matrix-cell" :data-selected="variant.selected" :data-state="variant.state">
              <span class="segmented-item-matrix-target" :data-selected="variant.selected" :data-state="variant.state"><span class="segmented-item-matrix-item">روزانه</span></span>
              <span class="segmented-item-matrix-meta">{{ variant.selected ? 'Selected' : 'Unselected' }} · {{ variant.stateLabel }}</span>
            </div>
          </div>
        </section>
        <span class="visual-kind">۶۴ ترکیب دیداری · ۲ سبک × ۴ اندازه × ۲ انتخاب × ۴ حالت؛ نمایش ایستا و inert</span>
      </div>
      <div v-else-if="name === 'Chip'" class="chip-variant-matrix" aria-label="ماتریس ۲۰ حالت فیلتر Chip" aria-hidden="true" inert>
        <section v-for="chipSize in chipSizes" :key="chipSize.id" class="chip-variant-group">
          <header><strong>{{ chipSize.label }}</strong><span dir="ltr">{{ chipSize.height }}px · target 48px</span></header>
          <div class="chip-variant-grid">
            <article v-for="state in chipStates" :key="state.id" class="chip-variant-cell" :data-state="state.id">
              <NoratoChip label="طراحی" mode="filter" :model-value="state.id === 'selected'" :disabled="state.id === 'disabled'" :size="chipSize.id" dir="rtl" />
              <small>{{ state.label }}</small>
            </article>
          </div>
        </section>
        <span class="visual-kind">۲۰ حالت از adapter واقعی · ۴ اندازه × ۵ حالت؛ نمونه‌ها غیرتعاملی هستند.</span>
      </div>
      <div v-else-if="name === 'Tag'" class="tag-variant-matrix" aria-label="ماتریس ۴۰ گونهٔ Tag" aria-hidden="true" inert>
        <section v-for="tone in tagVariantTones" :key="tone.id" class="tag-variant-group">
          <header><strong>{{ tone.label }}</strong><span>{{ tone.id }}</span></header>
          <div class="tag-variant-grid">
            <article v-for="variant in tagVariantCombos" :key="`${variant.appearance.id}-${variant.size.id}`" class="tag-variant-cell">
              <NoratoTag :tone="tone.id" :appearance="variant.appearance.id" :size="variant.size.id" dir="rtl">برچسب</NoratoTag>
              <small>{{ variant.appearance.label }} · {{ variant.size.label }}</small>
            </article>
          </div>
        </section>
        <span class="visual-kind">۴۰ ترکیب از adapter واقعی · ۵ لحن × ۲ سبک × ۴ اندازه؛ نمایش ایستا و inert</span>
      </div>
      <div v-else-if="name === 'Input'" class="input-family-matrix" aria-label="نمونه‌های دیداری هشت زیرنوع Input" aria-hidden="true" inert>
        <article v-for="entry in entries" :key="entry.id" class="input-family-card" :data-family="entry.label.toLowerCase()">
          <header><strong>{{ entry.label }}</strong><small>{{ entry.detail.match(/\d+ variant/i)?.[0] || 'Input family' }}</small></header>
          <div class="input-family-control" :data-invalid="/error/i.test(entry.detail) || undefined">
            <span class="input-family-label">{{ entry.label.includes('Phone') ? 'شمارهٔ تلفن' : entry.label.includes('OTP') ? 'کد تأیید' : entry.label.includes('Amount') ? 'مبلغ' : entry.label.includes('Search') ? 'جست‌وجو' : entry.label.includes('Text Area') ? 'توضیحات' : 'نام' }}</span>
            <div class="input-family-field">
              <span v-if="entry.label.includes('Phone')" dir="ltr">+۹۸</span>
              <span v-if="entry.label.includes('OTP')" class="input-family-otp"><i>۴</i><i>۸</i><i /><i /><i /><i /></span>
              <span v-else-if="entry.label.includes('Number')" class="input-family-stepper">−　+</span>
              <span v-else-if="entry.label.includes('Text Area')" class="input-family-lines">متن نمونه</span>
              <span v-else class="input-family-placeholder" dir="auto">{{ entry.label.includes('Password') ? '••••••••' : entry.label.includes('Amount') ? '۱٬۲۵۰٬۰۰۰ تومان' : entry.label.includes('Search') ? 'عبارت را جست‌وجو کن' : entry.label.includes('Phone') ? '۹۱۲ ۳۴۵ ۶۷۸۹' : 'مقدار را وارد کن' }}</span>
              <span v-if="entry.label.includes('Password')" class="input-family-action">◉</span>
              <span v-if="entry.label.includes('Search')" class="input-family-action">⌕</span>
            </div>
            <small v-if="entry.label.includes('Amount')" class="input-family-help">یک میلیون و دویست و پنجاه هزار تومان</small>
          </div>
          <div v-if="entry.axes.length" class="variant-axes"><div v-for="axis in entry.axes" :key="axis.name" class="variant-axis"><b dir="ltr">{{ axis.name }}</b><span v-for="value in axis.values" :key="value" dir="auto">{{ value }}</span></div></div>
          <span class="visual-kind">نمونهٔ ایستا؛ API اجرایی در Vue adapters</span>
        </article>
      </div>
      <div v-else-if="name === 'Radio Button'" class="radio-matrix" aria-label="ماتریس دیداری Radio Button" aria-hidden="true" inert>
        <article v-for="state in radioMatrixStates" :key="state.id" class="radio-matrix-card" :data-state="state.kind">
          <header class="radio-matrix-heading"><strong>{{ state.label }}</strong><span>Radio Button</span></header>
          <div class="radio-matrix-grid">
            <div v-for="cell in radioMatrixCells" :key="`${cell.size}-${cell.checked}`" class="radio-matrix-cell" :data-checked="cell.checked" :data-size="cell.size">
              <span class="radio-matrix-target"><i class="radio-matrix-control"><i class="radio-matrix-dot" /></i></span>
              <span class="radio-matrix-meta"><b>{{ cell.checked ? 'Checked' : 'Unchecked' }}</b><small>{{ cell.size }}px</small></span>
            </div>
          </div>
        </article>
        <span class="visual-kind">۲۰ ترکیب دیداری · نمایش ایستا؛ تعامل واقعی در playground</span>
      </div>
      <div v-else-if="name === 'Switch'" class="switch-matrix" aria-label="ماتریس دیداری Switch و Switch Field" aria-hidden="true" inert>
        <section class="switch-matrix-family">
          <h3>Switch · ۳۰ ترکیب</h3>
          <div class="switch-matrix-groups">
            <article v-for="state in switchMatrixStates" :key="state.id" class="switch-matrix-card" :data-state="state.kind">
              <header class="switch-matrix-heading"><strong>{{ state.label }}</strong><span>Switch</span></header>
              <div class="switch-matrix-grid">
                <div v-for="size in switchMatrixSizes" :key="`${size.id}-false`" class="switch-matrix-cell" :data-size="size.id" data-on="false">
                  <span class="switch-matrix-target"><i class="switch-matrix-track"><i class="switch-matrix-knob" /></i></span>
                  <span class="switch-matrix-meta"><b>{{ size.label }}</b><small>Off</small></span>
                </div>
                <div v-for="size in switchMatrixSizes" :key="`${size.id}-true`" class="switch-matrix-cell" :data-size="size.id" data-on="true">
                  <span class="switch-matrix-target"><i class="switch-matrix-track"><i class="switch-matrix-knob" /></i></span>
                  <span class="switch-matrix-meta"><b>{{ size.label }}</b><small>On</small></span>
                </div>
              </div>
            </article>
          </div>
        </section>
        <section class="switch-matrix-family">
          <h3>Switch Field · ۶ ترکیب</h3>
          <div class="switch-matrix-groups switch-matrix-groups--field">
            <article v-for="state in switchFieldMatrixStates" :key="state.id" class="switch-field-matrix-card" :data-state="state.kind">
              <header class="switch-matrix-heading"><strong>{{ state.label }}</strong><span>Switch Field</span></header>
              <div class="switch-field-matrix-grid">
                <div v-for="value in switchMatrixValues" :key="String(value.on)" class="switch-field-matrix-cell" :data-on="value.on">
                  <span class="switch-matrix-target"><i class="switch-matrix-track" data-size="medium"><i class="switch-matrix-knob" /></i></span>
                  <span class="switch-field-matrix-copy"><b>اعلان‌ها · {{ value.label }}</b><small>پیام‌های جدید را خبر بده</small></span>
                </div>
              </div>
            </article>
          </div>
        </section>
        <span class="visual-kind">۳۶ ترکیب دیداری · نمایش ایستا؛ تعامل واقعی در playground</span>
      </div>
      <div v-else class="variant-visual-grid">
        <article v-for="entry in entries" :key="entry.id" class="contract-variant-card" :class="{ 'is-empty': isEmptyStatement(entry) }">
          <div class="variant-preview" :data-kind="sampleKind(entry)" aria-hidden="true" inert>
            <span v-if="sampleKind(entry) === 'calendar'" class="preview-calendar" aria-hidden="true"><i v-for="day in 14" :key="day" :class="{ 'is-selected': day === 6 }" /></span>
            <span v-else-if="sampleKind(entry) === 'clock'" class="preview-clock" aria-hidden="true"><i /><i /></span>
            <span v-else-if="sampleKind(entry) === 'action'" class="preview-actions" aria-hidden="true"><i>✓</i><i>⌄</i></span>
            <span v-else class="preview-shape"><i /><i /><i /></span>
            <span class="preview-label">{{ entry.label }}</span>
          </div>
          <strong>{{ entry.label }}</strong>
          <small v-if="description(entry)" dir="auto">{{ description(entry) }}</small>
          <div v-if="entry.axes.length" class="variant-axes">
            <div v-for="axis in entry.axes" :key="axis.name" class="variant-axis">
              <b dir="ltr">{{ axis.name }}</b><span v-for="value in axis.values" :key="value" dir="auto">{{ value }}</span>
            </div>
          </div>
          <span class="visual-kind">{{ isEmptyStatement(entry) ? 'مقدار در قرارداد مشخص نشده' : 'مرجع بصری قرارداد' }}</span>
        </article>
      </div>
    </template>

    <template v-else-if="section === 'Sizes'">
      <SplitButtonShowcase v-if="name === 'Split Button'" :section="section" :copied-key="copiedKey || ''" @copy="(key, value) => emit('copy', key, value)" />
      <StepperContractShowcase v-else-if="name === 'Stepper'" section="Sizes" />
      <div v-else-if="name === 'Tag'" class="tag-size-grid" aria-label="چهار اندازهٔ Tag" aria-hidden="true" inert>
        <article v-for="item in tagVariantSizes" :key="item.id" class="tag-size-card">
          <div class="tag-size-stage"><NoratoTag tone="info" appearance="soft" :size="item.id" dir="rtl">برچسب</NoratoTag></div>
          <strong>{{ item.label }}</strong>
          <small dir="ltr">{{ tagSizeHeights[item.id] }}px · min-height</small>
        </article>
        <span class="visual-kind">ارتفاع‌ها حداقل‌اند؛ عرض و ارتفاع با متن و آیکن کش نمی‌آید.</span>
      </div>
      <div v-else-if="name === 'Chip'" class="chip-size-grid" aria-label="چهار اندازهٔ Chip" aria-hidden="true" inert>
        <article v-for="item in chipSizes" :key="item.id" class="chip-size-card"><div><NoratoChip label="فیلتر" mode="filter" :model-value="true" :size="item.id" dir="rtl" /></div><strong>{{ item.label }}</strong><small dir="ltr">{{ item.height }}px · min-height</small></article>
        <span class="visual-kind">ارتفاع دیداری بر اساس اندازه تغییر می‌کند؛ هدف تعاملی همچنان ۴۸ پیکسل است.</span>
      </div>
      <div v-else class="size-visual">
        <div v-if="sizeValues.length" class="size-scale" aria-label="مقیاس اندازه‌های ثبت‌شده">
          <div v-for="(size, index) in sizeValues" :key="size" class="size-step">
            <i :style="{ '--size-step': `${Math.min(64, Math.max(20, size))}px` }" />
            <b>{{ size }}px</b><small>{{ index + 1 }}</small>
          </div>
        </div>
        <div class="size-source-list">
          <article v-for="entry in entries" :key="entry.id" class="size-source-item">
            <span class="size-ruler"><i /><i /><i /></span>
            <span><b>{{ entry.label }}</b><small dir="auto">{{ entry.detail }}</small></span>
          </article>
        </div>
        <span class="visual-kind">{{ sizeValues.length ? 'مقادیر مستند در مقیاس دیداری' : 'مقادیر قراردادی؛ بدون مقدار عددی ثبت‌شده' }}</span>
      </div>
    </template>

    <template v-else-if="section === 'States'">
      <SplitButtonShowcase v-if="name === 'Split Button'" :section="section" :copied-key="copiedKey || ''" @copy="(key, value) => emit('copy', key, value)" />
      <StepperContractShowcase v-else-if="name === 'Stepper'" section="States" />
      <div v-else-if="name === 'Tag'" class="tag-state-note">
        <article><NoratoTag tone="success" appearance="soft" size="medium" dot dir="rtl">منتشر شده</NoratoTag><span><strong>بدون حالت تعاملی</strong><small>{{ entries[0]?.detail }}</small></span></article>
        <span class="visual-kind">Tag وارد ترتیب Tab نمی‌شود و حالت hover، focus، selected یا disabled نمی‌گیرد.</span>
      </div>
      <div v-else-if="name === 'Chip'" class="chip-states-grid" aria-label="حالت‌های Chip" aria-hidden="true" inert>
        <article v-for="state in chipStates" :key="state.id" class="chip-state-card" :data-state="state.id"><NoratoChip label="طراحی" mode="filter" :model-value="state.id === 'selected'" :disabled="state.id === 'disabled'" size="medium" dir="rtl" /><strong>{{ state.label }}</strong><small>{{ state.id === 'focus' ? 'حلقهٔ زرد ۲px' : state.id === 'selected' ? 'aria-pressed=true' : state.id === 'disabled' ? 'غیرفعال' : state.id === 'hover' ? 'Stroke زرد' : 'aria-pressed=false' }}</small></article>
      </div>
      <div v-else-if="name === 'Combobox'" class="combobox-state-grid" aria-label="حالت‌های Combobox" aria-hidden="true" inert>
        <article v-for="entry in comboboxStateEntries" :key="entry.id" class="combobox-state-card" :data-state="comboboxStateKind(entry)">
          <div class="combobox-state-target">
            <div class="combobox-state-field" :data-state="comboboxStateKind(entry)" dir="rtl">
              <svg class="combobox-state-search" viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.5" /><path d="m16 16 4 4" /></svg>
              <span class="combobox-state-value" :data-placeholder="!['typing', 'filled', 'invalid'].includes(comboboxStateKind(entry))">{{ comboboxStateValue(entry) }}</span>
              <svg class="combobox-state-chevron" viewBox="0 0 24 24" aria-hidden="true"><path d="m7 10 5 5 5-5" /></svg>
            </div>
          </div>
          <strong>{{ entry.label }}</strong>
          <small dir="auto">{{ entry.detail }}</small>
        </article>
      </div>
      <div v-else-if="name === 'Input'" class="input-core-states-grid" aria-label="ده حالت عمومی ورودی" aria-hidden="true" inert>
        <article v-for="state in inputDocumentStates" :key="state.id" class="input-core-state-card" :data-state="state.id">
          <header><strong dir="ltr">{{ state.label }}</strong><i aria-hidden="true" /></header>
          <small>{{ state.description }}</small>
        </article>
      </div>
      <div v-else class="state-visual-grid" :class="{ 'state-visual-grid--select': name === 'Select', 'state-visual-grid--field': name === 'Radio Button' || name === 'Switch' }">
        <article v-for="entry in stateEntries" :key="entry.id" class="contract-state-card" :class="`state-is-${stateKind(entry)}`">
          <div v-if="name !== 'Select' && name !== 'Radio Button' && name !== 'Switch'" class="state-preview" :data-kind="sampleKind(entry)" aria-hidden="true" inert>
            <span class="state-shape"><i /><i /></span>
          </div>
          <template v-if="name === 'Select'">
            <div class="select-state-heading"><strong>{{ entry.label }}</strong><small class="select-state-family">{{ entry.detail }}</small><i aria-hidden="true" /></div>
            <small class="select-state-description">{{ selectStateDescription(entry) }}</small>
          </template>
          <template v-else-if="name === 'Radio Button' || name === 'Switch'">
            <div class="field-state-heading"><strong>{{ entry.label }}</strong><small class="field-state-family">{{ entry.detail }}</small><i aria-hidden="true" /></div>
            <small class="field-state-description">{{ fieldStateDescription(entry, name) }}</small>
          </template>
          <template v-else>
            <strong>{{ entry.label }}</strong>
            <small dir="auto">{{ entry.detail }}</small>
            <span class="visual-kind">{{ isEmptyStatement(entry) ? 'در قرارداد ثبت نشده' : 'حالت مرجع' }}</span>
          </template>
        </article>
      </div>
    </template>

    <template v-else-if="section === 'ماتریس حالت‌های ورودی' && name === 'Input'">
      <div class="state-visual-grid state-visual-grid--input" aria-label="نمونه‌های وضعیت هشت زیرنوع ورودی" aria-hidden="true" inert>
        <article v-for="entry in stateEntries" :key="entry.id" class="contract-state-card" :class="`state-is-${inputStateKind(entry)}`">
          <div class="input-state-sample" aria-hidden="true" inert>
            <header class="input-state-heading"><strong>{{ entry.label }}</strong><small>{{ entry.detail }}</small></header>
            <div class="input-state-field" :data-state="inputStateKind(entry)" :dir="isInputFamily(entry, 'phone') || isInputFamily(entry, 'otp') ? 'ltr' : 'rtl'">
              <span v-if="isInputFamily(entry, 'phone')" class="input-state-prefix" dir="ltr">+۹۸</span>
              <span v-if="isInputFamily(entry, 'otp')" class="input-state-otp"><i>۴</i><i>۸</i><i /><i /></span>
              <span v-else-if="isInputFamily(entry, 'number')" class="input-state-stepper"><i>−</i><i>+</i></span>
              <span v-else-if="isInputFamily(entry, 'text area')" class="input-state-textarea" :data-state="inputStateKind(entry)">{{ inputStateValue(entry) }}</span>
              <b v-else class="input-state-value" :class="{ 'is-placeholder': inputStateKind(entry) === 'default' && !isInputFamily(entry, 'amount') }" :dir="isInputFamily(entry, 'phone') || isInputFamily(entry, 'amount') ? 'ltr' : 'auto'">{{ inputStateValue(entry) }}</b>
              <span v-if="isInputFamily(entry, 'amount')" class="input-state-currency">تومان</span>
              <span v-if="isInputFamily(entry, 'password')" class="input-state-action">◉</span>
              <span v-else-if="isInputFamily(entry, 'search') && inputStateKind(entry) === 'typing'" class="input-state-action">×</span>
              <kbd v-else-if="isInputFamily(entry, 'search') && inputStateKind(entry) !== 'loading'" class="input-state-shortcut" dir="ltr">Ctrl K</kbd>
              <span v-if="inputStateKind(entry) === 'loading'" class="input-state-spinner" />
              <span v-else-if="inputStateKind(entry) === 'invalid'" class="input-state-status">!</span>
              <span v-else-if="inputStateKind(entry) === 'success'" class="input-state-status">✓</span>
            </div>
          </div>
          <small class="input-state-description">{{ inputStateDescription(entry) }}</small>
        </article>
      </div>
    </template>

    <template v-else-if="section === 'Usage'">
      <div class="usage-visual-list">
        <section v-for="entry in entries" :key="entry.id" class="usage-visual-item" :class="`usage-is-${groupKind(entry.group)}`">
          <b class="usage-index">{{ String(entry.id + 1).padStart(2, '0') }}</b>
          <span class="usage-indicator" aria-hidden="true">{{ groupKind(entry.group) === 'avoid' ? '×' : groupKind(entry.group) === 'rtl' ? '↔' : groupKind(entry.group) === 'implementation' ? '⌘' : '✓' }}</span>
          <div><strong>{{ usageTitle(entry) }}</strong><p dir="auto">{{ usageDetail(entry) }}</p></div>
        </section>
      </div>
    </template>

    <template v-else-if="section === 'Accessibility'">
      <div class="accessibility-visual-grid">
        <article v-for="entry in entries" :key="entry.id" class="accessibility-visual-card">
          <span class="accessibility-symbol" aria-hidden="true">{{ /keyboard|کلید|صفحه‌کلید/i.test(entry.source) ? '⌨' : /aria|label|نام|برچسب/i.test(entry.source) ? 'Aa' : /focus|تمرکز|فوکوس/i.test(entry.source) ? '◎' : /contrast|کنتراست|رنگ/i.test(entry.source) ? '◐' : '◈' }}</span>
          <span><strong>{{ entry.label }}</strong><small dir="auto">{{ entry.detail }}</small></span>
          <i aria-hidden="true" />
        </article>
        <span class="visual-kind">الزامات مستندشده؛ این نمایش به‌تنهایی گزارش آزمون دسترس‌پذیری نیست.</span>
      </div>
    </template>

    <template v-else-if="section === 'Tokens'">
      <div v-if="name === 'Button'" class="button-token-list">
        <article v-for="token in tokenNames" :key="token" class="button-token-item">
          <i v-if="token.startsWith('--norato-color-')" class="token-swatch" :style="{ backgroundColor: `var(${token})` }" aria-hidden="true" />
          <i v-else class="token-mark" :data-kind="token.includes('radius') ? 'radius' : token.includes('type') || token.includes('font') ? 'type' : 'semantic'" aria-hidden="true" />
          <span><code dir="ltr">{{ token }}</code><small dir="ltr" data-ascii-digits>{{ displayTokenValue(token) }}</small></span>
          <button type="button" class="button-token-copy" :aria-label="`کپی ارجاع توکن ${token}`" @click="emit('copy', tokenCopyKey(token), `var(${token})`)">{{ copiedKey === tokenCopyKey(token) ? 'کپی شد' : copiedKey === `${tokenCopyKey(token)}-error` ? 'ناموفق' : 'کپی' }}</button>
        </article>
        <p v-if="buttonTokenNote" class="button-token-note">{{ buttonTokenNote }}</p>
      </div>
      <div v-else-if="tokenNames.length" class="token-visual-grid">
        <article v-for="token in tokenNames" :key="token" class="token-visual-card">
          <i v-if="token.startsWith('--norato-color-')" class="token-swatch" :style="{ backgroundColor: `var(${token})` }" aria-hidden="true" />
          <i v-else class="token-mark" :data-kind="token.includes('radius') ? 'radius' : token.includes('space') ? 'space' : token.includes('type') || token.includes('font') ? 'type' : 'semantic'" aria-hidden="true" />
          <code dir="ltr">{{ token }}</code>
          <span class="visual-kind">{{ token.startsWith('--norato-color-') ? 'توکن رنگی' : token.includes('radius') ? 'شعاع' : token.includes('space') ? 'فاصله' : token.includes('type') || token.includes('font') ? 'تایپوگرافی' : 'توکن معنایی' }}</span>
        </article>
      </div>
      <div v-else class="token-visual-empty">
        <span class="token-mark" data-kind="semantic" aria-hidden="true" />
        <p v-for="entry in entries" :key="entry.id">{{ entry.detail }}</p>
      </div>
      <div v-if="name !== 'Button' && tokenNames.length && entries.some(entry => tokenNote(entry))" class="token-source-notes">
        <p v-for="entry in entries.filter(item => tokenNote(item))" :key="entry.id" dir="auto">{{ tokenNote(entry) }}</p>
      </div>
    </template>

    <div v-if="!['Overview','Anatomy','Parts','Variants','Sizes','States','Usage','Accessibility','Tokens'].includes(section)" class="fallback-visual-list">
      <article v-for="entry in entries" :key="entry.id"><strong>{{ entry.label }}</strong><p>{{ entry.detail }}</p></article>
    </div>
  </div>
</template>

<style scoped>
.tag-variant-matrix{display:grid;gap:var(--norato-space-3);min-inline-size:0}
.tag-variant-group{display:grid;gap:var(--norato-space-2);min-inline-size:0;padding:var(--norato-space-3);border:var(--norato-border-thin) solid var(--norato-color-border-default);border-radius:var(--norato-radius-card);background:var(--norato-color-surface-default)}
.tag-variant-group>header{display:flex;align-items:center;justify-content:space-between;gap:var(--norato-space-2);padding-block-end:var(--norato-space-2);border-block-end:var(--norato-border-thin) solid var(--norato-color-border-default)}
.tag-variant-group>header>span,.tag-variant-cell>small{color:var(--norato-color-text-secondary);font-size:var(--norato-type-body-min-size)}
.tag-variant-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:var(--norato-space-2)}
.tag-variant-cell{display:grid;justify-items:center;align-content:start;gap:var(--norato-space-1);min-inline-size:0;padding-block:var(--norato-space-1);text-align:center}
.tag-variant-cell>.norato-tag{max-inline-size:100%}
.tag-anatomy,.tag-parts-grid{display:grid;gap:var(--norato-space-4);min-inline-size:0}
.tag-anatomy-preview{display:grid;place-items:center;min-block-size:128px;padding:var(--norato-space-5);border:var(--norato-border-thin) solid var(--norato-color-border-default);border-radius:var(--norato-radius-card);background:linear-gradient(135deg,var(--norato-color-surface-default),var(--norato-color-surface-subtle))}
.tag-anatomy-preview .norato-tag{gap:var(--norato-space-2)}
.tag-anatomy-icon{display:grid;place-items:center;inline-size:1em;block-size:1em;color:var(--norato-color-brand-accent);font:inherit}
.tag-anatomy-parts{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr));gap:var(--norato-space-2);margin:0;padding:0;list-style:none}
.tag-anatomy-parts>li{display:flex;align-items:flex-start;gap:var(--norato-space-2);min-inline-size:0;padding:var(--norato-space-3);border:var(--norato-border-thin) solid var(--norato-color-border-default);border-radius:var(--norato-radius-card);background:var(--norato-color-surface-default)}
.tag-anatomy-parts>li>span,.tag-part-card>span{display:grid;gap:var(--norato-space-1);min-inline-size:0}
.tag-anatomy-parts small,.tag-part-card small{color:var(--norato-color-text-secondary);line-height:1.7}
.tag-part-index{display:grid;place-items:center;flex:0 0 26px;inline-size:26px;block-size:26px;border-radius:var(--norato-radius-pill);background:var(--norato-color-warning-container);color:var(--norato-color-text-primary);font-size:var(--norato-type-body-min-size)}
.tag-parts-grid{grid-template-columns:repeat(auto-fit,minmax(min(100%,250px),1fr))}
.tag-part-card{display:grid;gap:var(--norato-space-3);align-content:start;min-inline-size:0;padding:var(--norato-space-4);border:var(--norato-border-thin) solid var(--norato-color-border-default);border-radius:var(--norato-radius-card);background:var(--norato-color-surface-default)}
.tag-part-sample{display:grid;place-items:center;min-block-size:64px;padding:var(--norato-space-3);border-radius:var(--norato-radius-control);background:var(--norato-color-surface-subtle)}
.tag-part-status{justify-self:start;padding:var(--norato-space-1) var(--norato-space-2);border-radius:var(--norato-radius-full);background:var(--norato-color-warning-container);color:var(--norato-color-text-primary);font-size:var(--norato-type-body-min-size)}
.tag-size-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:var(--norato-space-3);min-inline-size:0}
.tag-size-card{display:grid;justify-items:center;align-content:start;gap:var(--norato-space-2);min-inline-size:0;padding:var(--norato-space-3);border:var(--norato-border-thin) solid var(--norato-color-border-default);border-radius:var(--norato-radius-card);background:var(--norato-color-surface-default);text-align:center}
.tag-size-stage{display:grid;place-items:center;inline-size:100%;min-block-size:var(--norato-control-target-min);padding:var(--norato-space-2);border-radius:var(--norato-radius-control);background:var(--norato-color-surface-subtle)}
.tag-size-card>small{color:var(--norato-color-text-secondary)}
.tag-size-grid>.visual-kind{grid-column:1/-1}
.tag-state-note{display:grid;gap:var(--norato-space-3);min-inline-size:0}
.tag-state-note>article{display:flex;align-items:center;gap:var(--norato-space-3);min-inline-size:0;padding:var(--norato-space-3);border:var(--norato-border-thin) solid var(--norato-color-border-default);border-radius:var(--norato-radius-card);background:var(--norato-color-surface-default)}
.tag-state-note>article>span{display:grid;gap:var(--norato-space-1);min-inline-size:0}
.contract-visual--tag :deep(.usage-indicator){background:var(--norato-color-warning-container);color:var(--norato-color-text-primary)}
.contract-visual--tag :deep(.usage-is-avoid .usage-indicator){background:var(--norato-color-surface-subtle);color:var(--norato-color-status-error)}
.contract-visual--tag :deep(.usage-is-rtl .usage-indicator){background:var(--norato-color-brand-yellow);color:var(--norato-color-text-primary)}
.contract-visual--tag :deep(.usage-is-implementation .usage-indicator){background:var(--norato-color-surface-subtle);color:var(--norato-color-text-primary)}
.contract-visual--tag :deep(.accessibility-symbol){background:var(--norato-color-warning-container);color:var(--norato-color-text-primary)}
.chip-anatomy,.chip-parts-grid{display:grid;gap:var(--norato-space-4);min-inline-size:0}
.chip-anatomy-preview{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:var(--norato-space-3);min-block-size:128px;padding:var(--norato-space-4);border:var(--norato-border-thin) solid var(--norato-color-border-default);border-radius:var(--norato-radius-card);background:linear-gradient(135deg,var(--norato-color-surface-default),var(--norato-color-surface-subtle))}
.chip-anatomy-parts{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr));gap:var(--norato-space-2);margin:0;padding:0;list-style:none}
.chip-anatomy-parts>li{display:flex;align-items:flex-start;gap:var(--norato-space-2);min-inline-size:0;padding:var(--norato-space-3);border:var(--norato-border-thin) solid var(--norato-color-border-default);border-radius:var(--norato-radius-card);background:var(--norato-color-surface-default)}
.chip-anatomy-parts>li>b{display:grid;place-items:center;flex:none;inline-size:var(--norato-space-6);block-size:var(--norato-space-6);border-radius:var(--norato-radius-pill);background:var(--norato-color-warning-container);font-size:var(--norato-type-body-min-size)}
.chip-anatomy-parts>li>span,.chip-part-card>span{display:grid;gap:var(--norato-space-1);min-inline-size:0}
.chip-anatomy-parts small,.chip-part-card small{color:var(--norato-color-text-secondary);line-height:var(--norato-type-body-small-line-height)}
.chip-parts-grid{grid-template-columns:repeat(auto-fit,minmax(min(100%,250px),1fr))}
.chip-part-card{display:grid;gap:var(--norato-space-3);align-content:start;min-inline-size:0;padding:var(--norato-space-3);border:var(--norato-border-thin) solid var(--norato-color-border-default);border-radius:var(--norato-radius-card);background:var(--norato-color-surface-default)}
.chip-part-sample{display:grid;place-items:center;min-block-size:var(--norato-control-target-min);padding:var(--norato-space-2);border-radius:var(--norato-radius-control);background:var(--norato-color-surface-subtle)}
.chip-part-check{display:grid;place-items:center;inline-size:100%;block-size:100%;color:var(--norato-color-text-primary)}
.chip-part-status{justify-self:start;padding:var(--norato-space-1) var(--norato-space-2);border-radius:var(--norato-radius-pill);background:var(--norato-color-warning-container);font-size:var(--norato-type-body-min-size);font-weight:var(--norato-type-body-medium-weight)}
.chip-variant-matrix{display:grid;gap:var(--norato-space-3);min-inline-size:0}
.chip-variant-group{display:grid;gap:var(--norato-space-2);min-inline-size:0;padding:var(--norato-space-3);border:var(--norato-border-thin) solid var(--norato-color-border-default);border-radius:var(--norato-radius-card);background:var(--norato-color-surface-default)}
.chip-variant-group>header{display:flex;align-items:center;justify-content:space-between;gap:var(--norato-space-2);padding-block-end:var(--norato-space-2);border-block-end:var(--norato-border-thin) solid var(--norato-color-border-default)}
.chip-variant-group>header>span,.chip-variant-cell>small,.chip-size-card>small,.chip-state-card>small{color:var(--norato-color-text-secondary);font-size:var(--norato-type-body-min-size)}
.chip-variant-grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:var(--norato-space-2)}
.chip-variant-cell{display:grid;justify-items:center;align-content:start;gap:var(--norato-space-1);min-inline-size:0;padding-block:var(--norato-space-1);text-align:center}
.chip-variant-cell[data-state="hover"] :deep(.norato-chip__surface){border-color:var(--norato-color-brand-yellow);background:var(--norato-color-warning-container)}
.chip-variant-cell[data-state="focus"] :deep(.norato-chip)::after{position:absolute;inset:var(--norato-space-1);border:var(--norato-border-focus) solid var(--norato-color-brand-yellow);border-radius:var(--norato-radius-pill);content:"";pointer-events:none}
.chip-size-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:var(--norato-space-3);min-inline-size:0}
.chip-size-card{display:grid;justify-items:center;align-content:start;gap:var(--norato-space-2);min-inline-size:0;padding:var(--norato-space-3);border:var(--norato-border-thin) solid var(--norato-color-border-default);border-radius:var(--norato-radius-card);background:var(--norato-color-surface-default);text-align:center}
.chip-size-card>div{display:grid;place-items:center;inline-size:100%;min-block-size:var(--norato-control-target-min);padding:var(--norato-space-2);border-radius:var(--norato-radius-control);background:var(--norato-color-surface-subtle)}
.chip-size-grid>.visual-kind{grid-column:1/-1}
.chip-states-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,160px),1fr));gap:var(--norato-space-2)}
.chip-state-card{display:grid;justify-items:center;align-content:start;gap:var(--norato-space-2);min-inline-size:0;padding:var(--norato-space-3);border:var(--norato-border-thin) solid var(--norato-color-border-default);border-radius:var(--norato-radius-card);background:var(--norato-color-surface-default);text-align:center}
.chip-state-card[data-state="hover"] :deep(.norato-chip__surface){border-color:var(--norato-color-brand-yellow);background:var(--norato-color-warning-container)}
.chip-state-card[data-state="focus"] :deep(.norato-chip)::after{position:absolute;inset:var(--norato-space-1);border:var(--norato-border-focus) solid var(--norato-color-brand-yellow);border-radius:var(--norato-radius-pill);content:"";pointer-events:none}
.contract-visual--chip :deep(.usage-indicator){background:var(--norato-color-warning-container);color:var(--norato-color-text-primary)}
.contract-visual--chip :deep(.usage-is-avoid .usage-indicator){background:var(--norato-color-surface-subtle);color:var(--norato-color-status-error)}
.contract-visual--chip :deep(.usage-is-rtl .usage-indicator){background:var(--norato-color-brand-yellow);color:var(--norato-color-text-primary)}
.contract-visual--chip :deep(.usage-is-implementation .usage-indicator){background:var(--norato-color-surface-subtle);color:var(--norato-color-text-primary)}
.contract-visual--chip :deep(.accessibility-symbol){background:var(--norato-color-warning-container);color:var(--norato-color-text-primary)}
.combobox-state-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:var(--norato-space-3);min-inline-size:0}
.combobox-state-card{display:grid;gap:var(--norato-space-1);min-inline-size:0;padding-block:var(--norato-space-2);border-block-end:var(--norato-border-thin) solid var(--norato-color-border-default)}
.combobox-state-target{display:flex;align-items:center;min-block-size:var(--norato-control-target-min);min-inline-size:0}
.combobox-state-field{display:flex;align-items:center;gap:var(--norato-space-1);box-sizing:border-box;inline-size:min(100%,var(--norato-combobox-preview-inline-size));block-size:var(--norato-control-visual-height);min-inline-size:0;padding-inline:var(--norato-space-2);border:var(--norato-border-thin) solid var(--norato-color-border-default);border-radius:var(--norato-radius-pill);background:var(--norato-color-glass-surface-strong);color:var(--norato-color-text-primary)}
.combobox-state-field[data-state="hover"],.combobox-state-field[data-state="typing"],.combobox-state-field[data-state="filled"]{border-color:var(--norato-color-brand-yellow)}
.combobox-state-field[data-state="invalid"]{border-color:var(--norato-color-status-error)}
.combobox-state-field[data-state="disabled"]{border-color:var(--norato-color-border-default);background:var(--norato-color-surface-subtle);color:var(--norato-color-text-secondary)}
.combobox-state-search,.combobox-state-chevron{flex:none;inline-size:var(--norato-icon-sm);block-size:var(--norato-icon-sm);fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:var(--norato-border-medium)}
.combobox-state-value{flex:1;min-inline-size:0;overflow:hidden;text-align:start;text-overflow:ellipsis;white-space:nowrap;font-family:var(--norato-font-body);font-size:var(--norato-type-body-small-size);font-weight:var(--norato-type-body-regular-weight)}
.combobox-state-value[data-placeholder="true"]{color:var(--norato-color-text-placeholder-subtle);font-weight:var(--norato-type-body-light-weight)}
.combobox-state-card>strong{font-family:var(--norato-font-heading);font-size:var(--norato-type-body-small-size);font-weight:var(--norato-type-heading-title-weight)}
.combobox-state-card>small{color:var(--norato-color-text-secondary);font-size:var(--norato-type-body-caption-size)}
@media(max-width:599px){.combobox-state-grid{grid-template-columns:minmax(0,1fr)}}
@media(max-width:599px){.tag-variant-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media(max-width:599px){.tag-size-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media(max-width:599px){.chip-variant-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.chip-size-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
.input-core-states-grid{display:grid;inline-size:calc(100% + var(--norato-space-1));grid-template-columns:repeat(4,minmax(0,1fr));grid-auto-rows:1fr;gap:calc(var(--norato-space-2) + var(--norato-border-medium));min-inline-size:0;margin-inline:calc(-1 * var(--norato-border-medium))}
.input-core-state-card{display:grid;align-content:start;gap:calc(var(--norato-space-1) + var(--norato-border-thin));min-inline-size:0;padding:var(--norato-space-3) calc(var(--norato-space-3) + var(--norato-border-medium));border:var(--norato-border-thin) solid var(--norato-color-border-default);border-radius:var(--norato-radius-card);background:var(--norato-color-glass-surface-strong)}
.input-core-state-card>header{display:flex;align-items:center;gap:var(--norato-space-1);min-inline-size:0}
.input-core-state-card>header>strong{font-family:var(--norato-font-heading);font-size:var(--norato-type-body-small-size);font-weight:var(--norato-type-body-bold-weight)}
.input-core-state-card>header>i{flex:none;inline-size:var(--norato-space-2);block-size:var(--norato-space-2);border-radius:var(--norato-radius-pill);background:var(--norato-color-border-default)}
.input-core-state-card>small{color:var(--norato-color-text-secondary);font-size:var(--norato-type-body-small-size);line-height:var(--norato-type-body-small-line-height)}
.input-core-state-card[data-state="default"],.input-core-state-card[data-state="active"],.input-core-state-card[data-state="filled"],.input-core-state-card[data-state="typing"]{background:var(--norato-color-warning-container)}
.input-core-state-card[data-state="error"]{background:var(--norato-color-error-container)}
.input-core-state-card[data-state="success"]{background:var(--norato-color-success-container)}
.input-core-state-card[data-state="disabled"],.input-core-state-card[data-state="readonly"]{background:var(--norato-color-surface-subtle)}
.input-core-state-card[data-state="default"]>header>i,.input-core-state-card[data-state="active"]>header>i,.input-core-state-card[data-state="filled"]>header>i,.input-core-state-card[data-state="typing"]>header>i{background:var(--norato-color-brand-yellow)}
.input-core-state-card[data-state="error"]>header>i{background:var(--norato-color-status-error)}
.input-core-state-card[data-state="success"]>header>i{background:var(--norato-color-status-success)}
@media(max-width:839px){.input-core-states-grid{inline-size:calc(100% - var(--norato-space-4));grid-template-columns:repeat(2,minmax(0,1fr));grid-auto-rows:auto;gap:calc(var(--norato-space-2) + var(--norato-border-medium));margin-inline:auto}}
</style>
