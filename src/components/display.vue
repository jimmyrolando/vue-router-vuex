<template>
  <p>{{ count }}</p>
</template>
<script>
  export default {
    computed: {
      count () {
        return this.$store.state.count
      }
    }
  }
</script>