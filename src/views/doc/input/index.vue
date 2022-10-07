<script setup lang="ts">
import Preview from '@/components/Preview.vue'
import InputClearable from './preview/InputClearable.preview.vue'
import InputDisabled from './preview/InputDisabled.preview.vue'
import InputNormal from './preview/InputNormal.preview.vue'
import InputPrefixSuffix from './preview/InputPrefixSuffix.preview.vue'
import InputTextarea from './preview/InputTextarea.preview.vue'
import InputShowPassword from './preview/InputShowPassword.preview.vue'
</script>

<template>
  <div>
    <h1>Input 组件示例</h1>
    <Preview :component="InputNormal"></Preview>
    <Preview :component="InputDisabled"></Preview>
    <Preview :component="InputClearable"></Preview>
    <Preview :component="InputPrefixSuffix"></Preview>
    <Preview :component="InputTextarea"></Preview>
    <Preview :component="InputShowPassword"></Preview>
  </div>
</template>

<style lang="scss" scoped></style>
