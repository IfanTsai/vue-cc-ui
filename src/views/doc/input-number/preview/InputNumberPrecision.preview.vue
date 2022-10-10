<preview>精度示例</preview>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref(1.0)
</script>

<template>
  <div class="input-number-container">
    <cc-input-number v-model="value" :precision="2"> </cc-input-number>
  </div>
</template>

<style lang="scss" scoped>
.input-number-container {
  width: 160px;
}
</style>
