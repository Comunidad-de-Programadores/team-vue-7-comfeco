import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import firebase from 'firebase/app'
import firebaseconfig from './config/firebaseconfig'
Vue.config.productionTip = false
Vue.use(Buefy)

firebase.initializeApp(firebaseconfig)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
