<template>
  <div>
    <input type="text" @input="handleInput" @change="handleChange">
  </div>
</template>

<script>
  export default {
    name: 'VInput',
    
    props: {
      value: String
    },

    methods: {
      handleInput(val) {
        this.$emit('input', val)
      },

      handleChange(val) {
        this.$emit('change', val)
      }
    }
  }
</script>

<style scoped>

</style>