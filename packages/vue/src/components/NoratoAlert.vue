<script setup lang="ts">
import { computed, ref, watch } from 'vue'

export type NoratoAlertTone = 'info' | 'success' | 'warning' | 'danger' | 'neutral'
export type NoratoAlertVariant = 'soft' | 'glass'
export type NoratoAlertLayout = 'inline' | 'expanded'

const props = withDefaults(defineProps<{
  id: string
  tone?: NoratoAlertTone
  variant?: NoratoAlertVariant
  layout?: NoratoAlertLayout
  message?: string
  title?: string
  description?: string
  modelValue?: boolean
  dismissible?: boolean
  label?: string
}>(), {
  tone: 'info',
  variant: 'soft',
  layout: 'inline',
  message: '',
  title: '',
  description: '',
  modelValue: undefined,
  dismissible: false,
})

const emit = defineEmits<{ 'update:modelValue': [value: boolean]; dismiss: [] }>()
const internalVisible = ref(true)
const visible = computed(() => props.modelValue ?? internalVisible.value)
watch(() => props.modelValue, value => { if (value !== undefined) internalVisible.value = value })

const role = computed(() => props.tone === 'danger' ? 'alert' : 'status')
const iconLabel: Record<NoratoAlertTone, string> = {
  info: 'اطلاعات', success: 'موفقیت', warning: 'هشدار', danger: 'خطا', neutral: 'خنثی',
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
    class="norato-alert"
    :class="[`is-${tone}`, `is-${variant}`, `is-${layout}`]"
    :data-tone="tone"
    :data-variant="variant"
    :data-layout="layout"
    :role="role"
    :aria-label="label || undefined"
    dir="rtl"
  >
    <span class="norato-alert__icon" aria-hidden="true">
      <svg v-if="tone === 'success'" viewBox="0 0 24 24" fill="none"><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>
      <svg v-else-if="tone === 'warning'" viewBox="0 0 24 24" fill="none"><path d="M12 8v5m0 3h.01M10.3 4.8 2.9 18a2 2 0 0 0 1.8 3h14.6a2 2 0 0 0 1.8-3l-7.4-13.2a2 2 0 0 0-3.4 0Z" /></svg>
      <svg v-else-if="tone === 'danger'" viewBox="0 0 24 24" fill="none"><path d="M12 8v5m0 3h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
      <svg v-else-if="tone === 'neutral'" viewBox="0 0 24 24" fill="none"><path d="M12 11v5m0-8h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
      <svg v-else viewBox="0 0 24 24" fill="none"><path d="M12 11v5m0-8h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
    </span>

    <div class="norato-alert__content">
      <span class="norato-alert__sr-only">{{ iconLabel[tone] }}:</span>
      <strong v-if="layout === 'expanded' && title" class="norato-alert__title">{{ title }}</strong>
      <p v-if="layout === 'inline'" class="norato-alert__message">{{ message || title }}</p>
      <p v-else-if="description" class="norato-alert__description">{{ description }}</p>
      <div v-if="$slots.actions && layout === 'expanded'" class="norato-alert__actions"><slot name="actions" /></div>
    </div>

    <button
      v-if="dismissible"
      class="norato-alert__close"
      type="button"
      :aria-label="`بستن پیام ${iconLabel[tone]}`"
      @click="dismiss"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg>
    </button>
  </section>
</template>

<style scoped>
.norato-alert{--alert-tone:var(--norato-color-status-info);--alert-container:var(--norato-color-info-container);display:flex;align-items:flex-start;gap:var(--norato-space-3);inline-size:min(100%,var(--norato-alert-inline-size));min-inline-size:0;padding:var(--norato-space-3);border:var(--norato-border-thin) solid transparent;border-radius:var(--norato-radius-card);box-sizing:border-box;color:var(--norato-color-text-primary);font-family:var(--norato-font-body);text-align:start}
.norato-alert.is-success{--alert-tone:var(--norato-color-status-success);--alert-container:var(--norato-color-success-container)}
.norato-alert.is-warning{--alert-tone:var(--norato-color-status-warning);--alert-container:var(--norato-color-warning-container)}
.norato-alert.is-danger{--alert-tone:var(--norato-color-status-error);--alert-container:var(--norato-color-error-container)}
.norato-alert.is-neutral{--alert-tone:var(--norato-color-text-secondary);--alert-container:var(--norato-color-surface-subtle)}
.norato-alert.is-soft{background:var(--alert-container)}
.norato-alert.is-glass{border-color:var(--norato-color-glass-line);background:var(--norato-color-glass-surface-strong);box-shadow:var(--norato-elevation-new)}
.norato-alert__icon{display:grid;place-items:center;flex:0 0 var(--norato-space-6);inline-size:var(--norato-space-6);block-size:var(--norato-space-6);margin-block-start:var(--norato-space-1);color:var(--alert-tone)}
.norato-alert__icon svg{display:block;inline-size:100%;block-size:100%;fill:none;stroke:currentColor;stroke-width:var(--norato-border-focus);stroke-linecap:round;stroke-linejoin:round}
.norato-alert__content{display:grid;align-content:center;gap:var(--norato-space-1);flex:1;min-inline-size:0}
.norato-alert__title{color:var(--alert-tone);font-family:var(--norato-font-heading);font-size:var(--norato-type-body-bold-size);font-weight:var(--norato-type-heading-title-weight);line-height:var(--norato-type-body-bold-line-height)}
.norato-alert__message,.norato-alert__description{margin:0;color:var(--norato-color-text-primary);font-size:var(--norato-type-body-small-size);line-height:var(--norato-type-body-small-line-height);overflow-wrap:anywhere}
.norato-alert__actions{display:flex;flex-wrap:wrap;gap:var(--norato-space-2);margin-block-start:var(--norato-space-1)}
.norato-alert__close{display:grid;place-items:center;flex:0 0 var(--norato-control-target-min);inline-size:var(--norato-control-target-min);block-size:var(--norato-control-target-min);margin-block-start:calc(-1 * var(--norato-space-2));margin-inline-start:calc(-1 * var(--norato-space-2));border:0;border-radius:var(--norato-radius-card);background:transparent;color:var(--alert-tone);cursor:pointer}
.norato-alert__close:hover{background:var(--norato-color-surface-subtle)}
.norato-alert__close:focus-visible{outline:var(--norato-border-focus) solid var(--norato-color-focus-ring);outline-offset:var(--norato-space-1)}
.norato-alert__close svg{inline-size:var(--norato-icon-sm);block-size:var(--norato-icon-sm);fill:none;stroke:currentColor;stroke-width:var(--norato-border-focus);stroke-linecap:round}
.norato-alert.is-inline{align-items:center;min-block-size:var(--norato-control-target-min)}
.norato-alert.is-inline .norato-alert__icon{margin-block-start:0}
.norato-alert.is-inline .norato-alert__message{font-size:var(--norato-type-body-regular-size)}
.norato-alert__sr-only{position:absolute;inline-size:1px;block-size:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}
@media(max-width:480px){.norato-alert{gap:var(--norato-space-2);padding:var(--norato-space-2)}.norato-alert__close{margin-block-start:calc(-1 * var(--norato-space-1));margin-inline-start:calc(-1 * var(--norato-space-1))}}
</style>
