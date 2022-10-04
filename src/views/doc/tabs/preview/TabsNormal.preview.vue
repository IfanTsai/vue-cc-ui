<preview>基础示例</preview>

<script setup lang="ts">
import Tab from '@/lib/tab/index.vue'
import Tabs from '@/lib/tabs/index.vue'
import { ref } from 'vue'

const selected = ref('tab1')
</script>

<template>
  <Tabs v-model:selected="selected">
    <Tab title="tab1">内容一</Tab>
    <Tab title="tab2">内容二</Tab>
    <Tab title="tab3">内容三</Tab>
  </Tabs>
</template>
