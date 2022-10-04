<script setup lang="ts">
import TopNav from '@/components/TopNav.vue'
import { docMenus } from '@/router/doc'
import { inject, type Ref } from 'vue'
import { RouterLink } from 'vue-router'

const asideVisiable = inject<Ref<boolean>>('asideVisiable')
</script>

<template>
  <div class="layout">
    <TopNav />
    <div class="content">
      <aside v-if="asideVisiable">
        <div class="menu-group" v-for="(routes, key) in docMenus" :key="key">
          <h2>{{ key }}</h2>
          <router-link
            v-for="(route, index) in routes"
            :key="index"
            :to="`/doc/${route.path}`"
          >
            {{ route.name }}
          </router-link>
        </div>
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

      > .menu-group {
        > h2 {
          margin-bottom: 4px;
          padding: 0 16px;
        }

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
  }

  @media (max-width: 500px) {
    z-index: 99;
  }
}
</style>
