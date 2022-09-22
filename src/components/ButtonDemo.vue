<script setup lang="ts">
import Button from '@/lib/Button.vue'
</script>

<template>
  <h1>示例1</h1>
  <div class="demo">
    <Button>button</Button>
    <Button theme="button">button</Button>
    <Button theme="link">link</Button>
    <Button theme="text">text</Button>
  </div>
  <h1>示例2</h1>
  <div class="demo">
    <Button size="small">small</Button>
    <Button size="medium">medium</Button>
    <Button size="large">large</Button>
  </div>
  <div class="demo">
    <Button theme="link" size="small">small</Button>
    <Button theme="link" size="medium">medium</Button>
    <Button theme="link" size="large">large</Button>
  </div>
  <div class="demo">
    <Button theme="text" size="small">small</Button>
    <Button theme="text" size="medium">medium</Button>
    <Button theme="text" size="large">large</Button>
  </div>
  <h1>示例3</h1>
  <div class="demo">
    <Button theme="button">noraml</Button>
    <Button theme="button" level="main">main</Button>
    <Button theme="button" level="danger">danger</Button>
  </div>
  <div class="demo">
    <Button theme="link">noraml</Button>
    <Button theme="link" level="main">main</Button>
    <Button theme="link" level="danger">danger</Button>
  </div>
  <div class="demo">
    <Button theme="text">noraml</Button>
    <Button theme="text" level="main">main</Button>
    <Button theme="text" level="danger">danger</Button>
  </div>
  <h1>示例3</h1>
  <div class="demo">
    <Button disabled>disabled</Button>
    <Button theme="button" disabled>disabled</Button>
    <Button theme="link" disabled>disabled</Button>
    <Button theme="text" disabled>disabled</Button>
  </div>
  <h1>示例4</h1>
  <div class="demo">
    <Button loading>loading</Button>
    <Button>loaded</Button>
  </div>
</template>

<style lang="scss" scoped>
.demo {
  margin-bottom: 5px;
}
</style>
