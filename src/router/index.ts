import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Doc from '@/views/Doc.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/doc',
      name: 'doc',
      component: Doc,
      children: [
        {
          path: '',
          name: 'doc',
          redirect: '/doc/intro',
        },
        {
          path: 'intro',
          name: 'introduction',
          component: () => import('@/markdown/intro.md'),
        },
        {
          path: 'install',
          name: 'install',
          component: () => import('@/markdown/install.md'),
        },
        {
          path: 'get-started',
          name: 'get-started',
          component: () => import('@/markdown/get-started.md'),
        },
        {
          path: 'switch',
          name: 'switch',
          component: () => import('@/views/doc/switch/index.vue'),
        },
        {
          path: 'button',
          name: 'button',
          component: () => import('@/views/doc/button/index.vue'),
        },
        {
          path: 'dialog',
          name: 'dialog',
          component: () => import('@/views/doc/dialog/index.vue'),
        },
        {
          path: 'tabs',
          name: 'tabs',
          component: () => import('@/views/doc/tabs/index.vue'),
        },
      ],
    },
  ],
})

export default router
