<script setup lang="ts">
import { inject, type Ref } from 'vue'
import { RouterLink } from 'vue-router'

defineProps({
  canToggleAside: {
    type: Boolean,
    default: true,
  },
})

const asideVisiable = inject<Ref<boolean>>('asideVisiable')!
const toggleAside = () => {
  asideVisiable.value = !asideVisiable.value
}
</script>

<template>
  <div class="top-nav">
    <router-link to="/" class="logo">
      <img src="@/../public/favicon.ico" alt="logo" />
    </router-link>
    <ul class="menu">
      <li>menu1</li>
      <li>menu2</li>
    </ul>
    <spin v-if="canToggleAside" class="toggleAside" @click="toggleAside">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 24 24"
        class="menu-icon"
        data-v-9c7419a1=""
      >
        <path
          d="M17,11H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,11,17,11z"
        ></path>
        <path
          d="M21,7H3C2.4,7,2,6.6,2,6s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,7,21,7z"
        ></path>
        <path
          d="M21,15H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,15,21,15z"
        ></path>
        <path
          d="M17,19H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,19,17,19z"
        ></path>
      </svg>
    </spin>
  </div>
</template>

<sytle lang="scss" scoped>
.top-nav {
  background: rgb(173, 217, 234);
  display: flex;
  padding: 16px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 999;

  > .logo {
    max-width: 6em;
    margin-right: auto;
    margin-top: auto;
  }

  > a:hover {
    border: none;
  }

  > .menu {
    display: flex;
    align-items: center;
    white-space: nowrap;
    flex-wrap: nowrap;

    > li {
      margin: 0 1em;
    }
  }

  > .toggleAside {
    display: none;
    width: 30px;
    height: 30px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
  }

  @media (max-width: 500px) {
    > .menu {
      display: none;
    }

    > .toggleAside {
      display: inline-block;
    }

    > .logo {
      margin: 0 auto;
    }
  }
}
</sytle>
