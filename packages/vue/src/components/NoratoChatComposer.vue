<script setup lang="ts">
import '../chat.css'
export type NoratoChatComposerState = 'default' | 'typing' | 'recording'
const props = withDefaults(defineProps<{ placeholder?: string; disabled?: boolean; state?: NoratoChatComposerState; dir?: 'rtl' | 'ltr'; accept?: string }>(), { placeholder: 'پیامت را بنویس…', disabled: false, state: 'default', dir: 'rtl', accept: '*' })
const emit = defineEmits<{ send: [text: string]; attach: [file: File]; 'update:state': [state: NoratoChatComposerState]; record: [recording: boolean] }>()
const text = defineModel<string>({ default: '' })
function send() { const value = text.value.trim(); if (!value || props.disabled || props.state === 'recording') return; emit('send', value); text.value = ''; emit('update:state', 'default') }
function toggleRecording() { const recording = props.state !== 'recording'; emit('update:state', recording ? 'recording' : 'default'); emit('record', recording) }
function attach(event: Event) { const input = event.target as HTMLInputElement; const file = input.files?.[0]; if (file) emit('attach', file); input.value = '' }
</script>
<template>
  <form class="norato-chat-composer" :data-state="state" :dir="dir" @submit.prevent="send"><label class="norato-chat-composer__attach" :class="{ 'is-disabled': disabled }"><input type="file" :accept="accept" :disabled="disabled" aria-label="افزودن فایل" @change="attach" /><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m20 11.5-7.8 7.8a5 5 0 0 1-7.1-7.1l8.5-8.5a3.5 3.5 0 0 1 5 5l-8.5 8.5a2 2 0 0 1-2.8-2.8l7.8-7.8" /></svg></label><textarea v-model="text" rows="1" :placeholder="placeholder" :disabled="disabled || state === 'recording'" :aria-label="placeholder" @input="text.length ? emit('update:state','typing') : emit('update:state','default')" @keydown.enter.exact.prevent="send" /><button class="norato-chat-composer__record" type="button" :disabled="disabled" :aria-label="state === 'recording' ? 'پایان ضبط' : 'شروع ضبط صدا'" :aria-pressed="state === 'recording'" @click="toggleRecording"><svg v-if="state === 'recording'" viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2" /></svg><svg v-else viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="3" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3m-4 0h8" /></svg></button><button v-if="state !== 'recording'" class="norato-chat-composer__send" type="submit" :disabled="disabled || !text.trim()" aria-label="ارسال پیام"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 11 18-8-8 18-2-8zM11 13l10-10" /></svg></button></form>
</template>
