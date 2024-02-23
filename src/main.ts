import { createApp } from 'vue'
import Particles from 'vue3-particles'
import ScrollReveal from 'scrollreveal'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

import './style.scss'
import App from './App.vue'
import router from './router/index'

const app = createApp(App)
app.use(vuetify)
app.use(ScrollReveal)
app.use(Particles)
app.use(router)
app.mount('#app')
