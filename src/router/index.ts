import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import firebase from '../firebase/firebaseapp'
import AuthRoutes from './auth'
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../pages/Home.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '../pages/Dashboard.vue'),
    meta: {
      requiresAuth: true
    }
  },
  ...AuthRoutes,
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../pages/Login.vue')
  },
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
  if (requiresAuth && !await getCurrentUser()) {
    next('/')
  } else {
    next()
  }
})

export default router
