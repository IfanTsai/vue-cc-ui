<preview>基础示例</preview>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <cc-input placeholder="请输入 ..." v-model="value"></cc-input>
</template>
