import Vue from 'vue'
import './plugins/fontawesome'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = true

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
