<script setup lang="ts">
import Preview from '@/components/Preview.vue'
import CheckboxDisalbe from './preview/CheckboxDisable.preview.vue'
import CheckboxGroup from './preview/CheckboxGroup.preview.vue'
import CheckboxNormal from './preview/CheckboxNormal.preview.vue'
</script>

<template>
  <h1>Checkbox 组件示例</h1>
  <Preview :component="CheckboxNormal"></Preview>
  <Preview :component="CheckboxGroup"></Preview>
  <Preview :component="CheckboxDisalbe"></Preview>
</template>

<style lang="scss" scoped></style>
