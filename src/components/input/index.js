import Input from './input.vue'
import '../../base.css'

Input.install = (Vue) => {
  Vue.component(Input.name, Input)
}

export default Input