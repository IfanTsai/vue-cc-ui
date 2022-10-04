<script setup lang="ts">
import { computed } from '@vue/reactivity'

const props = defineProps({
  /**
   * The button theme
   */
  theme: {
    type: String,
    default: 'button',
  },
  /**
   * The button size
   */
  size: {
    type: String,
    default: 'medium',
  },
  /**
   * The button level
   */
  level: {
    type: String,
  },
  /**
   * The button disabled
   */
  disabled: {
    type: Boolean,
    default: false,
  },
  /**
   * The button loading
   */
  loading: {
    type: Boolean,
    default: false,
  },
})

const classes = computed(() => {
  const { theme, size, level } = props
  return {
    [`cc-theme-${theme}`]: theme,
    [`cc-size-${size}`]: size,
    [`cc-level-${level}`]: level,
  }
})
</script>

<template>
  <button class="cc-button" :class="classes" :disabled="disabled">
    <span v-if="loading" class="cc-loading-indicator"></span>
    <slot />
  </button>
</template>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$skyblue: skyblue;
$red: red;
$grey: grey;
$radius: 4px;
.cc-button {
  box-sizing: border-box;
  height: $h;
  width: auto;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: background 250ms;

  & + & {
    margin-left: 8px;
  }

  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }

  &:focus {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }

  &.cc-theme-button {
    &.cc-level-main {
      background: $blue;
      color: white;
      border-color: $blue;
      &:hover,
      &:focus {
        background: darken($blue, 10%);
        border-color: darken($blue, 10%);
      }
    }

    &.cc-level-danger {
      background: $red;
      border-color: $red;
      color: white;
      &:hover,
      &:focus {
        background: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }

    &[disabled] {
      color: $grey;
      cursor: not-allowed;
      &:hover {
        border-color: $grey;
      }
    }
  }

  &.cc-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover,
    &:focus {
      color: lighten($blue, 10%);
    }

    &.cc-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }

  &.cc-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,
    &:focus {
      background: darken(white, 5%);
    }

    &.cc-level-main {
      color: $blue;
      &:hover,
      &:focus {
        color: darken($blue, 10%);
      }
    }

    &.cc-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }

  &.cc-theme-link,
  &.cc-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }

  &.cc-size-large {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }

  &.cc-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }

  > .cc-loading-indicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $skyblue $skyblue $skyblue transparent;
    border-style: solid;
    border-width: 2px;
    animation: cc-indicator-spin 1s infinite linear;
  }
}

@keyframes cc-indicator-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
