<script setup lang="ts">
import NoratoIcon from './NoratoIcon.vue'

const props = withDefaults(
  defineProps<{
    variant?: 'primary' | 'secondary' | 'ghost'
    icon?: 'arrow-left' | 'arrow-right'
    disabled?: boolean
    type?: 'button' | 'submit' | 'reset'
  }>(),
  {
    variant: 'primary',
    type: 'button',
  },
)

const classes = {
  primary: 'bg-norato-primary text-white border-norato-primary hover:bg-norato-primaryDark',
  secondary: 'bg-white text-norato-ink border-norato-line hover:bg-norato-soft',
  ghost: 'bg-transparent text-norato-muted border-transparent hover:bg-norato-soft',
}
</script>

<template>
  <button
    :type="props.type"
    :disabled="disabled"
    class="inline-flex h-9 min-w-[90px] items-center justify-center gap-2 rounded-norato border px-4 text-sm font-bold transition disabled:cursor-not-allowed disabled:opacity-50"
    :class="classes[variant]"
  >
    <NoratoIcon v-if="icon === 'arrow-right'" name="arrow-right" :size="18" />
    <slot>متن</slot>
    <NoratoIcon v-if="icon === 'arrow-left'" name="arrow-left" :size="18" />
  </button>
</template>
