<script setup lang="ts">
import { ref } from 'vue'
import NoratoChoiceOption from './NoratoChoiceOption.vue'
import NoratoField from './NoratoField.vue'
import NoratoIcon from './NoratoIcon.vue'

export interface TreeOption {
  id: string
  label: string
  children?: TreeOption[]
}

const props = withDefaults(
  defineProps<{
    items?: TreeOption[]
  }>(),
  {
    items: () => [
      {
        id: 'a',
        label: 'لورم ایپسوم',
        children: [
          { id: 'a-1', label: 'لورم ایپسوم متن ساختگی' },
          { id: 'a-2', label: 'لورم ایپسوم متن ساختگی' },
          { id: 'a-3', label: 'لورم ایپسوم متن ساختگی' },
        ],
      },
      { id: 'b', label: 'صنایع' },
      { id: 'c', label: 'شیمی' },
    ],
  },
)

const open = ref<string[]>(['a'])
const selected = ref<string[]>(['a-1'])

const toggleOpen = (id: string) => {
  open.value = open.value.includes(id) ? open.value.filter((item) => item !== id) : [...open.value, id]
}

const toggleSelected = (id: string) => {
  selected.value = selected.value.includes(id) ? selected.value.filter((item) => item !== id) : [...selected.value, id]
}
</script>

<template>
  <section class="w-full max-w-[324px] rounded-norato border border-norato-line bg-white p-3 shadow-norato-sm">
    <NoratoField icon="search" label="" placeholder="لورم ایپسوم متن ساختگی با تولید" />
    <div class="mt-3 max-h-[390px] overflow-auto pl-1">
      <div v-for="item in props.items" :key="item.id" class="mb-1">
        <button
          type="button"
          class="flex h-9 w-full items-center justify-between rounded-norato bg-norato-soft px-3 text-sm font-bold text-norato-ink"
          @click="item.children ? toggleOpen(item.id) : toggleSelected(item.id)"
        >
          <span>{{ item.label }}</span>
          <NoratoIcon name="chevron-down" :size="20" class="text-norato-subtle" />
        </button>
        <div v-if="item.children && open.includes(item.id)" class="rounded-b-norato border-x border-b border-norato-line bg-white p-3">
          <NoratoChoiceOption
            v-for="child in item.children"
            :key="child.id"
            :label="child.label"
            :value="child.id"
            :model-value="selected.includes(child.id) ? child.id : ''"
            class="mb-2"
            @update:model-value="toggleSelected(child.id)"
          />
        </div>
      </div>
    </div>
    <div class="mt-2 h-[25px] rounded-b-norato bg-norato-soft" />
  </section>
</template>
