<script setup lang="ts">
import Preview from '@/components/Preview.vue'
import InputNumberDisabled from './preview/InputNumberDisabled.preview.vue'
import InputNumberMinMax from './preview/InputNumberMinMax.preview.vue'
import InputNumberNormal from './preview/InputNumberNormal.preview.vue'
import InputNumberPrecision from './preview/InputNumberPrecision.preview.vue'
import InputNumberStep from './preview/InputNumberStep.preview.vue'
</script>

<template>
  <h1>Input Number 组件示例</h1>
  <Preview :component="InputNumberNormal"></Preview>
  <Preview :component="InputNumberDisabled"></Preview>
  <Preview :component="InputNumberStep"></Preview>
  <Preview :component="InputNumberPrecision"></Preview>
  <Preview :component="InputNumberMinMax"></Preview>
</template>

<style lang="scss" scoped></style>
