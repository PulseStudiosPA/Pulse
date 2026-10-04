import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { initI18n } from './i18n'
import { vReveal } from './directives/reveal'
import { vSpotlight } from './directives/spotlight'

initI18n()

const app = createApp(App)
app.directive('reveal', vReveal)
app.directive('spotlight', vSpotlight)
app.mount('#app')
