<script setup lang="ts">
import { ref, computed } from 'vue'
import Button from '@/lib/Button.vue'
import Prism from 'prismjs'

const props = defineProps<{
  component: any
}>()

const html = computed(() => {
  return Prism.highlight(
    props.component?.__sourceCode,
    Prism.languages.html,
    'html'
  )
})

const codeVisible = ref(false)
const showCode = () => (codeVisible.value = true)
const hideCode = () => (codeVisible.value = false)
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

    > pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', monospace;
      margin: 0;
    }
  }
}
</style>
