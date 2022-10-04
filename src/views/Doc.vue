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
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">开始</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs</router-link>
          </li>
          <li>
            <router-link to="/doc/icon">Icon</router-link>
          </li>
          <li>
            <router-link to="/doc/transfer">Transfer</router-link>
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
  color: black;

  > .content {
    display: flex;
    flex-grow: 1;
    padding-top: 50px;
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
      background-color: #fff;
      width: 150px;
      padding: 16px 0;
      position: fixed;
      top: 0;
      left: 0;
      padding-top: 60px;
      height: 100%;
      z-index: 99;
      border-right: solid 1px #efeff5;

      > h2 {
        margin-bottom: 4px;
        padding: 0 16px;
      }

      > ol {
        > li {
          > a {
            display: block;
            padding: 4px 16px;
            text-decoration: none;
            &.router-link-active {
              color: rgb(238, 233, 254);
              font-weight: bold;
              background: skyblue;
            }

            &:hover {
              background: rgba(130, 180, 240, 0.5);
            }

            transition: all 250ms;
          }
        }
      }

      @media (max-width: 500px) {
        z-index: 99;
      }
    }
  }
}
</style>
