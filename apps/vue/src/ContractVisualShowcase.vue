<script setup lang="ts">
import { computed } from 'vue'

type Axis = { name: string; values: string[] }
type Entry = { id: number; group: string; label: string; detail: string; source: string; axes: Axis[]; measurements: number[] }

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
  return 'default'
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
  <div class="contract-visual" :class="`contract-visual--${title}`" :data-component="name" :data-section="section" dir="rtl">
    <template v-if="section === 'Overview'">
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
      <div v-if="name === 'Button' && section === 'Anatomy'" class="button-anatomy-exploded" dir="rtl">
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
      <div class="variant-visual-grid">
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
      <div class="size-visual">
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
      <div class="state-visual-grid">
        <article v-for="entry in stateEntries" :key="entry.id" class="contract-state-card" :class="`state-is-${stateKind(entry)}`">
          <div class="state-preview" :data-kind="sampleKind(entry)" aria-hidden="true" inert>
            <span class="state-shape"><i /><i /></span>
          </div>
          <strong>{{ entry.label }}</strong><small dir="auto">{{ entry.detail }}</small>
          <span class="visual-kind">{{ isEmptyStatement(entry) ? 'در قرارداد ثبت نشده' : 'حالت مرجع' }}</span>
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
