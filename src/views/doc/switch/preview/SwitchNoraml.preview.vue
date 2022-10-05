<preview>基础示例</preview>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref(false)
</script>

<template>
  <cc-switch v-model="value" />
</template>
