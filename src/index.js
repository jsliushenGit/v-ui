import Button from './components/button/index.js'
import Tag from './components/tag/index.js'
import './base.css'

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

export {
  Button,
  Tag
}