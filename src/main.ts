import { createApp } from 'vue'
import App from './App.vue'

import { router } from './routes'

import './reset.css'

import PrimeVue from 'primevue/config'



createApp(App)
    .use(PrimeVue, {
        unstyled: true
    })
    .use(router)
    .mount('#app')
