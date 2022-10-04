import Doc from '@/views/Doc.vue'
import Home from '@/views/Home.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { docRoutes } from './doc'

const router = createRouter({
  //history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/doc',
      redirect: '/doc/intro',
      name: 'doc',
      component: Doc,
      children: docRoutes,
    },
  ],
})

export default router
