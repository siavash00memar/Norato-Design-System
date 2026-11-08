<script setup lang="ts">
import { computed, ref } from 'vue'
import { NoratoChartCard, NoratoChartLegendItem, NoratoChartTooltip, NoratoStatTile, type NoratoChartType, type NoratoChartTrend } from '@norato/vue'
import PlaygroundSelect from './PlaygroundSelect.vue'
const props = defineProps<{ copiedKey: string }>()
const emit = defineEmits<{ copy: [key: string, value: string] }>()
const type = ref<NoratoChartType>('bar')
const direction = ref<'rtl' | 'ltr'>('rtl')
const trend = ref<NoratoChartTrend>('up')
const seriesCount = ref(2)
const headerActionMessage = ref('')
const categories = ['فروردین','اردیبهشت','خرداد','تیر','مرداد','شهریور']
const allSeries = [
  { id: 'online', label: 'آنلاین', values: [34,58,42,72,51,66] },
  { id: 'in-person', label: 'حضوری', values: [24,39,34,51,44,57] },
  { id: 'partner', label: 'همکاران', values: [18,26,31,36,42,48] },
  { id: 'other', label: 'سایر', values: [10,14,17,18,25,28] },
  { id: 'mobile', label: 'موبایل', values: [8,16,19,27,31,36] },
  { id: 'affiliate', label: 'همکار وابسته', values: [6,10,15,19,24,30] },
  { id: 'direct', label: 'مستقیم', values: [4,9,12,17,21,25] },
  { id: 'other-channel', label: 'سایر کانال‌ها', values: [2,5,8,11,14,17] },
]
const series = computed(() => allSeries.slice(0,seriesCount.value))
const renderSeries = computed(() => type.value === 'donut' || type.value === 'bar' || type.value === 'horizontal-bar' ? allSeries.slice(0,1) : series.value)
const trendChange = computed(() => trend.value === 'neutral' ? '۰٪' : '۱۲٪')
const chartTypes: Array<{value:NoratoChartType;label:string}> = [{value:'bar',label:'میله‌ای'},{value:'grouped-bar',label:'میله‌ای گروهی'},{value:'horizontal-bar',label:'میله‌ای افقی'},{value:'line',label:'خطی'},{value:'area',label:'ناحیه‌ای'},{value:'donut',label:'دونات'}]
const chartLabels = { bar:'میله‌ای', 'grouped-bar':'میله‌ای گروهی', 'horizontal-bar':'میله‌ای افقی', line:'خطی', area:'ناحیه‌ای', donut:'دونات' }
const example = computed(() => `<script setup lang="ts">\nimport { NoratoChartCard } from '@norato/vue'\nimport type { NoratoChartSeries } from '@norato/vue'\nconst categories = ${JSON.stringify(categories)}\nconst series: NoratoChartSeries[] = ${JSON.stringify(renderSeries.value,null,2)}\n<\\/script>\n\n<template>\n  <NoratoChartCard title="فروش ماهانه" subtitle="نیمهٔ اول ۱۴۰۵" :categories="categories" :series="series" type="${type.value}" dir="${direction.value}" />\n</template>`)
</script>

<template>
  <div class="charts-playground" dir="rtl">
    <header class="charts-playground__intro"><strong>آزمایش نمودارها</strong><span>مقادیر اصلی در جدول همراه هر نمودار در دسترس‌اند؛ ترتیب دسته‌ها و سری‌ها حفظ می‌شود.</span></header>
    <section class="charts-playground__live" aria-labelledby="charts-live-title">
      <h3 id="charts-live-title">نمایش زنده · {{ chartLabels[type] }}</h3>
      <NoratoChartCard title="فروش ماهانه" subtitle="نیمهٔ اول ۱۴۰۵" :categories="categories" :series="renderSeries" :type="type" :dir="direction">
        <template #action><button class="charts-playground__more" type="button" aria-label="گزینه‌های بیشتر نمودار" @click="headerActionMessage='اقدام نمونهٔ نمودار اجرا شد.'"><svg aria-hidden="true" viewBox="0 0 16 16"><circle cx="3" cy="8" r="1"/><circle cx="8" cy="8" r="1"/><circle cx="13" cy="8" r="1"/></svg></button></template>
      </NoratoChartCard>
      <p v-if="headerActionMessage" class="charts-playground__action-status" role="status" aria-live="polite">{{ headerActionMessage }}</p>
    </section>
    <div class="button-playground-controls charts-playground__controls">
      <PlaygroundSelect id="charts-type" v-model="type" label="نوع نمودار" :options="chartTypes" />
      <PlaygroundSelect v-if="['grouped-bar','line','area'].includes(type)" id="charts-series-count" v-model="seriesCount" label="تعداد سری‌ها" :options="[1,2,3,4,5,6,7,8].map(value=>({value,label:`${value} سری`}))" />
      <PlaygroundSelect id="charts-trend" v-model="trend" label="روند Stat Tile" :options="[{value:'up',label:'افزایش'},{value:'down',label:'کاهش'},{value:'neutral',label:'بدون تغییر'}]" />
      <PlaygroundSelect id="charts-direction" v-model="direction" label="جهت نوشتار" :options="[{value:'rtl',label:'راست‌به‌چپ'},{value:'ltr',label:'چپ‌به‌راست'}]" />
    </div>
    <section class="charts-playground__matrix" aria-labelledby="charts-parts-title">
      <h3 id="charts-parts-title">اجزای همراه</h3>
      <div class="charts-playground__stats" :dir="direction"><NoratoStatTile label="درآمد کل" value="۱۲۴٬۵۰۰٬۰۰۰" :trend="trend" :change="trendChange" :dir="direction" /><NoratoStatTile label="سفارش‌های امروز" value="۸۴۲" trend="down" change="۳٪" :dir="direction" /><NoratoStatTile label="میانگین سبد" value="۱٬۴۸۰٬۰۰۰" trend="neutral" change="۰٪" :dir="direction" /></div>
      <div class="charts-playground__parts" :dir="direction"><div><h4>Legend · چهار سری</h4><div class="charts-playground__legend"><NoratoChartLegendItem v-for="(item,index) in allSeries.slice(0,4)" :key="item.id" :label="item.label" :series="(index+1) as 1|2|3|4" /></div></div><div><h4>Tooltip · سری دوم</h4><button class="charts-playground__tooltip-anchor" type="button" aria-describedby="charts-playground-tooltip">نقطهٔ نمودار</button><NoratoChartTooltip id="charts-playground-tooltip" label="حضوری" value="۵۷" date="شهریور" :dir="direction" /></div></div>
    </section>
    <div class="charts-playground__code"><div><strong>نمونهٔ Vue</strong><button class="copy-section-button" type="button" @click="emit('copy','charts-example',example)">{{ props.copiedKey==='charts-example'?'کپی شد':props.copiedKey==='charts-example-error'?'ناموفق':'کپی کد' }}</button></div><pre class="usage-code" dir="ltr"><code>{{ example }}</code></pre></div>
  </div>
</template>

<style scoped>
.charts-playground{display:grid;gap:var(--norato-space-4);min-inline-size:0}
.charts-playground__intro{display:grid;gap:var(--norato-space-1);color:var(--norato-color-text-secondary);font-size:var(--norato-type-body-small-size)}
.charts-playground__intro strong,.charts-playground h3{margin:0;color:var(--norato-color-text-primary);font-family:var(--norato-font-heading);font-size:var(--norato-type-heading-label-size)}
.charts-playground__more,.charts-playground__tooltip-anchor{display:inline-flex;align-items:center;justify-content:center;min-inline-size:var(--norato-control-target-min);min-block-size:var(--norato-control-target-min);border:0;border-radius:var(--norato-radius-card);background:transparent;color:var(--norato-color-text-secondary);cursor:pointer}
.charts-playground__more:hover,.charts-playground__tooltip-anchor:hover{background:var(--norato-color-warning-container);color:var(--norato-color-text-primary)}
.charts-playground__more svg{inline-size:var(--norato-icon-sm);block-size:var(--norato-icon-sm);fill:currentColor}
.charts-playground__action-status{margin:0;color:var(--norato-color-text-secondary);font-size:var(--norato-type-body-caption-size)}
.charts-playground :deep(button:focus-visible){outline:var(--norato-border-focus) solid var(--norato-color-brand-yellow);outline-offset:var(--norato-space-1);box-shadow:0 0 0 var(--norato-border-focus) var(--norato-color-focus-ring)}
.charts-playground__live,.charts-playground__matrix{display:grid;gap:var(--norato-space-3);min-inline-size:0;padding:var(--norato-space-4);border:var(--norato-border-thin) solid var(--norato-color-border-default);border-radius:var(--norato-radius-card);background:var(--norato-color-glass-surface)}
.charts-playground__stats{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--norato-space-3)}
.charts-playground__parts{display:grid;grid-template-columns:1fr 1fr;gap:var(--norato-space-4)}
.charts-playground__parts h4{margin:0 0 var(--norato-space-2);font-family:var(--norato-font-heading);font-size:var(--norato-type-body-small-size)}
.charts-playground__legend{display:flex;flex-wrap:wrap;gap:0 var(--norato-space-2)}
.charts-playground__code>div{display:flex;align-items:center;justify-content:space-between;gap:var(--norato-space-2)}
.charts-playground__code pre{max-block-size:28rem;overflow:auto}
@media(max-width:700px){.charts-playground__stats{grid-template-columns:minmax(0,1fr)}.charts-playground__parts{grid-template-columns:minmax(0,1fr)}}
</style>
