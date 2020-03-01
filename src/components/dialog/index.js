import Dialog from './dialog.vue'
import '../../base.css'

Dialog.install = (Vue) => {
  Vue.component(Dialog.name, Dialog)
}

export default Dialog