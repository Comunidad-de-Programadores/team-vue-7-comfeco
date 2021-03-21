import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import firebase from '../firebase/firebaseapp'
import AuthRoutes from './auth'
import auth from '@/auth/auth'
import { component } from 'vue/types/umd'
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../pages/Home.vue')
  },
  {
    path: '/fill-groups',
    component: () => import(/* webpackChunkName: "dashboard" */ '../pages/FillGroupsPage.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '../pages/Dashboard.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/my-profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "dashboard" */ '../pages/ProfilePage.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/my-profile/edit',
    name: 'edit-profile',
    component: () => import(/* webpackChunkName: "dashboard" */ '../pages/EditProfilePage.vue'),
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
  const user = await getCurrentUser()
  // if routes requires auth but user not loged in rediret to log
  if (requiresAuth && !user) {
    next({ name: 'login' })
  }
  // if route requires not auth but user is log in redirect to dashboard
  if (requiresNoAuth && user) {
    next({ name: 'dashboard' })
  }
  next()
})

export default router
