<script setup lang="ts">
import { NoratoButton } from '@norato/vue'

defineProps<{ copiedKey: string }>()
const emit = defineEmits<{ copy: [key: string, value: string] }>()

const variants = [
  { key: 'primary', title: 'Primary', note: 'اکشن اصلی', supported: true, visual: 'primary' },
  { key: 'secondary', title: 'Secondary', note: 'اکشن جایگزین', supported: true, visual: 'secondary' },
  { key: 'tertiary', title: 'Tertiary', note: 'اکشن کم‌تأکید', supported: false, visual: 'tertiary' },
  { key: 'danger', title: 'Danger', note: 'در API با نام destructive', supported: true, visual: 'danger' },
  { key: 'dashed', title: 'Dashed', note: 'افزودن یا ساخت', supported: false, visual: 'dashed' },
  { key: 'text', title: 'Text', note: 'اکشن متنی', supported: false, visual: 'text' },
  { key: 'link', title: 'Link', note: 'حرکت به مقصد', supported: false, visual: 'link' },
  { key: 'inverse', title: 'Inverse', note: 'پشتیبانی‌شده در API، خارج از ۷ نوع قراردادی', supported: true, visual: 'inverse' },
]
const apiVariant = (key: string) => key === 'danger' ? 'destructive' : key
const snippet = (variant: string) => `<NoratoButton label="ذخیرهٔ تغییرات" variant="${variant}" />`
</script>

<template>
  <div class="button-variant-showcase" dir="rtl">
    <div class="button-gallery-heading">
      <div><strong>۷ نوع قراردادی</strong><span>Inverse به‌صورت جداگانه در API Vue پشتیبانی می‌شود.</span></div>
      <span class="gallery-key"><i class="key-live" /> API اجرایی <i class="key-proposal" /> مرجع بصری</span>
    </div>
    <div class="button-variant-grid">
      <template v-for="variant in variants" :key="variant.key">
      <h3 v-if="variant.key === 'inverse'" class="button-variant-extra-heading">ظاهر اضافی در API Vue</h3>
      <article class="button-variant-card" :class="{ 'is-api-extra': variant.key === 'inverse' }">
        <div class="variant-demo" inert>
          <NoratoButton v-if="variant.supported" label="ذخیرهٔ تغییرات" :variant="apiVariant(variant.key) as 'primary' | 'secondary' | 'inverse' | 'destructive'" />
          <span v-else class="variant-visual" :class="`variant-visual--${variant.visual}`" aria-hidden="true">ذخیرهٔ تغییرات</span>
        </div>
        <div class="variant-caption">
          <span><b>{{ variant.title }}</b><small>{{ variant.note }}</small></span>
          <button class="copy-action" type="button" :aria-label="`کپی ${variant.supported ? 'کد استفاده' : 'شرح مرجع بصری'} ${variant.title}`" @click="emit('copy', variant.key, variant.supported ? snippet(apiVariant(variant.key)) : `${variant.title} — ${variant.note}؛ مرجع بصری قرارداد Norato و فاقد variant اجرایی در API فعلی.`)">{{ copiedKey === variant.key ? 'کپی شد' : copiedKey === `${variant.key}-error` ? 'ناموفق' : 'کپی' }}</button>
        </div>
        <span class="variant-status" :class="variant.supported ? 'is-live' : 'is-proposal'">{{ variant.supported ? 'در API Vue' : 'مرجع بصری' }}</span>
      </article>
      </template>
    </div>

  </div>
</template>
