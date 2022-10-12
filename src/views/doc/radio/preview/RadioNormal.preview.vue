<preview>基础示例</preview>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('Option 1')
</script>

<template>
  <cc-radio label="Option 1" v-model="value"></cc-radio>
  <cc-radio label="Option 2" v-model="value"></cc-radio>
  <cc-radio label="Option 3" v-model="value"></cc-radio>
</template>
