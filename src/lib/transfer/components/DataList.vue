<script setup lang="ts">
import type { InnerData } from '@/lib/transfer/types'

const props = defineProps<{
  leftOrRight: string
  title?: string
  dataList?: InnerData[]
  checkedDataList: InnerData[]
  selectedAll: boolean
}>()

const selectAll = (checked: boolean) => {
  for (const data of props.dataList || []) {
    if (!data.disabled) {
      data.checkd = checked
      selectItem(data, checked)
    }
  }
}

const emit = defineEmits(['update:checkedDataList', 'dragItem'])

const selectItem = (data: InnerData, checked: boolean) => {
  const index = props.checkedDataList.indexOf(data)
  if (checked) {
    index === -1 && props.checkedDataList.push(data)
  } else {
    index !== -1 && props.checkedDataList.splice(index, 1)
  }

  emit('update:checkedDataList', props.checkedDataList)
}
</script>

<template>
  <div class="cc-transfer-main-box" @dragover.prevent>
    <div class="cc-transfer-main-box-title">
      <input
        type="checkbox"
        :id="'__cc_transfer_checkbox_' + leftOrRight"
        v-model="selectedAll"
        :disabled="dataList?.filter((item) => !item.disabled).length === 0"
        @click="selectAll(($event.target as HTMLInputElement).checked)"
      />
      <label :for="'__cc_transfer_checkbox_' + leftOrRight">
        {{ title }}
      </label>
    </div>

    <div class="cc-transfer-main-box-data-list">
      <div
        v-for="item in dataList"
        :key="item.id"
        class="cc-transfer-main-box-data-list-item"
        :class="{ disabled: item.disabled }"
        :draggable="!item.disabled"
        @dragstart="emit('dragItem', item)"
      >
        <input
          type="checkbox"
          :disabled="item.disabled"
          :id="'__cc_transfer_checkbox_' + item.id"
          v-model="item.checkd"
          @click="selectItem(item, ($event.target as HTMLInputElement).checked)"
        />
        <label :for="'__cc_transfer_checkbox_' + item.id">
          {{ item.label }}
        </label>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
$title-background-color: #ebeef5;
$item-hover-color: #409eff;
$checkbox-left-padding: 12px;

.cc-transfer-main-box {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  &-title {
    text-align: left;
    background: $title-background-color;
    padding: 4px $checkbox-left-padding;
    font-weight: bold;

    input {
      margin-right: 4px;
    }
  }

  &-data-list {
    height: 100%;
    overflow: auto;
    padding: 0 $checkbox-left-padding;

    &-item {
      padding: 2px 0;
      text-align: left;
      cursor: pointer;

      input {
        margin-right: 4px;
        cursor: pointer;
      }

      label {
        cursor: pointer;

        &:hover {
          color: $item-hover-color;
        }
      }

      &.disabled {
        opacity: 0.5;
        cursor: not-allowed;

        input,
        label {
          cursor: not-allowed;
        }
      }
    }
  }
}
</style>
