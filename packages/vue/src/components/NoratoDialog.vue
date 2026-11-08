<script setup lang="ts">
import NoratoButton from './NoratoButton.vue'
import NoratoModal from './NoratoModal.vue'

export type NoratoDialogTone = 'default' | 'success' | 'warning' | 'danger'

const props = withDefaults(defineProps<{
  id: string
  title: string
  description: string
  tone?: NoratoDialogTone
  size?: 'small' | 'medium' | 'large'
  confirmLabel?: string
  cancelLabel?: string
  confirmDisabled?: boolean
  busy?: boolean
  dismissible?: boolean
  dir?: 'rtl' | 'ltr'
}>(), {
  tone: 'default',
  size: 'small',
  confirmLabel: 'تأیید',
  cancelLabel: 'انصراف',
  confirmDisabled: false,
  busy: false,
  dismissible: true,
  dir: 'rtl',
})

const emit = defineEmits<{ confirm: []; cancel: [] }>()
const open = defineModel<boolean>('open', { default: false })

function cancel() {
  if (props.busy) return
  open.value = false
  emit('cancel')
}

function confirm() {
  if (props.busy || props.confirmDisabled) return
  emit('confirm')
}
</script>

<template>
  <NoratoModal :id="id" v-model:open="open" :title="title" :description="description" :size="size" role="alertdialog" variant="dialog" :dismissible="dismissible && !busy" :show-close="false" :dir="dir">
    <div class="norato-dialog__summary">
      <span class="norato-dialog__icon" :data-tone="tone" aria-hidden="true">
        <svg v-if="tone === 'danger'" viewBox="0 0 24 24" focusable="false"><path d="M4.5 7h15M9 7V5.5c0-.6.5-1 1-1h4c.5 0 1 .4 1 1V7m-9 0 1 12h8l1-12M10 11v5m4-5v5" /></svg>
        <svg v-else-if="tone === 'success'" viewBox="0 0 24 24" focusable="false"><path d="m5 12 4.3 4.3L19 6.8" /></svg>
        <svg v-else-if="tone === 'warning'" viewBox="0 0 24 24" focusable="false"><path d="M12 3.5 21 20H3L12 3.5Zm0 5.2v5.4m0 3.2v.2" /></svg>
        <svg v-else viewBox="0 0 24 24" focusable="false"><path d="M12 8v4m0 4h.01M4 19.5h16L12 4 4 19.5Z" /></svg>
      </span>
    </div>
    <template #footer>
      <NoratoButton :label="cancelLabel" variant="secondary" :disabled="busy" @click="cancel" />
      <NoratoButton :label="confirmLabel" :variant="tone === 'danger' ? 'destructive' : 'primary'" :disabled="confirmDisabled" :loading="busy" @click="confirm" />
    </template>
  </NoratoModal>
</template>
