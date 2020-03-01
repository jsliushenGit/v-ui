<template>
<div class="v-dialog" v-show="visible">
  <div class="v-dialog-model">
    <div class="v-dialog-content">
      <div class="v-dialog-header">
        <div>
          <slot name="title"></slot>
        </div>
        <i class="iconfont icon-baseline-close-px" @click="hanleClose"></i>
      </div>
      <div class="v-dialog-body"></div>
      <div class="v-dialog-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'VDialog',

  props: {
    visible: {
      type: Boolean,
      default: false
    },
    beforeClose: {
      type: Function,
      default: () => true
    }
  },

  methods: {
    hanleClose() {
      if (this.beforeClose()) {
        this.$emit('update:visible', false)
        this.$emit('close')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('//at.alicdn.com/t/font_1665315_fnd3mtcqiqi.css');
.v-dialog {
  .v-dialog-model {
    position: fixed;
    background-color: rgba(0, 0, 0, .3);
    left: 0;
    top: 0;
    z-index: 2000;
    width: 100%;
    height: 100%;
  }
  .v-dialog-content {
    background-color: rgba(255, 255, 255, 1);
    min-height: 30%;
    max-height: 80%;
    min-width: 20%;
    max-width: 80%;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    .v-dialog-header {
      flex: 0 0 50px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 4px 14px;
      .iconfont {
        cursor: pointer;
      }
    }
    .v-dialog-body {
      flex: 1;
    }
    .v-dialog-footer {
      flex: 0 0 50px;
    }
  }
}
</style>
