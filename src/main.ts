import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import { router } from './routes'

import './reset.css'

import PrimeVue from 'primevue/config'


const pinia = createPinia()

createApp(App)
    .use(PrimeVue, {
        unstyled: true
    })
    .use(pinia)
    .use(router)
    .mount('#app')
