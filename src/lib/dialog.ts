import Dialog from './Dialog.vue'
import { createApp, h } from 'vue'

type Option = {
  title: string
  content: string
  ok?: Function
  cancel?: Function
}

export const openDialog = (option: Option) => {
  const { title, content, ok, cancel } = option
  const div = document.createElement('div')
  document.body.appendChild(div)

  const close = () => {
    app.unmount()
    div.remove()
  }

  const app = createApp({
    render() {
      return h(
        Dialog,
        {
          visiable: true,
          ok,
          cancel,
          'onUpdate:visiable': (newVisiable) => !newVisiable && close(),
        },
        {
          title: () => title,
          content: () => content,
        }
      )
    },
  })

  app.mount(div)
}
