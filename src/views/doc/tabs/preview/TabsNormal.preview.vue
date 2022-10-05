<preview>基础示例</preview>

<script setup lang="ts">
import { ref } from 'vue'

const selected = ref('tab1')
</script>

<template>
  <cc-tabs v-model:selected="selected">
    <cc-tab title="tab1">内容一</cc-tab>
    <cc-tab title="tab2">内容二</cc-tab>
    <cc-tab title="tab3">内容三</cc-tab>
  </cc-tabs>
</template>
