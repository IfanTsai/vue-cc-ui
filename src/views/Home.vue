<script setup lang="ts">
import { RouterLink } from 'vue-router'
import TopNav from '@/components/TopNav.vue'
</script>

<template>
  <div>
    <TopNav />
    <div class="banner">
      <h1>CC UI</h1>
      <h2>基于 Vue3, 面向开发者的组件库</h2>
      <div class="action">
        <a href="">GitHub</a> |
        <router-link to="/doc">start</router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: lightgreen;

  >.actions {
    padding: 8px 0;

    a {
      margin: 0 8px;
      background: #fff;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: calc($h/2);
      padding: 0 8px;
    }
  }
}
</style>