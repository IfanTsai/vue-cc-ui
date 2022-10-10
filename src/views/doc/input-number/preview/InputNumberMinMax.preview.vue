<preview>限制最小值最大值示例</preview>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref(1)
</script>

<template>
  <div class="input-number-container">
    <cc-input-number v-model="value" :min="1" :max="10"> </cc-input-number>
  </div>
</template>

<style lang="scss" scoped>
.input-number-container {
  width: 160px;
}
</style>
