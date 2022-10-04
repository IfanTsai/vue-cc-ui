<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    default: '1em',
  },
})

const iconName = computed(() => `#icon-${props.name}`)
</script>

<template>
  <svg class="icon" :style="{ width: size, height: size }">
    <use :xlink:href="iconName"></use>
  </svg>
</template>
