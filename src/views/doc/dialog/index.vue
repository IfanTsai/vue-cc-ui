<script setup lang="ts">
import Preview from '@/components/Preview.vue'
import DialogNormal from './preview/DialogNormal.preview.vue'
import DialogTS from './preview/DialogTS.preview.vue'
</script>

<template>
  <div>
    <h1>Dialog 组件示例</h1>
    <Preview :component="DialogNormal"></Preview>
    <Preview :component="DialogTS"></Preview>
  </div>
</template>
