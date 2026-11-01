<script setup lang="ts">
import { computed, ref } from 'vue'
import NoratoInputShell from './NoratoInputShell.vue'
import type { NoratoInputFieldProps } from './inputTypes'

export type NoratoPasswordStrength = 'empty' | 'weak' | 'fair' | 'good' | 'strong'
const props = withDefaults(defineProps<NoratoInputFieldProps & { strength?: NoratoPasswordStrength; autocomplete?: string }>(), {
  dir: 'rtl', size: 'medium', labelPlacement: 'outside', strength: 'empty', autocomplete: 'current-password',
})
const emit = defineEmits<{ 'update:modelValue': [value: string] }>()
const visible = ref(false)
const strengthRank = computed(() => ({ empty: 0, weak: 1, fair: 2, good: 3, strong: 4 }[props.strength]))
const strengthName = computed(() => ({ empty: 'وارد نشده', weak: 'ضعیف', fair: 'متوسط', good: 'خوب', strong: 'قوی' }[props.strength]))
</script>

<template>
  <div class="norato-password-input">
    <NoratoInputShell
      :id="id" :label="label" :helper-text="helperText" :error-text="errorText" :success-text="successText"
      :required="required" :disabled="disabled" :loading="loading" :read-only="readOnly" :dir="dir"
      :size="size" :label-placement="labelPlacement"
    >
      <template #control="{ describedby, invalid }">
        <input
          :id="id"
          class="norato-input-field__input"
          :type="visible ? 'text' : 'password'"
          :dir="dir"
          :value="modelValue ?? ''"
          :placeholder="placeholder"
          :autocomplete="autocomplete"
          :disabled="disabled || loading"
          :readonly="readOnly"
          :required="required"
          :aria-invalid="invalid || undefined"
          :aria-describedby="describedby"
          @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        />
      </template>
      <template #trailing>
        <button
          class="norato-input-field__action"
          type="button"
          :aria-label="visible ? 'پنهان کردن رمز عبور' : 'نمایش رمز عبور'"
          :aria-pressed="visible"
          :disabled="disabled || loading"
          @click="visible = !visible"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.5 12s3.2-6 9.5-6 9.5 6 9.5 6-3.2 6-9.5 6-9.5-6-9.5-6Z" /><circle cx="12" cy="12" r="2.6" /></svg>
        </button>
      </template>
    </NoratoInputShell>
      <div class="norato-password-strength" :data-strength="strength" :aria-label="`قدرت رمز عبور: ${strengthName}`" :aria-valuetext="strengthName" role="meter" :aria-valuemin="0" :aria-valuemax="4" :aria-valuenow="strengthRank">
      <span v-for="segment in 4" :key="segment" :data-active="segment <= strengthRank || undefined" />
      <small>{{ strengthName }}</small>
    </div>
  </div>
</template>
