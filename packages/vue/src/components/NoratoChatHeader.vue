<script setup lang="ts">
import '../chat.css'
withDefaults(defineProps<{ title: string; subtitle?: string; avatar?: string; initials?: string; online?: boolean; dir?: 'rtl' | 'ltr' }>(), { subtitle: '', avatar: '', initials: '', online: false, dir: 'rtl' })
const emit = defineEmits<{ back: []; call: []; more: [] }>()
</script>
<template>
  <header class="norato-chat-header" :dir="dir">
    <div class="norato-chat-header__identity"><span class="norato-chat-header__avatar"><img v-if="avatar" :src="avatar" :alt="''" /><span v-else>{{ initials || title.slice(0,1) }}</span><i v-if="online" aria-hidden="true" /></span><span class="norato-chat-header__person"><b>{{ title }}</b><small>{{ subtitle || (online ? 'آنلاین' : 'آفلاین') }}<span v-if="subtitle" class="norato-chat-header__presence">، {{ online ? 'آنلاین' : 'آفلاین' }}</span></small></span></div>
    <div class="norato-chat-header__actions"><button type="button" aria-label="بازگشت" @click="emit('back')"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 5-7 7 7 7" /></svg></button><button type="button" aria-label="تماس" @click="emit('call')"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h3l2 5-2 1.5a15 15 0 0 0 4.5 4.5L16 12l5 2v3c0 1.1-.9 2-2 2A16 16 0 0 1 5 5c0-1.1.9-2 2-2Z" /></svg></button><button type="button" aria-label="گزینه‌های گفتگو" @click="emit('more')"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/></svg></button></div>
  </header>
</template>
