import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/top',
    name: 'top',
    // route level code-splitting this generates a separate chunk (about.[hash].js)
    // for this route which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */
      '../views/Top.vue'),
  },
  {
    path: '/hot',
    name: 'hot',
    component: () => import('../views/Hot.vue'),
  },
  {
    path: '/rising',
    name: 'rising',
    component: () => import('../views/Rising.vue'),
  },
  {
    path: '/new',
    name: 'new',
    component: () => import('../views/New.vue'),
  },
]

const router = new VueRouter({ routes })

export default router
