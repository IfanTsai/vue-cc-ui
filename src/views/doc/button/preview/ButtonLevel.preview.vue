<preview>不同等级示例</preview>

<script setup lang="ts">
import Button from '@/lib/button/index.vue'
</script>

<template>
  <div>
    <Button theme="button">noraml</Button>
    <Button theme="button" level="main">main</Button>
    <Button theme="button" level="danger">danger</Button>
  </div>

  <div>
    <Button theme="link">noraml</Button>
    <Button theme="link" level="main">main</Button>
    <Button theme="link" level="danger">danger</Button>
  </div>

  <div>
    <Button theme="text">noraml</Button>
    <Button theme="text" level="main">main</Button>
    <Button theme="text" level="danger">danger</Button>
  </div>
</template>
