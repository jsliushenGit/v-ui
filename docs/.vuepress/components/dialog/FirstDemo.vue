<template>
<div>
  <v-button type="primary" @click="openDialogOne">打开dialog</v-button>
  <v-dialog :visible.sync="dialogOneVisible"></v-dialog>
</div>
</template>

<script>
export default {
  name: 'FirstDemo',

  data() {
    return {
      dialogOneVisible: false
    }
  },

  methods: {
    openDialogOne() {
      this.dialogOneVisible = true
    }
  },

  mounted() {

  }
}
</script>

<style scoped>

</style>
