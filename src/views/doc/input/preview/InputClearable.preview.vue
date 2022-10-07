<preview>可一键清空示例</preview>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <cc-input placeholder="请输入 ..." v-model="value" clearable></cc-input>
</template>
