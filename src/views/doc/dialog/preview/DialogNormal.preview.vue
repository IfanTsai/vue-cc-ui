<preview>基础示例</preview>

<script setup lang="ts">
import { ref } from 'vue'

const visiable = ref(false)

const toggle = () => (visiable.value = !visiable.value)
const ok = () => true
const cancel = () => {}
</script>

<template>
  <cc-button @click="toggle">toggle</cc-button>
  <cc-dialog v-model:visiable="visiable" :ok="ok" :cancel="cancel">
    <template v-slot:title>
      <h3>Title</h3>
    </template>
    <template v-slot:content>
      <div>line 1</div>
      <div>line 2</div>
    </template>
  </cc-dialog>
</template>
