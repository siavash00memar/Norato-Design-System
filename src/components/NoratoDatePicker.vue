<script setup lang="ts">
import NoratoIcon from './NoratoIcon.vue'

withDefaults(
  defineProps<{
    label?: string
  }>(),
  {
    label: 'تاریخ',
  },
)
</script>

<template>
  <label class="inline-flex flex-row-reverse items-center gap-3 text-right">
    <span class="shrink-0 whitespace-nowrap text-right text-[13px] font-normal font-['Lalezar'] text-[#1a1a1a]">
      {{ label }}
    </span>
    <div class="inline-flex h-9 w-[182px] items-center" dir="ltr">
      <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-l-full bg-[#fdc101]">
        <NoratoIcon name="calendar" :size="24" class="text-black" />
      </div>
      <div class="flex h-9 w-[146px] shrink-0 items-center justify-center gap-[22px] rounded-r-full border-r border-y border-[#e4e4e4] bg-white px-6">
        <span class="text-[24px] leading-none font-normal text-[#a1a1a1]">/</span>
        <span class="text-[24px] leading-none font-normal text-[#a1a1a1]">/</span>
      </div>
    </div>
  </label>
</template>
