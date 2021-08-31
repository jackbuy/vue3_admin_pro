import { createApp } from 'vue'
import router from './router'
import store from './store'
import 'element-plus/dist/index.css'

import App from './App'

const app = createApp(App)
app.config.globalProperties.$ELEMENT = { size: 'mini', zIndex: 3000 }
app.use(store)
app.use(router)
app.mount('#app')
