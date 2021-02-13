import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import auth from './auth'
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../pages/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/About.vue')
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

export default router
