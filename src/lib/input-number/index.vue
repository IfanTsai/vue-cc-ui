<script setup lang="ts">
import Icon from '@/lib/icon/index.vue'
import Input from '@/lib/input/index.vue'
import { computed, nextTick, onMounted, useAttrs } from 'vue'

import 'https://at.alicdn.com/t/c/font_3669930_ww6vueyc8r.js'

const attrs = useAttrs()

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: 0,
  },
  step: {
    type: Number,
    default: 1,
  },
  max: {
    type: Number,
    default: Infinity,
  },
  min: {
    type: Number,
    default: -Infinity,
  },
  precision: {
    type: Number,
    default: 0,
  },
})

const emit = defineEmits(['update:modelValue'])

const inputValue = computed({
  get() {
    return props.modelValue
  },
  async set(value: string | number) {
    const { max, min } = props
    const limits = [
      {
        validate: (value: string | number) => {
          return /^-?\d+(\.\d+)?$/.test(String(value))
        },
        result: value,
      },
      {
        validate: (value: string | number) => isNaN(Number(value)),
        result: inputValue.value,
      },
      {
        validate: (value: string | number) => Number(value) > max,
        result: max,
      },
      {
        validate: (value: string | number) => Number(value) < min,
        result: min,
      },
      {
        validate: (value: string | number) => true,
        result: value,
      },
    ]

    value = limits.find((limit) => limit.validate(value))!.result

    emit('update:modelValue', value.toString + '#') // fake update to trigger re-render
    await nextTick()
    emit('update:modelValue', value)
  },
})

const increaseDisabled = computed(() => {
  return attrs.disabled !== undefined || props.modelValue >= props.max
})

const decreaseDisabled = computed(() => {
  return attrs.disabled !== undefined || props.modelValue <= props.min
})

const clickToChangeNumber = (type: string) => {
  if (type === 'increase' && !increaseDisabled.value) {
    inputValue.value = (Number(inputValue.value) + props.step).toFixed(
      props.precision
    )
  } else if (type === 'decrease' && !decreaseDisabled.value) {
    inputValue.value = (Number(inputValue.value) - props.step).toFixed(
      props.precision
    )
  }
}

const changeInputValueToFixed = () => {
  inputValue.value = Number(props.modelValue).toFixed(props.precision)
}

onMounted(() => {
  changeInputValueToFixed()
})
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<template>
  <div class="cc-input-number">
    <Input
      v-model="inputValue"
      v-bind="$attrs"
      @change="changeInputValueToFixed"
      center
    >
      <template #prefix>
        <div
          class="cc-input-number-icon"
          :class="{ 'cc-input-number-icon-disabled': decreaseDisabled }"
          @click="clickToChangeNumber('decrease')"
        >
          <Icon name="minus" />
        </div>
      </template>
      <template #suffix>
        <div
          class="cc-input-number-icon"
          :class="{ 'cc-input-number-icon-disabled': increaseDisabled }"
          @click="clickToChangeNumber('increase')"
        >
          <Icon name="plus" />
        </div>
      </template>
    </Input>
  </div>
</template>

<style lang="scss">
.cc-input-number {
  &-icon {
    cursor: pointer;
    opacity: 0.6;
    &:not(&-disabled):hover {
      opacity: 1;
    }

    &-disabled {
      cursor: not-allowed !important;
      opacity: 0.3;
    }
  }
}
</style>
