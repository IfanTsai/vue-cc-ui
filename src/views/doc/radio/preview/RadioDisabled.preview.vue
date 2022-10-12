<preview>disabled 示例</preview>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('Option 1')
</script>

<template>
  <cc-radio-group v-model="value">
    <cc-radio label="Option 1" disabled></cc-radio>
    <cc-radio label="Option 2" disabled></cc-radio>
    <cc-radio label="Option 3"></cc-radio>
  </cc-radio-group>
</template>
