<script setup lang="ts">
import { computed } from 'vue'
import NoratoIcon from './NoratoIcon.vue'

type ButtonVariant = 'primary' | 'secondary' | 'inverse' | 'ghost'
type ButtonIcon = 'arrow-left' | 'arrow-right'

const props = withDefaults(
  defineProps<{
    variant?: ButtonVariant
    icon?: ButtonIcon
    disabled?: boolean
    loading?: boolean
    fullWidth?: boolean
    type?: 'button' | 'submit' | 'reset'
  }>(),
  {
    variant: 'primary',
    type: 'button',
    disabled: false,
    loading: false,
    fullWidth: false,
  },
)

const baseClasses =
  'inline-flex h-control items-center justify-center whitespace-nowrap rounded-pill border-2 px-component-md gap-component-xs font-norato-display text-control font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-norato-focus focus-visible:ring-offset-2'

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-norato-primary text-norato-text-primary border-transparent',
  secondary: 'bg-transparent text-norato-text-primary border-norato-primary',
  inverse: 'bg-transparent text-norato-primary border-norato-primary',
  ghost: 'bg-transparent text-norato-muted border-transparent hover:bg-norato-soft',
}

const isDisabled = computed(() => props.disabled || props.loading)

const buttonClasses = computed(() => [
  baseClasses,
  props.fullWidth ? 'w-full' : 'w-auto',
  isDisabled.value
    ? 'bg-norato-border text-norato-placeholder border-transparent cursor-not-allowed'
    : variantClasses[props.variant],
])
</script>

<template>
  <button
    :type="props.type"
    :disabled="isDisabled"
    :aria-disabled="isDisabled ? 'true' : undefined"
    :aria-busy="props.loading ? 'true' : undefined"
    :class="buttonClasses"
  >
    <span v-if="props.loading" aria-hidden="true" class="norato-button__spinner" />
    <NoratoIcon v-else-if="props.icon === 'arrow-right'" name="arrow-right" :size="18" />
    <slot>متن</slot>
    <NoratoIcon v-if="!props.loading && props.icon === 'arrow-left'" name="arrow-left" :size="18" />
  </button>
</template>

<style scoped>
.norato-button__spinner {
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 9999px;
  animation: norato-button-spin 0.8s linear infinite;
  flex: none;
}

@keyframes norato-button-spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
