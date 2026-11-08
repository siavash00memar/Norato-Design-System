<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import NoratoButton from './NoratoButton.vue'

export type NoratoBannerTone = 'info' | 'success' | 'warning' | 'danger' | 'neutral' | 'inverse'
export type NoratoBannerLayout = 'desktop' | 'mobile'

const props = withDefaults(defineProps<{
  id: string
  tone?: NoratoBannerTone
  layout?: NoratoBannerLayout
  title?: string
  description?: string
  actionLabel?: string
  modelValue?: boolean
  dismissible?: boolean
  label?: string
}>(), {
  tone: 'info',
  layout: 'desktop',
  title: '',
  description: '',
  modelValue: undefined,
  dismissible: true,
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  action: []
  dismiss: []
}>()

const internalVisible = ref(true)
const visible = computed(() => props.modelValue ?? internalVisible.value)
watch(() => props.modelValue, value => { if (value !== undefined) internalVisible.value = value })

const role = computed(() => props.tone === 'danger' ? 'alert' : 'status')
const toneLabel: Record<NoratoBannerTone, string> = {
  info: 'اطلاعیه', success: 'موفقیت', warning: 'هشدار', danger: 'خطا', neutral: 'پیام عمومی', inverse: 'اطلاعیه',
}

function dismiss() {
  if (!props.dismissible) return
  if (props.modelValue === undefined) internalVisible.value = false
  emit('update:modelValue', false)
  emit('dismiss')
}
</script>

<template>
  <section
    v-if="visible"
    :id="id"
    class="norato-banner"
    :class="[`is-${tone}`, `is-${layout}`]"
    :data-tone="tone"
    :data-layout="layout"
    :role="role"
    :aria-label="label || undefined"
    dir="rtl"
  >
    <span class="norato-banner__icon" aria-hidden="true">
      <svg v-if="tone === 'success'" viewBox="0 0 24 24" fill="none"><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>
      <svg v-else-if="tone === 'warning'" viewBox="0 0 24 24" fill="none"><path d="M12 8v5m0 3h.01M10.3 4.8 2.9 18a2 2 0 0 0 1.8 3h14.6a2 2 0 0 0 1.8-3l-7.4-13.2a2 2 0 0 0-3.4 0Z" /></svg>
      <svg v-else-if="tone === 'danger'" viewBox="0 0 24 24" fill="none"><path d="M12 8v5m0 3h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
      <svg v-else-if="tone === 'neutral'" viewBox="0 0 24 24" fill="none"><path d="M12 11v5m0-8h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
      <svg v-else-if="tone === 'inverse'" viewBox="0 0 24 24" fill="none"><path d="M12 11v5m0-8h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
      <svg v-else viewBox="0 0 24 24" fill="none"><path d="M12 11v5m0-8h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
    </span>

    <div class="norato-banner__content">
      <span class="norato-banner__sr-only">{{ toneLabel[tone] }}:</span>
      <strong v-if="title" class="norato-banner__title">{{ title }}</strong>
      <span v-if="description" class="norato-banner__description">{{ description }}</span>
    </div>

    <NoratoButton
      v-if="actionLabel"
      class="norato-banner__action"
      :label="actionLabel"
      variant="secondary"
      @click="emit('action')"
    />

    <button
      v-if="dismissible"
      class="norato-banner__close"
      type="button"
      :aria-label="`بستن ${toneLabel[tone]}`"
      @click="dismiss"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg>
    </button>
  </section>
</template>

<style scoped>
.norato-banner{--banner-tone:var(--norato-color-status-info);--banner-container:var(--norato-color-info-container);--banner-stroke:var(--norato-color-info-border);--banner-content:var(--norato-color-text-primary);display:flex;align-items:center;gap:var(--norato-space-3);inline-size:100%;min-inline-size:0;min-block-size:var(--norato-control-target-min);padding-block:0;padding-inline:var(--norato-space-3);border:0;border-block-end:var(--norato-border-thin) solid var(--banner-stroke);box-sizing:border-box;background:var(--banner-container);color:var(--banner-content);font-family:var(--norato-font-body);text-align:start}
.norato-banner.is-success{--banner-tone:var(--norato-color-status-success);--banner-container:var(--norato-color-success-container);--banner-stroke:var(--norato-color-status-success)}
.norato-banner.is-warning{--banner-tone:var(--norato-color-status-warning);--banner-container:var(--norato-color-warning-container);--banner-stroke:var(--norato-color-warning-border)}
.norato-banner.is-danger{--banner-tone:var(--norato-color-status-error);--banner-container:var(--norato-color-error-container);--banner-stroke:var(--norato-color-error-strong)}
.norato-banner.is-neutral{--banner-tone:var(--norato-color-text-secondary);--banner-container:var(--norato-color-surface-subtle);--banner-stroke:var(--norato-color-border-default)}
.norato-banner.is-inverse{--banner-tone:var(--norato-color-brand-yellow);--banner-container:var(--norato-color-surface-code);--banner-stroke:var(--norato-color-surface-code);--banner-content:var(--norato-color-text-on-code)}
.norato-banner__icon{display:grid;place-items:center;flex:0 0 var(--norato-icon-sm);inline-size:var(--norato-icon-sm);block-size:var(--norato-icon-sm);color:var(--banner-tone)}
.norato-banner__icon svg{display:block;inline-size:100%;block-size:100%;fill:none;stroke:currentColor;stroke-width:var(--norato-border-focus);stroke-linecap:round;stroke-linejoin:round}
.norato-banner__content{display:flex;align-items:baseline;gap:var(--norato-space-1);flex:1;min-inline-size:0;overflow-wrap:anywhere}
.norato-banner__title{font-family:var(--norato-font-heading);font-size:var(--norato-type-body-bold-size);font-weight:var(--norato-type-heading-title-weight)}
.norato-banner__description{font-size:var(--norato-type-body-small-size);line-height:var(--norato-type-body-small-line-height)}
.norato-banner__action{flex:none}
.norato-banner__close{display:grid;place-items:center;flex:0 0 var(--norato-control-target-min);inline-size:var(--norato-control-target-min);block-size:var(--norato-control-target-min);border:0;border-radius:var(--norato-radius-card);background:transparent;color:var(--banner-tone);cursor:pointer}
.norato-banner__close:hover{background:var(--norato-color-warning-container)}
.norato-banner .norato-button:focus-visible,.norato-banner__close:focus-visible{outline:var(--norato-border-focus) solid var(--norato-color-focus-ring);outline-offset:var(--norato-space-1);box-shadow:none}
.norato-banner__close svg{inline-size:var(--norato-icon-sm);block-size:var(--norato-icon-sm);fill:none;stroke:currentColor;stroke-width:var(--norato-border-focus);stroke-linecap:round}
.norato-banner__sr-only{position:absolute;inline-size:1px;block-size:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}
.norato-banner.is-mobile{display:grid;grid-template-columns:auto minmax(0,1fr) auto;align-items:center}
.norato-banner.is-mobile .norato-banner__icon{grid-area:1/1/3/2}
.norato-banner.is-mobile .norato-banner__content{grid-area:1/2/2/3;display:grid;gap:var(--norato-space-1)}
.norato-banner.is-mobile .norato-banner__action{grid-area:2/2/3/3;justify-self:start}
.norato-banner.is-mobile .norato-banner__close{grid-area:1/3/3/4}
@media(max-width:600px){.norato-banner:not(.is-mobile){display:grid;grid-template-columns:auto minmax(0,1fr) auto;align-items:center}.norato-banner:not(.is-mobile) .norato-banner__icon{grid-area:1/1/3/2}.norato-banner:not(.is-mobile) .norato-banner__content{grid-area:1/2/2/3;display:grid;gap:var(--norato-space-1)}.norato-banner:not(.is-mobile) .norato-banner__action{grid-area:2/2/3/3;justify-self:start}.norato-banner:not(.is-mobile) .norato-banner__close{grid-area:1/3/3/4}}
</style>
