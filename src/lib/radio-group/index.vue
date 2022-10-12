<script setup lang="ts">
import Radio from '@/lib/radio/index.vue'
import { useSlots } from 'vue'

const slots = useSlots()
slots.default?.()?.forEach((vnode: any) => {
  if (vnode.type.name !== Radio.name) {
    throw new Error('RadioGroup only accepts Radio as children')
  }
})

defineProps({
  modelValue: {
    type: [String, Number],
  },
})

defineEmits(['update:modelValue'])
</script>

<script lang="ts">
export default {
  provide() {
    return {
      radioGroup: this,
    }
  },
}
</script>

<template>
  <div>
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped></style>
