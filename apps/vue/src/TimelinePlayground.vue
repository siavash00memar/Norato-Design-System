<script setup lang="ts">
import { computed, ref } from 'vue'
import { NoratoActivityFeed, NoratoTimeline, NoratoTimelineItem, NoratoTimelineMarker, type NoratoTimelineEvent, type NoratoTimelineLayout, type NoratoTimelineMarkerType, type NoratoTimelineTone } from '@norato/vue'
import PlaygroundSelect from './PlaygroundSelect.vue'

const props = defineProps<{ copiedKey: string }>()
const emit = defineEmits<{ copy: [key: string, value: string] }>()
const layout = ref<NoratoTimelineLayout>('default')
const markerType = ref<NoratoTimelineMarkerType>('dot')
const tone = ref<NoratoTimelineTone>('active')
const direction = ref<'rtl' | 'ltr'>('rtl')
const density = ref<'default' | 'compact'>('default')
const layouts: NoratoTimelineLayout[] = ['default', 'card', 'compact']
const positions = ['first', 'middle', 'last'] as const
const types: NoratoTimelineMarkerType[] = ['dot', 'icon', 'avatar']
const tones: NoratoTimelineTone[] = ['neutral', 'active', 'success', 'warning', 'danger']
const labels = { default: 'عادی', card: 'کارت', compact: 'فشرده', dot: 'نقطه', icon: 'آیکن', avatar: 'آواتار', neutral: 'خنثی', active: 'فعال', success: 'موفق', warning: 'هشدار', danger: 'خطا' }
const events = computed<NoratoTimelineEvent[]>(() => [
  { id: 'created', title: 'سفارش ثبت شد', time: '۱۰:۲۰', datetime: '2026-11-08T10:20:00+03:30', description: 'سفارش برای آماده‌سازی به فروشنده ارسال شد.', tone: 'success', markerType: 'dot' },
  { id: 'paid', title: 'پرداخت تأیید شد', time: '۱۰:۲۲', datetime: '2026-11-08T10:22:00+03:30', tone: 'success', markerType: 'icon', icon: 'check' },
  { id: 'packing', title: 'آماده‌سازی سفارش', time: '۱۰:۳۵', datetime: '2026-11-08T10:35:00+03:30', description: 'بسته در حال آماده شدن است.', tone: tone.value, markerType: markerType.value, icon: 'package', avatarName: 'تیم انبار' },
  { id: 'courier', title: 'تحویل به پیک', time: '۱۱:۱۰', datetime: '2026-11-08T11:10:00+03:30', tone: 'warning', markerType: 'icon', icon: 'clock' },
  { id: 'delivered', title: 'تحویل داده شد', time: '۱۲:۰۰', datetime: '2026-11-08T12:00:00+03:30', tone: 'neutral', markerType: 'avatar', avatarName: 'علی رضایی' },
])
const groups = computed(() => [
  { id: 'today', label: 'امروز · ۸ آبان', events: events.value.slice(0, 3) },
  { id: 'yesterday', label: 'دیروز · ۷ آبان', events: events.value.slice(3) },
])
const snippet = computed(() => `<script setup lang="ts">\nimport { NoratoTimeline } from '@norato/vue'\nimport type { NoratoTimelineEvent } from '@norato/vue'\nconst events: NoratoTimelineEvent[] = ${JSON.stringify(events.value.slice(0, 3), null, 2)}\n<\\/script>\n<template><NoratoTimeline id="order-history" :events="events" layout="${layout.value}" dir="${direction.value}" label="تاریخچهٔ سفارش" /></template>`)
</script>

<template>
  <div class="timeline-playground" dir="rtl">
    <p>رویدادها مرتب‌سازی یا حذف نمی‌شوند. مقایسهٔ زیر تمام ۲۶ حالت ثبت‌شده را کنار هم نشان می‌دهد.</p>
    <section class="timeline-playground__live" aria-labelledby="timeline-live-title">
      <h3 id="timeline-live-title">نمایش زنده</h3>
      <NoratoTimeline id="timeline-live" :events="events" :layout="layout" :dir="direction" label="تاریخچهٔ سفارش نمونه" />
    </section>
    <section class="timeline-playground__live" aria-label="فید فعالیت نمونه">
      <NoratoActivityFeed :groups="groups" :density="density" :dir="direction" label="فعالیت‌های نمونه" />
    </section>
    <div class="button-playground-controls timeline-playground__controls">
      <PlaygroundSelect id="timeline-layout" v-model="layout" label="چیدمان رخداد" :options="layouts.map(value => ({value,label:labels[value]}))" />
      <PlaygroundSelect id="timeline-marker-type" v-model="markerType" label="نوع نشانگر فعال" :options="types.map(value => ({value,label:labels[value]}))" />
      <PlaygroundSelect id="timeline-marker-tone" v-model="tone" label="لحن نشانگر فعال" :options="tones.map(value => ({value,label:labels[value]}))" />
      <PlaygroundSelect id="timeline-direction" v-model="direction" label="جهت نوشتار" :options="[{value:'rtl',label:'راست‌به‌چپ'},{value:'ltr',label:'چپ‌به‌راست'}]" />
      <PlaygroundSelect id="timeline-density" v-model="density" label="تراکم فید" :options="[{value:'default',label:'عادی'},{value:'compact',label:'فشرده'}]" />
    </div>
    <section class="timeline-playground__matrix" aria-labelledby="timeline-items-title">
      <h3 id="timeline-items-title">Timeline Item · ۹ حالت</h3>
      <div v-for="itemLayout in layouts" :key="itemLayout" class="timeline-playground__layout-row">
        <h4>{{ labels[itemLayout] }}</h4>
        <ol class="timeline-playground__items" :dir="direction">
          <NoratoTimelineItem v-for="(position,index) in positions" :key="position" :event="events[index]!" :layout="itemLayout" :position="position" :dir="direction" />
        </ol>
      </div>
    </section>
    <section class="timeline-playground__matrix" aria-labelledby="timeline-markers-title">
      <h3 id="timeline-markers-title">Timeline Marker · ۱۵ حالت</h3>
      <div class="timeline-playground__markers" :dir="direction">
        <div v-for="markerTypeValue in types" :key="markerTypeValue" class="timeline-playground__marker-column">
          <h4>{{ labels[markerTypeValue] }}</h4>
          <div v-for="toneValue in tones" :key="toneValue" class="timeline-playground__marker-row">
            <NoratoTimelineMarker :type="markerTypeValue" :tone="toneValue" icon="check" avatar-name="سارا محمدی" :label="`${labels[markerTypeValue]}، ${labels[toneValue]}`" />
            <span>{{ labels[toneValue] }}</span>
          </div>
        </div>
      </div>
    </section>
    <section class="timeline-playground__matrix" aria-labelledby="timeline-feed-title">
      <h3 id="timeline-feed-title">Activity Feed · ۲ تراکم</h3>
      <div class="timeline-playground__feeds" :dir="direction">
        <article v-for="feedDensity in ['default','compact'] as const" :key="feedDensity" class="timeline-playground__feed-card">
          <h4>{{ labels[feedDensity] }}</h4>
          <NoratoActivityFeed :groups="groups" :density="feedDensity" :dir="direction" label="فعالیت‌های نمونه" />
        </article>
      </div>
    </section>
    <div class="timeline-playground__code"><div><strong>کد Vue</strong><button class="copy-section-button" type="button" @click="emit('copy','timeline-playground',snippet)">{{ props.copiedKey === 'timeline-playground' ? 'کپی شد' : 'کپی کد' }}</button></div><pre class="usage-code" dir="ltr"><code>{{ snippet }}</code></pre></div>
  </div>
</template>

<style scoped>
.timeline-playground{display:grid;gap:var(--norato-space-5);min-inline-size:0}
.timeline-playground>p{margin:0;color:var(--norato-color-text-secondary)}
.timeline-playground__live,.timeline-playground__matrix,.timeline-playground__feed-card{min-inline-size:0;padding:var(--norato-space-4);border:var(--norato-border-thin) solid var(--norato-color-border-default);border-radius:var(--norato-radius-card);background:var(--norato-color-glass-surface-strong)}
.timeline-playground h3{margin:0 0 var(--norato-space-3);font-family:var(--norato-font-heading);font-size:var(--norato-type-body-bold-size);font-weight:var(--norato-type-body-bold-weight)}
.timeline-playground__controls{margin:0}
.timeline-playground__layout-row{display:grid;grid-template-columns:minmax(70px,auto) minmax(0,1fr);align-items:start;gap:var(--norato-space-3);padding-block:var(--norato-space-3);border-block-start:var(--norato-border-thin) solid var(--norato-color-border-default)}
.timeline-playground__layout-row h4,.timeline-playground__marker-column h4,.timeline-playground__feed-card>h4{margin:0;font-family:var(--norato-font-heading);font-size:var(--norato-type-body-small-size)}
.timeline-playground__items{display:grid;gap:var(--norato-space-2);min-inline-size:0;margin:0;padding:0;list-style:none}
.timeline-playground__markers{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--norato-space-4)}
.timeline-playground__marker-column{display:grid;align-content:start;gap:var(--norato-space-2);min-inline-size:0}
.timeline-playground__marker-row{display:flex;align-items:center;gap:var(--norato-space-2);min-block-size:var(--norato-control-target-min);padding-block:var(--norato-space-1);border-block-end:var(--norato-border-thin) solid var(--norato-color-border-default);font-size:var(--norato-type-body-caption-size)}
.timeline-playground__feeds{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:var(--norato-space-3)}
.timeline-playground__feed-card{display:grid;align-content:start;gap:var(--norato-space-3)}
.timeline-playground__code>div{display:flex;align-items:center;justify-content:space-between;gap:var(--norato-space-2)}
.timeline-playground__code pre{max-block-size:28rem;overflow:auto}
@media(max-width:700px){.timeline-playground__markers{grid-template-columns:repeat(2,minmax(0,1fr))}.timeline-playground__feeds{grid-template-columns:minmax(0,1fr)}}
@media(max-width:420px){.timeline-playground__live,.timeline-playground__matrix,.timeline-playground__feed-card{padding:var(--norato-space-3)}.timeline-playground__layout-row{grid-template-columns:minmax(0,1fr);gap:var(--norato-space-2)}.timeline-playground__markers{grid-template-columns:minmax(0,1fr)}}
</style>
