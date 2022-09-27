<script setup lang="ts">
import Preview from '@/components/Preview.vue'
import SwitchNoraml from './preview/SwitchNoraml.preview.vue'
import SwitchDisabled from './preview/SwitchDisabled.preview.vue'
</script>

<template>
  <div>
    <h1>Switch 组件示例</h1>
    <Preview :component="SwitchNoraml"></Preview>
    <Preview :component="SwitchDisabled"></Preview>
  </div>
</template>
