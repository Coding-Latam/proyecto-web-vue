import './assets/base.css'

import { createApp } from 'vue'
import App from './App.vue'
import { defineCustomElements } from 'latamcomponents'

createApp(App).mount('#app')

defineCustomElements(window)
