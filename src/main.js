import Vue from 'vue'
import App from './App.vue'

import store from './store'
import router from './router'

// 全局注册样式
import '@/assets/css/global.css'
import '@/assets/fonts/iconfont.css'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')