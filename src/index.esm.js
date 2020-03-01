import Button from './components/button/index.js'
import Tag from './components/tag/index.js'
import Input from './components/input/index.js'
import Dialog from './components/dialog/index.js'
import './base.css'

const components = [
  Button,
  Tag,
  Input,
  Dialog
]

const install = (Vue) => {
  components.map(component => Vue.component(component.name, component))
}

export default {
  install
}

export {
  Button,
  Tag,
  Input,
  Dialog
}