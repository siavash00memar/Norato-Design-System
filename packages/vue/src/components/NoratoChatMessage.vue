<script setup lang="ts">
import { computed } from 'vue'
import '../chat.css'
export type NoratoChatSender = 'incoming' | 'outgoing'
export type NoratoChatMessageType = 'text' | 'reply' | 'image' | 'file' | 'voice'
export interface NoratoChatMessageData {
  id: string
  sender: NoratoChatSender
  type: NoratoChatMessageType
  text?: string
  time?: string
  dateTime?: string
  senderName?: string
  replyTo?: { sender: string; text: string }
  imageSrc?: string
  imageAlt?: string
  fileHref?: string
  fileName?: string
  fileSize?: string
  voiceDuration?: string
  read?: boolean
}
const props = withDefaults(defineProps<{ message: NoratoChatMessageData; showSender?: boolean; dir?: 'rtl' | 'ltr' }>(), { showSender: false, dir: 'rtl' })
const emit = defineEmits<{ play: [message: NoratoChatMessageData] }>()
const accessibleText = computed(() => props.message.type === 'image' ? (props.message.imageAlt || 'تصویر') : props.message.type === 'file' ? (props.message.fileName || 'فایل پیوست') : props.message.type === 'voice' ? `پیام صوتی ${props.message.voiceDuration || ''}` : (props.message.text || ''))
</script>
<template>
  <article class="norato-chat-message" :class="`norato-chat-message--${message.sender}`" :data-type="message.type" :dir="dir" role="group" :aria-label="`${message.sender === 'incoming' ? 'پیام دریافتی از ' + (message.senderName || 'مخاطب') : 'پیام ارسالی از ' + (message.senderName || 'شما')}${message.time ? `، ${message.time}` : ''}: ${accessibleText}`">
    <span v-if="showSender && message.senderName" class="norato-chat-message__sender">{{ message.senderName }}</span>
    <div class="norato-chat-message__bubble">
      <blockquote v-if="message.type === 'reply' && message.replyTo" class="norato-chat-message__reply"><b>{{ message.replyTo.sender }}</b><span>{{ message.replyTo.text }}</span></blockquote>
      <p v-if="message.type === 'text' || message.type === 'reply'">{{ message.text }}</p>
      <img v-else-if="message.type === 'image' && message.imageSrc" class="norato-chat-message__image" :src="message.imageSrc" :alt="message.imageAlt || ''" />
      <a v-else-if="message.type === 'file'" class="norato-chat-message__file" :href="message.fileHref || undefined" :aria-disabled="!message.fileHref" @click="!message.fileHref && $event.preventDefault()"><span class="norato-chat-message__file-icon" aria-hidden="true">PDF</span><span><b>{{ message.fileName || 'فایل پیوست' }}</b><small>{{ message.fileSize }}</small></span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v11m0 0 4-4m-4 4-4-4M5 18v2h14v-2" /></svg></a>
      <div v-else-if="message.type === 'voice'" class="norato-chat-message__voice"><button type="button" :aria-label="`پخش ${accessibleText}`" @click="emit('play', message)"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 5 11 7-11 7z" /></svg></button><span class="norato-chat-message__wave" aria-hidden="true"><i v-for="(height,index) in [35,65,48,80,42,72,30,60,45,76,34,56,38,68,32,54,42,72,30,60]" :key="index" :style="{ '--wave-height': `${height}%` }" /></span><small>{{ message.voiceDuration || '00:00' }}</small></div>
      <footer v-if="message.time || (message.sender === 'outgoing' && message.read !== undefined)" class="norato-chat-message__meta"><time v-if="message.time" :datetime="message.dateTime">{{ message.time }}</time><span v-if="message.sender === 'outgoing' && message.read" class="norato-chat-message__read" aria-label="خوانده شده">✓✓</span></footer>
    </div>
  </article>
</template>
