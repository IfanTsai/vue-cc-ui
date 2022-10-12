<script setup lang="ts">
import { computed } from '@vue/reactivity'
import { inject } from 'vue'

const props = defineProps({
  modelValue: {
    type: [String, Number],
  },
  label: {
    type: [String, Number],
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:modelValue'])
const radioGroup = inject<any>('radioGroup', null)

const inputValue = computed({
  get() {
    return radioGroup ? radioGroup.modelValue : props.modelValue
  },
  set(value) {
    const emitFunc = radioGroup ? radioGroup.$emit : emit
    emitFunc('update:modelValue', value)
  },
})
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
  name: 'cc-ui-radio',
}
</script>

<template>
  <label class="cc-radio" :class="{ 'cc-radio-disabled': disabled }">
    <span class="cc-radio-outer">
      <span
        class="cc-radio-inner"
        :class="{ 'cc-radio-checked': inputValue === label }"
      ></span>
      <input
        type="radio"
        class="cc-radio-native"
        :value="label"
        :disabled="disabled"
        v-model="inputValue"
      />
    </span>

    <span class="cc-radio-label">
      {{ label }}
    </span>
  </label>
</template>

<style lang="scss">
$radio-input-size: 14px;
$radio-input-border-color: #dcdfe6;
$radio-input-background-color: white;
$radio-input-border-color-checked: skyblue;
$radio-input-background-color-checked: skyblue;
$radio-input-inner-size-checked: 4px;
$radio-color-disabled: #a8abb2;
$radio-background-color-disabled: #a8abb2;

.cc-radio {
  cursor: pointer;
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }

  &-outer {
    white-space: nowrap;
    vertical-align: middle;
    outline: none;
  }

  &-inner {
    border: 1px solid $radio-input-border-color;
    border-radius: 100%;
    width: $radio-input-size;
    height: $radio-input-size;
    background-color: $radio-input-background-color;
    position: relative;
    cursor: pointer;
    display: inline-block;
    box-sizing: border-box;

    &::after {
      width: $radio-input-inner-size-checked;
      height: $radio-input-inner-size-checked;
      border-radius: 100%;
      background-color: $radio-input-background-color;
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) scale(0);
      transition: transform 250ms ease-in;
    }
  }

  &-checked {
    border-color: $radio-input-border-color-checked;
    background: $radio-input-background-color-checked;

    &::after {
      transform: translate(-50%, -50%) scale(1);
    }
  }

  &-native {
    display: none;
  }

  &-label {
    margin-left: 4px;
  }

  &-disabled {
    .cc-radio-label {
      color: $radio-color-disabled;
      cursor: not-allowed;
    }

    .cc-radio-inner {
      border-color: $radio-color-disabled;
      background-color: $radio-background-color-disabled;
    }
  }
}
</style>
