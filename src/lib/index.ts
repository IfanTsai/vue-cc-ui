import type { App, Component } from 'vue'
import CcButton from './button/index.vue'
import { openDialog } from './dialog/dialog'
import CcDialog from './dialog/index.vue'
import CcIcon from './icon/index.vue'
import CcInput from './input/index.vue'
import CcSwitch from './switch/index.vue'
import CcTab from './tab/index.vue'
import CcTabs from './tabs/index.vue'
import CcTransfer from './transfer/index.vue'

interface ComponentMap {
  [key: string]: Component
}

const componentMap: ComponentMap = {
  CcButton,
  CcDialog,
  CcSwitch,
  CcTab,
  CcTabs,
  CcIcon,
  CcTransfer,
  CcInput,
}

export {
  CcButton,
  CcDialog,
  CcSwitch,
  CcTab,
  CcTabs,
  CcIcon,
  CcTransfer,
  CcInput,
  openDialog,
}

export default {
  install(app: App) {
    Object.keys(componentMap).forEach((name) => {
      app.component(name, componentMap[name])
    })
  },
}
