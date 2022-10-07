<preview>textarea 示例</preview>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <cc-input type="textarea" placeholder="请输入 ..." v-model="value"></cc-input>
</template>
