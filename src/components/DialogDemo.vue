<script setup lang="ts">
import Dialog from '@/lib/Dialog.vue'
import Button from '@/lib/Button.vue'
import { ref } from 'vue'
import { openDialog } from '@/lib/dialog'

const visiable = ref(false)

const toggle = () => {
  visiable.value = !visiable.value
}

const showDailog = () => {
  openDialog({
    title: '提示',
    content: '你确定要删除这个文件吗？',
    ok() {
      console.log('ok, open file')
      return true
    },
    cancel() {
      console.log('cancel')
    },
  })
}

const ok = () => {
  console.log('ok')
  return true
}

const cancel = () => {
  console.log('cancel')
}
</script>

<template>
  <h1>示例1</h1>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visiable="visiable" :ok="ok" :cancel="cancel">
    <template v-slot:title>
      <h3>Title</h3>
    </template>
    <template v-slot:content>
      <div>line 1</div>
      <div>line 2</div>
    </template>
  </Dialog>
  <h1>示例2</h1>
  <Button @click="showDailog">show</Button>
</template>
