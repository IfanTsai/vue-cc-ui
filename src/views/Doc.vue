<script setup lang="ts">
import TopNav from '@/components/TopNav.vue'
import { inject, type Ref } from 'vue'
import { RouterLink } from 'vue-router'

const asideVisiable = inject<Ref<boolean>>('asideVisiable')
</script>

<template>
  <div class="layout">
    <TopNav />
    <div class="content">
      <aside v-if="asideVisiable">
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  > .content {
    display: flex;
    flex-grow: 1;
    padding-top: 90px;
    padding-left: 156px;

    @media (max-width: 500px) {
      padding-left: 0;
    }

    > main {
      flex-grow: 1;
      padding: 16px;
      overflow: auto;
    }

    > aside {
      background: rgba(187, 92, 216, 0.95);
      width: 150px;
      padding: 16px;
      position: fixed;
      top: 0;
      left: 0;
      padding-top: 94px;
      height: 100%;

      > h2 {
        margin-bottom: 4px;
      }

      > ol {
        > li {
          padding: 4px 0;
        }
      }

      @media (max-width: 500px) {
        z-index: 99;
      }
    }
  }
}
</style>
