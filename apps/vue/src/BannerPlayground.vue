<script setup lang="ts">
import { computed, ref } from 'vue'
import { NoratoBanner, type NoratoBannerLayout, type NoratoBannerTone } from '@norato/vue'
import PlaygroundSelect from './PlaygroundSelect.vue'

const props = defineProps<{ copiedKey?: string }>()
const emit = defineEmits<{ copy: [key: string, value: string] }>()
const tone = ref<NoratoBannerTone>('info')
const layout = ref<NoratoBannerLayout>('desktop')
const visible = ref(true)
const dismissible = ref(true)
const actionFeedback = ref('')
const tones: { value: NoratoBannerTone; label: string }[] = [
  { value: 'info', label: 'اطلاع' }, { value: 'success', label: 'موفقیت' }, { value: 'warning', label: 'هشدار' }, { value: 'danger', label: 'خطا' }, { value: 'neutral', label: 'خنثی' }, { value: 'inverse', label: 'معکوس' },
]
const layouts: { value: NoratoBannerLayout; label: string }[] = [{ value: 'desktop', label: 'Desktop' }, { value: 'mobile', label: 'Mobile' }]
const code = computed(() => `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { NoratoBanner } from '@norato/vue'\nconst visible = ref(true)\nfunction openOffer() { /* navigate in the host app */ }\n<\/script>\n<template>\n  <NoratoBanner id="site-announcement" v-model="visible" tone="${tone.value}" layout="${layout.value}" title="جشنوارهٔ پاییزه شروع شد" description="تا ۳۰٪ تخفیف روی همهٔ پلن‌ها." action-label="ببین" dismissible @action="openOffer" />\n<\/template>`)
</script>

<template>
  <div class="banner-playground" dir="rtl">
    <div class="banner-playground__controls">
      <PlaygroundSelect id="banner-tone" v-model="tone" label="لحن بنر" :options="tones" />
      <PlaygroundSelect id="banner-layout" v-model="layout" label="چیدمان" :options="layouts" />
      <label class="banner-playground__dismissible"><input v-model="dismissible" type="checkbox" /> قابل‌بستن</label>
    </div>
    <NoratoBanner
      v-if="visible"
      id="banner-playground-preview"
      v-model="visible"
      :tone="tone"
      :layout="layout"
      title="جشنوارهٔ پاییزه شروع شد"
      description="تا ۳۰٪ تخفیف روی همهٔ پلن‌ها."
      action-label="ببین"
      :dismissible="dismissible"
      @action="actionFeedback = 'اقدام بنر فعال شد.'"
    />
    <div v-else class="banner-playground__restore"><span role="status">بنر بسته شد.</span><button class="copy-section-button" type="button" @click="visible = true">نمایش دوباره</button></div>
    <p v-if="actionFeedback" class="banner-playground__feedback" role="status">{{ actionFeedback }}</p>
    <div class="code-copy-row"><button class="copy-section-button" type="button" @click="emit('copy', 'banner-code', code)">{{ props.copiedKey === 'banner-code' ? 'کپی شد' : 'کپی کد' }}</button></div>
    <pre class="usage-code" dir="ltr"><code>{{ code }}</code></pre>
  </div>
</template>

<style scoped>
.banner-playground{display:grid;gap:var(--norato-space-4);min-inline-size:0}.banner-playground__controls{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:var(--norato-space-3);align-items:end}.banner-playground__dismissible{display:flex;align-items:center;gap:var(--norato-space-2);min-block-size:var(--norato-control-target-min);font-size:var(--norato-type-body-small-size)}.banner-playground__dismissible input{inline-size:var(--norato-icon-sm);block-size:var(--norato-icon-sm);accent-color:var(--norato-color-brand-yellow)}.banner-playground__restore{display:flex;align-items:center;gap:var(--norato-space-3);flex-wrap:wrap}.banner-playground__restore [role=status],.banner-playground__feedback{margin:0;color:var(--norato-color-text-secondary);font-size:var(--norato-type-body-small-size)}
</style>
