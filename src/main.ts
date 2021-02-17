import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import './vee-validate'
import i18n from './i18n'
Vue.config.productionTip = false
Vue.use(Buefy)

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
