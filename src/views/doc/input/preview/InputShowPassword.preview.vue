<preview>显示/隐藏密码示例</preview>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <cc-input
    type="password"
    placeholder="请输入 ..."
    v-model="value"
    show-password
  ></cc-input>
</template>
