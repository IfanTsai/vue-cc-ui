<preview>代码调用示例</preview>

<script setup lang="ts">
import { openDialog } from '@/lib/dialog/dialog'

const showDailog = () => {
  openDialog({
    title: '提示',
    content: '你确定要删除这个文件吗？',
    ok() {
      return true
    },
    cancel() {},
  })
}
</script>

<template>
  <cc-button @click="showDailog">show</cc-button>
</template>
