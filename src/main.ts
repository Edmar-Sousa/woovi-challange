import { createApp } from 'vue'
import App from './App.vue'

import './reset.css'

import PrimeVue from 'primevue/config'



createApp(App)
    .use(PrimeVue, {
        unstyled: true
    })
    .mount('#app')
