<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import {
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from 'reka-ui'

export type NoratoToastTone = 'neutral' | 'success' | 'warning' | 'danger' | 'loading'
export type NoratoToastSurface = 'dark' | 'glass'
export type NoratoToastLayout = 'simple' | 'rich'

const props = withDefaults(defineProps<{
  id: string
  title: string
  description?: string
  tone?: NoratoToastTone
  surface?: NoratoToastSurface
  layout?: NoratoToastLayout
  actionLabel?: string
  actionAltText?: string
  actionCloses?: boolean
  dismissible?: boolean
  dismissLabel?: string
  modelValue?: boolean
  defaultOpen?: boolean
  duration?: number
  viewportLabel?: string
}>(), {
  description: '',
  tone: 'neutral',
  surface: 'dark',
  layout: 'simple',
  actionLabel: '',
  actionAltText: '',
  actionCloses: true,
  dismissible: true,
  dismissLabel: 'بستن پیام',
  modelValue: undefined,
  defaultOpen: false,
  duration: 6000,
  viewportLabel: 'اعلان‌ها ({hotkey})',
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  action: []
  close: []
  pause: []
  resume: []
}>()

const internalOpen = ref(props.defaultOpen)
const open = computed(() => props.modelValue ?? internalOpen.value)
const isTimed = computed(() => props.tone !== 'loading' && props.duration > 0)
const announceType = computed(() => props.tone === 'danger' ? 'foreground' : 'background')
const iconLabels: Record<NoratoToastTone, string> = {
  neutral: 'پیام',
  success: 'موفقیت',
  warning: 'هشدار',
  danger: 'خطا',
  loading: 'در حال انجام',
}
const dismissLabel = computed(() => props.dismissLabel === 'بستن پیام' ? `${props.dismissLabel} ${iconLabels[props.tone]}` : props.dismissLabel)

watch(() => props.modelValue, value => {
  if (value !== undefined) internalOpen.value = value
})

function updateOpen(value: boolean) {
  if (props.modelValue === undefined) internalOpen.value = value
  emit('update:modelValue', value)
  if (!value) emit('close')
}
</script>

<template>
  <ToastProvider label="اعلان" :duration="duration" :limit="1">
    <ToastRoot
      :id="id"
      class="norato-toast-item"
      :open="open"
      :duration="tone === 'loading' ? 0 : duration"
      :type="announceType"
      as="li"
      @update:open="updateOpen"
      @pause="emit('pause')"
      @resume="emit('resume')"
    >
      <template #default="{ remaining, duration: activeDuration }">
        <article
          class="norato-toast"
          :data-tone="tone"
          :data-surface="surface"
          :data-layout="layout"
          :data-open="open"
          :data-timed="isTimed"
          dir="rtl"
        >
          <span class="norato-toast__icon" aria-hidden="true">
            <svg v-if="tone === 'success'" viewBox="0 0 24 24"><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>
            <svg v-else-if="tone === 'warning'" viewBox="0 0 24 24"><path d="M12 8v5m0 3h.01M10.3 4.8 2.9 18a2 2 0 0 0 1.8 3h14.6a2 2 0 0 0 1.8-3l-7.4-13.2a2 2 0 0 0-3.4 0Z" /></svg>
            <svg v-else-if="tone === 'danger'" viewBox="0 0 24 24"><path d="M12 8v5m0 3h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
            <svg v-else-if="tone === 'neutral'" viewBox="0 0 24 24"><path d="M12 11v5m0-8h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
            <span v-else class="norato-toast__spinner" />
          </span>

          <div class="norato-toast__content">
            <ToastTitle class="norato-toast__title"><span class="norato-toast__sr-only">{{ iconLabels[tone] }}: </span>{{ title }}</ToastTitle>
            <ToastDescription v-if="layout === 'rich' && description" class="norato-toast__description">{{ description }}</ToastDescription>
            <ToastAction
              v-if="actionLabel"
              class="norato-toast__action"
              type="button"
              :alt-text="actionAltText || actionLabel"
              :close-on-click="actionCloses"
              @click="emit('action')"
            >{{ actionLabel }}</ToastAction>
          </div>

          <ToastClose v-if="dismissible" class="norato-toast__close" type="button" :aria-label="dismissLabel">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg>
          </ToastClose>

          <span
            v-if="isTimed"
            class="norato-toast__timer"
            aria-hidden="true"
            :style="{ '--norato-toast-remaining': activeDuration > 0 ? `${Math.max(0, Math.min(100, remaining / activeDuration * 100))}%` : '0%' }"
          ><span /></span>
        </article>
      </template>
    </ToastRoot>
    <ToastViewport class="norato-toast-viewport" :label="viewportLabel" />
  </ToastProvider>
</template>
