<preview>disabled 示例</preview>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <cc-input placeholder="请输入 ..." v-model="value" disabled></cc-input>
</template>
