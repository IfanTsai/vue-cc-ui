<script setup lang="ts">
import Button from '@/lib/Button.vue'
import type { Data, InnerData } from '@/lib/transfer/types'
import { toNumber } from '@vue/shared'
import { computed, ref } from 'vue'
import DataList from './components/DataList.vue'

const props = defineProps<{
  data?: Data[]
  rightTitle?: string
  modelValue?: InnerData[]
}>()

const emit = defineEmits(['update:modelValue'])

const leftSelectedAll = ref(false)
const rightSelectedAll = ref(false)
const options = props.data?.map(({ title }) => title)

const targetIndex = ref(0)
const setTargetIndex = (index: string) => {
  targetIndex.value = toNumber(index)
  leftSelectedAll.value = false
}

const leftCheckedDataList = ref<InnerData[]>([])
const rightCheckedDataList = ref<InnerData[]>([])

const rightDataList = ref<InnerData[]>([])
const leftDataList = computed(() =>
  props.data?.[targetIndex.value].data.filter(
    (data) => !rightDataList.value.includes(data)
  )
)
const addToRightDataList = (items: InnerData[]) => {
  rightDataList.value = Array.from(new Set([...rightDataList.value, ...items]))
  emit('update:modelValue', rightDataList.value)

  items.forEach((item) => (item.checkd = false))
  items.length = 0
  leftSelectedAll.value = false
}

const removeFromRightDataList = (items: InnerData[]) => {
  rightDataList.value = rightDataList.value.filter(
    (data) => !items.includes(data)
  )
  emit('update:modelValue', rightDataList.value)

  items.forEach((item) => (item.checkd = false))
  items.length = 0
  rightSelectedAll.value = false
}

const dragedItem = ref<InnerData>()
</script>

<template>
  <div>
    <div class="cc-transfer-option">
      <select
        @change="setTargetIndex(($event.target as HTMLOptionElement).value)"
      >
        <option v-for="(title, index) in options" :key="index" :value="index">
          {{ title }}
        </option>
      </select>
    </div>

    <div class="cc-transfer-main">
      <DataList
        left-or-right="left"
        :title="data?.[targetIndex].title"
        :data-list="leftDataList"
        :selected-all="leftSelectedAll"
        v-model:checked-data-list="leftCheckedDataList"
        @drag-item="dragedItem = $event"
        @drop="removeFromRightDataList([dragedItem as InnerData])"
      ></DataList>

      <div class="cc-transfer-main-box">
        <div class="cc-transfer-main-box-button-group">
          <Button
            :disabled="rightCheckedDataList.length === 0"
            @click="removeFromRightDataList(rightCheckedDataList)"
          >
            &lt;
          </Button>
          <Button
            :disabled="leftCheckedDataList.length === 0"
            @click="addToRightDataList(leftCheckedDataList)"
          >
            &gt;
          </Button>
        </div>
      </div>

      <DataList
        left-or-right="right"
        :title="rightTitle ?? '已选'"
        :data-list="rightDataList"
        :selected-all="rightSelectedAll"
        v-model:checked-data-list="rightCheckedDataList"
        @drag-item="dragedItem = $event"
        @drop="addToRightDataList([dragedItem as InnerData])"
      ></DataList>
    </div>
  </div>
</template>

<style lang="scss">
$border-color: #e4e7ed;

.cc-transfer-option {
  margin-bottom: 10px;
}

.cc-transfer-main {
  display: flex;
  flex-direction: row;
  width: 360px;
  height: 300px;
  border: 1px solid $border-color;

  &-box {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    &-button-group {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      border-left: 1px solid $border-color;
      border-right: 1px solid $border-color;
    }
  }

  @media (max-width: 500px) {
    width: 100%;
  }
}
</style>
