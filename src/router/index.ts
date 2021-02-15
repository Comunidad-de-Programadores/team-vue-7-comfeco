import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import auth from './auth'
import firebaseApp from '../firebase/firebaseapp'
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../pages/Home.vue')
  },
  ...auth,
  {
    path: '*',
    component: () => import(/* webpackChunkName: "about" */ '../pages/404.vue')
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)

  if (requiresAuth && !firebaseApp.auth().currentUser) {
    next('/login')
  } else {
    next()
  }
})
export default router
