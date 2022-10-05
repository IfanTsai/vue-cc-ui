<script setup lang="ts">
import TopNav from '@/components/TopNav.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div>
    <div class="topnav-and-banner">
      <TopNav :canToggleAside="false" />
      <div class="banner">
        <h1>CC UI</h1>
        <h2>基于 Vue3, 面向开发者的组件库</h2>
        <div class="actions">
          <a href="https://github.com/IfanTsai/vue-cc-ui">GitHub</a>
          <router-link to="/doc" class="start">开始使用</router-link>
        </div>
      </div>
    </div>
    <div class="features">
      <ul>
        <li>
          <cc-icon name="vue" size="64px"></cc-icon>
          <h3>基于 Vue 3</h3>
          <p>使用最新的 composition API 和 setup 语法糖</p>
        </li>
        <li>
          <cc-icon name="ts" size="64px"></cc-icon>
          <h3>基于 TypeScript</h3>
          <p>组件以及示例全部采用 TypeScript 进行书写</p>
        </li>
        <li>
          <cc-icon name="light" size="64px"></cc-icon>
          <h3>代码简洁</h3>
          <p>每个组件的源代码都简洁易读，方便学习交流</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.topnav-and-banner {
  background: linear-gradient(
    145deg,
    rgba(242, 234, 236, 1) 0%,
    rgba(249, 223, 233, 1) 25%,
    rgba(238, 233, 254, 1) 45%,
    rgba(230, 241, 254, 1) 70%,
    rgba(232, 237, 246, 1) 100%
  );
  clip-path: ellipse(80% 60% at 50% 40%);
  transition: clip-path 250ms ease-in-out;

  &:hover {
    clip-path: ellipse(90% 70% at 50% 40%);
  }
}

.banner {
  color: #636a97;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > .actions {
    $border-radius: 4px;
    margin-top: 16px;
    padding: 8px 0;

    > .start {
      background: skyblue;
      font-weight: bold;
    }

    a {
      margin: 0 8px;
      background: rgba(130, 180, 240, 0.5);
      color: white;
      display: inline-block;
      padding: 6px 20px;
      border-radius: $border-radius;

      &:hover {
        background: skyblue;
        text-decoration: none;
        font-weight: bold;
      }
    }
  }
}

.features {
  margin: 64px auto;
  width: 400px;

  @media (min-width: 800px) {
    width: 800px;
  }

  @media (min-width: 1200px) {
    width: 1200px;
  }

  > ul {
    display: flex;
    flex-wrap: wrap;

    > li {
      width: 400px;
      margin: 16px 0;
      display: grid;
      padding: 0 30px;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        'icon title'
        'icon text';
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;

      > svg {
        grid-area: icon;
      }

      > h3 {
        grid-area: title;
        font-size: 28px;
      }

      > p {
        grid-area: text;
      }
    }
  }
}
</style>
