// with polyfills
import 'core-js/stable'

import { createApp } from 'vue'
import { setGlobalOptions } from 'vue-request'
import App from './App.vue'
import router from './router/index'

import 'ant-design-vue/dist/antd.css';

setGlobalOptions({
  manual: false,
})

const app = createApp(App)

app.use(router)

app.mount('#app')