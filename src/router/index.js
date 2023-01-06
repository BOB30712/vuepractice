import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/LogIn.vue'),
    children: [
      {
        path: 'comptest',
        name: 'comptest',
        component: () => import(/* webpackChunkName: "login" */ '../views/CompTest2.vue')
      },
      {
        path: 'comptest2',
        name: 'comptest2',
        components: {
          default: () => import(/* webpackChunkName: "login" */ '../views/CompTest3.vue'),
          CompTest4: () => import(/* webpackChunkName: "login" */ '../views/CompTest4.vue')
        }
      }
    ]
  },
  {
    path: '/userpage',
    name: 'userpage',
    component: () => import(/* webpackChunkName: "userpage" */ '../views/UserPage.vue')
  },
  {
    path: '/axiospage',
    name: 'axiospage',
    component: () => import(/* webpackChunkName: "userpage" */ '../views/AxiosPage.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
