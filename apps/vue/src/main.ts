import { createApp } from 'vue'
import App from './App.vue'
import './styles.css'
import './component-field-visuals.css'
import { enablePersianUiDigits } from './persianDigits'

createApp(App).mount('#app')
enablePersianUiDigits(document.getElementById('app')!)
