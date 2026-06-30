<script setup lang="ts">
import NoratoField from './NoratoField.vue'

withDefaults(
  defineProps<{
    title?: string
  }>(),
  {
    title: 'تایتل',
  },
)
</script>

<template>
  <section class="w-full max-w-[360px] rounded-norato border border-norato-line bg-white px-[18px] py-[18px] pb-3 shadow-norato-sm">
    <h3 class="mb-3 text-right text-sm font-black text-norato-ink">{{ title }}</h3>
    <div class="grid gap-6 rounded-[12px] border border-norato-line bg-white p-3">
      <NoratoField
        icon="caret-down"
        label="تایتل"
        placeholder="لورم ایپسوم متن ساختگی با تولید"
        readonly
      />
      <NoratoField
        icon="caret-down"
        label="تایتل"
        placeholder="لورم ایپسوم متن ساختگی با تولید"
        readonly
      />
    </div>
  </section>
</template>
