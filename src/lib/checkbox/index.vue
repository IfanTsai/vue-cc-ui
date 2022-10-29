<script setup lang="ts">
import { computed, inject } from 'vue'

const props = defineProps({
  modelValue: {
    // Array for multiple selection
    type: [Boolean, Array],
  },
  label: {
    type: String,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:modelValue'])
const checkboxGroup = inject<any>('checkboxGroup', null)

const isInGroup = () => checkboxGroup !== null

const inputValue = computed({
  get() {
    return isInGroup() ? checkboxGroup.modelValue : props.modelValue
  },
  set(value) {
    const emitFunc = isInGroup() ? checkboxGroup.$emit : emit
    emitFunc('update:modelValue', value)
  },
})

const isChecked = computed(() => {
  if (isInGroup()) {
    return checkboxGroup.modelValue.includes(props.label)
  } else if (typeof props.modelValue === 'boolean') {
    return props.modelValue
  } else {
    return props.modelValue?.includes(props.label)
  }
})
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
  name: 'cc-ui-checkbox',
}
</script>

<template>
  <label class="cc-checkbox" :class="{ 'cc-checkbox-disabled': disabled }">
    <span class="cc-checkbox-outer">
      <span
        class="cc-checkbox-inner"
        :class="{ 'cc-checkbox-checked': isChecked }"
      ></span>
      <input
        type="checkbox"
        class="cc-checkbox-native"
        v-bind="$attrs"
        :value="label"
        :disabled="disabled"
        v-model="inputValue"
      />
    </span>

    <span class="cc-checkbox-label">
      {{ label }}
    </span>
  </label>
</template>

<style lang="scss">
$checkbox-input-size: 14px;
$checkbox-input-border-color: #dcdfe6;
$checkbox-input-background-color: white;
$checkbox-input-border-color-checked: skyblue;
$checkbox-input-background-color-checked: skyblue;
$checkbox-input-inner-width-checked: 3px;
$checkbox-input-inner-height-checked: 7px;
$checkbox-color-disabled: #a8abb2;
$checkbox-background-color-disabled: #a8abb2;

.cc-checkbox {
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
    border: 1px solid $checkbox-input-border-color;
    width: $checkbox-input-size;
    height: $checkbox-input-size;
    background-color: $checkbox-input-background-color;
    position: relative;
    cursor: pointer;
    display: inline-block;
    box-sizing: border-box;
    border-radius: 2px;
    transition: border-color 250ms cubic-bezier(0.71, -0.46, 0.29, 1.46),
      background-color 250ms cubic-bezier(0.71, -0.46, 0.29, 1.46);
    vertical-align: middle;

    &::after {
      width: $checkbox-input-inner-width-checked;
      height: $checkbox-input-inner-height-checked;
      content: '';
      border: 1px solid $checkbox-input-background-color;
      border-left: 0;
      border-top: 0;
      background-color: transparent;
      position: absolute;
      left: 4px;
      top: 1px;
      transform: rotate(45deg) scaleY(0);
      transform-origin: center;
      transition: transform 250ms ease-in;
    }
  }

  &-checked {
    border-color: $checkbox-input-border-color-checked;
    background: $checkbox-input-background-color-checked;

    &::after {
      transform: rotate(45deg) scaleY(1);
    }
  }

  &-native {
    display: none;
  }

  &-label {
    margin-left: 4px;
  }

  &-disabled {
    .cc-checkbox-label {
      color: $checkbox-color-disabled;
      cursor: not-allowed;
    }

    .cc-checkbox-inner {
      border-color: $checkbox-color-disabled;
      background-color: $checkbox-background-color-disabled;
    }
  }
}
</style>
