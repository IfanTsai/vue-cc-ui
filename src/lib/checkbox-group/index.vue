<script setup lang="ts">
import Checkbox from '@/lib/checkbox/index.vue'
import { useSlots } from 'vue'

const slots = useSlots()
slots.default?.()?.forEach((vnode: any) => {
  if (vnode.type.name !== Checkbox.name) {
    throw new Error('CheckboxGroup only accepts Checkbox as children')
  }
})

defineProps({
  modelValue: {
    type: Array,
  },
})

defineEmits(['update:modelValue'])
</script>

<script lang="ts">
export default {
  provide() {
    return {
      checkboxGroup: this,
    }
  },
}
</script>

<template>
  <div>
    <slot></slot>
  </div>
</template>
