<template>
  <span :class="tagClass" class="v-tag">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'VTag',

  components: {
  },

  props: {
    type: {
      type: String,
      default: 'primary'
    },

    size: {
      type: String,
      default: 'medium'
    }
  },

  computed: {
    tagClass() {
      let sizeClass = {
        medium: 'medium',
        small: 'small',
        mini: 'mini'
      } [this.size] || 'medium'

      let typeClass = {
        primary: 'primary',
        success: 'success',
        warning: 'warning',
        danger: 'danger',
        info: 'info',
        text: 'text'
      } [this.type] || 'primary'

      return [sizeClass, typeClass]
    }
  }
}
</script>

<style lang="scss" scoped>
.v-tag {
  display: inline-block;
  box-sizing: border-box;
  font-size: 14px;
  border-radius: 7%;
  color: var(--color-default);
  -webkit-appearance: none;
  outline: none;
  background-image: none;
  border: none;

  --color-tag-primary: #fdedeb;
  --color-tag-success: #effaf1;
  --color-tag-warning: #fef6ec;
  --color-tag-danger: #fdecef;

  &.medium {
    height: 30px;
    line-height: 30px;
    padding: 0 15px;
  }
  &.small {
    height: 24px;
    line-height: 24px;
    padding: 0 12px;
  }
  &.mini {
    height: 20px;
    line-height: 20px;
    padding: 0 8px;
  }

  &.success {
    background-color: var(--color-tag-success);
    border: 1px solid var(--color-success);
    color: var(--color-success);
  }
  &.danger {
    background-color: var(--color-danger);
  }
  &.warning {
    background-color: var(--color-warning);
  }
  &.primary {
    background-color: var(--color-tag-primary);
    border: 1px solid var(--color-primary);
    color: var(--color-primary);
  }
  &.info {
    background-color: var(--color-info);
  }
}
</style>