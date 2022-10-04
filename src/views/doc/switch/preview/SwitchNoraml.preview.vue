<preview>基础示例</preview>

<script setup lang="ts">
import Switch from '@/lib/switch/index.vue'
import { ref } from 'vue'

const value = ref(false)
</script>

<template>
  <Switch v-model:value="value" />
</template>
