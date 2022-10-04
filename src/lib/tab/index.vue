<script setup lang="ts">
defineProps<{
  title: String
}>()
</script>

<script lang="ts">
export default {
  name: 'cc-ui-tab',
}
</script>

<template>
  <div>
    <slot />
  </div>
</template>
