interface InnerData {
  id: number
  label: string
  disabled: boolean
  checkd?: boolean
}

interface Data {
  title: string
  data: InnerData[]
}

export { type InnerData, type Data }
