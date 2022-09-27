<script setup lang="ts">
import Preview from '@/components/Preview.vue'
import ButtonNormal from './preview/ButtonNormal.preview.vue'
import ButtonSize from './preview/ButtonSize.preview.vue'
import ButtonLevel from './preview/ButtonLevel.preview.vue'
import ButtonDisabled from './preview/ButtonDisabled.preview.vue'
import ButtonLoading from './preview/ButtonLoading.preview.vue'
</script>

<template>
  <div>
    <h1>Button 组件示例</h1>
    <Preview :component="ButtonNormal"></Preview>
    <Preview :component="ButtonSize"></Preview>
    <Preview :component="ButtonLevel"></Preview>
    <Preview :component="ButtonDisabled"></Preview>
    <Preview :component="ButtonLoading"></Preview>
  </div>
</template>
