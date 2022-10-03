import { baseParse } from '@vue/compiler-core'
import fs from 'fs'

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
    let rawCode = fs.readFileSync(path).toString()
    let title: string

    try {
      const previewNode: any = baseParse(rawCode, {}).children.find(
        (node: any) => node.tag === 'preview'
      )

      title = previewNode.children[0].content
      rawCode = rawCode.split(previewNode.loc.source).join('').trim()
    } catch {
      title = rawCode.match(/<preview>([\s\S]+)<\/preview>/)![1]
      rawCode = rawCode.replace(/<preview>([\s\S]+)<\/preview>/, '').trim()
    }

    const main = correctImportPath(rawCode)

    return `export default Component => {
      Component.__sourceCode = ${JSON.stringify(main)}
      Component.__sourceCodeTitle = ${JSON.stringify(title)}
    }`.trim()
  },
}

const correctImportPath = (sourceCode: string) => {
  // replace lib import path with cc-ui path
  sourceCode = sourceCode.replace(
    /import\s{?\s?(\w+)\s?}?\sfrom\s'@\/lib[\w'\/\.]+/g,
    "import { $1 } from '@ifan_tsai/cc-ui'"
  )

  const lines = sourceCode.split('\n')
  const importLines = lines.filter((line) => line.startsWith('import'))
  if (!importLines || importLines.length <= 1) {
    return sourceCode
  }

  // extract import lines
  const importMap: Record<string, string[]> = {}
  importLines.forEach((line) => {
    const [_, name, path] = line.match(
      /import\s{\s?([\w,\s]+)\s?}\sfrom\s'(.+)'/
    )!
    importMap[path] = importMap[path] ? [...importMap[path], name] : [name]
  })

  // merge import lines
  const mergedImportLines = Object.keys(importMap).map(
    (path) => `import { ${importMap[path].join(', ')} } from '${path}'`
  )

  const importLinesStartIndex = lines.indexOf(importLines[0])
  lines.splice(importLinesStartIndex, importLines.length)
  lines.splice(importLinesStartIndex, 0, ...mergedImportLines)

  return lines.join('\n')
}

export default vuePreviewPlugin
