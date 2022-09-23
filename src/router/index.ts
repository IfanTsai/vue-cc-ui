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
          path: 'switch',
          name: 'switch',
          component: import('@/components/SwitchDemo.vue'),
        },
        {
          path: 'button',
          name: 'button',
          component: import('@/components/ButtonDemo.vue'),
        },
        {
          path: 'dialog',
          name: 'dialog',
          component: import('@/components/DialogDemo.vue'),
        },
      ],
    },
  ],
})

export default router
