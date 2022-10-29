<preview>checkbox group 示例</preview>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref(['Option 1'])
</script>

<template>
  <cc-checkbox-group v-model="value">
    <cc-checkbox label="Option 1"></cc-checkbox>
    <cc-checkbox label="Option 2"></cc-checkbox>
    <cc-checkbox label="Option 3" disabled></cc-checkbox>
  </cc-checkbox-group>
</template>
