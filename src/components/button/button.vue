<template>
  <button @click="handleClick" type="button" v-ripple:[ripple] :class="buttonClass" class="v-button">
    <span>
      <slot></slot>
    </span>
    <span v-if="ripple" class="waves-animation"></span>
  </button>
</template>

<script>
export default {
  name: 'VButton',

  components: {
   
  },

  props: {
    type: {
      type: String,
      default: 'default'
    },

    size: {
      type: String,
      default: 'medium'
    },

    ripple: {
      type: Boolean,
      default: false
    },

    disabled: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    handleClick() {
      this.$emit('click')
    }
  },

  computed: {
    buttonClass() {
      let sizeClass = {
        medium: 'medium',
        small: 'small',
        mini: 'mini'
      }[this.size] || 'medium'

      let typeClass = {
        default: 'default',
        primary: 'primary',
        success: 'success',
        warning: 'warning',
        danger: 'danger',
        info: 'info',
        text: 'text'
      }[this.type] || 'default'

      return [sizeClass, typeClass, {'ripple': this.ripple, 'disabled': this.disabled}]
    }
  },

  directives: {
    ripple: {
      bind(el, {arg}) {
        if (!arg) return false
        el.addEventListener('click', function (e) {
          var wave = el.getElementsByClassName('waves-animation')[0]
          wave.style.left = e.offsetX - wave.clientWidth / 2 + 'px'
          wave.style.top = e.offsetY - wave.clientHeight / 2 + 'px'
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.v-button {
  display: inline-block;
  font-size: 14px;
  border-radius: 7%;
  color: var(--color-default);
  -webkit-appearance: none;
  outline: none;
  background-image: none;
  border: none;
  cursor: pointer;

  &:not(.text):not(.disabled):hover {
    filter: brightness(110%);
  }

  &:not(.text):not(.disabled):active {
    filter: brightness(90%);
  }

  &.medium {
    height: 40px;
    line-height: 40px;
    padding: 0 24px;
  }
  &.small {
    height: 32px;
    line-height: 32px;
    padding: 0 16px;
  }
  &.mini {
    height: 24px;
    line-height: 24px;
    padding: 0 8px;
  }

  &.default {
    border: 1px solid var(--color-border-default);
    color: var(--color-text-primary);
  }
  &.success {
    background-color: var(--color-success);
  }
  &.danger {
    background-color: var(--color-danger);
  }
  &.warning {
    background-color: var(--color-warning);
  }
  &.primary {
    background-color: var(--color-primary);
  }
  &.info {
    background-color: var(--color-info);
  }
  &.text {
    color: var(--color-primary);
    padding: 0;
    background-color: transparent;
    font-weight: bold;
    &:not(.disabled):hover {
      filter: brightness(1.4);
    }
    &:not(.disabled):active {
      filter: brightness(.95);
    }
    &.disabled {
      color: var(--color-text-info)
    }
  }

  &.ripple {
    position: relative;
    overflow: hidden;
  }

  &.ripple {
    .waves-animation {
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      pointer-events: none;
      background-image: radial-gradient(circle, var(--color-default) 35%, transparent 30.01%);
      background-repeat: no-repeat;
      background-position: 50%;
      transform: scale(4, 4);
      opacity: 0;
      transition: transform 1s, opacity 1s;
    }

    &:active {
      .waves-animation {
        transform: scale(0, 0);
        opacity: .3;
        transition: 0s;
      }
    }
  }

  &.disabled {
    opacity: .6;
    cursor: not-allowed;
  }
}
</style>