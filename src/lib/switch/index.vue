<script setup lang="ts">
const props = defineProps({
  value: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:value'])

const change = () => {
  emit('update:value', !props.value)
}
</script>

<template>
  <button @click="change" class="cc-switch" :class="{ 'cc-checked': value }">
    <span></span>
  </button>
</template>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
$animate-duration: 250ms;

.cc-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: gray;
  border-radius: calc($h / 2);
  position: relative;
  transition: background $animate-duration ease-in-out;
  cursor: pointer;

  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    width: $h2;
    height: $h2;
    border-radius: calc($h2 / 2);
    background: white;
    transition: all $animate-duration ease-in-out;
  }

  &:hover {
    > span {
      background: #ccc;
    }
  }

  &:active {
    > span {
      width: $h2 + 4px;
    }
  }

  &.cc-checked {
    background: skyblue;

    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }

  &.cc-checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}
</style>
