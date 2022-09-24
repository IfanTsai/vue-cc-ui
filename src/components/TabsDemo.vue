<script setup lang="ts">
import Tabs from '@/lib/Tabs.vue'
import Tab from '@/lib/Tab.vue'
import { ref } from 'vue'

const selected = ref('tab1')
</script>

<template>
  <h1>示例1</h1>
  <!-- <Tabs :selected="selected" @update:selected="selected = $event"> -->
  <Tabs v-model:selected="selected">
    <Tab title="tab1">内容一</Tab>
    <Tab title="tab2">内容二</Tab>
    <Tab title="tab3">内容三</Tab>
  </Tabs>
</template>
