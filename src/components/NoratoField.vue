<script setup lang="ts">
import NoratoIcon from './NoratoIcon.vue'

withDefaults(
  defineProps<{
    label?: string
    modelValue?: string
    placeholder?: string
    icon?: 'search' | 'calendar' | 'caret-down' | 'chevron-down' | 'drag'
    readonly?: boolean
  }>(),
  {
    label: 'تایتل',
    placeholder: 'لورم ایپسوم متن ساختگی با تولید',
  },
)

defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<template>
  <label
    class="grid items-center gap-3 text-right"
    :class="label ? 'grid-cols-[auto_minmax(0,1fr)]' : 'grid-cols-1'"
  >
    <span
      v-if="label"
      class="min-w-10 whitespace-nowrap text-[13px] font-normal font-['Lalezar'] text-[#1a1a1a]"
    >
      {{ label }}
    </span>
    <div class="relative min-w-0">
      <input
        :value="modelValue"
        :placeholder="placeholder"
        :readonly="readonly"
        class="h-9 w-full rounded-full border border-norato-line bg-white px-4 text-right text-[13px] text-[#1a1a1a] outline-none transition placeholder:text-xs placeholder:text-[#a1a1a1] focus:border-norato-primary"
        :class="{ 'pl-11': icon }"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      />
      <NoratoIcon
        v-if="icon"
        :name="icon"
        :size="18"
        class="absolute left-4 top-1/2 -translate-y-1/2 text-black"
      />
    </div>
  </label>
</template>
