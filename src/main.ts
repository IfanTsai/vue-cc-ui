import '@/assets/main.scss'
import '@/lib/index.scss'
import 'prismjs/themes/prism.min.css'

import ccUI from '@/lib/index'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
const app = createApp(App)

app.use(router).use(ccUI)

app.mount('#app')
