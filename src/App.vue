<script setup lang="ts">
import { provide, ref } from 'vue';
import { RouterView } from 'vue-router'
import router from '@/router'

const clientWidth = document.documentElement.clientWidth
const asideVisiable = ref(clientWidth > 500)
provide('asideVisiable', asideVisiable)
router.afterEach(() => {
  if (clientWidth <= 500) {
    asideVisiable.value = false
  }
})

</script>

<template>
  <router-view></router-view>
</template>