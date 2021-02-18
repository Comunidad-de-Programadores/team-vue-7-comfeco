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
        component: () => import('../pages/auth/Login.vue'),
        meta: {
          requiresNoAuth: true
        }
      },
      {
        path: 'forgot-password',
        name: 'forgot-password',
        component: () => import('../pages/auth/ForgotPassword.vue'),
        meta: {
          requiresNoAuth: true
        }
      },
      {
        path: 'reset-password',
        name: 'reset-password',
        component: () => import('../pages/auth/ResetPassword.vue'),
        meta: {
          requiresNoAuth: true
        }
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('../pages/auth/Register.vue'),
        meta: {
          requiresNoAuth: true
        }
      }
    ]
  }
]
export default routes
