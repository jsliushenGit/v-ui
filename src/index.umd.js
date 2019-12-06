import Button from './components/button/index.js'
import Tag from './components/tag/index.js'
import Input from './components/input/index.js'
import './base.css'

const components = [
  Button,
  Tag,
  Input
]

const install = (Vue) => {
  if (install.installed) return;
  components.map(component => Vue.component(component.name, component))
  install.installed = true;
}

// 支持cdn方式引入
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install
}

export {
  Button,
  Tag,
  Input
}