import Tag from './tag.vue'
import '../../base.css'

Tag.install = (Vue) => {
  Vue.component(Tag.name, Tag)
}

export default Tag