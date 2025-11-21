import '@/assets/main.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { createPinia, PiniaVuePlugin } from "pinia"

Vue.config.productionTip = false
Vue.use(PiniaVuePlugin)
const pinia = createPinia()
new Vue({
  pinia,
  store,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
