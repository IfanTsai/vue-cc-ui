import type { RouteRecordRaw } from 'vue-router'

interface DocMenu {
  [key: string]: RouteRecordRaw[]
}

const docMenus: DocMenu = {
  文档: [
    {
      path: 'intro',
      name: '介绍',
      component: () => import('@/markdown/intro.md'),
    },
    {
      path: 'install',
      name: '安装',
      component: () => import('@/markdown/install.md'),
    },
    {
      path: 'get-started',
      name: '开始',
      component: () => import('@/markdown/get-started.md'),
    },
  ],
  组件列表: [
    {
      path: 'switch',
      name: 'Switch',
      component: () => import('@/views/doc/switch/index.vue'),
    },
    {
      path: 'button',
      name: 'Button',
      component: () => import('@/views/doc/button/index.vue'),
    },
    {
      path: 'input',
      name: 'Input',
      component: () => import('@/views/doc/input/index.vue'),
    },
    {
      path: 'input-number',
      name: 'Input Number',
      component: () => import('@/views/doc/input-number/index.vue'),
    },
    {
      path: 'icon',
      name: 'Icon',
      component: () => import('@/views/doc/icon/index.vue'),
    },
    {
      path: 'dialog',
      name: 'Dialog',
      component: () => import('@/views/doc/dialog/index.vue'),
    },
    {
      path: 'tabs',
      name: 'Tabs',
      component: () => import('@/views/doc/tabs/index.vue'),
    },

    {
      path: 'transfer',
      name: 'Transfer',
      component: () => import('@/views/doc/transfer/index.vue'),
    },
  ],
}

const docRoutes: RouteRecordRaw[] = []
for (let key in docMenus) {
  docRoutes.push(...docMenus[key])
}

export { docMenus, docRoutes }
