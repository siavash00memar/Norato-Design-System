<script setup lang="ts">
import { computed, ref } from 'vue'
import { NoratoAvatar, NoratoAvatarGroup, NoratoAvatarLabel, NoratoAvatarStatus, type NoratoAvatarGroupItem, type NoratoAvatarGroupSize, type NoratoAvatarLabelSize, type NoratoAvatarPresence, type NoratoAvatarShape, type NoratoAvatarSize, type NoratoAvatarType } from '@norato/vue'
import PlaygroundSelect from './PlaygroundSelect.vue'

const props = defineProps<{ copiedKey: string }>()
const emit = defineEmits<{ copy: [key: string, text: string] }>()

const type = ref<NoratoAvatarType>('initials')
const size = ref<NoratoAvatarSize>('m')
const shape = ref<NoratoAvatarShape>('circle')
const status = ref<NoratoAvatarPresence | 'none'>('online')
const direction = ref<'rtl' | 'ltr'>('rtl')
const max = ref('4')
const maxCount = computed(() => Number(max.value) as 3 | 4 | 5)
const types: NoratoAvatarType[] = ['image', 'initials', 'icon']
const sizes: NoratoAvatarSize[] = ['xs', 's', 'm', 'l', 'xl', '2xl']
const shapes: NoratoAvatarShape[] = ['circle', 'square']
const groupSizes: NoratoAvatarGroupSize[] = ['s', 'm', 'l', 'xl']
const groupMaxes: Array<3 | 4 | 5> = [3, 4, 5]
const labelSizes: NoratoAvatarLabelSize[] = ['s', 'm', 'l']
const statuses: NoratoAvatarPresence[] = ['online', 'busy', 'away', 'offline']
const labels = { image: 'تصویر', initials: 'حروف', icon: 'آیکن', circle: 'دایره', square: 'مربع', xs: 'XS · ۲۴', s: 'S · ۳۲', m: 'M · ۴۰', l: 'L · ۴۸', xl: 'XL · ۵۶', '2xl': '2XL · ۶۴', online: 'آنلاین', busy: 'مشغول', away: 'غایب', offline: 'آفلاین' }
const demoSrc = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96"><rect width="96" height="96" fill="#f3d5c6"/><path d="M14 96c4-22 16-34 34-34s30 12 34 34" fill="#fdc101"/><circle cx="48" cy="37" r="20" fill="#e6b99c"/><path d="M28 34c2-18 12-26 23-25 13 1 20 11 19 28-8-7-15-11-24-12-4 5-10 8-18 9" fill="#4b342c"/></svg>')
const brokenDemoSrc = 'data:image/png;base64,not-a-valid-image'

const groupItems: NoratoAvatarGroupItem[] = [
  { id: 'sara', name: 'سارا محمدی', src: demoSrc },
  { id: 'armin', name: 'آرمین رضایی', initials: 'آر' },
  { id: 'niloofar', name: 'نیلوفر احمدی', initials: 'نآ' },
  { id: 'kian', name: 'کیان موسوی', initials: 'کم' },
  { id: 'mina', name: 'مینا کریمی', initials: 'مک' },
  { id: 'ali', name: 'علی نادری', initials: 'ع‌ن' },
  { id: 'tara', name: 'تارا حیدری', initials: 'تح' },
]

const selectedSnippet = computed(() => `<NoratoAvatar name="سارا محمدی" type="${type.value}" size="${size.value}" shape="${shape.value}" status="${status.value}" dir="${direction.value}" />`)
const snippet = computed(() => `<script setup lang="ts">
import { NoratoAvatar, NoratoAvatarGroup, NoratoAvatarLabel, NoratoAvatarStatus } from '@norato/vue'
const team = [
  { id: 'sara', name: 'سارا محمدی', initials: 'سم' },
  { id: 'armin', name: 'آرمین رضایی', initials: 'آر' },
]
<\/script>
<template>
  ${selectedSnippet.value}
  <NoratoAvatarGroup :items="team" size="m" :max="${maxCount.value}" label="اعضای تیم" dir="${direction.value}" />
  <NoratoAvatarLabel name="سارا محمدی" description="طراح محصول" size="m" status="online" />
  <NoratoAvatarStatus status="online" />
</template>`)
</script>

<template>
  <section class="avatar-playground" dir="rtl" aria-label="آزمایش آواتارها">
    <p>نوع، اندازه، شکل، وضعیت و جهت را عوض کن؛ زیر آن ماتریس ۵۵ گونهٔ ثبت‌شده را می‌بینی.</p>
    <div class="button-playground-controls avatar-playground__controls">
      <PlaygroundSelect id="avatar-type" v-model="type" label="نوع آواتار" :options="types.map(value => ({ value, label: labels[value] }))" />
      <PlaygroundSelect id="avatar-size" v-model="size" label="اندازه" :options="sizes.map(value => ({ value, label: labels[value] }))" />
      <PlaygroundSelect id="avatar-shape" v-model="shape" label="شکل" :options="shapes.map(value => ({ value, label: labels[value] }))" />
      <PlaygroundSelect id="avatar-status" v-model="status" label="وضعیت حضور" :options="[{value:'none',label:'بدون وضعیت'},...statuses.map(value => ({ value, label: labels[value] }))]" />
      <PlaygroundSelect id="avatar-direction" v-model="direction" label="جهت گروه" :options="[{value:'rtl',label:'RTL'},{value:'ltr',label:'LTR'}]" />
      <PlaygroundSelect id="avatar-group-max" v-model="max" label="حداکثر آواتار" :options="groupMaxes.map(value => ({ value: String(value), label: String(value) }))" />
    </div>

    <div class="avatar-playground__live">
      <article class="avatar-playground__live-card">
        <h3>Avatar · Vue 3</h3>
        <NoratoAvatar name="سارا محمدی" :type="type" :src="demoSrc" initials="سم" :size="size" :shape="shape" :status="status" :dir="direction" />
        <code dir="ltr">{{ selectedSnippet }}</code>
      </article>
      <article class="avatar-playground__live-card">
        <h3>Avatar Group · max {{ maxCount }}</h3>
        <NoratoAvatarGroup :items="groupItems" size="m" :max="maxCount" label="اعضای تیم طراحی" :dir="direction" />
      </article>
      <article class="avatar-playground__live-card">
        <h3>Avatar Label</h3>
        <NoratoAvatarLabel name="سارا محمدی" description="طراح محصول" size="m" type="image" :src="demoSrc" status="online" :dir="direction" />
      </article>
      <article class="avatar-playground__live-card">
        <h3>Avatar Status</h3>
        <div class="avatar-playground__status-list"><NoratoAvatarStatus v-for="value in statuses" :key="value" :status="value" /></div>
      </article>
      <article class="avatar-playground__live-card">
        <h3>Image fallback</h3>
        <NoratoAvatar name="سارا محمدی" type="image" :src="brokenDemoSrc" size="m" />
      </article>
    </div>

    <section class="avatar-playground__matrix" aria-labelledby="avatar-matrix-title">
      <h3 id="avatar-matrix-title">Avatar · ۳۶ ترکیب</h3>
      <div v-for="avatarShape in shapes" :key="avatarShape" class="avatar-playground__matrix-group">
        <h4>{{ labels[avatarShape] }}</h4>
        <div class="avatar-playground__avatar-grid">
          <div v-for="avatarType in types" :key="avatarType" class="avatar-playground__type-group">
            <span>{{ labels[avatarType] }}</span>
            <div class="avatar-playground__size-grid">
              <div v-for="avatarSize in sizes" :key="avatarSize" class="avatar-playground__cell">
                <NoratoAvatar :name="avatarType === 'image' ? 'سارا محمدی' : 'آرمین رضایی'" :type="avatarType" :src="avatarType === 'image' ? demoSrc : undefined" initials="آر" :size="avatarSize" :shape="avatarShape" decorative />
                <small>{{ labels[avatarSize] }}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="avatar-playground__matrix" aria-labelledby="avatar-group-matrix-title">
      <h3 id="avatar-group-matrix-title">Avatar Group · ۱۲ ترکیب</h3>
      <div class="avatar-playground__group-grid">
        <div v-for="groupSize in groupSizes" :key="groupSize" class="avatar-playground__cell">
          <strong>{{ labels[groupSize] }}</strong>
          <div class="avatar-playground__group-maxes">
            <div v-for="groupMax in groupMaxes" :key="groupMax" class="avatar-playground__group-cell">
              <NoratoAvatarGroup :items="groupItems.slice(0,5)" :size="groupSize" :max="groupMax" :label="'گروه ' + labels[groupSize] + ' · حداکثر ' + groupMax" :dir="direction" />
              <small>حد {{ groupMax }}</small>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="avatar-playground__matrix" aria-labelledby="avatar-label-matrix-title">
      <h3 id="avatar-label-matrix-title">Avatar Label · ۳ اندازه</h3>
      <div class="avatar-playground__label-list">
        <NoratoAvatarLabel v-for="labelSize in labelSizes" :key="labelSize" name="سارا محمدی" description="طراح محصول" :size="labelSize" status="online" />
      </div>
    </section>

    <div class="button-playground-codebar"><strong>کد Vue</strong><button class="copy-section-button" type="button" @click="emit('copy','avatar-playground',snippet)">{{ props.copiedKey==='avatar-playground'?'کپی شد':'کپی کد' }}</button></div>
    <pre class="usage-code" dir="ltr"><code>{{ snippet }}</code></pre>
  </section>
</template>

<style>
.avatar-playground{display:grid;gap:var(--norato-space-4);min-inline-size:0}
.avatar-playground>p{margin:0;color:var(--norato-color-text-secondary);font-size:var(--norato-type-body-small-size)}
.avatar-playground__controls{grid-template-columns:repeat(auto-fit,minmax(min(100%,var(--norato-space-32)),1fr))}
.avatar-playground__live{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:var(--norato-space-3)}
.avatar-playground__live-card{display:grid;align-content:start;justify-items:center;gap:var(--norato-space-3);min-inline-size:0;padding:var(--norato-space-3);border:var(--norato-border-thin) solid var(--norato-color-border-default);border-radius:var(--norato-radius-card);background:var(--norato-color-glass-surface-strong);text-align:center}
.avatar-playground__live-card h3,.avatar-playground__matrix h3,.avatar-playground__matrix h4{margin:0;font-family:var(--norato-font-heading);font-size:var(--norato-type-heading-title-size);font-weight:var(--norato-type-heading-title-weight)}
.avatar-playground__live-card code{max-inline-size:100%;overflow-wrap:anywhere;color:var(--norato-color-text-secondary);font-size:var(--norato-type-body-caption-size)}
.avatar-playground__status-list{display:flex;justify-content:center;gap:var(--norato-space-3);flex-wrap:wrap}
.avatar-playground__matrix{display:grid;gap:var(--norato-space-3);min-inline-size:0;padding-block-start:var(--norato-space-3);border-block-start:var(--norato-border-thin) solid var(--norato-color-border-default)}
.avatar-playground__matrix-group{display:grid;gap:var(--norato-space-2)}
.avatar-playground__avatar-grid{display:grid;gap:var(--norato-space-3)}
.avatar-playground__type-group{display:grid;gap:var(--norato-space-1);min-inline-size:0}
.avatar-playground__type-group>span{color:var(--norato-color-text-secondary);font-size:var(--norato-type-body-caption-size)}
.avatar-playground__size-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(64px,1fr));gap:var(--norato-space-2);min-inline-size:0}
.avatar-playground__cell{display:grid;justify-items:center;align-content:start;gap:var(--norato-space-1);min-inline-size:0;padding:var(--norato-space-2);border-radius:var(--norato-radius-card);background:var(--norato-color-surface-subtle)}
.avatar-playground__cell small{color:var(--norato-color-text-secondary);font-size:var(--norato-type-body-caption-size)}
.avatar-playground__group-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:var(--norato-space-3)}
.avatar-playground__group-grid>.avatar-playground__cell{gap:var(--norato-space-2)}
.avatar-playground__group-maxes{display:flex;justify-content:center;gap:var(--norato-space-1);max-inline-size:100%;flex-wrap:wrap}
.avatar-playground__group-cell{display:grid;justify-items:center;gap:var(--norato-space-1);padding:var(--norato-space-1)}
.avatar-playground__label-list{display:flex;align-items:center;gap:var(--norato-space-4);flex-wrap:wrap}

.avatar-playground .button-playground-options>li:focus-visible{background:var(--norato-color-warning-container);outline:var(--norato-border-focus) solid var(--norato-color-brand-yellow);outline-offset:calc(-1 * var(--norato-border-focus))}
@media(max-width:599px){.avatar-playground__live,.avatar-playground__group-grid{grid-template-columns:minmax(0,1fr)}.avatar-playground__label-list{align-items:flex-start;flex-direction:column}}
</style>
