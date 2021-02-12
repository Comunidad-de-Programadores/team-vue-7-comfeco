import { RouteConfig } from 'vue-router'

const routes: Array<RouteConfig> = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/auth/Login.vue')
  }
]
export default routes
