/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { RouteConfig } from 'vue-router'

const routes: Array<RouteConfig> = [

  {
    path: '/auth',
    component: () => import('../pages/auth/Index.vue'),
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('../pages/auth/Login.vue')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('../pages/auth/Register.vue')
      }
    ]
  }
]
export default routes
