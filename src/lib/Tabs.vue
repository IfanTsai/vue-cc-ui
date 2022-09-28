<script setup lang="ts">
import { onMounted, ref, useSlots, watchEffect } from 'vue'
import Tab from './Tab.vue'

defineProps<{
  selected: String
}>()

const selectedNavItem = ref<HTMLDivElement>()
const indicator = ref<HTMLDivElement>()
const container = ref<HTMLDivElement>()
const emit = defineEmits(['update:selected'])
const slotsDefault = useSlots().default?.()
const titles = slotsDefault?.map((vnode) => vnode.props?.title)

slotsDefault?.forEach((vnode: any) => {
  if (vnode.type.name !== Tab.name) {
    throw new Error('Tabs only accepts Tab as children')
  }
})

const selectTab = (title: string) => emit('update:selected', title)

// callback after the component is mounted
onMounted(() => {
  // callback after the component is mounned and updated
  watchEffect(() => {
    // update indicator width
    const { width } = selectedNavItem.value?.getBoundingClientRect()!
    indicator.value!.style.width = `${width}px`

    // update indicator position
    const { left: left1 } = container.value?.getBoundingClientRect()!
    const { left: left2 } = selectedNavItem.value?.getBoundingClientRect()!
    indicator.value!.style.left = `${left2 - left1}px`
  })
})
</script>

<template>
  <div class="cc-tabs">
    <div class="cc-tabs-nav" ref="container">
      <div
        v-for="(title, index) in titles"
        :key="index"
        class="cc-tabs-nav-item"
        :class="{ selected: title === selected }"
        @click="selectTab(title)"
        :ref="(el) => title == selected && (selectedNavItem = el as HTMLDivElement)"
      >
        {{ title }}
      </div>
      <div class="cc-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="cc-tabs-content">
      <component
        v-for="item in slotsDefault"
        class="cc-tabs-content-item"
        :class="{ selected: item.props?.title === selected }"
        :is="item"
      />
    </div>
  </div>
</template>

<style lang="scss">
$blue: #40a9ff;
$gray: #333;
$border-color: #d9d9d9;
.cc-tabs {
  &-nav {
    position: relative;
    display: flex;
    color: $gray;
    border-bottom: 1px solid $border-color;

    &-indicator {
      position: absolute;
      height: 3px;
      bottom: -1px;
      left: 0;
      background-color: $blue;
      transition: all 250ms;
    }

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
    }
  }

  &-content {
    padding: 8px 0;

    &-item {
      display: none;

      &.selected {
        display: block;
      }
    }
  }
}
</style>
