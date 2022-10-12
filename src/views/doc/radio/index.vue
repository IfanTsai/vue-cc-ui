<script setup lang="ts">
import Preview from '@/components/Preview.vue'
import RadioNormal from './preview/RadioNormal.preview.vue'
import RadioGroup from './preview/RadioGroup.preview.vue'
import RadioDisabled from './preview/RadioDisabled.preview.vue'
</script>

<template>
  <h1>Radio 组件示例</h1>
  <Preview :component="RadioNormal"></Preview>
  <Preview :component="RadioGroup"></Preview>
  <Preview :component="RadioDisabled"></Preview>
</template>

<style lang="scss" scoped></style>
