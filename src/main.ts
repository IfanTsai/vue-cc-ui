import 'prismjs/themes/prism.min.css'
import '@/lib/style/index.scss'
import '@/assets/main.scss'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
