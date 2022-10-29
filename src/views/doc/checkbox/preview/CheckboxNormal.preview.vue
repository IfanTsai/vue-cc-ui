<preview>基础示例</preview>

<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref(true)
const value2 = ref(false)
</script>

<template>
  <cc-checkbox label="Option 1" v-model="value1"></cc-checkbox>
  <cc-checkbox label="Option 2" v-model="value2"></cc-checkbox>
</template>
