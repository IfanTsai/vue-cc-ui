<preview>Transfer 示例 (支持左右拖拽)</preview>

<script setup lang="ts">
import Transfer from '@/lib/transfer/index.vue'
import { ref } from 'vue'

interface InnerData {
  id: number
  label: string
  disabled: boolean
}

interface Data {
  title: string
  data: InnerData[]
}

const generateExampleData = () => {
  const data: Data[] = []
  for (let i = 1; i <= 4; i++) {
    const innerData: InnerData[] = []
    for (let j = 1; j <= 12; j++) {
      const id = (i - 1) * 12 + j
      innerData.push({
        id: id,
        label: `第 ${id} 项`,
        disabled: j % 4 === 0,
      })
    }

    data.push({
      title: `分组${i}`,
      data: innerData,
    })
  }

  return data
}

const data = ref<Data[]>(generateExampleData())
const value = ref<InnerData[]>([])
</script>

<template>
  <Transfer v-model="value" :data="data" rightTitle="已选"></Transfer>
</template>
