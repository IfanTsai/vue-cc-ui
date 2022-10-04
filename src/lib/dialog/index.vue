<script setup lang="ts">
import Button from '@/lib/button/index.vue'

const props = defineProps({
  visiable: {
    type: Boolean,
    default: false,
  },
  closeOnClickOverylay: {
    type: Boolean,
    default: true,
  },
  ok: {
    type: Function,
  },
  cancel: {
    type: Function,
  },
})

const emit = defineEmits(['update:visiable', 'ok', 'cancel'])

const close = () => {
  emit('update:visiable', false)
}

const onClickOverlay = () => {
  if (props.closeOnClickOverylay) {
    close()
  }
}

const ok = () => {
  if (props.ok?.()) {
    close()
  }
}

const cancel = () => {
  props.cancel?.()
  close()
}
</script>

<template>
  <template v-if="visiable">
    <!-- https://cn.vuejs.org/guide/built-ins/teleport.html#basic-usage -->
    <Teleport to="body">
      <div class="cc-dialog-overlay" @click="onClickOverlay"></div>
      <div class="cc-dialog-wrapper">
        <div class="cc-dialog">
          <header>
            <slot name="title" />
            <span class="cc-dialog-close" @click="close"></span>
          </header>
          <main>
            <slot name="content" />
          </main>
          <footer>
            <Button level="main" @click="ok">OK</Button>
            <Button @click="cancel">Cancel</Button>
          </footer>
        </div>
      </div>
    </Teleport>
  </template>
</template>

<style lang="scss" scoped>
$radius: 4px;
$border-color: #d9d9d9;
.cc-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 15em;
  max-width: 90%;
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 1;
  }
  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }
  > header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }
  > main {
    padding: 12px 16px;
  }
  > footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
  }
  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;
    &::before,
    &::after {
      content: '';
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>
