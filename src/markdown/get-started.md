# 开始
请先[安装](#/doc/install)本组件库。 

然后在你的项目中引入组件库和样式

## 完整导入

```ts
// main.ts
import { createApp } from 'vue'
import App from './App.vue'

import ccUI from '@ifan_tsai/cc-ui'
import '@ifan_tsai/cc-ui/dist/lib/style.css'

const app = createApp(App)

app.use(ccUI)        // cc-ui 在此作为插件安装 
app.mount('#app')
```

## 手动导入组件

```ts
import { CcButton, CcTabs, CcSwitch, CcDialog } from '@ifan_tsai/cc-ui'
import '@ifan_tsai/cc-ui/dist/lib/style.css'
```

就可以使用 CC UI 提供的组件了。

  
## Vue 单文件组件

代码示例：

```html
<script setup lang="ts">
import { Button } from '@ifan_tsai/cc-ui'
</script>

<template>
  <Button>按钮</Button>
</template>
```