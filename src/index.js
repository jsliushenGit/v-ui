export { default as Button} from './components/button/index.js'
export { default as Tag } from './components/tag/index.js'

const components = [
  Button,
  Tag
]

const install = (Vue) => {
  components.map(component => Vue.component(component.name, component))
}

export default {
  install
}