<script setup lang="ts">
import { computed } from 'vue'
import '../chat.css'
import NoratoChatHeader from './NoratoChatHeader.vue'
import NoratoChatMessage, { type NoratoChatMessageData } from './NoratoChatMessage.vue'
import type { NoratoChatComposerState } from './NoratoChatComposer.vue'
import NoratoChatDateDivider from './NoratoChatDateDivider.vue'
import NoratoTypingIndicator from './NoratoTypingIndicator.vue'
import NoratoChatComposer from './NoratoChatComposer.vue'
const props = withDefaults(defineProps<{ id: string; label: string; title: string; subtitle?: string; initials?: string; avatar?: string; online?: boolean; messages: readonly NoratoChatMessageData[]; dateLabel?: string; dateTime?: string; showTyping?: boolean; disabled?: boolean; dir?: 'rtl' | 'ltr' }>(), { subtitle: '', initials: '', avatar: '', online: false, dateLabel: '', dateTime: '', showTyping: false, disabled: false, dir: 'rtl' })
const emit = defineEmits<{ send: [text: string]; attach: [file: File]; call: []; back: []; more: []; play: [message: NoratoChatMessageData]; record: [recording: boolean] }>()
const draft = defineModel<string>({ default: '' })
const composerState = defineModel<NoratoChatComposerState>('composerState', { default: 'default' })
const messages = computed(() => props.messages)
</script>
<template>
  <section :id="id" class="norato-chat" :dir="dir" role="region" :aria-label="label">
    <NoratoChatHeader :title="title" :subtitle="subtitle" :initials="initials" :avatar="avatar" :online="online" :dir="dir" @back="emit('back')" @call="emit('call')" @more="emit('more')" />
    <div class="norato-chat__timeline" role="log" aria-live="polite" aria-relevant="additions text" :aria-label="`گفتگو با ${title}`">
      <NoratoChatDateDivider v-if="dateLabel" :label="dateLabel" :date-time="dateTime" :dir="dir" />
      <NoratoChatMessage v-for="(message,index) in messages" :key="message.id" :message="message" :dir="dir" :show-sender="index === 0 || messages[index-1]?.sender !== message.sender" @play="emit('play',$event)" />
      <NoratoTypingIndicator v-if="showTyping" :dir="dir" />
    </div>
    <NoratoChatComposer v-model="draft" v-model:state="composerState" :disabled="disabled" :dir="dir" @send="emit('send',$event)" @attach="emit('attach',$event)" @record="emit('record',$event)" />
  </section>
</template>
