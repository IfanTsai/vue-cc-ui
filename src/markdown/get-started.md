# 开始
请先[安装](/doc/install)本组件库。 

然后在你的项目中引入组件库和样式

```ts
import { Button, Tabs, Switch, Dialog } from '@ifan_tsai/cc-ui'
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