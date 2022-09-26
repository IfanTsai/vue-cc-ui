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
          component: () => import('@/components/SwitchDemo.vue'),
        },
        {
          path: 'button',
          name: 'button',
          component: () => import('@/components/ButtonDemo.vue'),
        },
        {
          path: 'dialog',
          name: 'dialog',
          component: () => import('@/components/DialogDemo.vue'),
        },
        {
          path: 'tabs',
          name: 'tabs',
          component: () => import('@/components/TabsDemo.vue'),
        },
      ],
    },
  ],
})

export default router
