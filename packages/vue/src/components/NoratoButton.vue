<script setup lang="ts">
withDefaults(defineProps<{ label: string; variant?: 'primary' | 'secondary' | 'inverse' | 'destructive'; type?: 'button' | 'submit' | 'reset'; disabled?: boolean; loading?: boolean; pressed?: boolean; iconOnly?: boolean; accessibleLabel?: string }>(), {
  variant: 'primary',
  type: 'button',
  disabled: false,
});
</script>

<template>
  <button class="norato-button" :class="{ 'norato-button--icon-only': iconOnly }" :data-variant="variant" :type="type" :disabled="disabled || loading" :aria-label="iconOnly ? accessibleLabel : undefined" :aria-busy="loading ? 'true' : undefined" :aria-pressed="pressed">
    <span v-if="loading" class="norato-button__progress" aria-hidden="true" />{{ label }}
  </button>
</template>
