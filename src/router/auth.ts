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
        path: 'forgot-password',
        name: 'forgot-password',
        component: () => import('../pages/auth/ForgotPassword.vue')
      }
    ]
  }

]
export default routes
