<script setup lang="ts">
import Switch from '@/lib/Switch.vue'
import { ref } from 'vue'

const value = ref(false)
</script>

<template>
  <Switch v-model:value="value" />
</template>
