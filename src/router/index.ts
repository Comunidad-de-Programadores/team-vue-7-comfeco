import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import firebase from '../firebase/firebaseapp'
import AuthRoutes from './auth'
import auth from '@/auth/auth'
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../pages/Home.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '../pages/Dashboard.vue'),
    meta: {
      requiresAuth: true
    }
  },
  ...AuthRoutes,
  {
    path: '*',
    name: 'not-found',
    component: () => import(/* webpackChunkName: "login" */ '../pages/404.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      unsubscribe()
      resolve(user)
    }, reject)
  })
}

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const requiresNoAuth = to.matched.some(record => record.meta.requiresNoAuth)
  console.log(requiresAuth, requiresNoAuth)
  const user = await getCurrentUser()

  if (requiresAuth && !user) {
    next({ name: 'login' })
  }
  if (requiresNoAuth && user) {
    next({ name: 'dashboard' })
  }
  next()
})

export default router
