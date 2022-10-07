<preview>带前后缀示例</preview>

<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
</script>

<template>
  <div>
    <cc-input placeholder="请输入 ..." v-model="value1">
      <template v-slot:prefix>https://</template>
    </cc-input>
  </div>

  <div class="container">
    <cc-input placeholder="请输入 ..." v-model="value2">
      <template v-slot:suffix>.com</template>
    </cc-input>
  </div>

  <div class="container">
    <cc-input placeholder="请输入 ..." v-model="value3">
      <template v-slot:prefix>https://</template>
      <template v-slot:suffix>.com</template>
    </cc-input>
  </div>

  <div class="container">
    <cc-input placeholder="请输入 ..." v-model="value3">
      <template v-slot:prefix>
        <cc-icon name="vue"></cc-icon>
      </template>
    </cc-input>
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin-top: 16px;
}
</style>
