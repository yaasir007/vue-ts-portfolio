import { createApp } from 'vue'
import Particles from 'vue3-particles'
import ScrollReveal from 'scrollreveal'
import PrimeVue from 'primevue/config'

import 'primeicons/primeicons.css'
import './style.scss'
import App from './App.vue'
import router from './router/index'

import "primevue/resources/themes/saga-blue/theme.css"
import "primevue/resources/primevue.min.css"
import "primeicons/primeicons.css"

const app = createApp(App)
app.use(ScrollReveal)
app.use(Particles)
app.use(router)
app.use(PrimeVue)
app.mount('#app')
