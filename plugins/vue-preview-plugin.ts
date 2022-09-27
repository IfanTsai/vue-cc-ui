import fs from 'fs'
import { baseParse } from '@vue/compiler-core'

const vuePreviewPlugin = {
  name: 'preview',
  transform(code: string, id: string) {
    if (
      !/\/src\/views\/doc\/.*\.preview\.vue/.test(id) ||
      !/vue&type=preview/.test(id)
    ) {
      return
    }

    const path = `.${id.match(/\/src\/views\/doc\/.*\.preview\.vue/)![0]}`
    const rawCode = fs.readFileSync(path).toString()
    const previewNode: any = baseParse(rawCode).children.find(
      (node: any) => node.tag === 'preview'
    )
    const title = previewNode.children[0].content
    const main = rawCode.split(previewNode.loc.source).join('').trim()

    return `export default Component => {
      Component.__sourceCode = ${JSON.stringify(main)}
      Component.__sourceCodeTitle = ${JSON.stringify(title)}
    }`.trim()
  },
}

export default vuePreviewPlugin
