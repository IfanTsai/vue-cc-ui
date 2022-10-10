<script setup lang="ts">
import Icon from '@/lib/icon/index.vue'
import { computed, onMounted, ref, useSlots } from 'vue'

import 'https://at.alicdn.com/t/c/font_3669930_d8oqpf5u1ol.js'

const slots = useSlots()

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  showPassword: {
    type: Boolean,
    default: false,
  },
  center: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:modelValue'])

const containerClasses = computed(() => {
  return {
    'cc-input-has-prefix': slots.prefix,
    'cc-input-has-suffix': slots.suffix,
  }
})

const inputClasses = computed(() => {
  const { disabled } = props
  return {
    [`cc-input-disabled`]: disabled,
    [`cc-input-center`]: props.center,
  }
})

const inputElement = ref<HTMLInputElement>()
const showPasswordIconName = ref('eye-open')

const toggleShowPassword = () => {
  if (inputElement.value) {
    inputElement.value.type =
      inputElement.value.type === 'password' ? 'text' : 'password'
    showPasswordIconName.value =
      showPasswordIconName.value === 'eye-open' ? 'eye-close' : 'eye-open'
  }
}

onMounted(() => {
  if (props.showPassword && inputElement.value) {
    inputElement.value.type = 'password'
  }
})
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<template>
  <div class="cc-input" :class="containerClasses">
    <template v-if="type === 'textarea'">
      <textarea
        class="cc-input-textarea"
        :class="inputClasses"
        v-bind="$attrs"
        @input="
          emit('update:modelValue', ($event.target as HTMLInputElement).value)
        "
        :value="modelValue"
        :disabled="disabled"
      >
      </textarea>
    </template>

    <template v-else>
      <div v-if="$slots.prefix" class="cc-input-prefix">
        <slot name="prefix" />
      </div>

      <input
        class="cc-input-input"
        :class="inputClasses"
        v-bind="$attrs"
        @input="
          emit('update:modelValue', ($event.target as HTMLInputElement).value)
        "
        :type="type"
        :value="modelValue"
        :disabled="disabled"
        ref="inputElement"
      />

      <div class="cc-input-icon-suffix">
        <span
          v-if="clearable && modelValue"
          class="cc-input-icon-suffix-item"
          @click="emit('update:modelValue', '')"
        >
          <Icon name="clear"></Icon>
        </span>

        <span
          v-if="showPassword && modelValue"
          class="cc-input-icon-suffix-item"
          @click="toggleShowPassword"
        >
          <Icon :name="showPasswordIconName"></Icon>
        </span>
      </div>

      <div v-if="$slots.suffix" class="cc-input-suffix">
        <slot name="suffix" />
      </div>
    </template>
  </div>
</template>

<style lang="scss">
$input-padding: 6px;
$input-border-color: #dcdfe6;
$input-border-color-focus: #409eff;
$input-border-color-disabled: #e4e7ed;
$input-border-radius: 4px;
$input-backgorund-color-disabled: #f5f7fa;
$input-color-disabled: #a8abb2;
$input-prefix-suffix-background-color: #f5f7fa;
$input-prefix-suffix-color: #909399;
$input-prefix-suffix-border-color: #dcdfe6;
$input-prefix-suffix-padding: 6px 10px;

.cc-input {
  display: flex;
  width: 100%;
  position: relative;

  &-input {
    flex: 1;
    width: 100%;
    outline: none;
    padding: $input-padding;
    border: 1px solid $input-border-color;
    border-radius: $input-border-radius;

    &:not([disabled]):hover {
      border-color: $input-border-color-focus;
    }
  }

  &-textarea {
    @extend .cc-input-input;
  }

  &-disabled {
    background-color: $input-backgorund-color-disabled;
    border-color: $input-border-color-disabled;
    color: $input-color-disabled;
    cursor: not-allowed;

    &::placeholder {
      color: $input-color-disabled;
    }
  }

  &-center {
    text-align: center;
  }

  &-icon-suffix {
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    opacity: 0.5;

    &:hover {
      opacity: 1;
    }

    &-item {
      margin-left: 6px;
    }
  }

  &-prefix,
  &-suffix {
    background-color: $input-prefix-suffix-background-color;
    color: $input-prefix-suffix-color;
    display: flex;
    align-items: center;
    border: 1px solid $input-prefix-suffix-border-color;
    border-radius: 0px;
    padding: $input-prefix-suffix-padding;
    white-space: nowrap;
    width: max-content;
  }

  &-has-prefix &-input {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-left: none;
  }

  &-has-prefix &-prefix {
    border-top-left-radius: $input-border-radius;
    border-bottom-left-radius: $input-border-radius;
  }

  &-has-suffix &-input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: none;
  }

  &-has-prefix &-suffix {
    border-top-right-radius: $input-border-radius;
    border-bottom-right-radius: $input-border-radius;
  }
}
</style>
