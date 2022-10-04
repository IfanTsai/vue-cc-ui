<script setup lang="ts">
import Button from '@/lib/button/index.vue'
import Prism from 'prismjs'
import { computed, ref } from 'vue'
import useClipboard from 'vue-clipboard3'
import { useToast, type ToastProps } from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'

const props = defineProps<{
  component: any
}>()

const sourceCode = props.component?.__sourceCode
const html = computed(() =>
  Prism.highlight(sourceCode, Prism.languages.html, 'html')
)

const codeVisible = ref(false)
const showCode = () => (codeVisible.value = true)
const hideCode = () => (codeVisible.value = false)

const { toClipboard } = useClipboard()
const toast = useToast()
const toastOption: ToastProps = {
  position: 'top-right',
  duration: 2000,
}
const copyCode = async () => {
  try {
    await toClipboard(sourceCode)
    toast.success('复制成功', toastOption)
  } catch (e) {
    toast.error('复制失败', toastOption)
    console.error(e)
  }
}
</script>

<template>
  <div class="preview">
    <h2>{{ component?.__sourceCodeTitle }}</h2>
    <div class="preview-component">
      <component :is="component" />
    </div>
    <div class="preview-actions">
      <Button @click="hideCode" v-if="codeVisible">隐藏代码</Button>
      <Button @click="showCode" v-else>查看代码</Button>
    </div>
    <div class="preview-code" v-if="codeVisible">
      <Button class="copy-btn" @click="copyCode">复制</Button>
      <pre class="language-html" v-html="html"></pre>
    </div>
  </div>
</template>

<style lang="scss" scope>
$border-color: #b9b9b9;

.preview {
  border: 1px solid $border-color;
  border-radius: 4px;
  margin: 16px 0 32px;

  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }

  &-component {
    padding: 16px;
  }

  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }

  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    position: relative;

    .copy-btn {
      position: absolute;
      top: 8px;
      right: 16px;
    }

    > pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', monospace;
      margin: 0;
    }
  }
}
</style>
